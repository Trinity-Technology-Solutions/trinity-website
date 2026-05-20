'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import ConsultationPopup from '@/components/ConsultationPopup'

const services = [
  {
    href: '/services/staffing-solution',
    title: 'Staffing Solutions',
    desc: 'Access top-tier data and AI talent to power your projects with precision and speed.',
    color: '#f472b6',
    image: '/assets/images/Staffying Solutions.jpg',
    from: -80,
  },
  {
    href: '/services/erp-solution',
    title: 'ERP Solutions',
    desc: 'Streamline enterprise operations with smart ERP implementations.',
    color: '#fb923c',
    image: '/assets/images/ERP.jpg',
    from: 80,
  },
  {
    href: '/services/ai-solution',
    title: 'AI Solutions',
    desc: 'Deploy intelligent AI models that automate and accelerate decisions.',
    color: '#c084fc',
    image: '/assets/images/AI Solutions.jpg',
    from: -80,
  },
  {
    href: '/services/web-development',
    title: 'Web Development',
    desc: 'Build high-performance, modern web applications and platforms.',
    color: '#34d399',
    image: '/assets/images/Web development.jpg',
    from: 80,
  },
]

function ServiceCard({ s }: { s: typeof services[0] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: s.from }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="svc-card"
      style={{ background: '#ffffff', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      {/* Colored top line */}
      <div className="svc-card-top-line" style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }} />

      {/* Image */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={s.image}
          alt={s.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
          className="svc-card-img-zoom"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.35))' }} />
      </div>

      {/* Card content — same layout as before */}
      <div style={{ padding: '1.5rem 1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div className="svc-card-icon" style={{ color: s.color, marginBottom: '0.75rem' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="svc-card-title">{s.title}</h3>
        <p className="svc-card-desc" style={{ flex: 1 }}>{s.desc}</p>
        <Link href={s.href} className="svc-card-arrow" style={{ color: s.color, textDecoration: 'none', display: 'inline-block', marginTop: '0.75rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 800, easing: 'ease-out', once: true, offset: 50 })
    })
  }, [])

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">

        {/* Hero — unchanged */}
        <section className="hero-fade-in section-with-curve hero-services" data-aos="fade-up" style={{ background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop') center/cover", minHeight: '100vh', display: 'flex', alignItems: 'center', color: 'white' }}>
          <div className="padding-global" style={{ width: '100%' }}>
            <div className="container-large">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', marginBottom: '2rem' }}>
                  <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>SERVICES</span>
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: '#ffffff' }}>Cutting-Edge Solutions for Modern Enterprises</h1>
                <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                  Explore our four core services designed to transform your business through innovative technology solutions.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
                  <Link href="/contact" className="button is-alternate w-button" style={{ background: '#22396b', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get in touch</Link>
                  <button onClick={() => setShowPopup(true)} className="button is-medium w-button" style={{ background: '#22396b', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Start Free Consultation</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid — enhanced with images + slide animation */}
        <section className="services-section" style={{ padding: '80px 0', background: 'white' }}>
          <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#22396b', marginBottom: '3rem', textAlign: 'center' }}>Explore the services we offer to support your business</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem', maxWidth: '900px', margin: '0 auto', alignItems: 'stretch' }}>
              {services.map((s, i) => (
                <ServiceCard key={i} s={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Partners — unchanged */}
        <section className="partners_comp fade-in" data-aos="fade-up" style={{ padding: '60px 0', background: '#f8f9fa' }}>
          <div className="partners-container">
            <h2 className="heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <strong className="bold-text">Trusted by Industry Leaders in Data Analytics and AI</strong>
            </h2>
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
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', alt: 'Azure' },
                    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnZkZJkvI08aejoNEmEy2W3rDrTKYa2dUdGkvS8xy7Vzt3T5PpLu-gumocc2IZZjDZBo&usqp=CAU', alt: 'SAP' },
                    { src: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png', alt: 'Fivetran' },
                    { src: '/assets/images/AWS-logo.png', alt: 'AWS' },
                    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ68GQ7HaMDD9EHZkEcthYaVxDZstZadJ4A&s', alt: 'Odoo' },
                    { src: '/assets/images/Oracle-Logo-History-4-864x540.png', alt: 'Oracle' },
                    { src: '/assets/images/dbt-icon-2yxlz1fvy25mvn5scgnlw.webp', alt: 'DBT' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
                    { src: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg', alt: 'Databricks' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', alt: 'Next.js' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', alt: 'Azure' },
                  ].map((logo, i) => (
                    <img key={i} src={logo.src} alt={logo.alt} className="partner-logo" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        .svc-card:hover .svc-card-img-zoom { transform: scale(1.06); }
        @media (max-width: 640px) {
          div[style*="repeat(2,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {showPopup && <ConsultationPopup onClose={() => setShowPopup(false)} theme="navy" />}
    </div>
  )
}
