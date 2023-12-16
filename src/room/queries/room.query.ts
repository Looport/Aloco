import {Surreal} from "surrealdb.js";
import {Room} from "@/room/interfaces/room.interface";

export const queryRoom = async ({roomUrl, accessToken}: { roomUrl: string, accessToken: string }): Promise<Room> => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    namespace: 'test',
    database: 'test',
  });

  await db.authenticate(accessToken)

  const [[room]] = await db.query<(Room & Record<any, any>)[][]>(`
    SELECT * FROM room WHERE url = $roomUrl
    `, {roomUrl})

  return room
}