import {Suspense} from "react"

import {Card} from "@/web/common/components/home/card"
import {cn} from "@/web/common/utils/cn"
import {createMessageAction} from "@/web/room/actions/create-message.action"
import {getMessagesAction} from "@/web/room/actions/get-messages.action"
import {getRoomAction} from "@/web/room/actions/get-room-action"
import {MessageForm, Messages} from "@/web/room/components/chat"
import {getAuthUserAction} from "@/web/user/actions/get-auth-user.action"

interface Props {
  params: {url: string}
}

export default async function ChatPage({params: {url}}: Props) {
  const room = await getRoomAction(url)
  const messages = await getMessagesAction(room.id)

  const user = await getAuthUserAction()

  const handleMessageForm = async (formData: FormData) => {
    "use server"

    const text = formData.get("message") as string

    if (!text?.length) return

    await createMessageAction({
      roomId: room.id,
      text,
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
        defaultMessages={messages}
      />
      <MessageForm onSubmit={handleMessageForm} />
    </Card>
  )
}
