import './_styles/landing.css'
import {ReactNode} from 'react'

import {Footer} from '@/app/(landing)/_components/footer'
import {Header} from '@/app/(landing)/_components/header'
import {cn} from '@/app/_lib/cn'

export default function LandingLayout({children}: {children: ReactNode}) {
  return (
    <div className={cn(['landing-container'])}>
      <div className={cn(['max-w-[1100px]', 'mx-auto'])}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
