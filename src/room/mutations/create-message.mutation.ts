import {Surreal} from 'surrealdb.js'

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
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    database: 'test',
    namespace: 'test',
  })

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
