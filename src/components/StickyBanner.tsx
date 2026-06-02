'use client'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_hcuu65l'
const EMAILJS_TEMPLATE_ID = 'template_hfsm2f4'
const EMAILJS_PUBLIC_KEY = 'jc8MwEV88GcpV6a7p'

export default function StickyBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [scrolledAway, setScrolledAway] = useState(false)
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  // Show after 1s on mount
  useEffect(() => {
    if (dismissed) return
    const t = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(t)
  }, [dismissed])

  // Hide/show based on scroll position
  useEffect(() => {
    const onScroll = () => {
      // Hide when scrolled more than 300px, show again when back near top
      setScrolledAway(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide when chatbot opens
  useEffect(() => {
    const onOpen = () => setChatOpen(true)
    const onClose = () => setChatOpen(false)
    window.addEventListener('chatbot-open', onOpen)
    window.addEventListener('chatbot-close', onClose)
    return () => {
      window.removeEventListener('chatbot-open', onOpen)
      window.removeEventListener('chatbot-close', onClose)
    }
  }, [])

  if (!visible || dismissed || chatOpen) return null

  return (
    <div
      className="sticky-banner"
      style={{
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        opacity: scrolledAway ? 0 : 1,
        transform: scrolledAway ? 'translateY(12px)' : 'translateY(0)',
        pointerEvents: scrolledAway ? 'none' : 'auto',
      }}
    >
      <button className="sticky-banner-close" onClick={() => setDismissed(true)} aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="sticky-banner-header">
        <div className="sticky-banner-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="sticky-banner-brand">TRINITY INSIGHTS</span>
      </div>

      <h3 className="sticky-banner-title">What Businesses Are Doing with IT &amp; Data?</h3>
      <p className="sticky-banner-desc">Get the free report on data strategies driving growth.</p>

      {!done ? (
        <form onSubmit={async (e) => {
          e.preventDefault()
          setDone(true)
          try {
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_TEMPLATE_ID,
              {
                user_email: email,
                download_time: new Date().toLocaleString(),
              },
              EMAILJS_PUBLIC_KEY
            )
          } catch (err) {
            console.error('EmailJS error:', err)
          }
        }}>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sticky-banner-input"
          />
          <button type="submit" className="sticky-banner-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 6 }}>
              <path d="M12 16V4M12 16l-4-4M12 16l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 20h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Download Free Report
          </button>
        </form>
      ) : (
        <p className="sticky-banner-thanks" style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Thanks! Check your inbox shortly.
        </p>
      )}
    </div>
  )
}
