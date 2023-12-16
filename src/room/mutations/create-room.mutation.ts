import {Surreal} from "surrealdb.js";
import {Room} from "@/room/interfaces/room.interface";

export const createRoomMutation = async ({accessToken}: {accessToken: string}): Promise<Room> => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    namespace: 'test',
    database: 'test',
  });

  await db.authenticate(accessToken)

  const [[room]] = await db.query<(Room & Record<any, any>)[][]>(`
    CREATE room CONTENT {
      url: rand::uuid::v4()
    };
    `)

  return room
}