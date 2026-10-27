import type { HTMLAttributes } from 'react'

/* =========================================================
   HOME HERO VIDEO
========================================================= */

export type HomeHeroVideo = {
  /** Primary source (the .webm) */
  src: string

  /** Optional .mp4 for browsers that can't play the webm */
  fallbackSrc?: string

  /** Still shown before the video loads and when reduced motion is on */
  poster?: string
}

/* =========================================================
   HOME HERO PROPS
========================================================= */

export type HomeHeroProps = Omit<
  HTMLAttributes<HTMLElement>,
  'title'
> & {
  eyebrow?: string
  headline: string

  subtitle?: string

  ctaLabel?: string
  ctaHref?: string

  scrollTargetId?: string
  wordmarkImage?: string
  video?: HomeHeroVideo
}