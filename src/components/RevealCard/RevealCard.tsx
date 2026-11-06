import { useRef, useState } from 'react'
import type { KeyboardEvent, MouseEvent } from 'react'
import { cn } from '@/lib/utils'
import ProgressiveBlur from '@/components/HomeWhyUs/ProgressiveBlur'
import RevealStory from './RevealStory'
import styles from './RevealCard.module.css'
import type { RevealCardProps } from './RevealCard.types'

/* =========================================================
   HELPERS
========================================================= */

const isInsideCard = (event: { currentTarget: Element; target: EventTarget }) =>
  event.currentTarget.contains(event.target as Node)

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
  const cardRef = useRef<HTMLElement>(null)

  const [covered, setCovered] = useState(false)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (!isInsideCard(event)) return

    onOpenChange(true)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    if (!isInsideCard(event)) return

    event.preventDefault()
    onOpenChange(true)
  }

  return (
    <article
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label={title}
      data-open={open}
      data-covered={covered}
      data-tone={tone}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
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

      <div className={styles.panel}>

        <div className={styles.blurHost}>
          <ProgressiveBlur />
        </div>

        <div className={styles.content}>
          <div className={styles.heading}>
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
          </div>
        </div>
      </div>

      <RevealStory
        open={open}
        onOpenChange={onOpenChange}
        title={title}
        lines={lines}
        tone={tone}
        image={image}
        originRef={cardRef}
        returnFocusRef={cardRef}
        onCoveredChange={setCovered}
      />
    </article>
  )
}

export default RevealCard;