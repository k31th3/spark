import { FaBolt, FaCode, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'
import { FiBarChart2, FiCloud, FiGlobe, FiSettings } from 'react-icons/fi'
import type { IconType } from 'react-icons'


import { WebDevHero, WhyItMatters } from '@/assets/WebDevelopment'

/* =========================================================
   HERO
========================================================= */

export const HERO = {
  eyebrow: 'Services',
  title: 'Web Development',
  subtitle:
    'Modern websites and web applications that are fast, secure, responsive and built to help your business grow online.',
  image: WebDevHero as string,
  imageAlt: 'A website builder open on a laptop',
}

export type Feature = {
  title: string
  text: string
  icon: IconType
}

export const FEATURES: Feature[] = [
  {
    title: 'Fast & Performing',
    text: 'Optimized pages that load quickly on any device.',
    icon: FaBolt,
  },
  {
    title: 'Responsive Design',
    text: 'Layouts that look great on phones, tablets and desktops.',
    icon: FaMobileAlt,
  },
  {
    title: 'Secure & Reliable',
    text: 'Built with security best practices and dependable hosting.',
    icon: FaShieldAlt,
  },
  {
    title: 'Clean & Scalable Code',
    text: 'Maintainable code that grows along with your business.',
    icon: FaCode,
  },
]

/* =========================================================
   WEB SOLUTIONS
========================================================= */

export const SOLUTIONS = {
  title: 'Web Solutions for Every Business',
  subtitle:
    'Empowering your brand with custom-designed, scalable, and user-friendly digital experiences.',
}

export type Solution = {
  title: string
  text: string
  icon: IconType
}

export const SOLUTION_CARDS: Solution[] = [
  {
    title: 'Professional Websites',
    text: 'Stunning, high-performing websites that showcase your brand and build trust.',
    icon: FiGlobe,
  },
  {
    title: 'Digital Marketing',
    text: 'Data-driven strategies that help your business reach the right audience and grow online.',
    icon: FiBarChart2,
  },
  {
    title: 'Custom Systems',
    text: 'Tailored web applications built specifically for your business operations and workflow.',
    icon: FiSettings,
  },
  {
    title: 'Cloud & Hosting Solutions',
    text: 'Reliable hosting infrastructure that keeps your websites and applications fast, secure, and accessible.',
    icon: FiCloud,
  },
]

/* =========================================================
   WHY IT MATTERS
========================================================= */

export const WHY = {
  eyebrow: 'Why it matters',
  title: 'A Great Website Drives Real Result',
  text: "It's more than design. It's about creating experiences that your users love and your business benefits from.",
  points: [
    'Make a powerful first impression',
    'Reach your customers 24/7',
    'Deliver a better user experience',
    'Turn visitors into loyal customers',
    'Build a strong foundation for growth',
  ],

  image: WhyItMatters,
  imageAlt: 'Why it matters',
}

/* =========================================================
   BUTTONS
========================================================= */

const CONTACT_EMAIL: string =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ??
  'hello@getsitgo.com'

export const DEMO_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Web development demo'
)}`

export const WORK_PATH = '/company-portfolio'