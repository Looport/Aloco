import Image from "next/image"

import {Button} from "@/web/common/components/button"
import {
  Card,
  CardDescription,
  CardTitle,
  CardTooltip,
} from "@/web/common/components/home/card"
import {CreateRoomButton} from "@/web/common/components/home/create-room-button"
import {
  BiUserCircle,
  BsCameraVideo,
  IconProvider,
} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

export const QuickMeeting = () => (
  <Card
    rootClassName={cn([
      "h-full relative",
      "before:absolute before:top-[-5px] before:right-0",
      "before:content-[' '] before:w-full before:h-[10rem]",
      "before:bg-[url('/images/landing/meeting-top-wave.png')]",
      "before:bg-no-repeat",
      "before:bg-[length:cover]",
      "after:absolute after:bottom-[0] after:left-[0px]",
      "after:content-[' '] after:w-[100%] after:h-[10rem]",
      "after:bg-[url('/images/landing/meeting-bottom-wave.png')]",
      "after:bg-no-repeat",
      "after:bg-[length:cover] after:bg-[top_82%_left_0]",
      "px-10",
    ])}
  >
    <header className={cn(["pt-4"])}>
      <CardTooltip className={cn(["mt-20"])}>
        Communicate in a New Way
      </CardTooltip>
      <CardTitle color="bg-gradient-to-r from-[#FFE853] to-[#FF343F]">
        Quick & Functional Meetings For Everyone
      </CardTitle>
    </header>
    <div>
      <CardDescription className={cn(["!text-left mb-5"])}>
        With AI-powered features and useful built-in Utilities, our app will
        become an indispensable companion for any type of conversation.
      </CardDescription>
      <div className={cn(["flex items-center gap-2.5", "mb-5"])}>
        <Button
          href="/signup"
          icon={
            <IconProvider value={{size: "1.3rem"}}>
              <BiUserCircle />
            </IconProvider>
          }
        >
          Join Now
        </Button>
        <span>or</span>
        <CreateRoomButton>
          <Button
            type="outline"
            icon={
              <IconProvider value={{size: "1.2rem"}}>
                <BsCameraVideo />
              </IconProvider>
            }
          >
            Start Call
          </Button>
        </CreateRoomButton>
      </div>
    </div>
    <footer className={cn(["flex flex-row  gap-1"])}>
      <div className={cn(["flex gap-3"])}>
        <Image
          width={40}
          height={40}
          src="/images/landing/avatar-3.png"
          alt="users icons"
        />
        <Image
          className={cn(["-ml-8"])}
          width={40}
          height={40}
          src="/images/landing/avatar-4.png"
          alt="users icons"
        />
        <Image
          className={cn(["-ml-8"])}
          width={40}
          height={40}
          src="/images/landing/avatar-5.png"
          alt="users icons"
        />
      </div>
      <div className={cn(["flex flex-col"])}>
        <span className={cn(["font-extrabold"])}>+5M</span>
        <span className={cn(["text-white/60 text-sm"])}>Worldwide Users</span>
      </div>
    </footer>
  </Card>
)
