import { lazy, Suspense, useEffect, useRef } from 'react'
import { useLenis } from 'lenis/react'
import { Button, Reveal, Roll, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import styles from './HomeHero.module.css'
import type { HomeHeroProps, HomeHeroVideo } from './HomeHero.types'


/* =========================================================
   LAZY BACKDROP
========================================================= */

const GradientBackdrop = lazy(() => import('./GradientBackdrop'))


/* =========================================================
   CONSTANTS
========================================================= */

const MINIFY_END = 0.8


/* =========================================================
   HELPERS
========================================================= */

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

const smoothstep = (t: number) => t * t * (3 - 2 * t)


/* =========================================================
   HERO VIDEO
========================================================= */

function HomeHeroMedia({ video }: { video: HomeHeroVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const element = videoRef.current

    if (!element) return

    element.muted = true

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void element.play().catch(() => {})
        } else {
          element.pause()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.media}>
      <video
        ref={videoRef}
        className={styles.video}
        poster={video.poster}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={video.src} type="video/webm" />

        {video.fallbackSrc && (
          <source src={video.fallbackSrc} type="video/mp4" />
        )}
      </video>
    </div>
  )
}


/* =========================================================
   HOME HERO
========================================================= */

function HomeHero({
  eyebrow,
  headline,
  subtitle,
  ctaLabel,
  ctaHref = '#contact',
  scrollTargetId,
  wordmarkImage,
  video,
  className = '',
  ...props
}: HomeHeroProps) {
  const lenis = useLenis()
  const stageRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  const [firstWord, ...otherWords] = headline.split(' ')
  const lastWords = otherWords.join(' ')

  /* =======================================================
     SCROLL-LINKED MINIFY + BACKDROP VISIBILITY TOGGLE
  ======================================================= */

  useEffect(() => {
    const stage = stageRef.current
    const sticky = stickyRef.current

    if (!stage || !sticky) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    let frame = 0

    const update = () => {
      frame = 0

      const distance = stage.offsetHeight - sticky.offsetHeight
      const top = stage.getBoundingClientRect().top
      const progress = distance > 0 ? clamp(-top / distance) : 0

      const minify = smoothstep(clamp(progress / MINIFY_END))

      stage.style.setProperty('--minify', minify.toFixed(4))

      // Completely hide WebGL canvas via visibility when at the top to prevent leaks
      const backdropEl = stage.querySelector(`.${styles.backdrop}`) as HTMLElement
      if (backdropEl) {
        backdropEl.style.visibility = minify > 0.001 ? 'visible' : 'hidden'
      }
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

  const handleScroll = () => {
    if (!scrollTargetId) return

    const target = document.getElementById(scrollTargetId)

    if (!target) return

    if (lenis) {
      lenis.scrollTo(target)
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div
      ref={stageRef}
      className={styles.stage}
    >
      <div
        ref={stickyRef}
        className={styles.sticky}
      >

        {/* =================================================
            BACKDROP (SHADER GRADIENT)
        ================================================= */}

        <div
          aria-hidden="true"
          className={styles.backdrop}
        >
          <Suspense fallback={null}>
            <GradientBackdrop />
          </Suspense>
        </div>

        {/* =================================================
            HERO CARD
        ================================================= */}

        <Section
          spacing="none"
          className={cn(styles.card, className)}
          {...props}
        >
          <Wrapper.Body className={styles.wrapper}>

            {/* META ROW */}

            <Reveal variant="fade">
              <div className={styles.meta}>
                {eyebrow ? (
                  <Text
                    as="span"
                    variant="label"
                    color="muted"
                    className={styles.eyebrow}
                  >
                    <span
                      aria-hidden="true"
                      className={styles.eyebrowDot}
                    />
                    ({eyebrow})
                  </Text>
                ) : (
                  <span />
                )}

                {scrollTargetId && (
                  <button
                    type="button"
                    data-roll
                    onClick={handleScroll}
                    className={styles.scrollButton}
                  >
                    <Text
                      as="span"
                      variant="label"
                      color="muted"
                      className={styles.scrollLabel}
                    >
                      <Roll>(Scroll Down)</Roll>
                    </Text>

                    <span
                      aria-hidden="true"
                      className={styles.scrollArrow}
                    >
                      ↓
                    </span>
                  </button>
                )}
              </div>
            </Reveal>

            {/* WORDMARK */}

            <Reveal
              variant="slide"
              delay={100}
            >
              <h1
                aria-label={headline}
                className={styles.headline}
              >
                <span aria-hidden="true">{firstWord}</span>

                {wordmarkImage && (
                  <img
                    src={wordmarkImage}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className={styles.headlineLogo}
                  />
                )}

                {lastWords && (
                  <span aria-hidden="true">{lastWords}</span>
                )}
              </h1>
            </Reveal>

            {/* SUBTITLE + CTA */}

            {(subtitle || ctaLabel) && (
              <Reveal
                variant="fade"
                delay={250}
              >
                <div className={styles.bottomRow}>
                  {subtitle ? (
                    <Text
                      as="p"
                      variant="body"
                      color="muted"
                      className={styles.subtitle}
                    >
                      {subtitle}
                    </Text>
                  ) : (
                    <span />
                  )}

                  {ctaLabel && (
                    <Button
                      href={ctaHref}
                      variant="dark"
                      size="hero"
                      roll
                      arrow
                      className="w-fit"
                    >
                      {ctaLabel}
                    </Button>
                  )}
                </div>
              </Reveal>
            )}

          </Wrapper.Body>

          {/* VIDEO */}

          {video && (
            <Reveal
              variant="fade"
              delay={400}
              className={styles.mediaReveal}
            >
              <HomeHeroMedia video={video} />
            </Reveal>
          )}
        </Section>

      </div>
    </div>
  )
}

export default HomeHero;