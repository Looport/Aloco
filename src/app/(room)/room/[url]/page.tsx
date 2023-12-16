import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {Messages} from "@/app/(room)/room/[url]/_components/messages";
import {Header} from "@/app/(room)/_components/header";
import {queryUser} from "@/user/queries/user.query";
import {queryRoom} from "@/room/queries/room.query";
import {queryMessages} from "@/room/queries/messages.query";
import {createMessageMutation} from "@/room/mutations/create-message.mutation";

export default async function RoomPage({params: {url}}: { params: { url: string } }) {
  const accessToken = cookies().get('accessToken')?.value!

  const room = await queryRoom({roomUrl: url, accessToken})

  if (!room) {
    return redirect('/')
  }

  const messages = await queryMessages({roomId: room.id, accessToken})
  const user = await queryUser(accessToken)

  const handleMessageForm = async (formData: FormData) => {
    "use server"

    await createMessageMutation({
      roomId: room.id,
      text: formData.get('message') as string,
      userId: user.id,
      accessToken
    })
  }

  return (
    <main>
      <Header roomUrl={room.url} user={user}/>
      <Messages roomId={room.id} accessToken={accessToken} defaultMessages={messages}/>
      <section>
        <form action={handleMessageForm}>
          <label htmlFor="message-input">Message:</label>
          <br/>
          <input type="text" id="message-input" name="message"/>
          <br/>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}