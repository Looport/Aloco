import Image from "next/image"

import {
  Card,
  CardDescription,
  CardTitle,
} from "@/app/(landing)/(home)/_components/card"
import {Button} from "@/app/_components/button"
import {
  BiMapAlt,
  BsStars,
  IconProvider,
  TbUsersPlus,
} from "@/app/_components/icons"
import {cn} from "@/app/_lib/cn"

export const ExploreWorldCard = () => (
  <Card
    rootClassName={cn([
      "h-full p-[0!important] relative",
      "before:absolute before:top-[15rem] before:right-[-3.5rem]",
      "before:content-[' '] before:w-[8rem] before:h-[8rem]",
      "before:bg-[url('/images/landing/elips-orange.png')] before:bg-no-repeat",
      "before:bg-[length:cover] before:rounded-[2rem]",
      "before:z-[-1]",
      "after:absolute after:bottom-[15rem] after:left-[-3rem]",
      "after:content-[' '] after:w-[9rem] after:h-[9rem]",
      "after:bg-[url('/images/landing/elips-orange.png')] after:bg-no-repeat",
      "after:bg-[length:cover] after:rounded-[2rem]",
      "after:rotate-[70deg]",
    ])}
  >
    <header className={cn(["pt-5 px-5 mb-5"])}>
      <div className={cn(["flex items-center gap-2.5"])}>
        <div className={cn(["flex items-center gap-2.5", "mb-9"])}>
          <IconProvider value={{size: ".8rem"}}>
            <div className={cn(["bg-red-600 rounded-full p-[0.5rem]"])}>
              <BsStars />
            </div>
          </IconProvider>
          <span className={cn(["font-bold text-xl text-white"])}>
            Try New Feature
          </span>
        </div>
      </div>
      <CardTitle
        className={cn(["text-center"])}
        color="bg-gradient-to-r from-[#FF343F] to-[#FFE853]"
      >
        Around The Globe, Just Pick Where
      </CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut
        dolor elit. In ornare posuere.
      </CardDescription>
    </header>
    <div className={cn(["h-[300px] relative mb-5"])}>
      <Image
        fill
        className={cn(["object-cover"])}
        src="/images/landing/explore-map.png"
        alt="Explore Map"
      />
    </div>
    <footer
      className={cn(["flex flex-col gap-[0.5rem] justify-center items-center"])}
    >
      <Button
        className={cn(["!px-10"])}
        icon={
          <IconProvider value={{size: "1.25rem"}}>
            <BiMapAlt />
          </IconProvider>
        }
      >
        Explore The World
      </Button>
      <Button
        type="link"
        className={cn(["underline text-white/80"])}
        icon={
          <IconProvider value={{size: "1.25rem"}}>
            <TbUsersPlus />
          </IconProvider>
        }
      >
        Bring Friends With You
      </Button>
    </footer>
  </Card>
)
