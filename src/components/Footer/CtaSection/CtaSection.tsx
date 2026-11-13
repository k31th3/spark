import { useLocation } from 'react-router-dom'
import { Button, Reveal, Section, Wrapper } from '@/components'
import { cn } from '@/lib/utils'

import { FOOTER_CTA } from '../Footer.config'
import type { CtaSectionProps } from '../Footer.types'

import styles from './CtaSection.module.css'

/* =========================================================
   CTA SECTION (LAST SECTION OF A PAGE, SITS ABOVE THE FOOTER)
========================================================= */

function CtaSection({
  cta = FOOTER_CTA,
  className = '',
  ...props
}: CtaSectionProps) {
  const { pathname } = useLocation()

  return (
    <Section
      id="contact"
      aria-labelledby="cta-heading"
      spacing="none"
      className={cn(styles.section, className)}
      {...props}
    >
      <Wrapper.Body className={styles.container}>
        <Reveal variant="slide">
          <div className={styles.card}>
            <h2 id="cta-heading" className={styles.title}>
              {cta.title}
              {cta.highlight && ` ${cta.highlight}`}
            </h2>

            {cta.subtitle && (
              <p className={styles.text}>{cta.subtitle}</p>
            )}

            {cta.ctaHref && cta.ctaHref !== pathname && (
              <Button
                href={cta.ctaHref}
                variant="light"
                size="hero"
                roll
                className="w-fit"
              >
                {cta.ctaLabel ?? "Let's Get Started"}
              </Button>
            )}
          </div>
        </Reveal>
      </Wrapper.Body>
    </Section>
  )
}

export default CtaSection;