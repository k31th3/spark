import type {
  HTMLAttributes,
  ReactNode,
} from 'react'

/* =========================================================
   PROPS
========================================================= */

export type RollProps =
  HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode
  }