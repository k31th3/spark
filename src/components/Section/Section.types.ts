import type {
  HTMLAttributes,
  ReactNode,
} from 'react'

/* =========================================================
   BACKGROUND
========================================================= */

export type SectionBackground =
  | 'none'
  | 'subtle'
  | 'brand'
  | 'accent'
  | 'dark'

/* =========================================================
   SPACING
========================================================= */

export type SectionSpacing =
  | 'none'
  | 'sm'
  | 'md'
  | 'lg'

/* =========================================================
   ELEMENT TYPES
========================================================= */

export type SectionElement =
  | 'section'
  | 'div'
  | 'article'
  | 'footer'
  | 'header'
  | 'main'
  | 'aside'
  | 'nav'

/* =========================================================
   PROPS
========================================================= */

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode
  as?: SectionElement
  background?: SectionBackground
  spacing?: SectionSpacing
  curved?: boolean
}