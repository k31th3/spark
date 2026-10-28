import { useEffect, useRef, useState } from 'react'
import { Button, Reveal, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import styles from './HomeServices.module.css'
import type { HomeServicesProps } from './HomeServices.types'

/* =========================================================
   HELPERS
========================================================= */

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

const pad = (value: number, length: number) =>
  String(value).padStart(length, '0')

/* =========================================================
   HOME SERVICES
========================================================= */

function HomeServices({
  eyebrow = 'What We Do',
  title = 'Digital products designed to move your business forward.',
  items,
  image,
  exploreLabel = 'Explore',
  className = '',
  ...props
}: HomeServicesProps) {
  const fillRef = useRef<HTMLSpanElement>(null)
  const stackRef = useRef<HTMLUListElement>(null)
  const slotRefs = useRef<(HTMLLIElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const itemCount = items.length

  /* =======================================================
     STACK PROGRESS
  ======================================================= */

  useEffect(() => {
    const fill = fillRef.current

    const slots = slotRefs.current
      .slice(0, itemCount)
      .filter((slot): slot is HTMLLIElement => slot !== null)

    if (slots.length < 2) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const cards = slots.map(
      (slot) => slot.firstElementChild as HTMLElement
    )

    let stickyTop = 0
    let heights: number[] = []
    let frame = 0

    const measure = () => {
      stickyTop = parseFloat(getComputedStyle(slots[0]).top) || 0
      heights = slots.map((slot) => slot.offsetHeight)
    }

    const update = () => {
      frame = 0

      const tops = slots.map((slot) => slot.getBoundingClientRect().top)

      /* cover[k]: how far card k+1 has slid over card k (0 to 1) */

      const cover = slots.slice(0, -1).map((_, k) => {
        const start = stickyTop + heights[k]

        return clamp((start - tops[k + 1]) / (start - stickyTop))
      })

      cards.forEach((card, index) => {
        const value = index < cover.length ? cover[index] : 0

        card.style.setProperty('--depth', value.toFixed(3))
        card.dataset.covered = value >= 0.995 ? 'true' : 'false'
      })

      /* Line: from the top to the centre of the active title */

      const total = cover.reduce((sum, value) => sum + value, 0)

      if (fill) {
        fill.style.height = `${(((0.5 + total) / slots.length) * 100).toFixed(2)}%`
      }

      setActiveIndex(cover.filter((value) => value >= 0.5).length)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)

      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [itemCount])

  /* =======================================================
     RAIL CLICK: SCROLL TO THE POINT WHERE THAT CARD IS ON TOP

     Slot k sits at (stackTop + sum of earlier heights + gaps)
     before it sticks. Card k is fully on top once that spot
     reaches the sticky offset.
  ======================================================= */

  const goToService = (index: number) => {
    const stack = stackRef.current

    const slots = slotRefs.current
      .slice(0, itemCount)
      .filter((slot): slot is HTMLLIElement => slot !== null)

    if (!stack || !slots[index]) return

    const gap = parseFloat(getComputedStyle(stack).rowGap) || 0
    const stickyTop = parseFloat(getComputedStyle(slots[0]).top) || 0
    const stackTop = stack.getBoundingClientRect().top + window.scrollY

    let offset = 0

    for (let i = 0; i < index; i += 1) {
      offset += slots[i].offsetHeight + gap
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    window.scrollTo({
      top: stackTop + offset - stickyTop + 1,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <Section
      aria-labelledby="services-heading"
      spacing="none"
      className={cn(styles.section, className)}
      {...props}
    >
      <Wrapper.Body className={styles.container}>

        {/* =================================================
            HEADER
        ================================================= */}

        <Reveal variant="fade">
          <Text
            as="span"
            variant="label"
            color="muted"
          >
            ({eyebrow})
          </Text>
        </Reveal>

        <Reveal
          variant="slide"
          delay={100}
        >
          <h2
            id="services-heading"
            className={styles.title}
          >
            {title}
          </h2>
        </Reveal>

        <div className={styles.layout}>

          {/* =================================================
              PROGRESS RAIL (DESKTOP): EACH LABEL JUMPS TO ITS CARD
          ================================================= */}

          <nav
            aria-label="Our services"
            className={styles.rail}
          >
            <div className={styles.railInner}>
              <Text
                as="span"
                variant="label"
                color="muted"
                className="block"
              >
                {pad(activeIndex + 1, 2)} / {pad(itemCount, 2)}
              </Text>

              <div className={styles.railTrack}>
                <span
                  ref={fillRef}
                  aria-hidden="true"
                  className={styles.railFill}
                />

                <ol className={styles.railList}>
                  {items.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        aria-current={index === activeIndex ? 'true' : undefined}
                        onClick={() => goToService(index)}
                        className={cn(
                          styles.railItem,
                          index === activeIndex && styles.railItemActive
                        )}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </nav>

          {/* =================================================
              CARD STACK
          ================================================= */}

          <ul
            ref={stackRef}
            role="list"
            className={styles.stack}
          >
            {items.map((item, index) => {
              const cardImage = item.image ?? image

              return (
                <li
                  key={item.id}
                  ref={(node) => {
                    slotRefs.current[index] = node
                  }}
                  className={styles.slot}
                >
                  <article
                    data-covered="false"
                    className={cn(styles.card, !cardImage && styles.cardPlain)}
                  >
                    {cardImage && (
                      <>
                        <img
                          src={cardImage}
                          alt={item.imageAlt ?? ''}
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

                    <div
                      aria-hidden="true"
                      className={styles.dim}
                    />

                    <div className={styles.content}>

                      <div className={styles.top}>
                        <Text
                          as="span"
                          variant="label"
                          className={styles.index}
                        >
                          <span
                            aria-hidden="true"
                            className={styles.indexDot}
                          />
                          ({pad(index + 1, 3)})
                        </Text>

                        {item.tags && item.tags.length > 0 && (
                          <ul
                            role="list"
                            className={styles.tags}
                          >
                            {item.tags.map((tag) => (
                              <li
                                key={tag}
                                className={styles.tag}
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className={styles.bottom}>
                        <h3 className={styles.itemTitle}>
                          {item.title}
                        </h3>

                        <div className={styles.details}>
                          <p className={styles.description}>
                            {item.description}
                          </p>

                          {item.href && (
                            <Button
                              href={item.href}
                              variant="light"
                              size="nav"
                              roll
                              arrow
                              aria-label={`${exploreLabel} ${item.title}`}
                              className="w-fit shrink-0 max-[380px]:w-full"
                            >
                              {exploreLabel}
                            </Button>
                          )}
                        </div>
                      </div>

                    </div>
                  </article>
                </li>
              )
            })}

            <li
              aria-hidden="true"
              className={styles.tail}
            />
          </ul>

        </div>
      </Wrapper.Body>
    </Section>
  )
}

export default HomeServices;