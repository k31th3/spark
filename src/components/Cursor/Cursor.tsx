import { useEffect, useRef, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'

import type { CursorProps } from './Cursor.types'

import styles from './Cursor.module.css'

/* =========================================================
   CONSTANTS
========================================================= */

const ACTIVE_CLASS = 'has-custom-cursor'

const LABEL_SELECTOR = '[data-cursor-label]'

const TEXT_FIELD_SELECTOR = [
  'textarea',
  '[contenteditable="true"]',
  'input:not([type="checkbox"], [type="radio"], [type="submit"], [type="button"], [type="range"], [type="file"], [type="color"])',
  '[data-cursor="hidden"]',
].join(',')

const INTERACTIVE_SELECTOR = [
  'a[href]',
  'button:not(:disabled)',
  '[role="button"]',
  'summary',
  'label[for]',
  'select',
  'input[type="checkbox"]',
  'input[type="radio"]',
  'input[type="submit"]',
  'input[type="button"]',
  '[data-cursor="hover"]',
].join(',')

type CursorState = 'default' | 'hover' | 'label' | 'hidden'

interface ResolvedCursor {
  state: CursorState
  label?: string
}

/* ===== FOLLOWER RESTS THIS FAR (PX) DOWN-RIGHT OF THE POINTER,
        BIGGER WHEN THE MAIN POINTER GROWS SO IT NEVER SITS UNDER THE LABEL ===== */

const FOLLOWER_OFFSET: Record<CursorState, number> = {
  default: 22,
  hover: 36,
  label: 62,
  hidden: 22,
}

const MAX_LEAN_DEG = 18

/* =========================================================
   STATE RESOLVER
========================================================= */

function resolveCursor(target: EventTarget | null): ResolvedCursor {
  if (!(target instanceof Element)) return { state: 'default' }

  if (target.closest(TEXT_FIELD_SELECTOR)) return { state: 'hidden' }

  const match = target.closest<HTMLElement>(
    `${LABEL_SELECTOR},${INTERACTIVE_SELECTOR}`
  )

  if (!match) return { state: 'default' }

  const label = match.dataset.cursorLabel

  if (label) return { state: 'label', label }

  return { state: 'hover' }
}

/* =========================================================
   HELPERS
========================================================= */

/* Frame-rate independent easing: same feel on 60Hz and 144Hz screens */
const ease1 = (factor: number, frames: number) =>
  1 - Math.pow(1 - factor, frames)

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value))

/* =========================================================
   CURSOR COMPONENT
========================================================= */

