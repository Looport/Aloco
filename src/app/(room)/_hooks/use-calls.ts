import Peer, {MediaConnection} from "peerjs"
import {useCallback, useEffect, useMemo, useState} from "react"

import {useSendJoinSignal} from "@/app/(room)/_hooks/use-send-join-signal"
import {useSendLeaveSignal} from "@/app/(room)/_hooks/use-send-leave-signal"
import {useSubscribeToSignal} from "@/app/(room)/_hooks/use-subscribe-to-signal"
import {JoinSignal, SignalVariant} from "@/room/interfaces/signal.interface"

export const useCalls = ({
  roomId,
  ownStream,
}: {
  roomId: string
  ownStream?: null | MediaStream
}) => {
  const [peer, setPeerConnections] = useState<null | Peer>(null)

  const [remoteMedia, setRemoteMedia] = useState<{
    [peerId: string]: MediaStream
  }>({})
  const remoteStreams = useMemo(() => Object.values(remoteMedia), [remoteMedia])

  const removeRemoteStream = useCallback((peerId: string) => {
    setRemoteMedia((prev) => {
      const {[peerId]: __, ...rest} = prev
      return rest
    })
  }, [])

  const addRemoteStream = useCallback((peerId: string, stream: MediaStream) => {
    setRemoteMedia((prev) => ({
      ...prev,
      [peerId]: stream,
    }))
  }, [])

  const injectEmittedCall = useCallback(
    (call: MediaConnection, signal: JoinSignal) => {
      call.on("stream", (remoteStream) => {
        addRemoteStream(signal.peerId, remoteStream)
      })

      call.on("close", () => {
        removeRemoteStream(signal.peerId)
      })

      call.on("error", (error) => {
        console.error(error)
        removeRemoteStream(signal.peerId)
      })
    },
    [addRemoteStream, removeRemoteStream]
  )

  const injectReceivedCall = useCallback(
    (call: MediaConnection) => {
      call.on("stream", (remoteStream) => {
        addRemoteStream(call.peer, remoteStream)
      })

      call.on("close", () => {
        removeRemoteStream(call.peer)
      })

      call.on("error", (error) => {
        console.error(error)
        removeRemoteStream(call.peer)
      })
    },
    [addRemoteStream, removeRemoteStream]
  )

  useSendJoinSignal({
    onSuccess: useCallback(
      (peerId) => setPeerConnections(new Peer(peerId)),
      []
    ),
    roomId,
    skip: !ownStream,
  })

  useSendLeaveSignal({
    peerId: peer?.id,
    roomId,
  })

  useSubscribeToSignal({
    onSignal: useCallback(
      (signal) => {
        let call: MediaConnection

        if (signal.type === SignalVariant.join) {
          call = peer!.call(signal.peerId, ownStream!)

          injectEmittedCall(call, signal)
        }

        if (signal.type === SignalVariant.leave) {
          removeRemoteStream(signal.peerId)
        }
      },
      [peer, ownStream, injectEmittedCall, removeRemoteStream]
    ),
    roomId,
    skip: !peer || !ownStream,
  })

  useEffect(() => {
    if (!peer) {
      return
    }

    peer.on("call", (call) => {
      call.answer(ownStream!)

      injectReceivedCall(call)
    })
  }, [peer, ownStream, addRemoteStream, removeRemoteStream, injectReceivedCall])

  return {
    remoteStreams,
  }
}
