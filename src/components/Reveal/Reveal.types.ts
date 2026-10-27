import type {
  HTMLAttributes,
  ReactNode,
} from 'react'

/* =========================================================
   REVEAL DIRECTION
========================================================= */

export type RevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'none'

/* =========================================================
   REVEAL VARIANT
========================================================= */

export type RevealVariant =
  | 'slide'
  | 'fade'
  | 'scale'
  | 'blur'
  | 'zoom'
  | 'rise'
  | 'reveal'

/* =========================================================
   PROPS
========================================================= */

export type RevealProps =
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    direction?: RevealDirection
    variant?: RevealVariant
    delay?: number
  }