export function Cursor({
  ease = 1,
  follower,
  followerEase = 0.12,
  followerSize = 36,
  followerFlip = false,
}: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const followerBodyRef = useRef<HTMLDivElement>(null)

  const hasFollower = follower != null

  useEffect(() => {
    const cursor = cursorRef.current
    const labelEl = labelRef.current
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    if (!cursor || !labelEl || !finePointer.matches) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    /* ===== FOLLOWER IS DECORATIVE MOTION: OFF FOR REDUCED MOTION ===== */

    const followerEl = followerRef.current
    const followerBody = followerBodyRef.current
    const useFollower = !!followerEl && !!followerBody && !reduceMotion

    const factor = reduceMotion ? 1 : ease
    const root = document.documentElement

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    let followerX = 0
    let followerY = 0
    let lean = 0
    let facing = 1
    let offset = FOLLOWER_OFFSET.default

    let frame = 0
    let last = 0
    let visible = false

    const paint = () => {
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
    }

    const paintFollower = () => {
      if (!useFollower) return

      followerEl.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`

      followerBody.style.transform =
        `rotate(${lean}deg) scaleX(${followerFlip ? facing : 1})`
    }

    const snapFollower = () => {
      followerX = targetX + offset
      followerY = targetY + offset
      lean = 0
    }

    const render = (now: number) => {
      const frames = last ? Math.min((now - last) / 16.667, 4) : 1
      last = now

      /* ----- MAIN POINTER ----- */

      const mainK = ease1(factor, frames)

      currentX += (targetX - currentX) * mainK
      currentY += (targetY - currentY) * mainK

      let settled =
        Math.abs(targetX - currentX) < 0.1 &&
        Math.abs(targetY - currentY) < 0.1

      if (settled) {
        currentX = targetX
        currentY = targetY
      }

      paint()

      /* ----- FOLLOWER (CHASES THE POINTER, LEANS INTO THE MOVE) ----- */

      if (useFollower) {
        const goalX = targetX + offset
        const goalY = targetY + offset
        const remainingX = goalX - followerX

        const followerK = ease1(followerEase, frames)

        followerX += remainingX * followerK
        followerY += (goalY - followerY) * followerK

        if (remainingX > 2) facing = 1
        else if (remainingX < -2) facing = -1

        const leanGoal = clamp(remainingX * 0.12, -MAX_LEAN_DEG, MAX_LEAN_DEG)
        lean += (leanGoal - lean) * ease1(0.2, frames)

        const followerSettled =
          Math.abs(goalX - followerX) < 0.1 &&
          Math.abs(goalY - followerY) < 0.1 &&
          Math.abs(lean) < 0.1

        if (followerSettled) {
          followerX = goalX
          followerY = goalY
          lean = 0
        }

        paintFollower()

        settled = settled && followerSettled
      }

      if (settled) {
        frame = 0
        last = 0
      } else {
        frame = requestAnimationFrame(render)
      }
    }

    const start = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const apply = ({ state, label }: ResolvedCursor) => {
      cursor.dataset.state = state
      if (label !== undefined) labelEl.textContent = label

      if (useFollower) {
        followerEl.dataset.state = state
        offset = FOLLOWER_OFFSET[state]
        start()
      }
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return

      targetX = event.clientX
      targetY = event.clientY

      if (!visible) {
        visible = true
        currentX = targetX
        currentY = targetY

        root.classList.add(ACTIVE_CLASS)
        apply(resolveCursor(event.target))
        snapFollower()
        paint()
        paintFollower()
      }

      start()
    }

    const onOver = (event: PointerEvent) => {
      if (!visible || event.pointerType !== 'mouse') return
      apply(resolveCursor(event.target))
    }

    const onLeave = () => {
      visible = false
      apply({ state: 'hidden' })
    }

    const onDown = () => {
      cursor.dataset.pressed = 'true'
    }

    const onUp = () => {
      cursor.dataset.pressed = 'false'
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerdown', onDown, { passive: true })
    document.addEventListener('pointerup', onUp, { passive: true })
    document.addEventListener('pointercancel', onUp, { passive: true })
    root.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)

      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointercancel', onUp)
      root.removeEventListener('pointerleave', onLeave)

      root.classList.remove(ACTIVE_CLASS)
    }
  }, [ease, followerEase, followerFlip, hasFollower])

  if (typeof document === 'undefined') return null

  return createPortal(
    <>
      {/* ===== FOLLOWER (OUTSIDE THE BLEND-MODE LAYER SO ITS COLORS STAY TRUE) ===== */}

      {hasFollower && (
        <div
          ref={followerRef}
          className={styles.follower}
          data-state="hidden"
          aria-hidden="true"
          style={{ '--follower-size': `${followerSize}px` } as CSSProperties}
        >
          <div ref={followerBodyRef} className={styles.followerBody}>
            {follower}
          </div>
        </div>
      )}

      {/* ===== MAIN POINTER ===== */}

      <div
        ref={cursorRef}
        className={styles.cursor}
        data-state="hidden"
        data-pressed="false"
        aria-hidden="true"
      >
        <div className={styles.dot}>
          <span ref={labelRef} className={styles.label} />
        </div>
      </div>
    </>,
    document.body
  )
}

export default Cursor;