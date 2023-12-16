"use client"

import {useEffect, useReducer} from "react";

import {Message} from "@/room/interfaces/message.interface";
import {subscribeToMessages} from "@/room/subscriptions/messages.subscription";

export const Messages = ({roomId, accessToken, defaultMessages}: {
  accessToken: string,
  roomId: string,
  defaultMessages: Message[]
}) => {
  const [messages, dispatch] = useReducer(
    (state: Message[], action: Message) => ([...state, action]),
    defaultMessages)

  useEffect(() => {
    const unsubscribe = subscribeToMessages({
      accessToken, onMessage: (message) => {
        dispatch(message)
      }, roomId
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
            <b>{message.user.email}</b>
            {" "}
            <i>({message.createdAt})</i>:
            {message.message}
          </div>
        ))
      }
    </section>
  )
}