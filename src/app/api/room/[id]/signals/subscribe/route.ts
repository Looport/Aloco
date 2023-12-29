import {NextRequest} from "next/server"

import {authenticateConnection} from "@/database/lib/authenticate-connection"
import {connectDb} from "@/database/lib/connect-db"
import {Signal} from "@/room/interfaces/signal.interface"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const GET = async (
  req: NextRequest,
  {params: {id}}: {params: {id: string}}
) => {
  // TODO: close db connection when request is done
  const db = await connectDb()

  try {
    await authenticateConnection(db, requireAccessToken())
  } catch {
    await db.close()
  }

  const streamController = new TransformStream()

  const [uuid] = await db.query<string[]>(
    `
    LIVE SELECT *, user.*, room.* FROM signal 
    WHERE signal.room = $id AND signal.user != $auth.id;
    `,
    {id}
  )
  await db.listenLive<Signal & Record<any, any>>(
    uuid,
    async ({action, result}) => {
      if (action === "CREATE") {
        const writer = streamController.writable.getWriter()

        await writer.write(new TextEncoder().encode(JSON.stringify(result)))
        writer.releaseLock()
      }
    }
  )

  req.signal.onabort = async () => {
    await db.kill(uuid)
    await db.close()
  }
  process.on("exit", async () => {
    await db.kill(uuid)
    await db.close()
  })

  return new Response(streamController.readable)
}
