'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ConsultationPopup from '@/components/ConsultationPopup'
import StickyBanner from '@/components/StickyBanner'
import ChatBot from '@/components/ChatBot'

const HOME_SERVICES = [
  {
    href: '/services/ai-solution',
    title: 'Data & AI Solutions',
    desc: 'Deploy intelligent AI models that automate workflows and accelerate decisions.',
    color: '#c084fc',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/services/erp-solution',
    title: 'ERP Solutions',
    desc: 'Streamline enterprise operations with smart, scalable ERP implementations.',
    color: '#fb923c',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/services/web-development',
    title: 'Software Services',
    desc: 'Build high-performance, modern web applications and digital platforms.',
    color: '#34d399',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/services/staffing-solution',
    title: 'Staffing Solutions',
    desc: 'Access top-tier data and AI talent to power your projects with precision.',
    color: '#f472b6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function HomeServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="services-premium" ref={ref}>
      <div className="svc-glow svc-glow-1"></div>
      <div className="svc-glow svc-glow-2"></div>
      <div className="svc-gradient-overlay"></div>
      <div className="padding-global">
        <div className="container-large">

          <motion.div
            className="svc-heading-block"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="svc-label">OUR SERVICES</div>
            <h2 className="svc-main-heading">
              Four Core <span className="svc-gradient-text">Solutions We Deliver</span>
            </h2>
            <p className="svc-subtitle">Trinity&apos;s focused service offerings designed to transform your business with talent, technology, and intelligence.</p>
          </motion.div>

          <div className="svc-cards-grid svc-cards-grid-4">
            {HOME_SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -10, transition: { duration: 0.25 } }}
              >
                <Link href={s.href} className="svc-card svc-card-home">
                  <div className="svc-card-top-line" style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }}></div>
                  <motion.div
                    className="svc-card-icon"
                    style={{ color: s.color }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.desc}</p>
                  <div className="svc-card-arrow" style={{ color: s.color }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="svc-stats-glass"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {[['50+','Projects Delivered'],['25+','Years Experience'],['4+','Countries Served'],['100+','Combined Experience']].map(([num, label], i) => (
              <div key={i} className="svc-stat-item">
                <span className="svc-stat-num">{num}</span>
                <span className="svc-stat-label">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="svc-cta-block"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/services" className="svc-cta-btn">Explore All Services</Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // AOS
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 1500, easing: 'ease-out', once: true, offset: 0, disable: 'mobile' })
    })

    // Leaflet Map
    import('leaflet').then((L) => {
      const mapEl = document.getElementById('world-map')
      if (!mapEl || (mapEl as any)._leaflet_id) return
      const map = L.default.map('world-map', { scrollWheelZoom: false }).setView([20, 0], 2)
      L.default.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO'
      }).addTo(map)

      const pinIcon = L.default.divIcon({
        className: '',
        html: `<svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20C24 5.373 18.627 0 12 0z" fill="#4a7fb5"/><circle cx="12" cy="12" r="5" fill="white"/></svg>`,
        iconSize: [24, 32],
        iconAnchor: [12, 32],
        popupAnchor: [0, -32],
      })

      const locations = [
        { name: 'Chennai', country: 'India', coords: [13.0067, 80.1910] as [number, number], id: 'chennai' },
        { name: 'The Hague', country: 'Netherlands', coords: [52.0705, 4.3007] as [number, number], id: 'hague' },
        { name: 'Muscat', country: 'Oman', coords: [23.5859, 58.4059] as [number, number], id: 'muscat' },
        { name: 'Plano', country: 'Texas, USA', coords: [33.0198, -96.6989] as [number, number], id: 'plano' },
      ]

      const markers: Record<string, any> = {}
      locations.forEach((loc) => {
        const marker = L.default.marker(loc.coords, { icon: pinIcon }).addTo(map).bindPopup(`<b>${loc.name}</b><br>${loc.country}`)
        markers[loc.id] = marker
        marker.on('click', () => {
          highlightLocation(loc.id)
          map.setView(loc.coords, 8)
        })
      })

      document.querySelectorAll('.global-loc-card').forEach((card) => {
        card.addEventListener('click', () => {
          const id = (card as HTMLElement).dataset.location!
          const loc = locations.find((l) => l.id === id)
          if (loc) { map.setView(loc.coords, 8); markers[id].openPopup(); highlightLocation(id) }
        })
      })

      function highlightLocation(id: string) {
        document.querySelectorAll('.global-loc-card').forEach((c) => c.classList.remove('active'))
        document.querySelector(`[data-location="${id}"]`)?.classList.add('active')
      }

      const overlay = document.getElementById('map-overlay')
      const container = document.querySelector('.map-container')
      overlay?.addEventListener('click', () => { map.scrollWheelZoom.enable(); overlay.classList.add('hidden') })
      container?.addEventListener('mouseleave', () => { map.scrollWheelZoom.disable(); overlay?.classList.remove('hidden') })
    })

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach((item) => {
      item.querySelector('.faq-question')?.addEventListener('click', () => {
        const isActive = item.classList.contains('active')
        document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'))
        if (!isActive) item.classList.add('active')
      })
    })
  }, [])

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">

        {/* Hero Section */}
        <section className="section_hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-bg-video"
          >
            <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
          <div className="padding-global padding-horizontal-m-0">
            <div className="container-large hero-container">
              <div className="hero_grid">
                <div className="hero_content hero-fade-in">
                  <div style={{ textAlign: 'left' }}>
                    <a href="https://www.databricks.com/company/partners" target="_blank" rel="noopener" className="partner-pill">
                      <div className="partner-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff6b35" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M2 17L12 22L22 17" stroke="#ff6b35" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M2 12L12 17L22 12" stroke="#ff6b35" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>Trinity-Databricks Consulting Partner</span>
                      <div className="partner-arrow">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </a>
                    <h1 className="text-color-white heading-style-h2" data-aos="fade-up" style={{ fontSize: '3.5rem', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                      Empowering Businesses<br />with Data Analytics and<br />AI Across the Globe
                    </h1>
                    <p className="body_one" style={{ fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
                      Harnessing the power of data analytics to transform businesses in USA, India, Oman, and Netherlands.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                      <button onClick={() => setShowPopup(true)} className="button is-medium w-button" style={{ background: '#4d65ff', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                        Start Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="partners_comp">
          <div>
            <h2 className="heading"><strong className="bold-text">Trusted by Industry Leaders in Data Analytics and AI</strong></h2>
            <div className="container-large">
              <div className="logos-scroll-container">
                <div className="logos-scroll">
                  {[
                    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnZkZJkvI08aejoNEmEy2W3rDrTKYa2dUdGkvS8xy7Vzt3T5PpLu-gumocc2IZZjDZBo&usqp=CAU', alt: 'SAP' },
                    { src: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png', alt: 'Fivetran' },
                    { src: '/assets/images/AWS-logo.png', alt: 'AWS' },
                    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ68GQ7HaMDD9EHZkEcthYaVxDZstZadJ4A&s', alt: 'Odoo' },
                    { src: '/assets/images/Oracle-Logo-History-4-864x540.png', alt: 'Oracle' },
                    { src: '/assets/images/dbt-icon-2yxlz1fvy25mvn5scgnlw.webp', alt: 'DBT' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
                    { src: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg', alt: 'Databricks' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', alt: 'Next.js' },
                    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnZkZJkvI08aejoNEmEy2W3rDrTKYa2dUdGkvS8xy7Vzt3T5PpLu-gumocc2IZZjDZBo&usqp=CAU', alt: 'SAP' },
                    { src: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png', alt: 'Fivetran' },
                    { src: '/assets/images/AWS-logo.png', alt: 'AWS' },
                    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ68GQ7HaMDD9EHZkEcthYaVxDZstZadJ4A&s', alt: 'Odoo' },
                    { src: '/assets/images/Oracle-Logo-History-4-864x540.png', alt: 'Oracle' },
                    { src: '/assets/images/dbt-icon-2yxlz1fvy25mvn5scgnlw.webp', alt: 'DBT' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
                    { src: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg', alt: 'Databricks' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', alt: 'Next.js' },
                  ].map((logo, i) => (
                    <img key={i} src={logo.src} alt={logo.alt} className="partner-logo" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="who-we-are-section">
          <div className="about-glow about-glow-1"></div>
          <div className="about-glow about-glow-2"></div>
          <div className="padding-global">
            <div className="container-large">
              <div className="about-top-grid">
                <div className="about-left">
                  <div className="about-label-line"></div>
                  <div className="about-big-title">About<br /><span className="about-gradient-word">Us</span></div>
                </div>
                <div className="about-right">
                  <p className="about-text">With over <span className="about-highlight">100 years of combined leadership</span>, our team is passionate about simplifying your data journey. We deliver real-time insights, seamless workflows, and measurable business impact.</p>
                  <p className="about-text">Trinity began as a specialist staffing company, but we evolved to meet the broader challenges of talent, technology, and business transformation. Today, we stand at the forefront of <span className="about-highlight">Data &amp; AI innovation</span>.</p>
                  <div className="about-points">
                    {['Databricks Certified Partner','AI-Driven Solutions','Enterprise Expertise','Global Delivery'].map((pt, i) => (
                      <div key={i} className="about-point"><span className="about-point-check">✓</span><span>{pt}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="about-image-wrap">
                <img src="/assets/images/team-discussion.avif" alt="Team Discussion" className="about-image" />
                <div className="about-image-overlay"></div>
                <div className="about-floating-stats">
                  {[['100+','Experts'],['50+','Projects'],['4','Countries']].map(([num, label], i) => (
                    <div key={i} className="about-stat">
                      <span className="about-stat-num">{num}</span>
                      <span className="about-stat-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-cert-card">
                <div className="about-cert-top-line"></div>
                <div className="about-cert-inner">
                  <div className="about-cert-content">
                    <div className="about-cert-badge-label">OFFICIAL PARTNER</div>
                    <h2 className="about-cert-heading">Elite Databricks<br /><span className="about-gradient-word">Consulting Partner</span></h2>
                    <p className="about-cert-desc">Transform your data into AI-powered insights with our certified Databricks expertise and proven enterprise delivery.</p>
                    <Link href="/contact" className="about-cert-btn">Talk to Data Experts</Link>
                  </div>
                  <div className="about-cert-badges">
                    {[
                      { href: 'https://www.databricks.com/learn/certification/data-engineer-associate', img: 'https://www.databricks.com/sites/default/files/2024-05/associate-badge-de.png?v=1717145547', label: '10+ Associate Engineers' },
                      { href: 'https://www.databricks.com/learn/certification/data-engineer-professional', img: 'https://www.databricks.com/sites/default/files/2024-05/professional-badge-de.png?v=1717145841', label: 'Professional Engineers' },
                    ].map((b, i) => (
                      <div key={i} className="about-badge-wrap">
                        <a href={b.href} target="_blank" rel="noopener" className="about-badge-link">
                          <div className="about-badge-glow"></div>
                          <img src={b.img} alt={b.label} />
                        </a>
                        <p>{b.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Tech Stack */}
        <section className="tech-stack-section">
          <div className="tech-glow tech-glow-1"></div>
          <div className="tech-glow tech-glow-2"></div>
          <div className="padding-global padding-section-large">
            <div className="container-large">
              <div className="tech-heading-block">
                <div className="tech-label">OUR TECHNOLOGY STACK</div>
                <h2 className="tech-main-heading">
                  Advanced Technologies
                  <span className="tech-gradient-text"> Powering AI Solutions</span>
                </h2>
                <p className="tech-subtitle">We leverage enterprise-grade cloud, AI, and analytics technologies to build scalable modern data platforms.</p>
              </div>
              <div className="tech-cards-grid">
                {[
                  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', name: 'Azure', desc: 'Cloud Platform', glow: '#3b82f6' },
                  { img: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg', name: 'Databricks', desc: 'Data Analytics', glow: '#f97316' },
                  { img: '/assets/images/dbt-icon-2yxlz1fvy25mvn5scgnlw.webp', name: 'DBT', desc: 'Data Transform', glow: '#a855f7' },
                  { img: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png', name: 'Fivetran', desc: 'Data Pipeline', glow: '#06b6d4' },
                  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', name: 'Next.js', desc: 'Web Framework', glow: '#ffffff', invert: true },
                  { img: '/assets/images/AWS-logo.png', name: 'AWS', desc: 'Cloud Services', glow: '#eab308' },
                  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ68GQ7HaMDD9EHZkEcthYaVxDZstZadJ4A&s', name: 'Odoo', desc: 'ERP System', glow: '#10b981' },
                  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', desc: 'Programming', glow: '#ef4444' },
                  { img: '/assets/images/Oracle-Logo-History-4-864x540.png', name: 'Oracle', desc: 'Database', glow: '#f97316' },
                  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnZkZJkvI08aejoNEmEy2W3rDrTKYa2dUdGkvS8xy7Vzt3T5PpLu-gumocc2IZZjDZBo&usqp=CAU', name: 'SAP', desc: 'Enterprise', glow: '#06b6d4' },
                ].map((t, i) => (
                  <div key={i} className="tech-card-premium">
                    <div className="tech-card-top-line" style={{ background: `linear-gradient(to right, ${t.glow}, transparent)` }}></div>
                    <div className="tech-card-glow" style={{ background: `radial-gradient(circle at center, ${t.glow}22, transparent 70%)` }}></div>
                    <div className="tech-card-icon-wrap">
                      <img src={t.img} alt={t.name} style={(t as any).invert ? { filter: 'invert(1) brightness(2)', background: 'transparent' } : undefined} />
                    </div>
                    <h3>{t.name}</h3>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <HomeServicesSection />

        {/* Industries */}
        <section className="sectors-premium">
          <div className="sectors-glow sectors-glow-1"></div>
          <div className="sectors-glow sectors-glow-2"></div>
          <div className="padding-global">
            <div className="container-large">
              <div className="sectors-heading">
                <div className="sectors-label">INDUSTRIES WE SERVE</div>
                <h2 className="sectors-main-heading">Industries Trinity <span className="sectors-gradient-text">Transforms</span></h2>
                <p className="sectors-subtitle">Delivering cutting-edge data analytics and AI solutions across diverse enterprise sectors worldwide.</p>
              </div>
              <div className="sectors-grid">
                {[
                  { img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', title: 'Healthcare', desc: 'AI-powered clinical analytics & patient intelligence', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', title: 'Finance', desc: 'Real-time financial intelligence & risk systems', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', title: 'Retail', desc: 'Customer analytics & demand forecasting platforms', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', title: 'Manufacturing', desc: 'Smart factory data & predictive maintenance', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M2 20h20M4 20V10l4-4 4 4 4-6 4 6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Telecommunications', desc: 'Network analytics & subscriber intelligence', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M1.5 8.5a13 13 0 0 1 21 0M5 12a10 10 0 0 1 14 0M8.5 15.5a6 6 0 0 1 7 0M12 19h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', title: 'Information Technology', desc: 'Cloud-native data platforms & AI integration', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', title: 'BFSI', desc: 'Banking data modernization & compliance analytics', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg> },
                  { img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', title: 'Engineering', desc: 'IoT data pipelines & operational intelligence', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg> },
                ].map((s, i) => (
                  <div key={i} className="sector-card">
                    <img src={s.img} loading="lazy" alt={s.title} className="sector-card-img" />
                    <div className="sector-card-overlay"></div>
                    <div className="sector-card-bottom-line"></div>
                    <div className="sector-card-content">
                      <div className="sector-card-icon" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>{s.icon}</div>
                      <h3 className="sector-card-title">{s.title}</h3>
                      <p className="sector-card-desc">{s.desc}</p>
                      <div className="sector-card-cta">Explore →</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Portfolio */}
        <section className="biz-section">
          <div className="biz-glow biz-glow-1"></div>
          <div className="biz-glow biz-glow-2"></div>
          <div className="padding-global">
            <div className="container-large">
              <div className="biz-heading">
                <div className="biz-label">OUR BUSINESS PORTFOLIO</div>
                <h2 className="biz-main-heading">Innovative Ventures Delivering <span className="biz-gradient-text">Transformative Solutions</span></h2>
                <p className="biz-subtitle">Trinity&apos;s portfolio of companies driving impact across hospitality, marketing, ERP, and education.</p>
              </div>
              <div className="biz-grid">
                {[
                  { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop', title: 'Hotelierlinks', category: 'Hospitality Tech', desc: 'Transforming the hospitality industry through innovative technology solutions and data-driven guest experiences.', tags: ['AI Powered','Global Reach'], link: 'https://hotelierlinks.com/about-us/' },
                  { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', title: 'GrowthPulse', category: 'Digital Marketing', desc: 'Full-service digital marketing agency driving measurable business growth through strategic optimization.', tags: ['Growth Analytics','SEO & Ads'], link: 'https://growthpulss.com/' },
                  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', title: 'TNova', category: 'ERP Solutions', desc: 'Leading provider of ERPNext implementation and customization services for enterprise business optimization.', tags: ['ERPNext','Enterprise'], link: null },
                  { img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop', title: 'Kallooriconnect', category: 'EdTech', desc: 'Comprehensive educational networking platform bridging students, institutions, and career opportunities.', tags: ['EdTech','Networking'], link: 'https://kallooriconnect.com/' },
                ].map((b, i) => (
                  <div key={i} className="biz-card">
                    <div className="biz-card-img-wrap">
                      <img src={b.img} alt={b.title} className="biz-card-img" />
                      <div className="biz-card-overlay"></div>
                      <div className="biz-card-category">{b.category}</div>
                    </div>
                    <div className="biz-card-body">
                      <h3 className="biz-card-title">{b.title}</h3>
                      <p className="biz-card-desc">{b.desc}</p>
                      <div className="biz-card-tags">
                        {b.tags.map((tag, j) => <span key={j} className="biz-card-tag">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="global-section-premium">
          <div className="global-glow global-glow-1"></div>
          <div className="global-glow global-glow-2"></div>
          <div className="global-radial"></div>
          <div className="padding-global padding-section-large">
            <div className="container-large">

              {/* Heading */}
              <div className="global-heading">
                <div className="global-label">GLOBAL PRESENCE</div>
                <h2 className="global-main-heading">Our Worldwide <span className="global-gradient-text">AI Delivery Network</span></h2>
                <p className="global-subtitle">Trinity powers digital transformation with data analytics and AI across four continents.</p>
              </div>

              {/* Map */}
              <div className="global-map-wrap">
                <div className="global-map-glow"></div>
                <div className="map-container">
                  <div id="world-map" className="world-map"></div>
                  <div id="map-overlay" className="map-overlay"></div>
                </div>
              </div>

              {/* Location Cards */}
              <div className="global-location-cards">
                {[
                  { id: 'chennai', name: 'Chennai', country: 'India', role: 'AI & Engineering Hub', color: '#f97316',
                    flag: <svg width="32" height="24" viewBox="0 0 32 24"><rect width="32" height="8" fill="#FF9933"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#138808"/><circle cx="16" cy="12" r="3" fill="#000080"/></svg> },
                  { id: 'hague', name: 'The Hague', country: 'Netherlands', role: 'European Operations', color: '#818cf8',
                    flag: <svg width="32" height="24" viewBox="0 0 32 24"><rect width="32" height="8" fill="#AE1C28"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#21468B"/></svg> },
                  { id: 'muscat', name: 'Muscat', country: 'Oman', role: 'Middle East Delivery', color: '#06b6d4',
                    flag: <svg width="32" height="24" viewBox="0 0 32 24"><rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#ED2939"/><rect y="16" width="32" height="8" fill="#00A651"/><rect width="10" height="24" fill="#ED2939"/></svg> },
                  { id: 'plano', name: 'Plano', country: 'Texas, USA', role: 'Global Headquarters', color: '#3b82f6',
                    flag: <svg width="32" height="24" viewBox="0 0 32 24"><rect width="32" height="24" fill="#B22234"/><rect y="2" width="32" height="2" fill="#FFFFFF"/><rect y="6" width="32" height="2" fill="#FFFFFF"/><rect y="10" width="32" height="2" fill="#FFFFFF"/><rect y="14" width="32" height="2" fill="#FFFFFF"/><rect y="18" width="32" height="2" fill="#FFFFFF"/><rect width="13" height="14" fill="#3C3B6E"/></svg> },
                ].map((loc) => (
                  <div key={loc.id} className="global-loc-card" data-location={loc.id} style={{ '--loc-color': loc.color } as React.CSSProperties}>
                    <div className="global-loc-top-line" style={{ background: `linear-gradient(to right, ${loc.color}, transparent)` }}></div>
                    <div className="global-loc-flag"><div className="flag-svg">{loc.flag}</div></div>
                    <div className="global-loc-info">
                      <h3>{loc.name}</h3>
                      <p className="global-loc-country">{loc.country}</p>
                      <p className="global-loc-role">{loc.role}</p>
                    </div>
                    <div className="global-loc-pulse" style={{ background: loc.color }}></div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="global-cta">
                <p className="global-cta-text">Empowering enterprises worldwide with scalable AI and data solutions.</p>
                <Link href="/contact" className="global-cta-btn">Explore Global Operations →</Link>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <div className="faq-bg-glow faq-bg-glow-1"></div>
          <div className="faq-bg-glow faq-bg-glow-2"></div>
          <div className="padding-global">
            <div className="container-large">
              <div className="faq-header">
                <div className="faq-label">GOT QUESTIONS?</div>
                <h2 className="faq-main-title">Frequently Asked <span className="faq-gradient-text">Questions</span></h2>
                <p className="faq-subtitle">Everything you need to know about our data analytics and AI services.</p>
              </div>
              <div className="faq-grid">
                {[
                  { q: 'What is data analytics and AI?', a: 'Data analytics is the process of examining data to uncover meaningful insights that drive smarter business decisions. AI takes this further by enabling machines to learn from data and make predictions automatically. Together, they help organizations automate analysis, reduce costs, and unlock new growth opportunities at scale.' },
                  { q: 'How does artificial intelligence enhance data analytics?', a: 'AI automates complex data processing tasks, identifies hidden patterns across large datasets, and predicts future trends with high accuracy. It enables real-time anomaly detection and analysis of unstructured data like documents and emails. The result is faster, deeper insights that give businesses a true competitive edge.' },
                  { q: 'Why is digital transformation important for modern businesses?', a: 'Digital transformation enables businesses to automate processes, deliver personalized experiences, and respond to market changes in real time. It breaks down data silos and connects teams across geographies. Companies that delay risk falling behind competitors already leveraging cloud, AI, and data platforms.' },
                  { q: 'What industries does Trinity Technology Solutions serve?', a: 'We serve Finance, Healthcare, Retail, Manufacturing, Telecommunications, IT, BFSI, and Engineering. Each engagement is tailored to the industry\'s specific data challenges and compliance requirements. From fraud detection for banks to predictive maintenance for manufacturers, we bring deep domain expertise.' },
                  { q: 'How do I get started with Trinity Technology Solutions?', a: 'Reach out through our Contact page or book a free consultation. Our team will schedule a discovery call to understand your data landscape and business goals. We then design a tailored roadmap and focus on delivering measurable outcomes from day one.' },
                ].map((item, i) => (
                  <div key={i} className="faq-item">
                    <div className="faq-item-number">0{i + 1}</div>
                    <div className="faq-item-body">
                      <h3 className="faq-question">
                        {item.q}
                        <span className="faq-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </h3>
                      <p className="faq-answer">{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      {showPopup && <ConsultationPopup onClose={() => setShowPopup(false)} />}
      <StickyBanner />
      <ChatBot />
    </div>
  )
}
