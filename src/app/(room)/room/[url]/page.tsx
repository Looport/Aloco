import {getMessagesAction} from "@/app/(room)/_actions/get-messages.action"
import {getRoomAction} from "@/app/(room)/_actions/get-room-action"
import {Chat} from "@/app/(room)/room/[url]/_components/chat"
import {Conference} from "@/app/(room)/room/[url]/_components/conference"
import {getUserAction} from "@/app/_actions/get-user.action"
import {cn} from "@/app/_lib/cn"

interface Props {
  params: {url: string}
}

export default async function RoomPage({params: {url}}: Props) {
  const room = await getRoomAction(url)

  const messages = await getMessagesAction(room.id)
  const user = await getUserAction()

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
