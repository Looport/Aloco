import {Surreal} from 'surrealdb.js'

import {Message} from '@/room/interfaces/message.interface'

export const subscribeToMessages = ({
  accessToken,
  roomId,
  onMessage,
}: {
  accessToken: string
  roomId: string
  onMessage: (message: Message) => void
}) => {
  const clearPromise: Promise<() => void> = new Promise((resolve) => {
    const db = new Surreal()

    db.connect('http://127.0.0.1:8000/rpc', {
      database: 'test',
      namespace: 'test',
    })
      .then(() => db.authenticate(accessToken))
      .then(() =>
        db.query<string[]>(
          `
        LIVE SELECT *, user.* FROM message WHERE message.room = $roomId;
        `,
          {roomId}
        )
      )
      .then(([liveUuid]) => {
        resolve(() => db.kill(liveUuid))

        return db.listenLive<Message & Record<any, any>>(
          liveUuid,
          ({action, result}) => {
            if (action === 'CREATE') {
              onMessage(result)
            }
          }
        )
      })
  })

  return async () => {
    const clear = await clearPromise
    clear()
  }
}
