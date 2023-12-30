import {Contribution} from "@/web/common/components/home/contribution"
import {CreateRoomButton} from "@/web/common/components/home/create-room-button"
import {ExploreWorldCard} from "@/web/common/components/home/explore-world-card"
import {News} from "@/web/common/components/home/news"
import {QuickMeeting} from "@/web/common/components/home/quick-meeting"
import {Roadmap} from "@/web/common/components/home/roadmap"
import {cn} from "@/web/common/utils/cn"

export default function HomePage() {
  return (
    <>
      <CreateRoomButton />
      <main
        className={cn([
          "grid",
          "grid-cols-2 grid-rows-5",
          "gap-4",
          "flex-grow-1",
        ])}
      >
        <section className={cn(["row-span-3"])}>
          <ExploreWorldCard />
        </section>
        <section className={cn(["row-span-2"])}>
          <QuickMeeting />
        </section>
        <section className={cn(["col-span-1 row-span-2"])}>
          <Contribution />
        </section>
        <section className={cn(["row-span-1"])}>
          <News />
        </section>
        <section className={cn(["col-span-2 row-span-1"])}>
          <Roadmap />
        </section>
      </main>
    </>
  )
}
