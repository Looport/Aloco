"use server"

import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {createRoomMutation} from "@/room/mutations/create-room.mutation";

export const createRoomAction = async () => {
  const accessToken = cookies().get('accessToken')?.value

  if (!accessToken) {
    return
  }

  const room = await createRoomMutation({accessToken})

  redirect(`/room/${room.url}`)
}