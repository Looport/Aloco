"use client"

import {createRoomAction} from "@/app/(room)/_actions/create-room.action";

export const CreateRoomButton = () => (
      <button onClick={() => createRoomAction()}>Create Room</button>
  )