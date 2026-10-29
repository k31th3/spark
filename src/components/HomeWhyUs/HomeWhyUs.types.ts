import type { HTMLAttributes } from 'react'
import type { RevealCardLine } from '@/components/RevealCard/RevealCard.types'

/* =========================================================
   TEXT LINES (SAME AS THE REVEAL CARD)
========================================================= */

export type HomeWhyUsLine = RevealCardLine

/* =========================================================
   ITEM
========================================================= */

export type HomeWhyUsItem = {
  id: string
  title: string
  lines: HomeWhyUsLine[]

  image?: string
  imageAlt?: string
}

/* =========================================================
   PROPS
========================================================= */

export type HomeWhyUsProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  eyebrow?: string
  title?: string
  items: HomeWhyUsItem[]
}