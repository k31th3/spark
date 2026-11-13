import { Link, useLocation } from 'react-router-dom'
import { Button, Reveal, Section, Wrapper } from '@/components'
import { cn } from '@/lib/utils'

import FooterGlyph from './FooterGlyph'
import { getCurrentYear, scrollToPageTop } from './Footer.helpers'
import {
  COMPANY_NAME,
  FOOTER_COLUMNS,
  FOOTER_DETAILS,
  FOOTER_SOCIAL_LINKS,
} from './Footer.config'
import type { FooterLink, FooterProps } from './Footer.types'

import styles from './Footer.module.css'

/* =========================================================
   LINK RENDERERS
========================================================= */

const isExternal = (href: string) => /^https?:\/\//.test(href)

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
   FOOTER
========================================================= */

function Footer({
  companyName = COMPANY_NAME,
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
      spacing="none"
      className={cn(styles.footer, className)}
      {...props}
    >
      <Wrapper.Body className={cn(styles.container, styles.wrapper)}>

        {/* ===== MAIN: DETAILS + LINK COLUMNS ===== */}

        <div className={styles.main}>

          {details.length > 0 && (
            <dl className={styles.details}>
              {details.map((detail, index) => (
                <Reveal
                  key={detail.label}
                  variant="slide"
                  delay={index * 100}
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
                </Reveal>
              ))}
            </dl>
          )}

          {columns.length > 0 && (
            <div className={styles.columns}>
              {columns.map((column, index) => (
                <Reveal
                  key={column.heading}
                  variant="slide"
                  delay={150 + index * 100}
                  className={styles.column}
                >
                  <nav aria-label={column.heading}>
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
                </Reveal>
              ))}
            </div>
          )}

        </div>

        {/* ===== BRAND ROW ===== */}

        <Reveal
          variant="fade"
          delay={100}
          className={styles.brandRow}
        >
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
        </Reveal>

        {/* ===== BOTTOM ROW ===== */}

        <Reveal
          variant="fade"
          delay={150}
          className={styles.bottom}
        >

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

        </Reveal>
      </Wrapper.Body>
    </Section>
  )
}

export default Footer;