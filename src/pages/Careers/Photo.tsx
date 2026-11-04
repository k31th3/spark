import { cn } from '@/lib/utils'
import type { CareersPhoto } from './Careers.types'
import styles from './Careers.module.css'

type PhotoProps = Partial<CareersPhoto> & {
  className?: string
  decorative?: boolean
  eager?: boolean
  natural?: boolean
}

function Photo({
  src,
  alt = '',
  className,
  decorative = false,
  eager = false,
  natural = false,
}: PhotoProps) {
  if (!src) {
    return (
      <div
        aria-hidden="true"
        className={cn(natural ? styles.placeholderBox : styles.placeholder, className)}
      />
    )
  }

  return (
    <img
      src={src}
      alt={decorative ? '' : alt}
      aria-hidden={decorative || undefined}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      className={cn(natural ? styles.imageNatural : styles.image, className)}
    />
  )
}

export default Photo;