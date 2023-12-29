import {Message} from "@/room/interfaces/message.interface"
import {Room} from "@/room/interfaces/room.interface"
import {User} from "@/user/interfaces/user.interface"
import {Card} from "@/web/common/components/home/card"
import {cn} from "@/web/common/utils/cn"
import {createMessageAction} from "@/web/room/actions/create-message.action"
import {MessageForm} from "@/web/room/components/chat/message-form"
import {Messages} from "@/web/room/components/chat/messages"

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
