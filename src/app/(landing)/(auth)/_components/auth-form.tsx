import {ReactNode} from "react"

import {Card} from "@/app/(landing)/(home)/_components/card"
import {Button} from "@/app/_components/button"
import {
  BsEnvelope,
  HiOutlineLockClosed,
  IconProvider,
} from "@/app/_components/icons"
import {Input} from "@/app/_components/input"
import {cn} from "@/app/_lib/cn"

export const AuthForm = ({
  header,
  onSubmit,
  buttonLabel,
}: {
  header: ReactNode
  onSubmit: (formData: FormData) => void
  buttonLabel: string
}) => (
  <main>
    <Card
      rootClassName={cn([
        "relative py-[4rem]",

        "before:absolute before:top-[7rem] before:right-[-4rem]",
        "before:content-[' '] before:w-[8rem] before:h-[8rem]",
        "before:bg-[url('/images/landing/elips-blue.png')]",
        "before:bg-[length:cover] before:bg-no-repeat",
        "before:rounded-[2.5rem]",

        "after:absolute after:bottom-[7rem] after:left-[-4rem]",
        "after:content-[' '] after:w-[8rem] after:h-[8rem]",
        "after:bg-[url('/images/landing/elips-orange.png')]",
        "after:bg-[length:cover] after:bg-no-repeat after:rounded-[2.5rem]",

        "!text-center !overflow-visible",
      ])}
    >
      <header>{header}</header>
      <form
        action={onSubmit}
        className={cn(["w-1/2 mx-auto"])}
      >
        <div className={cn(["flex flex-col gap-5 justify-center"])}>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            icon={
              <IconProvider value={{size: "1.3rem"}}>
                <BsEnvelope />
              </IconProvider>
            }
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            icon={
              <IconProvider value={{size: "1.3rem"}}>
                <HiOutlineLockClosed />
              </IconProvider>
            }
          />
          <div className={cn(["flex justify-center"])}>
            <Button
              htmlType="submit"
              className={cn(["!px-20 py-5"])}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  </main>
)
