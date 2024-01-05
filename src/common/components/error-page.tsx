import {useEffect} from "react"

import {Button} from "@/web/common/components/button"
import {Card} from "@/web/common/components/home/card"
import {
  GrFormPreviousLink,
  IconProvider,
  TbReload,
} from "@/web/common/components/icons"
import {cn} from "@/web/common/utils/cn"

export const ErrorPage = ({
  error,
  title,
  reset,
}: {
  error: Error & {digest?: string}
  title?: string
  reset?: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Card
      rootClassName={cn([
        "flex-grow flex flex-col align-center justify-center",
      ])}
    >
      <div className={cn(["text-center py-10 px-4 sm:px-6 lg:px-8"])}>
        <h1 className={cn(["block mb-10", "text-7xl font-bold text-white/80"])}>
          {title ?? "Error"}
        </h1>
        <p className={cn(["text-white/80"])}>
          {error?.message ?? "Something went wrong"}
        </p>
        <div
          className={cn([
            "mt-5",
            "flex flex-col justify-center items-center gap-2",
            "sm:flex-row sm:gap-3",
          ])}
        >
          {reset && (
            <Button
              onClick={reset}
              icon={
                <IconProvider value={{size: "1.3rem"}}>
                  <TbReload />
                </IconProvider>
              }
            >
              Reload
            </Button>
          )}
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
    </Card>
  )
}
