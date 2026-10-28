import type { HTMLAttributes } from 'react'

/* =========================================================
   SERVICE ITEM
========================================================= */

export type HomeServiceItem = {
  id: string
  title: string
  description: string

  /* Where the card's button goes (the services page, e.g. "/services?tab=1") */
  href?: string

  image?: string
  imageAlt?: string

  tags?: string[]
}

/* =========================================================
   PROPS
========================================================= */

export type HomeServicesProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  eyebrow?: string
  title?: string
  items: HomeServiceItem[]
  image?: string

  exploreLabel?: string
}