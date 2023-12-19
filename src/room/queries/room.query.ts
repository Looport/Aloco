import {Surreal} from 'surrealdb.js'

import {Room} from '@/room/interfaces/room.interface'

export const queryRoom = async ({
  roomUrl,
  accessToken,
}: {
  roomUrl: string
  accessToken: string
}): Promise<Room> => {
  const db = new Surreal()

  await db.connect('http://127.0.0.1:8000/rpc', {
    database: 'test',
    namespace: 'test',
  })

  await db.authenticate(accessToken)

  const [[room]] = await db.query<Array<Array<Room & Record<any, any>>>>(
    `
    SELECT * FROM room WHERE url = $roomUrl
    `,
    {roomUrl}
  )

  return room
}
