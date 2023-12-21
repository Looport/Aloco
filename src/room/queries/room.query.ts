import {connectDb} from "@/database/lib/connect-db"
import {Room} from "@/room/interfaces/room.interface"

export const queryRoom = async ({
  roomUrl,
  accessToken,
}: {
  roomUrl: string
  accessToken: string
}): Promise<Room> => {
  const db = await connectDb()

  await db.authenticate(accessToken)

  const [[room]] = await db.query<Array<Array<Room & Record<any, any>>>>(
    `
    SELECT * FROM room WHERE url = $roomUrl
    `,
    {roomUrl}
  )

  return room
}
