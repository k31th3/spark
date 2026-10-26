import { cn } from '@/lib/utils'
import type { RollProps } from './Roll.types'
import styles from './Roll.module.css'

/* =========================================================
   ROLL
========================================================= */

function Roll({
  children,
  className = '',
  ...props
}: RollProps) {
  return (
    <span
      className={cn(styles.roll, className)}
      {...props}
    >
      <span className={styles.track}>
        <span className={styles.line}>
          {children}
        </span>

        <span
          aria-hidden="true"
          className={cn(styles.line, styles.clone)}
        >
          {children}
        </span>
      </span>
    </span>
  )
}

export default Roll;