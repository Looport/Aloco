"use server"

import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {queryCreateRoom} from "@/room/queries/create-room.query"

export const createRoomAction = async () => {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    return
  }

  const room = await queryCreateRoom({accessToken})

  redirect(`/room/${room.url}`)
}
