import {User} from "@/user/interfaces/user.interface"
import {cn} from "@/web/common/utils/cn"

interface Props {
  roomUrl: string
  user: User
}

export const Header = async ({roomUrl, user}: Props) => (
  <header className={cn(["mb-5"])}>
    <h1>
      Room: <i>{roomUrl}</i>
    </h1>
    <h2>Welcome {user.email}</h2>
  </header>
)
