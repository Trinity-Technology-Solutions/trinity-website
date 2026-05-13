'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const services = [
  { href: '/services/ai-solution', title: 'AI Solution', desc: 'Automate processes with intelligent decision-making.' },
  { href: '/services/business-intelligence', title: 'Business Intelligence', desc: 'Transform data into actionable insights.' },
  { href: '/services/data-engineering', title: 'Data Engineering', desc: 'Build robust data pipelines and infrastructure.' },
  { href: '/services/data-governance', title: 'Data Governance', desc: 'Frameworks for data quality and compliance.' },
  { href: '/services/data-modernization', title: 'Data Modernization', desc: 'Migrate to cloud-native platforms.' },
  { href: '/services/data-strategy', title: 'Data Strategy', desc: 'Align data with business objectives.' },
  { href: '/services/erp-planning', title: 'ERP Planning', desc: 'Strategic implementation for operations.' },
  { href: '/services/staffing-solutions', title: 'Staffing Solutions', desc: 'Expert talent acquisition services.' },
  { href: '/services/web-development', title: 'Web Development', desc: 'Custom digital solutions for business.' },
]

export default function ServicesPage() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 800, easing: 'ease-out', once: true, offset: 50 })
    })
  }, [])

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">

        {/* Hero */}
        <section className="hero-fade-in section-with-curve hero-services" data-aos="fade-up" style={{ background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop') center/cover", minHeight: '100vh', display: 'flex', alignItems: 'center', color: 'white' }}>
          <div className="padding-global" style={{ width: '100%' }}>
            <div className="container-large">
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', marginBottom: '2rem' }}>
                  <span style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>SERVICES</span>
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: '#ffffff' }}>Cutting-Edge Solutions for Modern Enterprises</h1>
                <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
                  Explore our comprehensive range of services designed to transform your business through innovative technology solutions.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2rem' }}>
                  <Link href="/contact" className="button is-alternate w-button" style={{ background: '#22396b', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get in touch</Link>
                  <Link href="/contact" className="button is-medium w-button" style={{ background: '#4d65ff', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Start Free Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-section" style={{ padding: '80px 0', background: 'white' }}>
          <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#22396b', marginBottom: '3rem', textAlign: 'center' }}>Explore the services we offer to support your business</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
              {services.map((s, i) => (
                <div key={i} className="service-card" style={{ background: '#f8f9fa', borderLeft: '4px solid #22396b', padding: '2rem', borderRadius: '8px', transition: 'all 0.3s ease' }} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '1rem' }}>
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1a2b4a" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="#1a2b4a" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="#1a2b4a" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  <h3 style={{ color: '#22396b', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>{s.desc}</p>
                  <Link href={s.href} style={{ color: '#22396b', fontWeight: 600, textDecoration: 'none' }}>Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="partners_comp fade-in" data-aos="fade-up" style={{ padding: '60px 0', background: '#f8f9fa' }}>
          <div className="partners-container">
            <h2 className="heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <strong className="bold-text">Trusted by Industry Leaders in Data Analytics and AI</strong>
            </h2>
            <div className="container-large">
              <div className="logos-scroll-container">
                <div className="logos-scroll">
                  {['SAP-Logo.svg.png','fivetran-logo.png','Microsoft-Azure-Emblem.png','Odoo_logo_rgb.svg.png','Oracle-Logo-History-4-864x540.png','dbt-icon-2yxlz1fvy25mvn5scgnlw.webp','java-coffee-cup-logo.png','databricks-logo.png','nextjs-logo.png','SAP-Logo.svg.png','fivetran-logo.png','Microsoft-Azure-Emblem.png','Odoo_logo_rgb.svg.png','Oracle-Logo-History-4-864x540.png','dbt-icon-2yxlz1fvy25mvn5scgnlw.webp','java-coffee-cup-logo.png','databricks-logo.png','nextjs-logo.png'].map((img, i) => (
                    <img key={i} src={`/assets/images/${img}`} alt={img.split('-')[0]} className="partner-logo" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
