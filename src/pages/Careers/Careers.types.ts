import type { IconType } from 'react-icons'

/* =========================================================
   PHOTOS
========================================================= */

export type CareersPhoto = {
  src?: string
  alt: string
}

/* =========================================================
   REASONS
========================================================= */

export type Reason = {
  title: string
  text: string
  icon: IconType
}

/* =========================================================
   JOBS
========================================================= */

export type JobCategory =
  | 'Design'
  | 'Development'
  | 'Hardware'
  | 'Engineering'
  | 'Marketing'
  | 'Admin'

export type JobType = 'Full time' | 'Part time' | 'Contract' | 'Internship'

export type Job = {
  id: string
  title: string
  category: JobCategory
  type: JobType
  location: string
  salary?: string
  description: string
}