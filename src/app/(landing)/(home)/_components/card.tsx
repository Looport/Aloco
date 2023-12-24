import {ReactNode} from "react"

import {cn} from "@/app/_lib/cn"

export const Card = ({
  children,
  rootClassName,
}: {
  children: ReactNode
  rootClassName?: string
}) => (
  <div
    className={cn([
      "flex",
      "flex-col",
      "border rounded-full border-slate-50/25 drop-shadow-xl",
      "shadow-sm rounded-xl",
      "bg-zinc-700/10 backdrop-blur-sm",
      "overflow-hidden",
      rootClassName ?? "",
    ])}
  >
    {children}
  </div>
)

export const CardTitle = ({
  children,
  color,
  className,
}: {
  children: ReactNode
  color: string
  className?: string
}) => (
  <h2
    className={cn([
      "text-left",
      "mb-5",
      "font-black text-3xl text-transparent bg-clip-text",
      `${color}`,
      className ?? "",
    ])}
  >
    {children}
  </h2>
)

export const CardDescription = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <p className={cn(["text-center text-white/60 text-sm", className ?? ""])}>
    {children}
  </p>
)

export const CardTooltip = ({
  children,
  icon,
  className,
}: {
  children: ReactNode
  icon?: ReactNode
  className?: string
}) => (
  <div className={cn(["flex items-center gap-2.5", className ?? ""])}>
    <div className={cn(["flex items-center gap-2"])}>
      {icon}
      <span className={cn(["font-bold text-xl text-white"])}>{children}</span>
    </div>
  </div>
)
