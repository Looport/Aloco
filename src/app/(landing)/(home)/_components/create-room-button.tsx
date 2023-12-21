"use client"

import {ReactNode} from "react"

import {createRoomAction} from "@/app/(room)/_actions/create-room.action"

export const CreateRoomButton = ({children}: {children?: ReactNode}) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
  <div onClick={() => createRoomAction()}>{children}</div>
)
