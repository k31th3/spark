import type { RevealDirection } from './Reveal.types'

/* =========================================================
   HIDDEN TRANSFORMS
========================================================= */

export const HIDDEN_TRANSFORM: Record<
  RevealDirection,
  string
> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
}

/* =========================================================
   SHARED VISIBLE STATE
========================================================= */

export const VISIBLE_TRANSFORM =
  'opacity-100 translate-none scale-none blur-none'