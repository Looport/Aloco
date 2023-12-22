import Image from "next/image"

import {Card} from "@/app/(landing)/(home)/_components/card"
import {cn} from "@/app/_lib/cn"

export const News = () => (
  <Card
    rootClassName={cn([
      "text-center",
      "h-full",
      "flex flex-col justify-center items-center",
      "bg-cover bg-center",
      "bg-gradient-to-b from-blue-800/60 to-red-600/10",
      "relative",
    ])}
  >
    <header
      className={cn([
        "px-20 mt-12 mb-24",
        "font-black text-3xl text-transparent bg-clip-text",
        "bg-gradient-to-r from-[#FFE853] to-[#FF343F]",
      ])}
    >
      Around The Globe, Just Pick Where
    </header>
    <Image
      fill
      src="/images/landing/bulletin.png"
      alt="News"
      className={cn(["z-[-1] absolute w-full h-full object-cover"])}
    />
    <footer className={cn(["flex gap-[2rem]"])}>
      <span className={cn(["w-2.5 h-2.5", "rounded-full bg-zinc-50"])} />
      <span
        className={cn(["w-2.5 h-2.5", "rounded-full border border-zinc-50/60"])}
      />
      <span
        className={cn([
          "w-2.5 h-2.5",
          "rounded-full border",
          "border-zinc-50/60",
        ])}
      />
    </footer>
  </Card>
)
