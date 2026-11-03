import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import ProgressiveBlur from '@/components/HomeWhyUs/ProgressiveBlur'
import RevealStory from './RevealStory'
import styles from './RevealCard.module.css'
import type { RevealCardProps } from './RevealCard.types'

/* =========================================================
   REVEAL CARD
========================================================= */

function RevealCard({
  title,
  lines,
  image,
  imageAlt = '',
  tone = 'violet',
  open,
  onOpenChange,
  className = '',
}: RevealCardProps) {
  const zoneRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  /* The story's veil takes over the card's blur while it is open */

  const [covered, setCovered] = useState(false)

  return (
    <article
      data-open={open}
      data-covered={covered}
      data-tone={tone}
      className={cn(styles.card, !image && styles.plain, className)}
    >
      {image && (
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={styles.image}
        />
      )}

      {/* ===== PANEL: THE 9REM BLUR ZONE AT THE BOTTOM ===== */}

      <div ref={zoneRef} className={styles.panel}>

        <div className={styles.blurHost}>
          <ProgressiveBlur />
        </div>

        <div className={styles.content}>
          <h3 className={styles.heading}>
            <button
              ref={triggerRef}
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open}
              onClick={() => onOpenChange(true)}
              className={styles.trigger}
            >
              <span className={styles.titleText}>
                {title}
              </span>

              <span
                aria-hidden="true"
                className={styles.chevron}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 15l6-6 6 6" />
                </svg>
              </span>
            </button>
          </h3>
        </div>
      </div>

      <RevealStory
        open={open}
        onOpenChange={onOpenChange}
        title={title}
        lines={lines}
        tone={tone}
        originRef={zoneRef}
        returnFocusRef={triggerRef}
        onCoveredChange={setCovered}
      />
    </article>
  )
}

export default RevealCard;