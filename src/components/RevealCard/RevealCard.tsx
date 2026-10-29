import { useId } from 'react'
import { Text } from '@/components'
import { cn } from '@/lib/utils'
import styles from './RevealCard.module.css'
import type { RevealCardProps } from './RevealCard.types'

/* =========================================================
   HELPERS
========================================================= */

const pad = (value: number, length: number) =>
  String(value).padStart(length, '0')

/* =========================================================
   REVEAL CARD
========================================================= */

function RevealCard({
  title,
  index,
  lines,
  image,
  imageAlt = '',
  tone = 'violet',
  open,
  onOpenChange,
  className = '',
}: RevealCardProps) {
  const panelId = useId()

  const handleClick = () => {
    onOpenChange(!open)
  }

  return (
    <article
      data-open={open}
      data-tone={tone}
      className={cn(styles.card, !image && styles.plain, className)}
    >
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={styles.image}
          />

          <div
            aria-hidden="true"
            className={styles.veil}
          />
        </>
      )}

      {/* ===== GLASS: HEADLINE ALWAYS, TEXT SLIDES UP ===== */}

      <div className={styles.glass}>

        <h3 className={styles.heading}>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={handleClick}
            className={styles.trigger}
          >
            <span className={styles.triggerText}>
              {index !== undefined && (
                <span aria-hidden="true">
                  <Text
                    as="span"
                    variant="label"
                    className={styles.index}
                  >
                    ({pad(index, 3)})
                  </Text>
                </span>
              )}

              <span className={styles.titleText}>
                {title}
              </span>
            </span>

            <span
              aria-hidden="true"
              className={styles.icon}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
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
    </article>
  )
}

export default RevealCard;