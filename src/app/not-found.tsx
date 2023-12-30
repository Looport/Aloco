"use client"

import {useEffect} from "react"

import {Button} from "@/web/common/components/button"
import {GrFormPreviousLink, IconProvider} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

export default function Error({
  error,
}: {
  error: Error & {digest?: string}
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className={cn([
        "h-full flex flex-col align-center justify-center",
        "bg-black/90",
      ])}
    >
      <div className={cn(["text-center py-10 px-4 sm:px-6 lg:px-8"])}>
        <h1 className={cn(["block mb-10", "text-7xl font-bold text-white/80"])}>
          Error
        </h1>
        <p className={cn(["text-white/80"])}>Page not found</p>
        <div
          className={cn([
            "mt-5",
            "flex flex-col justify-center items-center gap-2",
            "sm:flex-row sm:gap-3",
          ])}
        >
          <Button
            type="link"
            href="/"
            icon={
              <IconProvider value={{size: "1.3rem"}}>
                <GrFormPreviousLink />
              </IconProvider>
            }
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}
