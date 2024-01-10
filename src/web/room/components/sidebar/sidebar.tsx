import Image from "next/image"
import React from "react"

import {cn} from "@/web/common/utils/cn"
import {Nav} from "@/web/room/components/sidebar/nav"
import {Users} from "@/web/room/components/sidebar/users"
import {getAuthUserAction} from "@/web/user/actions/get-auth-user.action"

export const Sidebar = async () => {
  const user = await getAuthUserAction()

  return (
    <section className={cn(["h-full flex flex-col"])}>
      <div className={cn(["mb-10 flex flex-col items-center"])}>
        <Image
          className={cn(["rounded-full"])}
          width={47}
          height={47}
          src="/images/landing/avatar-3.png"
          alt={user.email}
        />
      </div>
      <div className={cn(["flex-grow"])}>
        <Nav />
      </div>
      <Users />
    </section>
  )
}
