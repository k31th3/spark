import type { HTMLAttributes } from 'react'
import type { IconType } from 'react-icons'

/* =========================================================
   LINKS
========================================================= */

export type FooterLink = {
  label: string
  href: string
  chevron?: boolean
}

export type FooterColumn = {
  heading: string
  links: FooterLink[]
}

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

/* =========================================================
   CONTACT DETAIL
========================================================= */

export type FooterDetail = {
  label: string
  value: string
  href?: string
}

/* =========================================================
   CTA (TOP PART OF THE FOOTER)
========================================================= */

export type FooterCta = {
  title?: string
  highlight?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

/* =========================================================
   PROPS (ALL OPTIONAL: DEFAULTS COME FROM Footer.config.ts)
========================================================= */

export type FooterProps = HTMLAttributes<HTMLElement> & {
  backdrop?: string

  companyName?: string
  cta?: FooterCta
  details?: FooterDetail[]
  columns?: FooterColumn[]
  socialLinks?: SocialLink[]
}