import {Suspense} from "react"

import {cn} from "@/web/common/utils/cn"
import {getRoomAction} from "@/web/room/actions/get-room-action"
import {Header, Streams} from "@/web/room/components/conference"
import {getAuthUserAction} from "@/web/user/actions/get-auth-user.action"

interface Props {
  params: {url: string}
}

export default async function ConferencePage({params: {url}}: Props) {
  const room = await getRoomAction(url)
  const user = await getAuthUserAction()

  return (
    <Suspense>
      <section className={cn(["p-10 h-full flex flex-col"])}>
        <div className={cn(["mb-5"])}>
          <Header roomUrl={room.url} />
        </div>
        <div className={"flex-grow"}>
          <Streams
            roomId={room.id}
            userId={user.id}
          />
        </div>
      </section>
    </Suspense>
  )
}
