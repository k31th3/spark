import type { CSSProperties } from 'react'
import styles from './ProgressiveBlur.module.css'

/* =========================================================
   PROGRESSIVE BLUR
========================================================= */

const BLUR_STEPS = [1, 2, 4, 8, 16, 32, 64]

function ProgressiveBlur() {
  return (
    <>
      <div aria-hidden="true" className={styles.tint} />

      <div
        aria-hidden="true"
        className={styles.blur}
        style={{ '--count': BLUR_STEPS.length } as CSSProperties}
      >
        {BLUR_STEPS.map((blur, index) => (
          <span
            key={blur}
            className={styles.layer}
            style={
              {
                '--i': index,
                '--blur': `${blur}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </>
  )
}

export default ProgressiveBlur