"use client"

import {ReactNode} from "react"
import {useFormState} from "react-dom"

import {Button} from "@/web/common/components/button"
import {Card} from "@/web/common/components/home/card"
import {
  BsEnvelope,
  HiOutlineLockClosed,
  IconProvider,
} from "@/web/common/components/icons"
import {Input} from "@/web/common/components/input"
import {cn} from "@/web/common/utils/cn"

interface Props {
  header?: ReactNode
  onSubmit: (
    prevState: any,
    formData: FormData
  ) => Promise<{errors: any} | undefined>
  buttonLabel: string
}

const initialFormState: {
  errors: {
    email?: string[]
    password?: string[]
  }
} = {
  errors: {},
}

export const AuthForm = ({header, onSubmit, buttonLabel}: Props) => {
  const [state, formAction] = useFormState(onSubmit, initialFormState)

  return (
    <Card
      rootClassName={cn([
        "relative py-[4rem]",
        "h-full",

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
      {header && <header>{header}</header>}
      <form
        action={formAction}
        className={cn(["w-1/2 mx-auto"])}
      >
        <div className={cn(["flex flex-col gap-5 justify-center"])}>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            error={state?.errors?.email?.[0]}
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
            error={state?.errors?.password?.[0]}
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
  )
}
