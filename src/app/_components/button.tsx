'use client'

import Link from 'next/link'
import {ReactNode} from 'react'

import {cn} from '@/app/_lib/cn'

export const Button = ({
  children,
  type = 'solid',
  icon,
  className,
  href,
}: {
  children?: ReactNode
  type?: 'solid' | 'outline' | 'link' | 'text'
  icon?: ReactNode
  className?: string
  href?: string
}) => {
  let btnClassName = ''

  if (type === 'link') {
    btnClassName = cn([
      'py-3',
      'px-5',
      'inline-flex',
      'items-center',
      'gap-x-2',
      'text-sm',
      'font-black',
      'rounded-full',
      'border',
      'border-transparent',
      'text-blue-600',
      'hover:text-blue-800',
      'disabled:opacity-50',
      'disabled:pointer-events-none',
    ])
  }

  if (type === 'solid') {
    btnClassName = cn([
      'py-3',
      'px-5',
      'inline-flex',
      'items-center',
      'gap-x-2',
      'text-sm',
      'font-black',
      'rounded-full',
      'border',
      'border-gray-500',
      'bg-blue-600',
      'text-white/80',
      'tracking-wide',
      'hover:bg-blue-700',
      'disabled:opacity-50',
      'disabled:pointer-events-none',
    ])
  }

  if (type === 'outline') {
    btnClassName = cn([
      'py-3',
      'px-5',
      'inline-flex',
      'items-center',
      'gap-x-2',
      'text-sm',
      'font-black',
      'rounded-full',
      'border',
      'border-gray-500',
      'text-white/80',
      'tracking-wide',
      'hover:border-blue-600',
      'hover:text-blue-600',
      'disabled:opacity-50',
      'disabled:pointer-events-none',
    ])
  }

  if (href) {
    return (
      <Link
        href={href}
        className={cn([btnClassName, className ?? ''])}
      >
        {icon && <div className="flex-shrink-0">{icon}</div>}
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={cn([btnClassName, className ?? ''])}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      {children}
    </button>
  )
}
