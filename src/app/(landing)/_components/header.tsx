import {cookies} from "next/headers"
import Image from "next/image"
import Link from "next/link"
import React, {ReactNode} from "react"

import {LogoutButton} from "@/app/(landing)/_components/logout"
import {getUserAction} from "@/app/_actions/get-user.action"
import {Button} from "@/app/_components/button"
import {
  AiOutlineGift,
  AiOutlineSchedule,
  BiUser,
  BsFastForward,
  BsTelephoneOutbound,
  FiCalendar,
  FiMap,
  IconProvider,
  LuSettings,
} from "@/app/_components/icons"
import {cn} from "@/app/_lib/cn"
import {User} from "@/user/interfaces/user.interface"

export const Header = async () => {
  const accessToken = cookies().get("accessToken")?.value

  const user = accessToken ? await getUserAction() : null

  return (
    <header className={cn(["flex", "text-sm", "py-10"])}>
      <nav
        className={cn(["w-full", "flex", "items-center", "justify-between"])}
      >
        <Link href="/">
          <Image
            width={130}
            height={35}
            src="/images/logos/aloco-logo.png"
            alt="Aloco"
          />
        </Link>
        {!user && <NotAuthNav />}
        {user && <AuthNav />}
        <Plugins />
        {!user && <ActionButtons />}
        {user && <ProfileNav user={user} />}
      </nav>
    </header>
  )
}

const NavLink = ({children, link}: {children: ReactNode; link: string}) => (
  <Link
    className={cn(["text-sm", "hover:text-white", "font-black"])}
    href={link}
  >
    {children}
  </Link>
)

const Nav = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={cn([
      "flex",
      "flex-row",
      "items-center",
      "gap-10",
      "justify-end",
      "tracking-wider",
      "list-none",
      className ?? "",
    ])}
  >
    {children}
  </div>
)

const NotAuthNav = () => (
  <Nav>
    <NavLink link="/join-call">About Us</NavLink>
    <NavLink link="/signin">Roadmap</NavLink>
    <NavLink link="/signin">Donate</NavLink>
    <NavLink link="/signin">Register</NavLink>
  </Nav>
)

const AuthNav = () => (
  <Nav>
    <Button
      href="/join-call"
      type="link"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <FiMap />
        </IconProvider>
      }
    >
      Explore Map
    </Button>
    <Button
      href="/join-call"
      type="link"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <BsFastForward />
        </IconProvider>
      }
    >
      Play Roulette
    </Button>
    <Button
      href="/join-call"
      type="link"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <FiCalendar />
        </IconProvider>
      }
    >
      Schedule
    </Button>
    <Button
      href="/join-call"
      type="link"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <BsTelephoneOutbound />
        </IconProvider>
      }
    >
      Join a Call
    </Button>
  </Nav>
)

const Plugins = () => (
  <Nav>
    <div
      className={cn([
        "relative",
        "after:absolute after:top-[-1px] after:right-[-1px]",
        "after:content-[' ']",
        "after:w-[0.3rem] after:h-[0.3rem] after:rounded-full",
        "after:bg-red-600",
      ])}
    >
      <Button
        type="text"
        icon={
          <IconProvider value={{size: "1.35rem"}}>
            <AiOutlineGift />
          </IconProvider>
        }
      />
    </div>
    <div>
      <Button
        type="text"
        icon={
          <IconProvider value={{size: "1.35rem"}}>
            <LuSettings />
          </IconProvider>
        }
      />
    </div>
  </Nav>
)

const ActionButtons = () => (
  <Nav className={cn(["!gap-5"])}>
    <Button
      type="outline"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <AiOutlineSchedule />
        </IconProvider>
      }
    >
      Schedule
    </Button>
    <Button
      href="/signin"
      icon={
        <IconProvider value={{size: "1.2rem"}}>
          <BiUser />
        </IconProvider>
      }
    >
      Sign In
    </Button>
  </Nav>
)

const ProfileNav = ({user}: {user: User}) => (
  <>
    <div
      className={cn([
        "rounded-full",
        "border-2 border-slate-50/60",
        "relative",
      ])}
    >
      <label
        htmlFor="user-nav"
        className={cn(["cursor-pointer"])}
      >
        <Image
          className={cn(["rounded-full"])}
          width={47}
          height={47}
          src="/images/landing/avatar-3.png"
          alt={user.email}
        />
      </label>
      <input
        type="checkbox"
        id="user-nav"
        className={cn(["peer hidden"])}
      />
      <div
        className={cn([
          "absolute top-[100%] z-10 mt-[1rem]",
          "hidden peer-checked:block",
        ])}
      >
        <ul className={cn(["cursor-pointer"])}>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </div>
  </>
)
