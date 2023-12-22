import {Header} from "@/app/(room)/room/[url]/_components/conference/header"
import {cn} from "@/app/_lib/cn"
import {Room} from "@/room/interfaces/room.interface"
import {User} from "@/user/interfaces/user.interface"

export const Conference = ({user, room}: {user: User; room: Room}) => (
  <section className={cn(["p-10"])}>
    <Header
      roomUrl={room.url}
      user={user}
    />
  </section>
)
