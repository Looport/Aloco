import {catchAuthException} from "@/app/_lib/catch-auth-exeption"
import {Message} from "@/room/interfaces/message.interface"
import {queryMessages} from "@/room/queries/messages.query"

import {requireAccessToken} from "../../_lib/require-access-token"

export const getMessagesAction = async (roomId: string): Promise<Message[]> =>
  await catchAuthException(() =>
    queryMessages({accessToken: requireAccessToken(), roomId})
  )
