import {Message} from "@/room/interfaces/message.interface"
import {queryMessages} from "@/room/queries/messages.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"

import {requireAccessToken} from "../../auth/lib/require-access-token"

export const getMessagesAction = async (roomId: string): Promise<Message[]> =>
  await catchAuthException(() =>
    queryMessages({accessToken: requireAccessToken(), roomId})
  )
