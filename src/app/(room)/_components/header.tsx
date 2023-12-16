import {User} from "@/user/interfaces/user.interface";

export const Header = async ({roomUrl, user}: { roomUrl: string, user: User }) => {
  return (
      <header>
        <h1>Room: <i>{roomUrl}</i></h1>
        <h2>Welcome {user.email}</h2>
      </header>
  );
}