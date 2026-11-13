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
   CTA TEXT
========================================================= */

export type FooterCta = {
  title?: string
  highlight?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

/* =========================================================
   PROPS
========================================================= */

export type FooterProps = HTMLAttributes<HTMLElement> & {
  companyName?: string
  details?: FooterDetail[]
  columns?: FooterColumn[]
  socialLinks?: SocialLink[]
}

export type CtaSectionProps = HTMLAttributes<HTMLElement> & {
  cta?: FooterCta
}