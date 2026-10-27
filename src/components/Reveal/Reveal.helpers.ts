import type {
  RevealDirection,
  RevealVariant,
} from './Reveal.types'

import {
  HIDDEN_TRANSFORM,
  VISIBLE_TRANSFORM,
} from './Reveal.maps'

/* =========================================================
   HIDDEN STATES
========================================================= */

const HIDDEN_BY_VARIANT: Record<
  RevealVariant,
  (direction: RevealDirection) => string
> = {
  /* -------------------------------------------------------
     SLIDE
  ------------------------------------------------------- */

  slide: (direction) =>
    `opacity-0 ${HIDDEN_TRANSFORM[direction] ?? ''}`,

  /* -------------------------------------------------------
     FADE
  ------------------------------------------------------- */

  fade: () =>
    'opacity-0',

  /* -------------------------------------------------------
     SCALE
  ------------------------------------------------------- */

  scale: () =>
    'opacity-0 scale-95',

  /* -------------------------------------------------------
     BLUR
  ------------------------------------------------------- */

  blur: () =>
    'opacity-0 blur-md',

  /* -------------------------------------------------------
     ZOOM
  ------------------------------------------------------- */

  zoom: () =>
    'opacity-0 scale-90',

  /* -------------------------------------------------------
     RISE
  ------------------------------------------------------- */

  rise: () =>
    'opacity-0 translate-y-12 scale-[0.97]',

  /* -------------------------------------------------------
     REVEAL
  ------------------------------------------------------- */

  reveal: () =>
    'opacity-0 translate-y-6 blur-sm',
}

/* =========================================================
   TRANSFORM CLASS
========================================================= */

export function getTransformClass(
  variant: RevealVariant,
  direction: RevealDirection,
  isInView: boolean
): string {
  if (isInView) {
    return VISIBLE_TRANSFORM
  }

  return (
    HIDDEN_BY_VARIANT[variant]?.(direction) ??
    HIDDEN_BY_VARIANT.fade(direction)
  )
}