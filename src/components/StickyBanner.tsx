'use client'
import { useEffect, useState } from 'react'

export default function StickyBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const t = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(t)
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div className="sticky-banner">
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
        <form onSubmit={(e) => {
          e.preventDefault()
          const a = document.createElement('a')
          a.href = '/trinity-whitepaper.pdf'
          a.download = 'Trinity-Whitepaper.pdf'
          a.click()
          setDone(true)
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
        <p className="sticky-banner-thanks">✓ Thanks! Check your inbox shortly.</p>
      )}
    </div>
  )
}
