import {cookies} from "next/headers"
import {NextRequest} from "next/server"

import {connectDb} from "@/database/lib/connect-db"
import {Message} from "@/room/interfaces/message.interface"

export const GET = async (
  req: NextRequest,
  {params: {id}}: {params: {id: string}}
) => {
  const accessToken = cookies().get("accessToken")?.value
  if (!accessToken) throw new Error("No access token")

  const db = await connectDb()

  await db.authenticate(accessToken)

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
  }
  process.on("exit", async () => {
    await db.kill(uuid)
  })

  return new Response(streamController.readable)
}
