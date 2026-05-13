'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
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
          <div></div>
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="u-nav-spacer"></div>
          <div className="padding-global padding-horizontal-m-0">
            <div className="container-large hero-container">
              <div className="hero_grid" style={{ paddingTop: '14rem' }}>
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
                      <Link href="/contact" className="button is-medium w-button" style={{ background: '#4d65ff', color: 'white', padding: '0.875rem 2rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                        Start Free Consultation
                      </Link>
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
                  {['SAP-Logo.svg.png','fivetran-logo.png','Microsoft-Azure-Emblem.png','Odoo_logo_rgb.svg.png','Oracle-Logo-History-4-864x540.png','dbt-icon-2yxlz1fvy25mvn5scgnlw.webp','java-coffee-cup-logo.png','databricks-logo.png','nextjs-logo.png','SAP-Logo.svg.png','fivetran-logo.png','Microsoft-Azure-Emblem.png','Odoo_logo_rgb.svg.png','Oracle-Logo-History-4-864x540.png','dbt-icon-2yxlz1fvy25mvn5scgnlw.webp','java-coffee-cup-logo.png','databricks-logo.png','nextjs-logo.png'].map((img, i) => (
                    <img key={i} src={`/assets/images/${img}`} alt={img.split('-')[0]} className="partner-logo" />
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
                <img src="https://cdn.prod.website-files.com/68c8ed013c167a28e6d84332/68c8ed023c167a28e6d8443e_66dec62704d296fdf1be0088_team_discussion.avif" alt="Team Discussion" className="about-image" />
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
                  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', name: 'Next.js', desc: 'Web Framework', glow: '#ffffff' },
                  { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png', name: 'AWS', desc: 'Cloud Services', glow: '#eab308' },
                  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQ68GQ7HaMDD9EHZkEcthYaVxDZstZadJ4A&s', name: 'Odoo', desc: 'ERP System', glow: '#10b981' },
                  { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', desc: 'Programming', glow: '#ef4444' },
                  { img: '/assets/images/Oracle-Logo-History-4-864x540.png', name: 'Oracle', desc: 'Database', glow: '#f97316' },
                  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnZkZJkvI08aejoNEmEy2W3rDrTKYa2dUdGkvS8xy7Vzt3T5PpLu-gumocc2IZZjDZBo&usqp=CAU', name: 'SAP', desc: 'Enterprise', glow: '#06b6d4' },
                ].map((t, i) => (
                  <div key={i} className="tech-card-premium">
                    <div className="tech-card-top-line" style={{ background: `linear-gradient(to right, ${t.glow}, transparent)` }}></div>
                    <div className="tech-card-glow" style={{ background: `radial-gradient(circle at center, ${t.glow}22, transparent 70%)` }}></div>
                    <div className="tech-card-icon-wrap">
                      <img src={t.img} alt={t.name} />
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
        <section id="services" className="services-premium">
          <div className="svc-glow svc-glow-1"></div>
          <div className="svc-glow svc-glow-2"></div>
          <div className="svc-gradient-overlay"></div>
          <div className="padding-global">
            <div className="container-large">

              {/* Heading */}
              <div className="svc-heading-block">
                <div className="svc-label">OUR SERVICES</div>
                <h2 className="svc-main-heading">
                  Comprehensive <span className="svc-gradient-text">AI & Data Solutions</span>
                </h2>
                <p className="svc-subtitle">Trinity&apos;s enterprise-grade services designed to transform your business with cutting-edge data analytics and AI.</p>
              </div>

              {/* Service Cards */}
              <div className="svc-cards-grid">
                {[
                  { href: '/services/data-strategy', title: 'Data Strategy', desc: 'Build a roadmap to turn your data into a strategic business asset.', color: '#3b82f6' },
                  { href: '/services/data-engineering', title: 'Data Engineering', desc: 'Design and build scalable, reliable data pipelines and platforms.', color: '#06b6d4' },
                  { href: '/services/data-governance', title: 'Data Governance', desc: 'Ensure data quality, compliance, and security across your organization.', color: '#22d3ee' },
                  { href: '/services/business-intelligence', title: 'Business Intelligence', desc: 'Transform raw data into actionable dashboards and insights.', color: '#818cf8' },
                  { href: '/services/data-modernization', title: 'Data Modernization', desc: 'Migrate legacy systems to modern cloud-native data architectures.', color: '#a78bfa' },
                  { href: '/services/web-development', title: 'Web Development', desc: 'Build high-performance, modern web applications and platforms.', color: '#34d399' },
                  { href: '/services/ai-solution', title: 'AI Solutions', desc: 'Deploy intelligent AI models that automate and accelerate decisions.', color: '#c084fc' },
                  { href: '/services/erp-planning', title: 'Intelligent ERP', desc: 'Streamline enterprise operations with smart ERP implementations.', color: '#fb923c' },
                  { href: '/services/staffing-solutions', title: 'Staffing Solutions', desc: 'Access top-tier data and AI talent to power your projects.', color: '#f472b6' },
                ].map((s, i) => (
                  <Link key={i} href={s.href} className="svc-card">
                    <div className="svc-card-top-line" style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }}></div>
                    <div className="svc-card-icon" style={{ color: s.color }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="svc-card-title">{s.title}</h3>
                    <p className="svc-card-desc">{s.desc}</p>
                    <div className="svc-card-arrow" style={{ color: s.color }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Stats Glass Container */}
              <div className="svc-stats-glass">
                {[['50+','Projects Delivered'],['25+','Years Experience'],['4+','Countries Served'],['100+','Combined Experience']].map(([num, label], i) => (
                  <div key={i} className="svc-stat-item">
                    <span className="svc-stat-num">{num}</span>
                    <span className="svc-stat-label">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="svc-cta-block">
                <Link href="/services" className="svc-cta-btn">Explore All Services</Link>
              </div>

            </div>
          </div>
        </section>

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
                  { img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80', title: 'Healthcare', desc: 'AI-powered clinical analytics & patient intelligence', icon: '🏥' },
                  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', title: 'Finance', desc: 'Real-time financial intelligence & risk systems', icon: '💹' },
                  { img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', title: 'Retail', desc: 'Customer analytics & demand forecasting platforms', icon: '🛒' },
                  { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', title: 'Manufacturing', desc: 'Smart factory data & predictive maintenance', icon: '🏭' },
                  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Telecommunications', desc: 'Network analytics & subscriber intelligence', icon: '📡' },
                  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', title: 'Information Technology', desc: 'Cloud-native data platforms & AI integration', icon: '💻' },
                  { img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', title: 'BFSI', desc: 'Banking data modernization & compliance analytics', icon: '🏦' },
                  { img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', title: 'Engineering', desc: 'IoT data pipelines & operational intelligence', icon: '⚙️' },
                ].map((s, i) => (
                  <div key={i} className="sector-card">
                    <img src={s.img} loading="lazy" alt={s.title} className="sector-card-img" />
                    <div className="sector-card-overlay"></div>
                    <div className="sector-card-bottom-line"></div>
                    <div className="sector-card-content">
                      <div className="sector-card-icon">{s.icon}</div>
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
                      <div className="biz-card-footer">
                        {b.link
                          ? <a href={b.link} target="_blank" rel="noopener" className="biz-card-btn">Visit Website <span className="biz-btn-arrow">→</span></a>
                          : <span className="biz-card-soon">Coming Soon</span>}
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
          <div className="padding-global">
            <div className="container-large">
              <div className="title_block">
                <h2 className="title-small">FAQ</h2>
                <div className="title-row"><p>Frequently Asked Questions</p></div>
              </div>
              <div className="faq-padding"></div>
              <div className="faq-grid">
                {[
                  { q: 'What is data analytics and AI?', a: 'Data analytics is the process of examining data to uncover valuable insights, and AI helps by automating this analysis, making it faster and more effective.' },
                  { q: 'How does artificial intelligence enhance data analytics?', a: 'AI accelerates data analysis, identifies hidden patterns, and predicts future trends, enabling businesses to make more informed decisions.' },
                  { q: 'Why is digital transformation important for modern businesses?', a: 'Digital transformation helps businesses stay competitive by using advanced technology to improve efficiency, innovate, and better serve customers.' },
                  { q: 'What industries does Trinity Technology Solutions serve?', a: 'We serve finance, healthcare, manufacturing, retail, and more, tailoring AI and data solutions based on each industry\'s requirements.' },
                  { q: 'How do I get started with Trinity Technology Solutions?', a: 'Contact us for a consultation, and we will help you plan and execute your data analytics and AI initiatives.' },
                ].map((item, i) => (
                  <div key={i} className="faq-item">
                    <h3 className="faq-question">{item.q}</h3>
                    <p className="faq-answer">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
