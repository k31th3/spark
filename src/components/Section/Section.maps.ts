import type {
  SectionBackground,
  SectionSpacing,
} from './Section.types'

/* =========================================================
   BACKGROUND
========================================================= */

export const BACKGROUND: Record<SectionBackground, string> = {
  none: '',
  subtle: 'bg-neutral-50',
  brand: 'bg-accent-50',
  accent: 'bg-accent-500 text-white',
  dark: 'bg-neutral-950 text-white',
}

/* =========================================================
   SPACING
========================================================= */

export const SPACING: Record<SectionSpacing, string> = {
  none: 'py-0',
  sm: 'py-[calc(var(--spacing-section)*0.5)]',
  md: 'py-section',
  lg: 'py-[calc(var(--spacing-section)*1.4)]',
}