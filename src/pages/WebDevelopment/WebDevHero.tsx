import { useLenis } from 'lenis/react'

import { Reveal, Roll, Section, Wrapper } from '@/components'

import DemoButtons from './DemoButtons'
import Media from './Media'
import { FEATURES, HERO } from './WebDevelopment.config'
import styles from './WebDevelopment.module.css'

function WebDevHero() {
  const lenis = useLenis()

  const scrollDown = () => {
    const target = document.getElementById('web-solutions')

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
    <Section spacing="none" className={styles.hero}>
      <Wrapper.Body className={styles.container}>

        <Reveal variant="fade">
          <div className={styles.meta}>
            <span className={styles.eyebrow}>({HERO.eyebrow})</span>

            <button
              type="button"
              data-roll
              onClick={scrollDown}
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

        <Reveal variant="fade" delay={200}>
          <p className={styles.subtitle}>{HERO.subtitle}</p>
        </Reveal>

        <Reveal variant="fade" delay={300}>
          <DemoButtons className={styles.heroButtons} />
        </Reveal>

        <Reveal variant="slide" delay={350}>
          <div className={styles.heroImage}>
            <Media src={HERO.image} alt={HERO.imageAlt} />
          </div>
        </Reveal>

        {/* ===== FEATURES ===== */}

        <ul role="list" className={styles.features}>
          {FEATURES.map(({ title, text, icon: FeatureIcon }, index) => (
            <li key={title} className={styles.feature}>
              <Reveal variant="slide" delay={index * 100}>
                <div className={styles.featureBody}>
                  <span aria-hidden="true" className={styles.tile}>
                    <FeatureIcon size={20} />
                  </span>

                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureText}>{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

      </Wrapper.Body>
    </Section>
  )
}

export default WebDevHero;