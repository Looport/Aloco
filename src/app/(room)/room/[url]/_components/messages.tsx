'use client'

import {useEffect, useReducer} from 'react'

import {Message} from '@/room/interfaces/message.interface'
import {subscribeToRoomMessagesRequest} from '@/room/requests/subscribe-to-room-messages.request'

export const Messages = ({
  roomId,
  defaultMessages,
}: {
  roomId: string
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
    <section>
      {messages.map((message) => (
        <div key={message.id}>
          <b>{message.user.email}</b> <i>({message.createdAt})</i>:
          {message.message}
        </div>
      ))}
    </section>
  )
}
