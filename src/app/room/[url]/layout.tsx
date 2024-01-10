import {Metadata} from "next"
import {cookies} from "next/headers"
import {redirect} from "next/navigation"
import {ReactNode} from "react"

import {cn} from "@/web/common/utils/cn"
import {getRoomAction} from "@/web/room/actions/get-room-action"
import {Sidebar} from "@/web/room/components/sidebar"

interface Props {
  params: {url: string}
  chat: ReactNode
  conference: ReactNode
}

export const generateMetadata = ({params}: Props): Metadata => ({
  title: params.url,
})

export default async function RoomUrlLayout({
  chat,
  conference,
  params: {url},
}: Props) {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    return redirect(`/signin?redirectTo=${encodeURIComponent(`/room/${url}`)}`)
  }

  const room = await getRoomAction(url)

  if (!room) {
    /*
     * TODO: add 404 status
     * with notFound() we can't set message
     *
     * maybe create separate page for 404???
     * or pass query that could be taken not found page???
     */
    throw new Error("Room not found")
  }

  return (
    <div
      className={cn([
        "text-white/80 h-full",
        "grid grid-cols-[50px_1fr_minmax(0,440px)]",
        "pl-12",
      ])}
    >
      <div className={cn(["py-10"])}>
        <Sidebar />
      </div>
      {conference}
      {chat}
    </div>
  )
}
