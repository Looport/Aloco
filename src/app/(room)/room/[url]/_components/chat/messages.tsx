"use client"

import {useEffect, useReducer} from "react"

import {MessageList} from "@/app/(room)/room/[url]/_components/message-list"
import {Message} from "@/room/interfaces/message.interface"
import {subscribeToMessageRequest} from "@/room/requests/subscribe-to-message.request"
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
