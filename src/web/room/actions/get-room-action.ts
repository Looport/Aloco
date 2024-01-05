"use server"

import {cache} from "react"

import {Room} from "@/room/interfaces/room.interface"
import {queryRoom} from "@/room/queries/room.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const getRoomAction = cache(
  async (url: string): Promise<Room> =>
    await catchAuthException(() =>
      queryRoom({accessToken: requireAccessToken(), roomUrl: url})
    )
)
