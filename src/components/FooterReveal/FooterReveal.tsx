import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { RevealGateContext } from '@/components/Reveal/Reveal.context'

import styles from './FooterReveal.module.css'

type FooterRevealProps = {
  footer: ReactNode
  children: ReactNode

  rounded?: boolean
}

const REVEAL_AT = 0.35
const RESET_AT = 0.05

function FooterReveal({
  footer,
  children,
  rounded = true,
}: FooterRevealProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const element = footerRef.current
    if (!element) return

    const update = () => {
      element.style.setProperty('--footer-height', `${element.offsetHeight}px`)
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const content = contentRef.current
    const footerElement = footerRef.current
    if (!content || !footerElement) return

    let frame = 0

    const update = () => {
      frame = 0

      const viewport = window.innerHeight
      const visibleHeight = Math.min(viewport, footerElement.offsetHeight)

      const exposed = viewport - content.getBoundingClientRect().bottom
      const progress = exposed / visibleHeight

      setRevealed((previous) => {
        if (progress >= REVEAL_AT) return true
        if (progress <= RESET_AT) return false
        return previous
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div
        ref={contentRef}
        className={cn(styles.content, !rounded && styles.flat)}
      >
        {children}
      </div>

      <div
        ref={footerRef}
        className={cn(styles.footer, !rounded && styles.flat)}
      >
        <RevealGateContext.Provider value={revealed}>
          {footer}
        </RevealGateContext.Provider>
      </div>
    </>
  )
}

export default FooterReveal;