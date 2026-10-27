import type {
  SectionBackground,
  SectionSpacing,
} from './Section.types'

import {
  BACKGROUND,
  SPACING,
} from './Section.maps'

/* =========================================================
   BACKGROUND CLASS
========================================================= */

export function getBackgroundClass(
  background?: SectionBackground
) {
  if (!background) return ''

  return BACKGROUND[background] ?? ''
}

/* =========================================================
   SPACING CLASS
========================================================= */

export function getSpacingClass(
  spacing?: SectionSpacing
) {
  if (!spacing) return ''

  return SPACING[spacing] ?? ''
}