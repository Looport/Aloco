import {Message} from "@/room/interfaces/message.interface"
import {queryCreateMessage} from "@/room/queries/create-message.query"
import {catchAuthException} from "@/web/auth/lib/catch-auth-exeption"
import {requireAccessToken} from "@/web/auth/lib/require-access-token"

export const createMessageAction = async ({
  roomId,
  text,
}: {
  roomId: string
  text: string
}): Promise<Message> =>
  await catchAuthException(() =>
    queryCreateMessage({
      accessToken: requireAccessToken(),
      roomId,
      text,
    })
  )
