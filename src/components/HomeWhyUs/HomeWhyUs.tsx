import { useState, type KeyboardEvent } from 'react'
import { Reveal, RevealCard, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import styles from './HomeWhyUs.module.css'
import type { HomeWhyUsProps } from './HomeWhyUs.types'

/* =========================================================
   HOME WHY US
========================================================= */

function HomeWhyUs({
  eyebrow = 'Why Choose Us',
  title = 'What Makes Us Different',
  subtitle = 'We combine clean engineering, thoughtful design, and hands-on collaboration to build products that actually move your business forward.',
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

        <header className={styles.header}>
          <Reveal variant="fade">
            <Text
              as="span"
              variant="label"
              className={styles.eyebrow}
            >
              ({eyebrow})
            </Text>
          </Reveal>

          <div className={styles.headline}>
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

            {subtitle && (
              <Reveal
                variant="slide"
                delay={200}
              >
                <p className={styles.subtitle}>
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        </header>

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