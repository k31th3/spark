import {
  LuClipboardList,
  LuCode,
  LuCpu,
  LuMegaphone,
  LuPenTool,
  LuWrench,
} from 'react-icons/lu'
import {
  PiHandHeartDuotone,
  PiMedalDuotone,
  PiRocketLaunchDuotone,
  PiSparkleDuotone,
} from 'react-icons/pi'
import { BiSolidCalendarCheck } from 'react-icons/bi'
import { TiGroup } from 'react-icons/ti'
import type { IconType } from 'react-icons'

import type {
  CareersPhoto,
  Job,
  JobCategory,
  Reason,
} from './Careers.types'

/* =========================================================
   PHOTOS
========================================================= */

import { Career1, Career2, Career3, Career4, Career5, WhyWork } from '@/assets/Career'

export const HERO_PHOTOS: CareersPhoto[] = [
  { src: Career1, alt: 'Support agent wearing a headset' },
  { src: Career2, alt: 'Technician repairing hardware' },
  { src: Career3, alt: 'Team member on a call at a laptop' },
  { src: Career4, alt: 'Hands typing on a laptop' },
  { src: Career5, alt: 'Engineer repairing a laptop' },
]

export const WHY_PHOTO: CareersPhoto = {
  src: WhyWork,
  alt: 'A smiling member of the Spark team',
}

/* =========================================================
   HERO
========================================================= */

export const HERO = {
  eyebrow: 'Work with dream catchers',
  title: 'Career & Opportunities',
  ctaLabel: 'See Open Positions',
}

/* =========================================================
   WHY WORK WITH US
========================================================= */

export const WHY = {
  eyebrow: 'Why work with us?',
  title: ['Great Minds', 'Think Alike'],
  paragraphs: [
    'At Spark, we believe people do their best work when they feel supported, challenged, and inspired. We offer a culture built on trust, collaboration, and growth—where your ideas matter, your impact is visible, and your development is a priority.',
    'Joining us means being part of a team that values excellence, respects individuality, and is committed to building something meaningful together.',
  ],
  ctaLabel: 'Apply Now',
}

/* =========================================================
   MISSION / REASONS
========================================================= */

export const MISSION = {
  title: 'Interested in Our Mission?',
  subtitle:
    "We're dedicated to helping people achieve their dreams, and we need your help to make an even greater impact.",
}

export const REASONS: Reason[] = [
  {
    title: 'Meaningful Impact',
    text: 'Work on products that solve real problems and help people.',
    icon: PiHandHeartDuotone,
  },
  {
    title: 'Growth Mindset',
    text: 'Learn, grow, and elevate your skills every single day.',
    icon: PiSparkleDuotone,
  },
  {
    title: 'Collaborative Culture',
    text: 'We value teamwork, openness, and respect.',
    icon: TiGroup,
  },
  {
    title: 'Work-Life Balance',
    text: 'We support flexibility so you can do your best work.',
    icon: BiSolidCalendarCheck,
  },
  {
    title: 'Real Ownership',
    text: 'Own your work from the first idea to the final launch.',
    icon: PiRocketLaunchDuotone,
  },
  {
    title: 'Recognition',
    text: 'Great work gets noticed, celebrated, and rewarded.',
    icon: PiMedalDuotone,
  },
]

/* =========================================================
   OPEN POSITIONS
========================================================= */

export const POSITIONS = {
  title: 'Open Positions',
  subtitle: 'Join the spark that builds, creates, and sets ideas ablaze.',
}

export const CATEGORIES: JobCategory[] = [
  'Design',
  'Development',
  'Hardware',
  'Engineering',
  'Marketing',
  'Admin',
]

export const CATEGORY_ICONS: Record<JobCategory, IconType> = {
  Design: LuPenTool,
  Development: LuCode,
  Hardware: LuWrench,
  Engineering: LuCpu,
  Marketing: LuMegaphone,
  Admin: LuClipboardList,
}

/* Salaries are only filled in where the design shows one */

export const JOBS: Job[] = [
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    category: 'Design',
    type: 'Part time',
    location: 'Makati City, Philippines',
    salary: '₱60,000 - ₱100,000',
    description:
      'Create intuitive and beautiful designs that deliver exceptional user experiences.',
  },
  {
    id: 'full-stack-developer',
    title: 'Full-stack Developer',
    category: 'Development',
    type: 'Full time',
    location: 'Makati City, Philippines',
    salary: '₱120,000 - ₱145,000',
    description:
      'Build and ship features across the whole stack, from interface to database.',
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    category: 'Development',
    type: 'Full time',
    location: 'Makati City, Philippines',
    description:
      'Build responsive, user-friendly web interfaces and bring designs to life using modern technologies.',
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    category: 'Development',
    type: 'Full time',
    location: 'Makati City, Philippines',
    description:
      'Design and develop scalable APIs, database structures and server-side logic.',
  },
  {
    id: 'hardware-technician',
    title: 'Hardware Technician',
    category: 'Hardware',
    type: 'Full time',
    location: 'Makati City, Philippines',
    description:
      'Install, maintain, and troubleshoot computer hardware and ensure systems are working properly.',
  },
]

/* =========================================================
   CTA
========================================================= */

export const CTA = {
  title: 'Ready to Be a Part of an Amazing Team?',
  text: 'Joining us means doing meaningful work with people who genuinely care about your growth.',
  ctaLabel: 'Apply Now',
}

/* =========================================================
   HOW PEOPLE APPLY
========================================================= */

const APPLY_EMAIL: string =
  (import.meta.env.VITE_CAREERS_EMAIL as string | undefined) ??
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) ??
  'hello@getsitgo.com'

export const getApplyHref = (role?: string) => {
  const subject = role ? `Application: ${role}` : 'Application'

  return `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(subject)}`
}

export const RESUME_HREF = getApplyHref('Resume for future roles')