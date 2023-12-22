import {ReactNode} from "react"
import {BiMapAlt} from "react-icons/bi"

import {Card} from "@/app/(landing)/(home)/_components/card"
import {Button} from "@/app/_components/button"
import {IconProvider} from "@/app/_components/icons"
import {cn} from "@/app/_lib/cn"

export const Roadmap = () => (
  <Card
    rootClassName={cn([
      "relative",
      "before:absolute before:top-[-3rem] before:left-[4rem]",
      "before:content-[' '] before:w-[8rem] before:h-[8rem]",
      "before:bg-[url('/images/landing/elips-blue.png')] before:bg-no-repeat",
      "before:bg-[length:cover] before:rounded-[2rem]",
      "after:absolute after:bottom-[-3rem] after:right-[4rem]",
      "after:content-[' '] after:w-[8rem] after:h-[8rem]",
      "after:bg-[url('/images/landing/elips-orange.png')] after:bg-no-repeat",
      "after:bg-[length:cover] after:rounded-[2rem]",
      "p-5",
    ])}
  >
    <header>
      <h2
        className={cn([
          "text-center",
          "mb-8",
          "font-black text-3xl text-transparent bg-clip-text",
          "bg-gradient-to-r from-[#FF343F] from-0%",
          "via-[#FFE853] via-50%",
          "to-[#FF343F] to-100%",
        ])}
      >
        Roadmap
      </h2>
    </header>
    <div
      className={cn([
        "flex-1",
        "grid grid-rows-[minmax(0, 1fr), 1px, minmax(0, 1fr)]",
        "grid-cols-6",
        "mb-5 items-end gap-2.5 justify-stretch",
      ])}
    >
      <Limit color="#354AEB">2023</Limit>
      <StepDescription>
        Lorem ipsum Dolor sit amet Consectetur adipiscing
      </StepDescription>
      <StepDescription>Dolor sitamet Consectetur adipiscing</StepDescription>
      <StepDescription>Consectetur adipiscing</StepDescription>
      <StepDescription>
        Lorem ipsum Dolor sit amet Consectetur adipiscing
      </StepDescription>
      <Limit color="#FF222E">2024</Limit>
      <div
        className={cn([
          "justify-self-stretch",
          "col-span-6 bg-white h-[0.2rem]",
          "bg-gradient-to-r",
          "from-[#354AEB] from-0%",
          "to-[#FF222E] to-100%",
        ])}
      />
      <div />
      <Step>Step 1</Step>
      <Step>Step 2</Step>
      <Step>Step 3</Step>
      <Step>Step 4</Step>
      <div />
    </div>
    <footer className={cn(["flex justify-center"])}>
      <Button
        type="outline"
        icon={
          <IconProvider value={{size: "1.3rem"}}>
            <BiMapAlt />
          </IconProvider>
        }
      >
        Learn More
      </Button>
    </footer>
  </Card>
)

const Step = ({children}: {children: ReactNode}) => (
  <div className={cn(["font-bold text-xl"])}>{children}</div>
)

const StepDescription = ({children}: {children: ReactNode}) => (
  <p className={cn(["text-xs text-white/60"])}>{children}</p>
)

const Limit = ({children, color}: {children: ReactNode; color: string}) => (
  <div
    className={cn([
      `text-[${color}] font-black text-3xl`,
      "justify-self-start self-end leading-none",
    ])}
  >
    {children}
  </div>
)
