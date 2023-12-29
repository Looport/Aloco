"use server"

import {redirect} from "next/navigation"

import {catchAuthException} from "@/app/_lib/catch-auth-exeption"
import {requireAccessToken} from "@/app/_lib/require-access-token"
import {queryCreateRoom} from "@/room/queries/create-room.query"

export const createRoomAction = async () => {
  const room = await catchAuthException(() =>
    queryCreateRoom({accessToken: requireAccessToken()})
  )

  redirect(`/room/${room.url}`)
}
