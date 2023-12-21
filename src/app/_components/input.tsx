import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react"

import {cn} from "@/app/_lib/cn"

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode
}

export const Input = ({className, icon, ...props}: InputProps) => (
  <div className={cn(["relative"])}>
    <input
      className={cn([
        "peer py-3 px-4 block w-full",
        "bg-white/10 border-transparent rounded-full",
        "text-sm",
        icon ? "ps-12" : "",
        className ?? "",
      ])}
      {...props}
    />
    {icon && (
      <div
        className={cn([
          "absolute inset-y-0 start-0 flex items-center ps-4",
          "pointer-events-none peer-disabled:opacity-50",
          "peer-disabled:pointer-events-none",
        ])}
      >
        {icon}
      </div>
    )}
  </div>
)
