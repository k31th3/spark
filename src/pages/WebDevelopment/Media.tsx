import { cn } from '@/lib/utils'
import styles from './WebDevelopment.module.css'

type MediaProps = {
  src?: string
  alt?: string
  className?: string
}

function Media({ src, alt = '', className }: MediaProps) {
  if (!src) {
    return (
      <div
        aria-hidden="true"
        className={cn(styles.mediaPlaceholder, className)}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      draggable={false}
      className={cn(styles.mediaImage, className)}
    />
  )
}

export default Media;