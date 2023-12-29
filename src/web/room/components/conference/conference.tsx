import {Room} from "@/room/interfaces/room.interface"
import {User} from "@/user/interfaces/user.interface"
import {cn} from "@/web/common/utils/cn"
import {Header} from "@/web/room/components/conference/header"
import {Streams} from "@/web/room/components/conference/streams"

export const Conference = ({user, room}: {user: User; room: Room}) => (
  <section className={cn(["p-10 h-full"])}>
    <Header
      roomUrl={room.url}
      user={user}
    />
    <Streams
      roomId={room.id}
      userId={user.id}
    />
  </section>
)
