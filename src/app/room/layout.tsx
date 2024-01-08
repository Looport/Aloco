import {ReactNode} from "react"
import "@/web/room/styles/room-layout.css"

import {cn} from "@/web/common/utils/cn"

export default function RoomLayout({children}: {children: ReactNode}) {
  return <main className={cn(["room-container h-screen"])}>{children}</main>
}
