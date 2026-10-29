import { FaDiscord, FaLinkedin } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

import type {
  FooterColumn,
  FooterCta,
  FooterDetail,
  SocialLink,
} from './Footer.types'

/* =========================================================
   COMPANY NAME
========================================================= */

export const COMPANY_NAME = 'The Spark Info-Tech Enterprise'

/* =========================================================
   CTA
========================================================= */

export const FOOTER_CTA: FooterCta = {
  title: 'So... SIT with',
  highlight: 'us?',
  subtitle:
    'Tell us about your software or hardware project and we will get back to you within one business day.',
  ctaLabel: "Let's Get Started",
  ctaHref: '/contact-us',
}

/* =========================================================
   CONTACT DETAILS
========================================================= */

const EMAIL: string =
  import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@getsitgo.com'

const ADDRESS: string =
  import.meta.env.VITE_CONTACT_ADDRESS ??
  '700 Simkimban Bldg. Brgy. Valenzuela, Makati City, 1208, NCR'

const PHONE: string =
  import.meta.env.VITE_CONTACT_PHONE ?? '(+63) 9945-16-7890'

const MAP_LINK: string | undefined = import.meta.env.VITE_CONTACT_GOOGLE_MAP

export const FOOTER_DETAILS: FooterDetail[] = [
  { label: 'Direct Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'Office', value: ADDRESS, href: MAP_LINK },
  {
    label: 'Phone',
    value: PHONE,
    href: `tel:${PHONE.replace(/[^\d+]/g, '')}`,
  },
]

/* =========================================================
   LINK COLUMNS
========================================================= */

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/', chevron: true },
      { label: 'Careers', href: '/careers', chevron: true },
      { label: 'Contact Us', href: '/contact-us', chevron: true },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Web development', href: '/web-development' },
      { label: 'IT Services', href: '/it-services' },
      { label: 'Cloud Solutions', href: '/cloud-solutions' },
      { label: 'System Integration', href: '/system-integration' },
      { label: 'Support & Maintenance', href: '/support-and-maintenance' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '/', chevron: true },
      { label: 'Company Portfolio', href: '/company-portfolio', chevron: true },
      { label: 'FAQ', href: '/frequently-asked-questions', chevron: true },
      { label: 'Privacy Policy', href: '/privacy-policy', chevron: true },
      { label: 'Terms of Service', href: '/terms-of-service', chevron: true },
    ],
  },
]

/* =========================================================
   SOCIAL LINKS (Needs the correct links)
========================================================= */

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/yourusername',
    icon: FaLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/yourusername',
    icon: RiInstagramFill,
  },
  {
    label: 'Discord',
    href: 'https://discord.com/yourusername',
    icon: FaDiscord,
  },
]