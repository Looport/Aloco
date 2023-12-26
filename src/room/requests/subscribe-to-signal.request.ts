import {Signal} from "@/room/interfaces/signal.interface"

export const subscribeToSignalRequest = async ({
  roomId,
  abortSignal,
  onSignal,
}: {
  roomId: string
  abortSignal?: AbortSignal
  onSignal: (signal: Signal) => void
}) => {
  const response = await fetch(`/api/room/${roomId}/signals/subscribe`, {
    signal: abortSignal,
  })

  if (!response.ok || !response.body) {
    throw new Error("Could not subscribe to messages")
  }

  const reader = response.body.getReader()

  async function read() {
    const {done, value} = await reader.read()
    if (done) {
      return
    }

    onSignal(JSON.parse(parseStreamChunk(value)))
    await read()
  }

  await read()
}

const parseStreamChunk = (chunk: Uint8Array) =>
  new TextDecoder("utf-8").decode(chunk)
