import {Metadata} from "next"
import {ReactNode} from "react"

import {cn} from "@/web/common/utils/cn"

interface Props {
  params: {url: string}
  chat: ReactNode
  conference: ReactNode
}

export const generateMetadata = ({params}: Props): Metadata => ({
  title: params.url,
})

export default async function RoomUrlLayout({chat, conference}: Props) {
  return (
    <div
      className={cn([
        "text-white/80 h-full",
        "grid grid-cols-[1fr_minmax(0,440px)]",
      ])}
    >
      {conference}
      {chat}
    </div>
  )
}
