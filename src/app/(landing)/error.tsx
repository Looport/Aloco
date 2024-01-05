"use client"

import {ErrorPage} from "@/common/components/error-page"

export default function LandingErrorPage({
  error,
  reset,
}: {
  error: Error & {digest?: string}
  reset: () => void
}) {
  return (
    <ErrorPage
      error={error}
      reset={reset}
    />
  )
}