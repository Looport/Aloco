import {Card} from "@/app/(landing)/(home)/_components/card"
import {createMessageAction} from "@/app/(room)/_actions/create-message.action"
import {MessageForm} from "@/app/(room)/room/[url]/_components/chat/message-form"
import {Messages} from "@/app/(room)/room/[url]/_components/chat/messages"
import {cn} from "@/app/_lib/cn"
import {Message} from "@/room/interfaces/message.interface"
import {Room} from "@/room/interfaces/room.interface"
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
  const handleMessageForm = async (formData: FormData) => {
    "use server"

    await createMessageAction({
      roomId: room.id,
      text: formData.get("message") as string,
    })
  }

  return (
    <Card
      rootClassName={cn([
        "p-10 h-full !rounded-none border-t-0 border-b-0",
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
