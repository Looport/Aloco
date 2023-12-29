import {catchAuthException} from "@/app/_lib/catch-auth-exeption"
import {requireAccessToken} from "@/app/_lib/require-access-token"
import {Message} from "@/room/interfaces/message.interface"
import {queryCreateMessage} from "@/room/queries/create-message.query"

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
