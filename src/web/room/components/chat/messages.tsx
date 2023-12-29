"use client"

import {useEffect, useReducer} from "react"

import {Message} from "@/room/interfaces/message.interface"
import {subscribeToMessageRequest} from "@/room/requests/subscribe-to-message.request"
import {User} from "@/user/interfaces/user.interface"
import {MessageList} from "@/web/room/components/message-list"

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

    subscribeToMessageRequest({
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
