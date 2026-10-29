import { Link, useLocation } from 'react-router-dom'
import { Button, Reveal, Section, Wrapper } from '@/components'
import { cn } from '@/lib/utils'

import FooterGlyph from './FooterGlyph'
import { getCurrentYear, scrollToPageTop } from './Footer.helpers'
import {
  COMPANY_NAME,
  FOOTER_COLUMNS,
  FOOTER_CTA,
  FOOTER_DETAILS,
  FOOTER_SOCIAL_LINKS,
} from './Footer.config'
import type { FooterLink, FooterProps } from './Footer.types'

import styles from './Footer.module.css'

/* =========================================================
   LINK RENDERERS
========================================================= */

const isExternal = (href: string) => /^https?:\/\//.test(href)

/* Internal links use the router (no full page reload).
   Clicking a link to the page you are already on scrolls to the top. */

function FooterNavLink({ link }: { link: FooterLink }) {
  const { pathname } = useLocation()

  const content = (
    <>
      {link.label}

      {link.chevron && (
        <span
          aria-hidden="true"
          className={styles.chevron}
        >
          ›
        </span>
      )}
    </>
  )

  if (isExternal(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      to={link.href}
      className={styles.link}
      onClick={(event) => {
        if (link.href === pathname) {
          event.preventDefault()
          scrollToPageTop()
        }
      }}
    >
      {content}
    </Link>
  )
}

/* =========================================================
   FOOTER (CTA + SITE FOOTER IN ONE)
========================================================= */

function Footer({
  backdrop,
  companyName = COMPANY_NAME,
  cta = FOOTER_CTA,
  details = FOOTER_DETAILS,
  columns = FOOTER_COLUMNS,
  socialLinks = FOOTER_SOCIAL_LINKS,
  className = '',
  ...props
}: FooterProps) {
  const year = getCurrentYear()

  return (
    <Section
      as="footer"
      id="contact"
      spacing="none"
      className={cn(styles.footer, className)}
      {...props}
    >

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className={styles.top}>

        {backdrop && (
          <div
            aria-hidden="true"
            className={styles.backdrop}
          >
            <img
              src={backdrop}
              alt=""
              decoding="async"
              draggable={false}
              className={styles.backdropImage}
            />
          </div>
        )}

        {cta && (
          <Wrapper.Body className={cn(styles.container, styles.cta)}>
            <Reveal variant="slide">
              <h2 className={styles.ctaTitle}>
                {cta.title}
                {cta.highlight && (
                  <>
                    {' '}
                    <span className={styles.ctaHighlight}>
                      {cta.highlight}
                    </span>
                  </>
                )}
              </h2>
            </Reveal>

            {cta.subtitle && (
              <Reveal
                variant="fade"
                delay={100}
              >
                <p className={styles.ctaSubtitle}>
                  {cta.subtitle}
                </p>
              </Reveal>
            )}

            {cta.ctaHref && (
              <Reveal
                variant="fade"
                delay={200}
              >
                <Button
                  href={cta.ctaHref}
                  variant="light"
                  size="hero"
                  roll
                  arrow
                >
                  {cta.ctaLabel ?? "Let's Get Started"}
                </Button>
              </Reveal>
            )}
          </Wrapper.Body>
        )}

        {/* ===== LOGO GRAPHIC (CROPPED AT THE DIVIDER) ===== */}

        <div
          aria-hidden="true"
          className={styles.graphic}
        >
          <FooterGlyph className={styles.graphicGlyph} />
        </div>
      </div>

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div className={styles.lower}>

        {/* ===== BLURRED REFLECTION OF THE LOGO BELOW THE DIVIDER ===== */}

        <div
          aria-hidden="true"
          className={styles.reflection}
        >
          <FooterGlyph className={styles.reflectionGlyph} />
        </div>

        <Wrapper.Body className={cn(styles.container, styles.wrapper)}>

          {/* ===== MAIN: DETAILS + LINK COLUMNS ===== */}

          <div className={styles.main}>

            {details.length > 0 && (
              <dl className={styles.details}>
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className={styles.detail}
                  >
                    <dt className={styles.detailLabel}>
                      ({detail.label})
                    </dt>

                    <dd className={styles.detailValue}>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          {...(isExternal(detail.href)
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                        >
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {columns.length > 0 && (
              <div className={styles.columns}>
                {columns.map((column) => (
                  <nav
                    key={column.heading}
                    aria-label={column.heading}
                    className={styles.column}
                  >
                    <h3 className={styles.columnHeading}>
                      {column.heading}
                    </h3>

                    <ul
                      role="list"
                      className={styles.links}
                    >
                      {column.links.map((link) => (
                        <li key={`${link.href}-${link.label}`}>
                          <FooterNavLink link={link} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            )}

          </div>

          {/* ===== BRAND ROW ===== */}

          <div className={styles.brandRow}>
            <div className={styles.brand}>
              <FooterGlyph
                variant="solid"
                className={styles.logo}
              />

              <p className={styles.companyName}>
                {companyName}
              </p>
            </div>

            <Button
              variant="light"
              size="sm"
              roll
              arrow="up"
              className={styles.backToTop}
              onClick={scrollToPageTop}
            >
              Back to top
            </Button>
          </div>

          {/* ===== BOTTOM ROW ===== */}

          <div className={styles.bottom}>

            <p className={styles.copyright}>
              ©{year} {companyName}. All rights reserved.
            </p>

            {socialLinks.length > 0 && (
              <ul
                role="list"
                className={styles.socialLinks}
              >
                {socialLinks.map((link) => {
                  const SocialIcon = link.icon

                  return (
                    <li key={`${link.href}-${link.label}`}>
                      <a
                        href={link.href}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        <SocialIcon
                          aria-hidden="true"
                          size={20}
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}

          </div>
        </Wrapper.Body>
      </div>
    </Section>
  )
}

export default Footer;