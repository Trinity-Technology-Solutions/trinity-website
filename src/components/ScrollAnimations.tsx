'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Re-run on every route change
    applyAnimations()
  }, [pathname])

  useEffect(() => {
    applyAnimations()
  }, [])

  return null
}

function applyAnimations() {
  // Small delay to let the page render first
  setTimeout(() => {
    const selectors = [
      'section',
      'h1, h2, h3',
      'p',
      '.card, [class*="card"]',
      '[class*="hero"]',
      '[class*="banner"]',
      '[class*="grid"] > *',
      '[class*="section"] > *',
      'img:not([data-no-anim])',
      'ul, ol',
      'form',
      'table',
      '[class*="btn"], button:not([class*="cb-"]):not([class*="sticky"]):not([class*="modal"])',
    ]

    const animMap: Record<number, string> = {
      0: 'fade-up',
      1: 'fade-right',
      2: 'fade-left',
      3: 'zoom-in',
      4: 'fade-up',
    }

    let counter = 0

    selectors.forEach(sel => {
      document.querySelectorAll<HTMLElement>(sel).forEach(el => {
        // Skip if already has data-aos, or is inside chatbot/header/footer/popup
        if (
          el.hasAttribute('data-aos') ||
          el.closest('.cb-window, .cb-fab, .cb-greeting, .sticky-banner, header, footer, nav, [class*="popup"], [class*="overlay"], [class*="modal"]')
        ) return

        el.setAttribute('data-aos', animMap[counter % 5])
        el.setAttribute('data-aos-duration', '700')
        el.setAttribute('data-aos-once', 'false')
        el.setAttribute('data-aos-offset', '80')
        counter++
      })
    })

    // Init / refresh AOS
    import('aos').then(({ default: AOS }) => {
      AOS.init({
        duration: 700,
        once: false,
        offset: 80,
        easing: 'ease-out-cubic',
      })
      AOS.refresh()
    })
  }, 100)
}
