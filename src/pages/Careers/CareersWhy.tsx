import { Button, Reveal, Section, Wrapper } from '@/components'

import { WHY, WHY_PHOTO, getApplyHref } from './Careers.config'
import Photo from './Photo'
import styles from './Careers.module.css'

function CareersWhy() {
  return (
    <Section
      id="why-work-with-us"
      aria-labelledby="why-heading"
      spacing="none"
      className={styles.section}
    >
      <Wrapper.Body className={styles.container}>
        <div className={styles.whyGrid}>

          <Reveal variant="slide">
            <div className={styles.whyPhoto}>
              <Photo {...WHY_PHOTO} natural />
            </div>
          </Reveal>

          <div className={styles.whyText}>
            <Reveal variant="fade">
              <span className={styles.eyebrow}>({WHY.eyebrow})</span>
            </Reveal>

            <Reveal variant="slide" delay={100}>
              <h2 id="why-heading" className={styles.h2}>
                {WHY.title[0]}
                <br />
                {WHY.title[1]}
              </h2>
            </Reveal>

            <Reveal variant="slide" delay={200}>
              <div className={styles.paragraphs}>
                {WHY.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.lead}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal variant="fade" delay={300}>
              <Button
                href={getApplyHref()}
                variant="brand"
                size="hero"
                roll
                className="w-fit"
              >
                {WHY.ctaLabel}
              </Button>
            </Reveal>
          </div>

        </div>
      </Wrapper.Body>
    </Section>
  )
}

export default CareersWhy;