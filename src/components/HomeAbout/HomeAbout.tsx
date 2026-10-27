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
const READ_END = 0.4

/* =========================================================
   HELPERS
========================================================= */

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

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
  video,
  className = '',
  ...props
}: HomeAboutProps) {
  const storyRef = useRef<HTMLDivElement>(null)

  const story = useMemo(() => buildStory(paragraphs), [paragraphs])

  /* =======================================================
     SCROLL-LINKED HIGHLIGHT
  ======================================================= */

  useEffect(() => {
    const element = storyRef.current

    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      element.style.setProperty('--progress', '1')
      return
    }

    let frame = 0

    const update = () => {
      frame = 0

      const { top, height } = element.getBoundingClientRect()
      const viewport = window.innerHeight

      const start = viewport * READ_START
      const end = viewport * READ_END

      const progress = clamp((start - top) / (height + start - end))

      element.style.setProperty('--progress', progress.toFixed(4))
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

        <div className={styles.story}>

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

          <div className={styles.content}>
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
              style={{ '--total': story.total } as CSSProperties}
            >
              {story.paragraphs.map((lines, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className={styles.paragraph}
                >
                  {lines.map((tokens, lineIndex) => (
                    <Fragment key={lineIndex}>
                      {tokens.map((token, tokenIndex) =>
                        token.kind === 'space' ? (
                          token.text
                        ) : (
                          <span
                            key={tokenIndex}
                            className={styles.word}
                            style={
                              { '--i': token.index } as CSSProperties
                            }
                          >
                            {renderWithEmoji(token.text, {
                              emoji: styles.emoji,
                              image: styles.emojiImage,
                            })}
                          </span>
                        )
                      )}

                      {lineIndex < lines.length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* =================================================
            BENTO (VIDEO ONLY FOR NOW, MORE CARDS COME LATER)
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