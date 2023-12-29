"use server"

import {redirect} from "next/navigation"

import {queryCreateRoom} from "@/room/queries/create-room.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const createRoomAction = async () => {
  const room = await catchAuthException(() =>
    queryCreateRoom({accessToken: requireAccessToken()})
  )

  redirect(`/room/${room.url}`)
}
