"use client"

import {ReactNode, useLayoutEffect, useRef} from "react"

import {useCalls} from "@/app/(room)/_hooks/use-calls"
import {useMediaDevices} from "@/app/_hooks/use-media-devices"
import {cn} from "@/app/_lib/cn"

export const Streams = ({roomId}: {roomId: string; userId: string}) => {
  const {stream: ownStream} = useMediaDevices()

  const {remoteStreams} = useCalls({ownStream, roomId})

  useLayoutEffect(() => {
    if (!ownStream || !videoRef.current) {
      return
    }

    videoRef.current.srcObject = ownStream
  }, [ownStream])

  useLayoutEffect(() => {
    remoteStreams.forEach((stream) => {
      const video = document.getElementById(
        `remote-stream-${stream.id}`
      ) as HTMLVideoElement

      if (video) {
        video.srcObject = stream
      }
    })
  }, [remoteStreams])

  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className={cn(["flex gap-5"])}>
      {ownStream && (
        <VideoContainer>
          <video
            muted
            ref={videoRef}
            autoPlay
            playsInline
          />
        </VideoContainer>
      )}
      {remoteStreams.map((stream) => (
        <VideoContainer key={stream.id}>
          <video
            id={`remote-stream-${stream.id}`}
            autoPlay
            playsInline
            key={stream.id}
          />
        </VideoContainer>
      ))}
    </div>
  )
}

const VideoContainer = ({children}: {children: ReactNode}) => (
  <div className={cn(["max-w-1/2 min-w-36 rounded-2xl overflow-hidden"])}>
    {children}
  </div>
)
