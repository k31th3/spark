import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Reveal, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import type { HomeAboutProps, HomeAboutVideo } from './HomeAbout.types'
import { buildStory, renderWithEmoji } from './HomeAbout.helpers'
import styles from './HomeAbout.module.css'

/* =========================================================
   CONSTANTS
========================================================= */
const READ_START = 0.7
const READ_END = 0.6

const FADE_SPAN = 0.4

const FINALE_OVERLAP = `${((FADE_SPAN - READ_END) * 100).toFixed(2)}vh`

const WORD_SPAN = 6

const LEAD_EXTRA_DOTS = 2

const TRAILING_DOTS = /[.…]+$/u

/* =========================================================
   HELPERS
========================================================= */

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

const normalize = (text: string) =>
  text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')

/* =========================================================
   VIDEO CARD
========================================================= */

function VideoCard({ video }: { video: HomeAboutVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const userPausedRef = useRef(false)
  const autoPausedRef = useRef(false)
  const [playing, setPlaying] = useState(false)

  const label = video.label ?? 'Play video'

  useEffect(() => {
    const element = videoRef.current

    if (!element) return

    element.muted = true

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduceMotion && !userPausedRef.current) {
            void element.play().catch(() => {})
          }

          return
        }

        if (!element.paused) {
          autoPausedRef.current = true
          element.pause()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handlePlay = () => {
    userPausedRef.current = false
    setPlaying(true)
  }

  const handlePause = () => {
    setPlaying(false)

    if (autoPausedRef.current) {
      autoPausedRef.current = false
      return
    }

    userPausedRef.current = true
  }

  const handleOverlayClick = () => {
    const element = videoRef.current

    if (!element) return

    userPausedRef.current = false

    void element
      .play()
      .then(() => element.focus())
      .catch(() => {})
  }

  return (
    <div
      className={styles.videoCard}
      style={
        video.aspectRatio
          ? ({ '--video-aspect': video.aspectRatio } as CSSProperties)
          : undefined
      }
    >
      <video
        ref={videoRef}
        className={styles.video}
        poster={video.poster}
        src={video.src}
        preload="metadata"
        playsInline
        loop
        controls
        aria-label={label}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {!playing && (
        <button
          type="button"
          aria-label={label}
          data-cursor-label="Play"
          onClick={handleOverlayClick}
          className={styles.play}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.playIcon}
          >
            <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.1-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
          </svg>
        </button>
      )}
    </div>
  )
}

/* =========================================================
   HOME ABOUT
========================================================= */

function HomeAbout({
  eyebrow = 'About Us',
  label,
  paragraphs,
  finale: finaleWord = 'Possibilities',
  video,
  className = '',
  ...props
}: HomeAboutProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const runwayRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  const story = useMemo(() => buildStory(paragraphs), [paragraphs])

  /* =======================================================
     FINALE
  ======================================================= */

  const finale = useMemo(() => {
    const words = story.paragraphs
      .flat(2)
      .filter((token) => token.kind === 'word')

    if (words.length === 0) return null

    const wanted = normalize(finaleWord)

    const match = [...words]
      .reverse()
      .find((token) => normalize(token.text) === wanted)

    const startIndex = match
      ? match.index
      : words[words.length - 1].index

    const lead = words.find((token) => token.index === startIndex - 1)

    return {
      startIndex,
      words: words.filter((token) => token.index >= startIndex),
      leadDots: Boolean(lead && TRAILING_DOTS.test(lead.text)),
    }
  }, [story, finaleWord])

  const total = finale
    ? finale.startIndex + (finale.leadDots ? LEAD_EXTRA_DOTS : 0)
    : story.total

  const leadFrom = finale
    ? clamp((finale.startIndex - 1 + WORD_SPAN) / (total + WORD_SPAN))
    : 1

  /* =======================================================
     SCROLL-LINKED: HIGHLIGHT, FADE, GRADIENT
  ======================================================= */

  useEffect(() => {
    const root = rootRef.current
    const content = contentRef.current
    const story = storyRef.current

    if (!root || !content || !story) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      content.style.setProperty('--progress', '1')
      root.style.setProperty('--fade', '0')
      runwayRef.current?.style.setProperty('--gradient', '1')
      return
    }

    let frame = 0

    const update = () => {
      frame = 0

      const viewport = window.innerHeight

      const { top, height } = story.getBoundingClientRect()

      const start = viewport * READ_START
      const end = viewport * READ_END

      const progress = clamp((start - top) / (height + start - end))

      content.style.setProperty('--progress', progress.toFixed(4))

      const bottom = top + height
      const fade = clamp((end - bottom) / (viewport * FADE_SPAN))

      root.style.setProperty('--fade', fade.toFixed(4))

      const runway = runwayRef.current
      const stage = stageRef.current

      if (!runway || !stage) return

      const rect = runway.getBoundingClientRect()
      const travel = rect.height - stage.offsetHeight
      const gradient = travel > 0 ? clamp(-rect.top / travel) : 1

      runway.style.setProperty('--gradient', gradient.toFixed(4))
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
      aria-labelledby="about-heading"
      spacing="none"
      className={cn(styles.section, className)}
      {...props}
    >
      <Wrapper.Body className={styles.container}>

        {/* =================================================
            STORY (LEFT STICKS, RIGHT SCROLLS)
        ================================================= */}

        <div ref={rootRef} className={styles.story}>

          <div className={styles.rail}>
            <Reveal variant="fade">
              <h2
                id="about-heading"
                className={styles.eyebrow}
              >
                ({eyebrow})
              </h2>
            </Reveal>
          </div>

          <div
            ref={contentRef}
            className={styles.content}
            style={
              {
                '--total': total,
                '--span': WORD_SPAN,
                '--lead-from': leadFrom.toFixed(4),
              } as CSSProperties
            }
          >
            {label && (
              <Reveal variant="fade">
                <Text
                  as="span"
                  variant="label"
                  color="muted"
                  className={styles.label}
                >
                  {label}
                </Text>
              </Reveal>
            )}

            <div
              ref={storyRef}
              className={styles.paragraphs}
            >
              {story.paragraphs.map((lines, paragraphIndex) => {
                const visible = (token: (typeof lines)[number][number]) =>
                  token.kind !== 'word' ||
                  !finale ||
                  token.index < finale.startIndex

                if (!lines.some((tokens) => tokens.some((t) => t.kind === 'word' && visible(t)))) {
                  return null
                }

                return (
                  <p
                    key={paragraphIndex}
                    className={styles.paragraph}
                  >
                    {lines.map((tokens, lineIndex) => (
                      <Fragment key={lineIndex}>
                        {tokens.map((token, tokenIndex) => {
                          if (!visible(token)) return null

                          if (token.kind === 'space') return token.text

                          const isLead =
                            finale?.leadDots &&
                            token.index === finale.startIndex - 1

                          return (
                            <Fragment key={tokenIndex}>
                              <span
                                className={styles.word}
                                style={
                                  { '--i': token.index } as CSSProperties
                                }
                              >
                                {renderWithEmoji(
                                  isLead
                                    ? token.text.replace(TRAILING_DOTS, '')
                                    : token.text,
                                  {
                                    emoji: styles.emoji,
                                    image: styles.emojiImage,
                                  }
                                )}
                                {isLead && '.'}
                              </span>

                              {isLead &&
                                Array.from({ length: LEAD_EXTRA_DOTS }, (_, n) => (
                                  <span
                                    key={n}
                                    aria-hidden="true"
                                    className={styles.dot}
                                    style={
                                      {
                                        '--i': finale.startIndex + n,
                                        '--n': n,
                                      } as CSSProperties
                                    }
                                  >
                                    .
                                  </span>
                                ))}
                            </Fragment>
                          )
                        })}

                        {lineIndex < lines.length - 1 && <br />}
                      </Fragment>
                    ))}
                  </p>
                )
              })}
            </div>
          </div>

          {/* ===============================================
              FINALE
          =============================================== */}

          {finale && (
            <div
              ref={runwayRef}
              className={styles.finaleRunway}
              style={{ '--overlap': FINALE_OVERLAP } as CSSProperties}
            >
              <div ref={stageRef} className={styles.finale}>
                <span className={styles.finaleWord}>
                  {finale.words.map((token, index) => (
                    <Fragment key={token.index}>
                      {index > 0 && ' '}

                      {renderWithEmoji(token.text, {
                        emoji: styles.emoji,
                        image: styles.emojiImage,
                      })}
                    </Fragment>
                  ))}

                  <span
                    aria-hidden="true"
                    className={cn(styles.finaleLayer, 'text-gradient')}
                  >
                    {finale.words.map((token, index) => (
                      <Fragment key={token.index}>
                        {index > 0 && ' '}

                        {renderWithEmoji(token.text, {
                          emoji: styles.emoji,
                          image: styles.emojiImage,
                        })}
                      </Fragment>
                    ))}
                  </span>
                </span>
              </div>
            </div>
          )}

        </div>

        {/* =================================================
            BENTO
        ================================================= */}

        {video && (
          <div className={styles.bento}>
            <Reveal
              variant="slide"
              delay={100}
            >
              <VideoCard video={video} />
            </Reveal>
          </div>
        )}

      </Wrapper.Body>
    </Section>
  )
}

export default HomeAbout;