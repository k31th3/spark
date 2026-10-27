import { cn } from '@/lib/utils'
import { useInView } from '@/hooks/useInView'

import type { RevealProps } from './Reveal.types'

import { getTransformClass } from './Reveal.helpers'

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  direction = 'up',
  variant = 'slide',
  delay = 0,
  className = '',
  ...props
}: RevealProps) {
  const { ref, isInView } =
    useInView<HTMLDivElement>()

  const transformClass =
    getTransformClass(
      variant,
      direction,
      isInView
    )

  return (
    <div
      ref={ref}
      className={cn(
        /* =================================================
           BASE TRANSITION
           (v4 animates translate and scale as their own
           properties, so they must be listed explicitly)
        ================================================= */

        'transition-[opacity,translate,scale,filter]',
        'duration-700',
        'ease-[cubic-bezier(0.22,1,0.36,1)]',

        /* =================================================
           ANIMATION STATE
        ================================================= */

        transformClass,

        /* =================================================
           REDUCED MOTION: SHOW IMMEDIATELY
        ================================================= */

        'motion-reduce:opacity-100',
        'motion-reduce:translate-none',
        'motion-reduce:scale-none',
        'motion-reduce:blur-none',
        'motion-reduce:transition-none',

        /* =================================================
           PERFORMANCE
        ================================================= */

        !isInView && 'will-change-transform',

        /* =================================================
           USER CLASS
        ================================================= */

        className
      )}
      style={{
        transitionDelay:
          delay > 0 ? `${delay}ms` : undefined,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Reveal;