import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { CSSProperties, MouseEvent, RefObject } from 'react'
import { createPortal } from 'react-dom'
import { useLenis } from 'lenis/react'

import { useScrollLock } from '@/hooks/useScrollLock'
import { cn } from '@/lib/utils'

import ProgressiveBlur from '@/components/HomeWhyUs/ProgressiveBlur'
import type { RevealCardLine } from '@/components/RevealCard/RevealCard.types'

import styles from './RevealStory.module.css'

/* =========================================================
   TIMING
========================================================= */

const EXPAND_MS = 750
const TEXT_MS = 300
const EXIT_MS = 320
const LEAD_MS = 250
const WORD_MS = 140
const HOLD_BASE = 800
const HOLD_PER_WORD = 35


const UNCOVER_LEAD_MS = 200

/* =========================================================
   CARD SHAPE
========================================================= */

const CARD_RADIUS = '1rem'

/* =========================================================
   TYPES
========================================================= */

type Zone = {
  top: number
  right: number
  bottom: number
  left: number
}

type Origin = {
  zone: Zone
  photo: string
}

type Word = { text: string; i: number }

type Slide = {
  rows: Word[][]
  tone?: 'strong' | 'accent'
  count: number
  duration: number
}

type RevealStoryProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  lines: RevealCardLine[]
  tone: 'violet' | 'sunset'

  image?: string

  originRef: RefObject<HTMLElement | null>

  returnFocusRef: RefObject<HTMLElement | null>

  onCoveredChange?: (covered: boolean) => void
}

/* =========================================================
   HELPERS
========================================================= */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function buildSlides(lines: RevealCardLine[]): Slide[] {
  return lines.map((line) => {
    const text = typeof line === 'string' ? line : line.text
    const tone = typeof line === 'string' ? undefined : line.tone

    let i = 0

    const rows = text.split('\n').map((row) =>
      row
        .split(/\s+/)
        .filter(Boolean)
        .map((word): Word => ({ text: word, i: i++ }))
    )

    return {
      rows,
      tone,
      count: i,
      duration: LEAD_MS + i * WORD_MS + HOLD_BASE + i * HOLD_PER_WORD,
    }
  })
}

/* =========================================================
   REVEAL STORY
========================================================= */

