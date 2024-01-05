import {cookies} from "next/headers"
import {ReactNode} from "react"

import "@/web/room/styles/room-layout.css"
import {cn} from "@/web/common/utils/cn"

import {redirect} from "next/navigation"

export default function RoomLayout({children}: {children: ReactNode}) {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    return redirect(`/login?redirect=${encodeURIComponent(location.pathname)}`)
  }

  return <main className={cn(["room-container h-screen"])}>{children}</main>
}
