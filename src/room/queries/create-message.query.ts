import {connectDb} from "@/database/lib/connect-db"
import {Message} from "@/room/interfaces/message.interface"

export const queryCreateMessage = async ({
  roomId,
  text,
  accessToken,
}: {
  roomId: string
  text: string
  accessToken: string
}): Promise<Message> => {
  const db = await connectDb()

  await db.authenticate(accessToken)

  const [[message]] = await db.query<Array<Array<Message & Record<any, any>>>>(
    `
      CREATE message CONTENT {
        message: $message,
        room: $roomId,
        user: $auth.id,
      }
      `,
    {message: text, roomId}
  )

  return message
}
