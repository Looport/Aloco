import {Message} from '@/room/interfaces/message.interface'

export const subscribeToRoomMessagesRequest = async ({
  roomId,
  abortSignal,
  onMessage,
}: {
  roomId: string
  abortSignal?: AbortSignal
  onMessage: (message: Message) => void
}) => {
  const response = await fetch(`/api/room/${roomId}/messages/subscribe`, {
    signal: abortSignal,
  })

  if (!response.ok || !response.body) {
    throw new Error('Could not subscribe to messages')
  }

  const reader = response.body.getReader()

  async function read() {
    const {done, value} = await reader.read()
    if (done) {
      return
    }

    onMessage(JSON.parse(parseStreamChunk(value)))
    await read()
  }

  await read()
}

const parseStreamChunk = (chunk: Uint8Array) =>
  new TextDecoder('utf-8').decode(chunk)
