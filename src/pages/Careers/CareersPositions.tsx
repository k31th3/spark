import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Button, Reveal, Section, Wrapper } from '@/components'

import {
  CATEGORIES,
  CATEGORY_ICONS,
  JOBS,
  POSITIONS,
  RESUME_HREF,
  getApplyHref,
} from './Careers.config'
import type { JobCategory } from './Careers.types'
import styles from './Careers.module.css'

type Filter = 'All' | JobCategory

const FILTERS: Filter[] = ['All', ...CATEGORIES]

/* =========================================================
   OPEN POSITIONS
========================================================= */

function CareersPositions() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const [filter, setFilter] = useState<Filter>('All')
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const jobs = useMemo(
    () =>
      filter === 'All'
        ? JOBS
        : JOBS.filter((job) => job.category === filter),
    [filter]
  )

  const update = useCallback(() => {
    const element = scrollerRef.current

    if (!element) return

    setCanPrev(element.scrollLeft > 4)
    setCanNext(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 4
    )
  }, [])

  useEffect(() => {
    const element = scrollerRef.current

    if (!element) return

    element.scrollTo({ left: 0 })
    update()

    const observer = new ResizeObserver(update)

    observer.observe(element)

    return () => observer.disconnect()
  }, [jobs, update])

  const scrollByCard = (direction: 1 | -1) => {
    const element = scrollerRef.current

    if (!element) return

    const card = element.querySelector('li')
    const step = (card?.getBoundingClientRect().width ?? 320) + 16

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    element.scrollBy({
      left: direction * step,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <Section
      id="open-positions"
      aria-labelledby="positions-heading"
      spacing="none"
      className={styles.section}
    >
      <Wrapper.Body
        className={`${styles.container} ${styles.positionsContainer}`}
      >

        {/* =================================================
            HEADER + FILTERS
        ================================================= */}

        <header className={styles.positionsHeader}>
          <div className={styles.positionsTitle}>
            <Reveal variant="slide">
              <h2 id="positions-heading" className={styles.h2}>
                {POSITIONS.title}
              </h2>
            </Reveal>

            <Reveal variant="slide" delay={100}>
              <p className={styles.lead}>{POSITIONS.subtitle}</p>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={150}>
            <div
              role="group"
              aria-label="Filter positions by department"
              className={styles.chips}
            >
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                  className={styles.chip}
                >
                  {item}
                </button>
              ))}
            </div>
          </Reveal>
        </header>

        {/* =================================================
            JOBS
        ================================================= */}

        {jobs.length > 0 ? (
          <>
            <div
              ref={scrollerRef}
              role="region"
              aria-label="Open positions"
              tabIndex={0}
              onScroll={update}
              className={styles.scroller}
            >
              <ul role="list" className={styles.jobs}>
                {jobs.map((job) => {
                  const JobIcon = CATEGORY_ICONS[job.category]

                  return (
                    <li key={job.id} className={styles.job}>
                      <div className={styles.jobTop}>
                        <span
                          aria-hidden="true"
                          className={styles.jobIcon}
                        >
                          <JobIcon size={26} />
                        </span>

                        <div className={styles.jobInfo}>
                          <h3 className={styles.jobTitle}>{job.title}</h3>

                          <p className={styles.jobMeta}>
                            {job.type} - {job.location}
                          </p>
                        </div>

                        <Button
                          href={getApplyHref(job.title)}
                          aria-label={`Apply for ${job.title}`}
                          variant="light"
                          size="sm"
                          roll
                          className={styles.apply}
                        >
                          Apply Now
                        </Button>
                      </div>

                      {job.salary && (
                        <p className={styles.salary}>{job.salary}</p>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className={styles.arrows}>
              <button
                type="button"
                aria-label="Previous positions"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className={styles.arrow}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next positions"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className={styles.arrow}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>
              No open {filter.toLowerCase()} roles right now.
            </p>

            <p className={styles.emptyText}>
              We are always happy to hear from talented people.{' '}
              <a href={RESUME_HREF} className={styles.emptyLink}>
                Send us your resume
              </a>{' '}
              and we will keep you in mind.
            </p>
          </div>
        )}

      </Wrapper.Body>
    </Section>
  )
}

export default CareersPositions;