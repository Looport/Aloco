import {User} from "@/user/interfaces/user.interface";

interface Props {
  roomUrl: string,
  user: User
}

export const Header = async ({roomUrl, user}: Props) => (
  <header>
    <h1>Room: <i>{roomUrl}</i></h1>
    <h2>Welcome {user.email}</h2>
  </header>
)