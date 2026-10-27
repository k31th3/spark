import type { HTMLAttributes } from 'react'

/* =========================================================
   VIDEO
========================================================= */

export type HomeAboutVideo = {
  src: string
  poster?: string
  label?: string
  aspectRatio?: string
}

/* =========================================================
   PROPS
========================================================= */

export type HomeAboutProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  eyebrow?: string
  label?: string
  
  paragraphs: string[][]

  video?: HomeAboutVideo
}