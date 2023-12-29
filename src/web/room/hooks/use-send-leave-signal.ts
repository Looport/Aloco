import {useEffect} from "react"

import {sendLeaveSignalRequest} from "@/room/requests/send-leave-signal.request"

export const useSendLeaveSignal = ({
  roomId,
  peerId,
}: {
  roomId: string
  peerId?: string
}) => {
  useEffect(() => {
    if (!peerId) return

    const onBeforeUnload = async () => {
      await sendLeaveSignalRequest({peerId, roomId})
    }

    window.addEventListener("beforeunload", onBeforeUnload)

    return () => {
      onBeforeUnload()
      window.removeEventListener("beforeunload", onBeforeUnload)
    }
  }, [peerId, roomId])
}
