import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react"

import {cn} from "@/app/_lib/cn"

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode
  iconPosition?: "start" | "end"
}

export const Input = ({
  className,
  icon,
  iconPosition = "start",
  ...props
}: InputProps) => {
  let inputWithIconClasses: string[] = []
  const iconClasses: string[] = ["inset-y-0 z-10"]

  if (icon) {
    if (iconPosition === "start") {
      inputWithIconClasses.push("ps-12")
      iconClasses.push("start-5")
    } else if (iconPosition === "end") {
      inputWithIconClasses = ["pe-12"]
      iconClasses.push("end-5")
    }
  }

  return (
    <div className={cn(["relative"])}>
      <input
        className={cn([
          "peer py-3 px-4 block w-full z-0 cursor-pointer",
          "bg-white/10 border-transparent rounded-full",
          "text-sm",
          ...inputWithIconClasses,
          className ?? "",
        ])}
        {...props}
      />
      {icon && (
        <div
          className={cn(["absolute flex items-center z-10", ...iconClasses])}
        >
          {icon}
        </div>
      )}
    </div>
  )
}
