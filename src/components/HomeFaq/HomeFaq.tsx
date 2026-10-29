import { useId, useState } from 'react'
import { Button, Reveal, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import styles from './HomeFAQ.module.css'
import type { HomeFAQProps } from './HomeFaq.types'

/* =========================================================
   HELPERS
========================================================= */

const pad = (value: number, length: number) =>
  String(value).padStart(length, '0')

/* =========================================================
   HOME FAQ (LANDING-PAGE TEASER OF THE FULL FAQ PAGE)
========================================================= */

function HomeFAQ({
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  subtitle,
  items,
  image,
  imageAlt = '',
  imageFit = 'cover',
  ctaTitle,
  ctaLabel,
  ctaHref,
  className = '',
  ...props
}: HomeFAQProps) {
  const baseId = useId()

  const [openId, setOpenId] = useState<string | null>(
    items[0]?.id ?? null
  )

  return (
    <Section
      aria-labelledby="faq-heading"
      spacing="none"
      className={cn(styles.section, className)}
      {...props}
    >
      <Wrapper.Body className={styles.container}>
        <div className={styles.layout}>

          {/* =================================================
              LEFT: EYEBROW + GRAPHIC
          ================================================= */}

          <div className={styles.aside}>
            <Reveal variant="fade">
              {eyebrow && (
                <Text
                  as="span"
                  variant="label"
                  color="muted"
                >
                  ({eyebrow})
                </Text>
              )}
            </Reveal>

            <Reveal
              variant="slide"
              delay={100}
              className={styles.graphicReveal}
            >
              <div className={styles.graphic}>
                {image ? (
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className={cn(
                      styles.image,
                      imageFit === 'contain' && styles.imageContain
                    )}
                  />
                ) : (
                  <>
                    <div
                      aria-hidden="true"
                      className={styles.dots}
                    />

                    <span
                      aria-hidden="true"
                      className={styles.mark}
                    >
                      ?
                    </span>
                  </>
                )}
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT: HEADING + QUESTIONS
          ================================================= */}

          <div className={styles.body}>

            <Reveal
              variant="slide"
              delay={100}
            >
              <h2
                id="faq-heading"
                className={styles.title}
              >
                {title}
              </h2>
            </Reveal>

            {subtitle && (
              <Reveal
                variant="fade"
                delay={160}
              >
                <p className={styles.subtitle}>
                  {subtitle}
                </p>
              </Reveal>
            )}

            <div className={styles.list}>
              {items.map((item, index) => {
                const isOpen = openId === item.id
                const questionId = `${baseId}-question-${item.id}`
                const answerId = `${baseId}-answer-${item.id}`

                return (
                  <Reveal
                    key={item.id}
                    variant="fade"
                    delay={index * 80}
                  >
                    <div
                      className={cn(
                        styles.item,
                        isOpen && styles.itemOpen
                      )}
                    >
                      <h3 className={styles.heading}>
                        <button
                          type="button"
                          id={questionId}
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() =>
                            setOpenId(isOpen ? null : item.id)
                          }
                          className={styles.trigger}
                        >
                          <Text
                            as="span"
                            variant="label"
                            className={styles.index}
                          >
                            ({pad(index + 1, 2)})
                          </Text>

                          <span className={styles.question}>
                            {item.question}
                          </span>

                          <span
                            aria-hidden="true"
                            className={styles.toggle}
                          />
                        </button>
                      </h3>

                      <div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        className={cn(
                          styles.panel,
                          isOpen && styles.panelOpen
                        )}
                      >
                        <div className={styles.panelInner}>
                          <div className={styles.answer}>
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {ctaTitle && ctaLabel && ctaHref && (
              <Reveal
                variant="fade"
                delay={200}
              >
                <div className={styles.prompt}>
                  <p className={styles.promptTitle}>
                    {ctaTitle}
                  </p>

                  <Button
                    href={ctaHref}
                    variant="dark"
                    size="lg"
                    roll
                    arrow
                    className="shrink-0"
                  >
                    {ctaLabel}
                  </Button>
                </div>
              </Reveal>
            )}

          </div>
        </div>
      </Wrapper.Body>
    </Section>
  )
}

export default HomeFAQ;