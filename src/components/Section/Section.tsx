import { cn } from '@/lib/utils'
import type { SectionProps } from './Section.types'

import {
  getBackgroundClass,
  getSpacingClass,
} from './Section.helpers'

/* =========================================================
   SECTION
========================================================= */

function Section({
  children,
  as: Tag = 'section',
  background = 'none',
  spacing = 'md',
  className = '',
  ...props
}: SectionProps) {
  const backgroundClass = getBackgroundClass(background)
  const spacingClass = getSpacingClass(spacing)

  return (
    <Tag
      className={cn(
        'w-full scroll-mt-24',
        backgroundClass,
        spacingClass,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Section