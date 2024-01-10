"use client"

import {ReactNode, useLayoutEffect, useRef} from "react"

import {useMediaDevices} from "@/web/common/hooks/use-media-devices"
import {cn} from "@/web/common/utils/cn"
import {Controls} from "@/web/room/components/conference/controls"
import {useCalls} from "@/web/room/hooks/use-calls"

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
      const videoElement = document.getElementById(
        `remote-stream-${stream.id}`
      ) as HTMLVideoElement

      if (videoElement) {
        videoElement.srcObject = stream
      }
    })
  }, [remoteStreams])

  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className={cn(["flex flex-col h-full"])}>
      <div className={cn(["flex gap-5 flex-grow"])}>
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
      <Controls />
    </div>
  )
}

const VideoContainer = ({children}: {children: ReactNode}) => (
  <div className={cn(["max-w-1/2 min-w-36 rounded-2xl overflow-hidden"])}>
    {children}
  </div>
)
