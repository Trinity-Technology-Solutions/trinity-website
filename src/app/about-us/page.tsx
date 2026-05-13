'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 1000, easing: 'ease-out', once: true, offset: 50 })
    })
  }, [])

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">

        {/* Hero */}
        <section className="about-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="about-hero-content" data-aos="fade-up">
                <div className="about-hero-badge">ABOUT TRINITY</div>
                <h1>Transforming Data<br />Into Growth</h1>
                <p>With over 100 years of combined leadership, we are your trusted partner in analyzing, automating, and simplifying your data journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="about-story-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="about-story-grid">
                <div className="about-story-image" data-aos="fade-right">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Our Story" />
                </div>
                <div className="about-story-content" data-aos="fade-left">
                  <span className="about-label">Our Story</span>
                  <h2>From Staffing Specialists to Data Innovation Leaders</h2>
                  <p>Trinity began as a specialist staffing company, but we didn&apos;t stop there. With over 100 years of combined leadership and deep HR and data expertise, we understand your challenges and generate a measurable impact.</p>
                  <p>With a sharp understanding of talent, technology, and business challenges, we have evolved into a comprehensive software solutions provider. Today, we stand at the forefront of Data and AI innovation.</p>
                  <p>From data engineering and AI-driven platforms to enterprise software and digital products, our diverse team consistently delivers outcomes that matter.</p>
                  <Link href="/services" className="about-cta-btn">Explore Our Services →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-why-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="about-section-header" data-aos="fade-up">
                <div className="about-badge-purple">WHY CHOOSE US</div>
                <h2>What Sets Us Apart</h2>
                <p>Our unique combination of expertise, innovation, and dedication makes us the ideal partner.</p>
              </div>
              <div className="about-features-grid">
                {[
                  { title: 'Certified Databricks Partnership & Expertise', desc: 'Leverage our certified expertise and strategic partnership with Databricks to unlock the full potential of your data infrastructure.' },
                  { title: 'Dedicated Data Engineering Specialists for Every Project', desc: 'Our specialized team of data engineers brings deep technical expertise and industry knowledge to every project we undertake.' },
                  { title: 'Agile Delivery with Transparent Project Management', desc: 'Experience seamless project execution with our agile methodology and transparent communication throughout every phase.' },
                  { title: '24/7 Support and Strategic Consulting Calls', desc: 'Benefit from round-the-clock support and strategic guidance to ensure your data initiatives deliver maximum business value.' },
                ].map((card, i) => (
                  <div key={i} className="about-feature-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                    <div className="about-feature-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinejoin="round" /></svg>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Databricks CTA */}
        <section className="about-databricks-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="about-databricks-inner" data-aos="fade-up">
                <h2>Elite Databricks Consulting Partner</h2>
                <p>Transform your data into AI-powered insights with our certified Databricks expertise.</p>
                <Link href="/contact" className="about-cta-btn">Talk to Data Experts →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="about-section-header about-section-header--light" data-aos="fade-up">
                <div className="about-badge-light">OUR FOUNDATION</div>
                <h2>Core Values That Drive Us</h2>
                <p>The DNA of how we think, build, and lead in every project we undertake.</p>
              </div>
              <div className="about-values-grid">
                {[
                  { title: 'Innovation', desc: 'We embrace the power of emerging technologies to create solutions that are smarter, faster, and future-ready.', color: 'linear-gradient(135deg,#667eea,#764ba2)' },
                  { title: 'Excellence', desc: 'We strive for perfection in everything we do, from the code we write to the relationships we build.', color: 'linear-gradient(135deg,#ec4899,#f97316)' },
                  { title: 'Commitment', desc: "We are fully committed to understanding our client's business challenges and solving them with trust, focus, and results.", color: 'linear-gradient(135deg,#dc2626,#ea580c)' },
                  { title: 'Collaboration', desc: 'We grow stronger together across teams, with clients, and through partnerships, believing in open minds and shared wins.', color: 'linear-gradient(135deg,#059669,#0d9488)' },
                ].map((val, i) => (
                  <div key={i} className="about-value-card" data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                    <div className="about-value-icon" style={{ background: val.color }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinejoin="round" /></svg>
                    </div>
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="about-bottom-cta">
          <div className="padding-global">
            <div className="container-large">
              <div className="about-bottom-cta-inner" data-aos="fade-up">
                <h2>Ready to Transform Your Data?</h2>
                <p>Let&apos;s discuss how Trinity can help you unlock the full potential of your data.</p>
                <div className="about-bottom-cta-btns">
                  <Link href="/contact" className="about-bottom-btn-primary">Get Started Today</Link>
                  <Link href="/services" className="about-bottom-btn-secondary">View Our Services</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
