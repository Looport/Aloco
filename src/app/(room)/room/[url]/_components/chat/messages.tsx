"use client"

import {useEffect, useReducer} from "react"

import {MessageList} from "@/app/(room)/room/[url]/_components/message-list"
import {Message} from "@/room/interfaces/message.interface"
import {subscribeToRoomMessagesRequest} from "@/room/requests/subscribe-to-room-messages.request"
import {User} from "@/user/interfaces/user.interface"

export const Messages = ({
  roomId,
  user,
  defaultMessages,
}: {
  roomId: string
  user: User
  defaultMessages: Message[]
}) => {
  const [messages, dispatchMessage] = useReducer(
    (state: Message[], action: Message) => [...state, action],
    defaultMessages
  )

  useEffect(() => {
    const abortController = new AbortController()

    subscribeToRoomMessagesRequest({
      abortSignal: abortController.signal,
      onMessage: dispatchMessage,
      roomId,
    })

    return () => {
      abortController.abort()
    }
  }, [roomId])

  return (
    <MessageList
      messages={messages}
      currentUser={user}
    />
  )
}
