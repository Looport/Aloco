import "../../web/common/styles/landing.css"
import {ReactNode} from "react"

import {Footer} from "@/web/common/components/landing/footer"
import {Header} from "@/web/common/components/landing/header"
import {cn} from "@/web/common/utils/cn"

export default function LandingLayout({children}: {children: ReactNode}) {
  return (
    <div className={cn(["landing-container text-white/80"])}>
      <div className={cn(["max-w-[1100px]", "mx-auto"])}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
