import Image from "next/image"
import React from "react"

import {Button} from "@/web/common/components/button"
import {Card} from "@/web/common/components/home/card"
import {IconProvider, TbUsersPlus} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

export const Users = () => (
  <Card
    rootClassName={cn([
      "flex flex-col items-center gap-2",
      "!rounded-full",
      "p-2",
    ])}
  >
    <Image
      className={cn(["rounded-full"])}
      width={40}
      height={40}
      src="/images/landing/avatar-3.png"
      alt={"user"}
    />
    <Image
      className={cn(["rounded-full"])}
      width={40}
      height={40}
      src="/images/landing/avatar-3.png"
      alt={"user"}
    />
    <Button
      type="text"
      icon={
        <IconProvider value={{size: "1.25rem"}}>
          <TbUsersPlus />
        </IconProvider>
      }
    />
  </Card>
)
