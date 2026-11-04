import { Button, Reveal, Section, Wrapper } from '@/components'

import { CTA, getApplyHref } from './Careers.config'
import styles from './Careers.module.css'

function CareersCta() {
  return (
    <Section
      aria-labelledby="careers-cta-heading"
      spacing="none"
      className={styles.ctaSection}
    >
      <Wrapper.Body className={styles.container}>
        <Reveal variant="slide">
          <div className={styles.ctaCard}>
            <h2 id="careers-cta-heading" className={styles.ctaTitle}>
              {CTA.title}
            </h2>

            <p className={styles.ctaText}>{CTA.text}</p>

            <Button
              href={getApplyHref()}
              variant="light"
              size="hero"
              roll
              className="w-fit"
            >
              {CTA.ctaLabel}
            </Button>
          </div>
        </Reveal>
      </Wrapper.Body>
    </Section>
  )
}

export default CareersCta;