import {connectDb} from "@/database/lib/connect-db"
import {Signal, SignalVariant} from "@/room/interfaces/signal.interface"

export const queryCreateSignal = async ({
  roomId,
  type,
  accessToken,
}: {
  roomId: string
  type: SignalVariant
  accessToken: string
}): Promise<Signal> => {
  const db = await connectDb()

  await db.authenticate(accessToken)

  const [[signal]] = await db.query<Array<Array<Signal & Record<any, any>>>>(
    `
      CREATE signal CONTENT {
        type: $type,
        room: $roomId,
        user: $auth.id,
        peerId: rand::uuid::v4(),
      };
      `,
    {roomId, type}
  )

  return signal
}
