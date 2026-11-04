import { LuBriefcase } from 'react-icons/lu'
import { useLenis } from 'lenis/react'

import { Button, Reveal, Roll, Section, Wrapper } from '@/components'

import { HERO, HERO_PHOTOS } from './Careers.config'
import Photo from './Photo'
import styles from './Careers.module.css'

/* =========================================================
   STRIP
========================================================= */

const STRIP = [4, 0, 1, 2, 3, 4, 0]

/* =========================================================
   HERO
========================================================= */

function CareersHero() {
  const lenis = useLenis()

  const goTo = (id: string) => (event: { preventDefault: () => void }) => {
    const target = document.getElementById(id)

    if (!target) return

    event.preventDefault()

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
    <Section spacing="none" className={styles.hero}>
      <Wrapper.Body className={styles.container}>

        <Reveal variant="fade">
          <div className={styles.meta}>
            <span className={styles.eyebrow}>({HERO.eyebrow})</span>

            <button
              type="button"
              data-roll
              onClick={goTo('why-work-with-us')}
              className={styles.scrollButton}
            >
              <span className={styles.scrollLabel}>
                <Roll>(Scroll Down)</Roll>
              </span>

              <span aria-hidden="true" className={styles.scrollArrow}>
                ↓
              </span>
            </button>
          </div>
        </Reveal>

        <Reveal variant="slide" delay={100}>
          <h1 className={styles.title}>{HERO.title}</h1>
        </Reveal>

        <Reveal variant="fade" delay={250}>
          <div className={styles.heroCta}>
            <Button
              href="#open-positions"
              onClick={goTo('open-positions')}
              variant="dark"
              size="hero"
              roll
              glow
              icon={<LuBriefcase size={16} />}
            >
              {HERO.ctaLabel}
            </Button>
          </div>
        </Reveal>

      </Wrapper.Body>

      {/* ===== PHOTO STRIP (ZIGZAG, FULL BLEED) ===== */}

      <Reveal variant="fade" delay={350}>
        <div className={styles.strip}>
          <div className={styles.track}>
            {STRIP.map((photoIndex, position) => (
              <div key={position} className={styles.stripCard}>
                <Photo
                  {...HERO_PHOTOS[photoIndex]}
                  decorative
                  eager={position > 0 && position < 6}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default CareersHero