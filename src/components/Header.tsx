'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto'
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <header className="new-responsive-header">
      <div className="new-header-container">
        <div className="new-logo">
          <Link href="/" onClick={closeMenu}>
            <img src="https://cdn.prod.website-files.com/68c8ed013c167a28e6d84332/68c8eeafa4b5417495dddb90_Trinity%20Logo%20PNG%20(3).png" alt="Trinity Technology Solutions" />
          </Link>
        </div>
        <nav className={`new-nav${menuOpen ? ' active' : ''}`} id="nav-menu">
          <Link href="/" onClick={closeMenu} className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about-us" onClick={closeMenu} className={pathname === '/about-us' ? 'active' : ''}>About</Link>
          <Link href="/services" onClick={closeMenu} className={pathname.startsWith('/services') ? 'active' : ''}>Services</Link>
          <Link href="/contact" onClick={closeMenu} className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <Link href="/career" onClick={closeMenu} className={pathname === '/career' ? 'active' : ''}>Career</Link>
          <Link href="/contact" onClick={closeMenu} className="new-get-started">Book Intro Call</Link>
        </nav>
        <div className={`new-hamburger${menuOpen ? ' active' : ''}`} id="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}
