import {Surreal} from "surrealdb.js";
import {Message} from "@/room/interfaces/message.interface";

export const createMessageMutation = async ({
  roomId,
  userId,
  text,
  accessToken
                                            }: {
  roomId: string,
  userId: string,
  text: string,
  accessToken: string
}): Promise<Message> => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    namespace: 'test',
    database: 'test',
  });

  await db.authenticate(accessToken)

  const [message] = await db.query<(Message & Record<any, any>)[]>(
    `
      CREATE message CONTENT {
        message: $message,
        room: $roomId,
        user: $userId,
      }
      `,
    {roomId, userId, message: text}
  );

  return message
}