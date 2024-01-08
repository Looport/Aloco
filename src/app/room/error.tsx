"use client"

import {ErrorPage} from "@/common/components/error-page"
import {cn} from "@/web/common/utils/cn"

export default function LandingErrorPage({
  error,
  reset,
}: {
  error: Error & {digest?: string}
  reset: () => void
}) {
  return (
    <div className={cn(["flex justify-center items-center h-full"])}>
      <div className={cn(["h-1/3 w-1/2"])}>
        <ErrorPage
          error={error}
          reset={reset}
        />
      </div>
    </div>
  )
}