function RevealStory({
  open,
  onOpenChange,
  title,
  lines,
  tone,
  image,
  originRef,
  returnFocusRef,
  onCoveredChange,
}: RevealStoryProps) {
  const lenis = useLenis()

  const stageRef = useRef<HTMLDivElement>(null)
  const skipRef = useRef<HTMLButtonElement>(null)

  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [origin, setOrigin] = useState<Origin>({
    zone: { top: 0, right: 0, bottom: 0, left: 0 },
    photo: 'none',
  })

  const slides = useMemo(() => buildSlides(lines), [lines])
  const last = slides.length - 1

  const mountedRef = useRef(false)
  const onOpenChangeRef = useRef(onOpenChange)
  const onCoveredChangeRef = useRef(onCoveredChange)

  useEffect(() => {
    mountedRef.current = mounted
    onOpenChangeRef.current = onOpenChange
    onCoveredChangeRef.current = onCoveredChange
  })

  const close = useCallback(() => onOpenChangeRef.current(false), [])

  const measure = useCallback((): Origin | null => {
    const element = originRef.current

    if (!element) return null

    const rect = element.getBoundingClientRect()
    const root = document.documentElement

    const vw = root.clientWidth
    const vh = root.clientHeight

    const zone: Zone = {
      top: rect.top,
      left: rect.left,
      right: vw - rect.right,
      bottom: vh - rect.bottom,
    }

    const dx = rect.left + rect.width / 2 - vw / 2
    const dy = rect.top + rect.height / 2 - vh / 2

    const img = element.querySelector('img')

    let scale = `scale(${rect.width / vw}, ${rect.height / vh})`

    if (image && img && img.naturalWidth && img.naturalHeight) {
      const cover = (w: number, h: number) =>
        Math.max(w / img.naturalWidth, h / img.naturalHeight)

      scale = `scale(${cover(rect.width, rect.height) / cover(vw, vh)})`
    }

    return { zone, photo: `translate(${dx}px, ${dy}px) ${scale}` }
  }, [originRef, image])

  /* =======================================================
     OPEN / CLOSE
  ======================================================= */

  useEffect(() => {
    if (open) {
      const start = measure()

      if (!start) return

      setOrigin(start)
      setIndex(0)
      setExiting(false)
      setMounted(true)
      onCoveredChangeRef.current?.(true)

      if (prefersReducedMotion()) {
        setExpanded(true)
        setPlaying(true)
        return
      }

      let second = 0

      const first = requestAnimationFrame(() => {
        second = requestAnimationFrame(() => setExpanded(true))
      })

      const timer = window.setTimeout(
        () => setPlaying(true),
        EXPAND_MS - 150
      )

      return () => {
        cancelAnimationFrame(first)
        cancelAnimationFrame(second)
        window.clearTimeout(timer)
      }
    }

    if (!mountedRef.current) return

    setPlaying(false)

    const finish = () => {
      setMounted(false)
      onCoveredChangeRef.current?.(false)
      returnFocusRef.current?.focus({ preventScroll: true })
    }

    if (prefersReducedMotion()) {
      setExpanded(false)
      finish()
      return
    }

    const end = measure()

    if (end) setOrigin(end)

    const shrink = window.setTimeout(() => setExpanded(false), TEXT_MS)

    const uncover = window.setTimeout(
      () => onCoveredChangeRef.current?.(false),
      TEXT_MS + EXPAND_MS - UNCOVER_LEAD_MS
    )

    const done = window.setTimeout(finish, TEXT_MS + EXPAND_MS)

    return () => {
      window.clearTimeout(shrink)
      window.clearTimeout(uncover)
      window.clearTimeout(done)
    }
  }, [open, measure, returnFocusRef])

  useScrollLock(mounted)

  useEffect(() => {
    if (!mounted || !lenis) return

    lenis.stop()

    return () => lenis.start()
  }, [mounted, lenis])

  /* =======================================================
     AUTOPLAY: ONE SLIDE AT A TIME
  ======================================================= */

  useEffect(() => {
    if (!playing) return

    const slide = slides[index]

    if (!slide) return

    const fade = window.setTimeout(() => setExiting(true), slide.duration)

    const next = window.setTimeout(() => {
      if (index >= last) {
        onOpenChangeRef.current(false)
        return
      }

      setIndex(index + 1)
      setExiting(false)
    }, slide.duration + EXIT_MS)

    return () => {
      window.clearTimeout(fade)
      window.clearTimeout(next)
    }
  }, [playing, index, slides, last])

  useEffect(() => {
    if (playing) stageRef.current?.focus({ preventScroll: true })
  }, [playing])

  /* =======================================================
     MANUAL CONTROLS (TAP / ARROWS / ESCAPE)
  ======================================================= */

  const advance = useCallback(() => {
    if (!playing) return

    setExiting(false)

    if (index >= last) {
      close()
      return
    }

    setIndex(index + 1)
  }, [playing, index, last, close])

  const back = useCallback(() => {
    if (!playing || index === 0) return

    setExiting(false)
    setIndex(index - 1)
  }, [playing, index])

  useEffect(() => {
    if (!mounted) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (event.key === 'ArrowRight') {
        advance()
        return
      }

      if (event.key === 'ArrowLeft') {
        back()
        return
      }

      if (event.key === 'Tab') {
        event.preventDefault()

        const target =
          document.activeElement === skipRef.current
            ? stageRef.current
            : skipRef.current

        target?.focus({ preventScroll: true })
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mounted, advance, back, close])

  const handleSkip = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    close()
  }

  /* =======================================================
     RENDER
  ======================================================= */

  if (!mounted || typeof document === 'undefined') return null

  const slide = slides[index]

  const { zone } = origin

  const veilStyle = {
    '--veil-top': expanded ? '0px' : `${zone.top}px`,
    '--veil-right': expanded ? '0px' : `${zone.right}px`,
    '--veil-bottom': expanded ? '0px' : `${zone.bottom}px`,
    '--veil-left': expanded ? '0px' : `${zone.left}px`,
    '--veil-radius': expanded ? '0px' : CARD_RADIUS,
  } as CSSProperties

  const photoStyle: CSSProperties = {
    transform: expanded ? 'none' : origin.photo,
  }

  const zoneStyle: CSSProperties = {
    transform: expanded
      ? 'translateY(0px)'
      : `translateY(-${origin.zone.bottom}px)`,
  }

  return createPortal(
    <div
      className={styles.root}
      data-tone={tone}
      data-expanded={expanded}
      style={{ '--expand-ms': `${EXPAND_MS}ms` } as CSSProperties}
    >

      {/* ===== VEIL: THE CARD ITSELF, GROWING TO FILL THE SCREEN ===== */}

      <div
        aria-hidden="true"
        className={styles.veil}
        style={veilStyle}
      >
        <div
          className={cn(styles.photo, !image && styles.plain)}
          style={photoStyle}
        >
          {image && (
            <img
              src={image}
              alt=""
              draggable={false}
              decoding="async"
              className={styles.image}
            />
          )}
        </div>

        {/* ===== THE CARD'S BLUR BAND ===== */}

        <div className={styles.zone} style={zoneStyle}>
          <ProgressiveBlur />
        </div>

        {/* ===== FULL-SCREEN BLUR + TINT, FADING IN AS IT EXPANDS ===== */}

        <div className={styles.plate} />
      </div>

      {/* ===== STORY ===== */}

      <div
        ref={stageRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        data-visible={playing}
        data-lenis-prevent
        data-cursor-label={index >= last ? 'Done' : 'Next'}
        onClick={advance}
        className={styles.stage}
        style={
          {
            '--word-ms': `${WORD_MS}ms`,
            '--lead': `${LEAD_MS}ms`,
          } as CSSProperties
        }
      >
        <div className={styles.top}>
          <div aria-hidden="true" className={styles.segments}>
            {slides.map((item, i) => (
              <span
                key={i}
                className={styles.segment}
                data-state={
                  i < index
                    ? 'done'
                    : i === index && playing
                      ? 'active'
                      : 'idle'
                }
                style={
                  { '--dur': `${item.duration + EXIT_MS}ms` } as CSSProperties
                }
              >
                <span className={styles.fill} />
              </span>
            ))}
          </div>

          <div className={styles.meta}>
            <span aria-hidden="true" className={styles.label}>
              ({title})
            </span>

            <button
              ref={skipRef}
              type="button"
              aria-label="Skip story and close"
              onClick={handleSkip}
              className={styles.skip}
            >
              Close
            </button>
          </div>
        </div>

        <div aria-hidden="true" className={styles.body}>
          {slide && (
            <div
              key={index}
              className={styles.slide}
              data-exiting={exiting}
            >
              <p
                className={cn(
                  styles.text,
                  slide.tone === 'strong' && styles.strong,
                  slide.tone === 'accent' && styles.accent
                )}
              >
                {slide.rows.map((row, rowIndex) => (
                  <Fragment key={rowIndex}>
                    {row.map((word, wordIndex) => (
                      <Fragment key={wordIndex}>
                        <span
                          className={styles.word}
                          style={{ '--i': word.i } as CSSProperties}
                        >
                          {word.text}
                        </span>

                        {wordIndex < row.length - 1 && ' '}
                      </Fragment>
                    ))}

                    {rowIndex < slide.rows.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            </div>
          )}
        </div>

        <div className={styles.sr}>
          {lines.map((line, i) => (
            <p key={i}>{typeof line === 'string' ? line : line.text}</p>
          ))}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default RevealStory;