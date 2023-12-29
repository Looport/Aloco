import {authenticateConnection} from "@/database/lib/authenticate-connection"
import {connectDb} from "@/database/lib/connect-db"
import {Room} from "@/room/interfaces/room.interface"

export const queryCreateRoom = async ({
  accessToken,
}: {
  accessToken: string
}): Promise<Room> => {
  const db = await connectDb()

  try {
    await authenticateConnection(db, accessToken)

    const [[room]] = await db.query<Array<Array<Room & Record<any, any>>>>(`
    CREATE room CONTENT {
      url: rand::uuid::v4()
    };
    `)
    return room
  } finally {
    await db.close()
  }
}
