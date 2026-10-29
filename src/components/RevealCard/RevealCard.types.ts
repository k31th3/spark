/* =========================================================
   TEXT LINES
========================================================= */

export type RevealCardLine =
  | string
  | { text: string; tone?: 'strong' | 'accent' }

/* =========================================================
   PROPS
========================================================= */

export type RevealCardProps = {
  title: string

  index?: number

  lines: RevealCardLine[]

  image?: string

  imageAlt?: string

  tone?: 'violet' | 'sunset'

  open: boolean
  onOpenChange: (open: boolean) => void

  className?: string
}