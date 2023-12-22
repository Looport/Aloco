import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {Chat} from "@/app/(room)/room/[url]/_components/chat"
import {Conference} from "@/app/(room)/room/[url]/_components/conference"
import {cn} from "@/app/_lib/cn"
import {queryMessages} from "@/room/queries/messages.query"
import {queryRoom} from "@/room/queries/room.query"
import {queryUser} from "@/user/queries/user.query"

interface Props {
  params: {url: string}
}

export default async function RoomPage({params: {url}}: Props) {
  const accessToken = cookies().get("accessToken")?.value
  if (!accessToken) {
    return redirect("/")
  }

  const room = await queryRoom({accessToken, roomUrl: url})
  if (!room) {
    return redirect("/")
  }

  const messages = await queryMessages({accessToken, roomId: room.id})
  const user = await queryUser(accessToken)

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
