import {Contribution} from '@/app/(landing)/(home)/_components/contribution'
import {ExploreWorldCard} from '@/app/(landing)/(home)/_components/explore-world-card'
import {News} from '@/app/(landing)/(home)/_components/news'
import {QuickMeeting} from '@/app/(landing)/(home)/_components/quick-meeting'
import {Roadmap} from '@/app/(landing)/(home)/_components/roadmap'
import {cn} from '@/app/_lib/cn'

export default function HomePage() {
  return (
    <>
      <main className={cn(['grid', 'grid-cols-2 grid-rows-5', 'gap-4'])}>
        <section className={cn(['row-span-3'])}>
          <ExploreWorldCard />
        </section>
        <section className={cn(['row-span-2'])}>
          <QuickMeeting />
        </section>
        <section className={cn(['col-span-1 row-span-2'])}>
          <Contribution />
        </section>
        <section className={cn(['row-span-1'])}>
          <News />
        </section>
        <section className={cn(['col-span-2 row-span-1'])}>
          <Roadmap />
        </section>
      </main>
    </>
  )
}
