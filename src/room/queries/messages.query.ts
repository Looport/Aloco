import {authenticateConnection} from "@/database/lib/authenticate-connection"
import {connectDb} from "@/database/lib/connect-db"
import {Message} from "@/room/interfaces/message.interface"

export const queryMessages = async ({
  roomId,
  accessToken,
}: {
  roomId: string
  accessToken: string
}): Promise<Message[]> => {
  const db = await connectDb()

  try {
    await authenticateConnection(db, accessToken)

    const [messages] = await db.query<Array<Array<Message & Record<any, any>>>>(
      `
    SELECT *, user.* FROM message WHERE room = $roomId ORDER BY createdAt ASC;
    `,
      {roomId}
    )

    return messages
  } finally {
    await db.close()
  }
}
