import {useLayoutEffect, useRef} from "react"

import {MessageItem} from "@/app/(room)/room/[url]/_components/message-list/message-item"
import {cn} from "@/app/_lib/cn"
import {Message} from "@/room/interfaces/message.interface"
import {User} from "@/user/interfaces/user.interface"

export const MessageList = ({
  messages,
  currentUser,
}: {
  messages: Message[]
  currentUser: User
}) => {
  const listRef = useRef<HTMLUListElement>(null)

  useLayoutEffect(() => {
    const {current: ul} = listRef

    if (ul && messages.length) {
      ul.scrollBy({
        behavior: "smooth",
        top: ul.scrollHeight,
      })
    }
  }, [messages.length])

  return (
    <ul
      className={cn([
        "overflow-y-scroll h-full pace-y-5 flex flex-col gap-4 mb-10",
      ])}
      ref={listRef}
    >
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          currentUser={currentUser}
        />
      ))}
    </ul>
  )
}
