import { Reveal, Section, Wrapper } from '@/components'
import { cn } from '@/lib/utils'

import { MISSION, REASONS } from './Careers.config'
import styles from './Careers.module.css'

function CareersMission() {
  return (
    <Section
      aria-labelledby="mission-heading"
      spacing="none"
      className={styles.section}
    >
      <Wrapper.Body className={styles.container}>

        <header className={styles.centerHeader}>
          <Reveal variant="slide">
            <h2 id="mission-heading" className={styles.h2}>
              {MISSION.title}
            </h2>
          </Reveal>

          <Reveal variant="slide" delay={100}>
            <p className={cn(styles.lead, styles.centerLead)}>
              {MISSION.subtitle}
            </p>
          </Reveal>
        </header>

        <ul role="list" className={styles.reasons}>
          {REASONS.map(({ title, text, icon: ReasonIcon }, index) => (
            <li key={title} className={styles.reasonItem}>
              <Reveal variant="slide" delay={(index % 3) * 100}>
                <div className={styles.reason}>
                  <span
                    aria-hidden="true"
                    className={cn(
                      styles.tile,
                      index < 3 ? styles.tilePink : styles.tileOrange
                    )}
                  >
                    <ReasonIcon size={26} />
                  </span>

                  <h3 className={styles.reasonTitle}>{title}</h3>
                  <p className={styles.reasonText}>{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

      </Wrapper.Body>
    </Section>
  )
}

export default CareersMission;