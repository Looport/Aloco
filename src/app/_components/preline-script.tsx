'use client'

import {usePathname} from 'next/navigation'
import {useEffect} from 'react'

export const PrelineScript = () => {
  const path = usePathname()

  useEffect(() => {
    import('preline/preline')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      globalThis.HSStaticMethods.autoInit()
    }, 100)
  }, [path])

  return null
}
