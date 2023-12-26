import {useEffect} from "react"

import {sendJoinSignalRequest} from "@/room/requests/send-join-signal.request"

export const useSendJoinSignal = ({
  roomId,
  skip,
  onSuccess,
}: {
  roomId: string
  skip?: boolean
  onSuccess: (peerId: string) => void
}) => {
  useEffect(() => {
    if (skip) return

    const abortController = new AbortController()

    ;(async () => {
      const {peerId} = await sendJoinSignalRequest(
        {roomId},
        {abortSignal: abortController.signal}
      )
      onSuccess(peerId)
    })()

    return () => {
      abortController.abort()
    }
  }, [onSuccess, roomId, skip])
}
