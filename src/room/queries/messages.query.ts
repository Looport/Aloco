import {Surreal} from "surrealdb.js";
import {Message} from "@/room/interfaces/message.interface";

export const queryMessages = async ({roomId, accessToken}: {
  roomId: string,
  accessToken: string
}): Promise<Message[]> => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    namespace: 'test',
    database: 'test',
  });

  await db.authenticate(accessToken)

  const [messages] = await db.query<(Message & Record<any, any>)[][]>(
    `
    SELECT *, user.* FROM message WHERE room = $roomId ORDER BY createdAt ASC;
    `,
    {roomId})

  return messages
}