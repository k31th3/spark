import { LuCheck } from 'react-icons/lu'

import { Reveal, Section, Wrapper } from '@/components'

import Media from './Media'
import { WHY } from './WebDevelopment.config'
import styles from './WebDevelopment.module.css'

function WebDevWhy() {
  return (
    <Section
      aria-labelledby="why-heading"
      spacing="none"
      className={styles.section}
    >
      <Wrapper.Body className={styles.container}>
        <div className={styles.whyGrid}>

          <Reveal variant="slide">
            <div className={styles.whyPanel}>
              <Media src={WHY.image} alt={WHY.imageAlt} />
            </div>
          </Reveal>

          <div className={styles.whyText}>
            <Reveal variant="fade">
              <span className={styles.eyebrow}>({WHY.eyebrow})</span>
            </Reveal>

            <Reveal variant="slide" delay={100}>
              <h2 id="why-heading" className={styles.h2}>
                {WHY.title}
              </h2>
            </Reveal>

            <Reveal variant="slide" delay={200}>
              <p className={styles.lead}>{WHY.text}</p>
            </Reveal>

            <Reveal variant="slide" delay={300}>
              <ul role="list" className={styles.points}>
                {WHY.points.map((point) => (
                  <li key={point} className={styles.point}>
                    <span aria-hidden="true" className={styles.check}>
                      <LuCheck size={14} strokeWidth={2.5} />
                    </span>

                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

        </div>
      </Wrapper.Body>
    </Section>
  )
}

export default WebDevWhy;