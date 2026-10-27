import type { HTMLAttributes } from 'react'

/* =========================================================
   PROJECT
========================================================= */

export type Project = {
  id: string
  title: string
  category: string
  year?: string
  description?: string
  image: string
  imageAlt?: string
  href?: string
}

/* =========================================================
   PROJECTS PROPS
========================================================= */

export type ProjectsProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title?: string
  projects: Project[]
  limit?: number
  viewAllLabel?: string
  viewAllHref?: string
  onViewAllClick?: () => void
}