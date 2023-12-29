import {cookies} from "next/headers"
import {redirect} from "next/navigation"
import {ReactNode} from "react"

import "@/web/room/styles/room-layout.css"

export default function RoomLayout({children}: {children: ReactNode}) {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    return redirect("/")
  }

  return <>{children}</>
}
