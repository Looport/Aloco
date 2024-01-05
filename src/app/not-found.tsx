"use client"

import "../web/common/styles/landing.css"

import {ErrorPage} from "@/common/components/error-page"
import {cn} from "@/web/common/utils/cn"

const error = new Error("Page not found")

export default function NotFoundPage() {
  return (
    <section
      className={cn([
        "landing-container",
        "flex justify-center items-center h-full",
      ])}
    >
      <div className={cn(["w-2/3 mx-auto"])}>
        <ErrorPage
          title={"404"}
          error={error}
        />
      </div>
    </section>
  )
}
