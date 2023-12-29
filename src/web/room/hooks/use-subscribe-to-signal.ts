import {useEffect} from "react"

import {Signal} from "@/room/interfaces/signal.interface"
import {subscribeToSignalRequest} from "@/room/requests/subscribe-to-signal.request"

export const useSubscribeToSignal = ({
  roomId,
  skip,
  onSignal,
}: {
  roomId: string
  skip?: boolean
  onSignal: (signal: Signal) => void
}) => {
  useEffect(() => {
    if (skip) {
      return
    }

    const abortController = new AbortController()

    subscribeToSignalRequest({
      abortSignal: abortController.signal,
      onSignal,
      roomId,
    })

    return () => {
      abortController.abort()
    }
  }, [onSignal, roomId, skip])
}
