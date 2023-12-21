import {cookies} from "next/headers"
import {redirect} from "next/navigation"

import {Header} from "@/app/(room)/_components/header"
import {Messages} from "@/app/(room)/room/[url]/_components/messages"
import {queryCreateMessage} from "@/room/queries/create-message.query"
import {queryMessages} from "@/room/queries/messages.query"
import {queryRoom} from "@/room/queries/room.query"
import {queryUser} from "@/user/queries/user.query"

interface Props {
  params: {url: string}
}

export default async function RoomPage({params: {url}}: Props) {
  const accessToken = cookies().get("accessToken")?.value

  if (!accessToken) {
    return redirect("/")
  }

  const room = await queryRoom({accessToken, roomUrl: url})

  if (!room) {
    return redirect("/")
  }

  const messages = await queryMessages({accessToken, roomId: room.id})
  const user = await queryUser(accessToken)

  const handleMessageForm = async (formData: FormData) => {
    "use server"

    await queryCreateMessage({
      accessToken,
      roomId: room.id,
      text: formData.get("message") as string,
      userId: user.id,
    })
  }

  return (
    <main>
      <Header
        roomUrl={room.url}
        user={user}
      />
      <Messages
        roomId={room.id}
        defaultMessages={messages}
      />
      <section>
        <form action={handleMessageForm}>
          <label htmlFor="message-input">Message:</label>
          <br />
          <input
            type="text"
            id="message-input"
            name="message"
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}
