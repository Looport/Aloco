import React from "react"

import {Button} from "@/web/common/components/button"
import {
  AiOutlineHome,
  FiCalendar,
  FiMap,
  IconProvider,
  LuSettings,
  TbPlayerTrackNext,
} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

export const Nav = () => (
  <nav className={cn(["flex flex-col gap-10 items-center h-full"])}>
    <Button
      href="/join-call"
      type="text"
      icon={
        <IconProvider value={{size: "1.4rem"}}>
          <AiOutlineHome />
        </IconProvider>
      }
    />
    <Button
      href="/join-call"
      type="text"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <FiMap />
        </IconProvider>
      }
    />
    <Button
      href="/join-call"
      type="text"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <FiCalendar />
        </IconProvider>
      }
    />
    <Button
      href="/join-call"
      type="text"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <TbPlayerTrackNext />
        </IconProvider>
      }
    />
    <Button
      type="text"
      icon={
        <IconProvider value={{size: "1.35rem"}}>
          <LuSettings />
        </IconProvider>
      }
    />
  </nav>
)
