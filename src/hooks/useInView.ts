import {
  useEffect,
  useRef,
  useState,
} from 'react'

/* =========================================================
   OPTIONS
========================================================= */

type UseInViewOptions = {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

/* =========================================================
   USE IN VIEW
========================================================= */

export function useInView<
  T extends HTMLElement = HTMLDivElement
>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null)

  const [isInView, setIsInView] =
    useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) return

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true)

            if (once) {
              observer.disconnect()
            }
          } else if (!once) {
            setIsInView(false)
          }
        },
        {
          threshold,
          rootMargin,
        }
      )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [
    threshold,
    rootMargin,
    once,
  ])

  return {
    ref,
    isInView,
  }
}