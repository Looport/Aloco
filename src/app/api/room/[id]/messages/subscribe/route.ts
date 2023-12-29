import {NextRequest} from "next/server"

import {requireAccessToken} from "@/app/_lib/require-access-token"
import {authenticateConnection} from "@/database/lib/authenticate-connection"
import {connectDb} from "@/database/lib/connect-db"
import {Message} from "@/room/interfaces/message.interface"

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
    LIVE SELECT *, user.*, room.* FROM message 
    WHERE message.room = $id;
    `,
    {id}
  )
  await db.listenLive<Message & Record<any, any>>(
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
