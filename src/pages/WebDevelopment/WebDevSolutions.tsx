import { useEffect, useRef } from 'react'

import { Reveal, Section, Wrapper } from '@/components'

import DemoButtons from './DemoButtons'
import { SOLUTIONS, SOLUTION_CARDS } from './WebDevelopment.config'
import styles from './WebDevelopment.module.css'

/* =========================================================
   HELPERS
========================================================= */

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

/* =========================================================
   WEB SOLUTIONS
========================================================= */

function WebDevSolutions() {
  const slotsRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    const slots = slotsRef.current

    if (slots.length < 2) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    let frame = 0

    const update = () => {
      frame = 0

      const rects = slots.map((slot) => slot.getBoundingClientRect())
      const stuck = slots.map(
        (slot) => parseFloat(getComputedStyle(slot).top) || 0
      )

      const arrival = slots.map((_, index) => {
        if (index === 0) return 0

        const bottomOfPrevious = stuck[index - 1] + rects[index - 1].height
        const travel = bottomOfPrevious - stuck[index]

        if (travel <= 0) return 0

        return clamp((bottomOfPrevious - rects[index].top) / travel)
      })

      slots.forEach((slot, index) => {
        let depth = 0

        for (let next = index + 1; next < slots.length; next += 1) {
          depth += arrival[next]
        }

        slot.style.setProperty('--depth', depth.toFixed(3))
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)

      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <Section
      id="web-solutions"
      aria-labelledby="solutions-heading"
      spacing="none"
      className={styles.section}
    >
      <Wrapper.Body className={styles.container}>
        <div className={styles.solutions}>

          <div className={styles.solutionsText}>
            <Reveal variant="slide">
              <h2 id="solutions-heading" className={styles.h2}>
                {SOLUTIONS.title}
              </h2>
            </Reveal>

            <Reveal variant="slide" delay={100}>
              <p className={styles.lead}>{SOLUTIONS.subtitle}</p>
            </Reveal>

            <Reveal variant="fade" delay={200}>
              <DemoButtons />
            </Reveal>
          </div>

          <ol role="list" className={styles.cards}>
            {SOLUTION_CARDS.map(({ title, text, icon: CardIcon }, index) => (
              <li
                key={title}
                ref={(element) => {
                  if (element) slotsRef.current[index] = element
                }}
                className={styles.cardSlot}
              >
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardIndex}>
                      ({String(index + 1).padStart(2, '0')})
                    </span>

                    <span aria-hidden="true" className={styles.cardDot} />
                  </div>

                  <span aria-hidden="true" className={styles.cardTile}>
                    <CardIcon size={22} />
                  </span>

                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardText}>{text}</p>
                </article>
              </li>
            ))}
          </ol>

        </div>
      </Wrapper.Body>
    </Section>
  )
}

export default WebDevSolutions;