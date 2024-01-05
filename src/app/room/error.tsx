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
    <div
      className={cn(["flex justify-center items-center h-full w-2/3 mx-auto"])}
    >
      <ErrorPage
        error={error}
        reset={reset}
      />
    </div>
  )
}
