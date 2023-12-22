import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {Card} from "@/app/(landing)/(home)/_components/card"
import {MessageForm} from "@/app/(room)/room/[url]/_components/chat/message-form"
import {Messages} from "@/app/(room)/room/[url]/_components/chat/messages"
import {cn} from "@/app/_lib/cn"
import {Message} from "@/room/interfaces/message.interface"
import {Room} from "@/room/interfaces/room.interface"
import {queryCreateMessage} from "@/room/queries/create-message.query"
import {User} from "@/user/interfaces/user.interface"

export const Chat = ({
  room,
  user,
  defaultMessages,
}: {
  user: User
  room: Room
  defaultMessages: Message[]
}) => {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    return redirect("/")
  }

  const handleMessageForm = async (formData: FormData) => {
    "use server"

    await queryCreateMessage({
      accessToken,
      roomId: room.id,
      text: formData.get("message") as string,
      userId: user.id,
    })
  }

  return (
    <Card
      rootClassName={cn([
        "p-10 !rounded-none border-t-0 border-b-0",
        "flex flex-col space-between",
      ])}
    >
      <Messages
        user={user}
        roomId={room.id}
        defaultMessages={defaultMessages}
      />
      <MessageForm onSubmit={handleMessageForm} />
    </Card>
  )
}
