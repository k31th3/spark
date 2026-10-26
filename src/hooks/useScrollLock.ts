import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

export function useScrollLock(locked: boolean) {
  const lenis = useLenis()

  useEffect(() => {
    if (!locked) return

    if (lenis) {
      lenis.stop()

      return () => lenis.start()
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [locked, lenis])
}