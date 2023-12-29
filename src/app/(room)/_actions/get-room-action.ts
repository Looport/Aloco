import {catchAuthException} from "@/app/_lib/catch-auth-exeption"
import {requireAccessToken} from "@/app/_lib/require-access-token"
import {Room} from "@/room/interfaces/room.interface"
import {queryRoom} from "@/room/queries/room.query"

export const getRoomAction = async (url: string): Promise<Room> =>
  await catchAuthException(() =>
    queryRoom({accessToken: requireAccessToken(), roomUrl: url})
  )
