import {Metadata} from "next"

import {cn} from "@/web/common/utils/cn"
import {getMessagesAction} from "@/web/room/actions/get-messages.action"
import {getRoomAction} from "@/web/room/actions/get-room-action"
import {Chat} from "@/web/room/components/chat"
import {Conference} from "@/web/room/components/conference"
import {getAuthUserAction} from "@/web/user/actions/get-auth-user.action"

interface Props {
  params: {url: string}
}

export const generateMetadata = ({params}: Props): Metadata => ({
  title: params.url,
})

export default async function RoomPage({params: {url}}: Props) {
  const room = await getRoomAction(url)

  const messages = await getMessagesAction(room.id)
  const user = await getAuthUserAction()

  return (
    <main
      className={cn([
        "h-screen room-container text-white/80",
        "grid grid-cols-[1fr_minmax(0,440px)]",
      ])}
    >
      <Conference
        user={user}
        room={room}
      />
      <Chat
        user={user}
        room={room}
        defaultMessages={messages}
      />
    </main>
  )
}
