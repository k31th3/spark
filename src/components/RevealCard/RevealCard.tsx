import { useId, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import styles from './RevealCard.module.css'
import type { RevealCardProps } from './RevealCard.types'

/* =========================================================
   PROGRESSIVE BLUR
========================================================= */

const BLUR_STEPS = [1, 2, 4, 8, 16, 32, 64]

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
  const panelId = useId()

  return (
    <article
      data-open={open}
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

      {/* ===== PANEL: BLUR + HEADLINE + TEXT SLIDE UP TOGETHER ===== */}

      <div className={styles.panel}>

        <div
          aria-hidden="true"
          className={styles.blur}
          style={{ '--count': BLUR_STEPS.length } as CSSProperties}
        >
          {BLUR_STEPS.map((blur, index) => (
            <span
              key={blur}
              className={styles.blurLayer}
              style={
                {
                  '--i': index,
                  '--blur': `${blur}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className={styles.content}>

          <h3 className={styles.heading}>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => onOpenChange(!open)}
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

          <div
            id={panelId}
            className={styles.reveal}
          >

            <div
              role="region"
              aria-label={title}
              tabIndex={open ? 0 : -1}
              data-lenis-prevent
              className={styles.scroller}
            >
              <div className={styles.lines}>
                {lines.map((line, lineIndex) => {
                  const text = typeof line === 'string' ? line : line.text
                  const lineTone = typeof line === 'string' ? undefined : line.tone

                  return (
                    <p
                      key={lineIndex}
                      className={cn(
                        styles.line,
                        lineTone === 'strong' && styles.lineStrong,
                        lineTone === 'accent' && styles.lineAccent
                      )}
                    >
                      {text}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}

export default RevealCard;