import type { HTMLAttributes, ReactNode } from 'react'

/* =========================================================
   FAQ ITEM
========================================================= */

export type HomeFAQItem = {
  id: string
  question: string
  answer: ReactNode
}

/* =========================================================
   PROPS
========================================================= */

export type HomeFAQProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  eyebrow?: string
  title?: string
  subtitle?: string
  items: HomeFAQItem[]

  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'

  ctaTitle?: string
  ctaLabel?: string
  ctaHref?: string
}