import {connectDb} from '@/database/lib/connect-db'
import {Message} from '@/room/interfaces/message.interface'

export const createMessageMutation = async ({
  roomId,
  userId,
  text,
  accessToken,
}: {
  roomId: string
  userId: string
  text: string
  accessToken: string
}): Promise<Message> => {
  const db = await connectDb()

  await db.authenticate(accessToken)

  const [message] = await db.query<Array<Message & Record<any, any>>>(
    `
      CREATE message CONTENT {
        message: $message,
        room: $roomId,
        user: $userId,
      }
      `,
    {message: text, roomId, userId}
  )

  return message
}
