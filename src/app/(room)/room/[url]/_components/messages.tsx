"use client"

import {useEffect, useReducer} from "react";
import {Message} from "@/room/interfaces/message.interface";
import {subscribeToMessages} from "@/room/subscriptions/messages.subscription";

export const Messages = ({roomId, accessToken, defaultMessages}: {
  accessToken: string,
  roomId: string,
  defaultMessages: Message[]
}) => {
  const [messages, dispatch] = useReducer((s: Message[], a: Message) => ([...s, a]), defaultMessages)

  useEffect(() => {
    const unsubscribe = subscribeToMessages({
      accessToken, roomId, onMessage: (message) => {
        dispatch(message)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [accessToken, roomId])

  return (
    <section>
      {
        messages.map(message => (
          <div key={message.id}>
            <b>{message.user.email}</b>{" "} <i>({message.createdAt})</i>: {message.message}
          </div>
        ))
      }
    </section>
  )
}