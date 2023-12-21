import {cookies} from "next/headers"
import Image from "next/image"
import Link from "next/link"
import {ReactNode} from "react"

import {Button} from "@/app/_components/button"
import {
  AiOutlineGift,
  AiOutlineSchedule,
  BiUser,
  IconProvider,
  LuSettings,
} from "@/app/_components/icons"
import {cn} from "@/app/_lib/cn"
import {queryUser} from "@/user/queries/user.query"

export const Header = async () => {
  const accessToken = cookies().get("accessToken")?.value

  if (accessToken) {
    const user = await queryUser(accessToken)

    return (
      <header>
        <div>{user.email}</div>
      </header>
    )
  }

  return (
    <header
      className={cn([
        "flex",
        "flex-wrap",
        "sm:justify-start",
        "sm:flex-nowrap",
        "z-50",
        "w-full",
        "text-sm",
        "py-10",
      ])}
    >
      <nav
        className={cn([
          "max-w-[85rem]",
          "w-full",
          "mx-auto",
          "px-4",
          "sm:flex",
          "sm:items-center",
          "sm:justify-between",
        ])}
      >
        <Link href="/">
          <Image
            width={130}
            height={35}
            src="/images/logos/aloco-logo.png"
            alt="Aloco"
          />
        </Link>
        <Nav>
          <NavLink link="/join-call">About Us</NavLink>
          <NavLink link="/signin">Roadmap</NavLink>
          <NavLink link="/signin">Donate</NavLink>
          <NavLink link="/signin">Register</NavLink>
        </Nav>
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
      "sm:justify-end",
      "tracking-wider",
      "sm:mt-0",
      "sm:ps-5",
      className ?? "",
    ])}
  >
    {children}
  </div>
)
