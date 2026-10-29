import { useState, type KeyboardEvent } from 'react'
import { Reveal, RevealCard, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import styles from './HomeWhyUs.module.css'
import type { HomeWhyUsProps } from './HomeWhyUs.types'

/* =========================================================
    WHY US
========================================================= */

function HomeWhyUs({
  eyebrow = 'Why Choose Us',
  title = 'Why people choose Spark Info-Tech.',
  items,
  className = '',
  ...props
}: HomeWhyUsProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'Escape') setOpenId(null)
  }

  return (
    <Section
      aria-labelledby="why-us-heading"
      spacing="none"
      className={cn(styles.section, className)}
      {...props}
    >
      <Wrapper.Body className={styles.container}>

        {/* =================================================
            HEADER
        ================================================= */}

        <Reveal variant="fade">
          <Text
            as="span"
            variant="label"
            className={styles.eyebrow}
          >
            ({eyebrow})
          </Text>
        </Reveal>

        <Reveal
          variant="slide"
          delay={100}
        >
          <h2
            id="why-us-heading"
            className={styles.title}
          >
            {title}
          </h2>
        </Reveal>

        {/* =================================================
            CARDS
        ================================================= */}

        <ul
          role="list"
          onKeyDown={handleKeyDown}
          className={styles.grid}
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              className={styles.item}
            >
              <Reveal
                variant="slide"
                delay={(index % 2) * 120}
              >
                <RevealCard
                  title={item.title}
                  index={index + 1}
                  lines={item.lines}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  tone={index % 2 === 0 ? 'violet' : 'sunset'}
                  open={openId === item.id}
                  onOpenChange={(next) =>
                    setOpenId((current) =>
                      next ? item.id : current === item.id ? null : current
                    )
                  }
                />
              </Reveal>
            </li>
          ))}
        </ul>

      </Wrapper.Body>
    </Section>
  )
}

export default HomeWhyUs;