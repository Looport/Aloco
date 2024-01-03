import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react"

import {cn} from "@/web/common/utils/cn"

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode
  iconPosition?: "start" | "end"
  error?: string
}

export const Input = ({
  className,
  icon,
  iconPosition = "start",
  error,
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
    <div>
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
      {error && (
        <p className={cn(["text-xs text-left text-red-600 mt-2"])}>{error}</p>
      )}
    </div>
  )
}
