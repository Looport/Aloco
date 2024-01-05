import {Suspense} from "react"

import {cn} from "@/web/common/utils/cn"
import {getMessagesAction} from "@/web/room/actions/get-messages.action"
import {getRoomAction} from "@/web/room/actions/get-room-action"
import {Streams, Header} from "@/web/room/components/conference"
import {getAuthUserAction} from "@/web/user/actions/get-auth-user.action"

interface Props {
  params: {url: string}
}

export default async function ConferencePage({params: {url}}: Props) {
  const room = await getRoomAction(url)

  const messages = await getMessagesAction(room.id)
  const user = await getAuthUserAction()

  return (
    <Suspense>
      <section className={cn(["p-10 h-full"])}>
        <Header
          roomUrl={room.url}
          user={user}
        />
        <Streams
          roomId={room.id}
          userId={user.id}
        />
      </section>
    </Suspense>
  )
}
