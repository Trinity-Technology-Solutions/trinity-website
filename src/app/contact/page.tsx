'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 1000, easing: 'ease-out-quart', once: true, offset: 120 })
    })
  }, [])

  const contactUs = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sales@trinitetech.com&su=Project Inquiry&body=Hello Trinity Technology Solutions,%0D%0A%0D%0AI am interested in discussing a project with your team.', '_blank')
  }

  return (
    <div className="page-wrapper">
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch;
          max-width: 1000px;
          margin: 0 auto;
          min-height: 500px;
        }
        .contact-img-wrap {
          display: flex;
          align-items: stretch;
          justify-content: center;
        }
        .contact-img-wrap img {
          width: 100%;
          height: 100%;
          min-height: 400px;
          max-height: 520px;
          object-fit: cover;
          border-radius: 12px;
        }
        .contact-cards-scroll {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: 3.5rem;
          color: white;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        .hero-sub {
          color: white;
          font-size: 1.4rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-img-wrap img {
            min-height: 260px;
            max-height: 320px;
          }
          .contact-cards-scroll {
            grid-template-columns: repeat(4, 280px);
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 1rem;
            gap: 1rem;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-sub {
            font-size: 1rem;
          }
          .contact-form-section {
            padding: 2rem 0 !important;
          }
          .consultation-box {
            padding: 1.5rem !important;
          }
          .consultation-box h3 {
            font-size: 1.2rem !important;
          }
          .consultation-box p {
            font-size: 0.95rem !important;
          }
          .consultation-box a {
            font-size: 0.95rem !important;
            padding: 0.85rem 1.5rem !important;
          }
          .contact-btn {
            font-size: 1rem !important;
            padding: 1rem 1.8rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.6rem;
          }
          .contact-cards-scroll {
            grid-template-columns: repeat(4, 250px);
          }
        }
      `}</style>
      <main className="main-wrapper">

        {/* Hero */}
        <section className="section-with-curve" style={{ background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=2074&q=80') center/cover", color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 1rem' }}>
          <div className="padding-global" style={{ width: '100%' }}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <div className="title-small" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', marginBottom: '1rem', color: 'white', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }} data-aos="fade-down">CONTACT</div>
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Shaping the future with Data and AI
              </h1>
              <p className="hero-sub" data-aos="fade-up" data-aos-delay="400">
                Any projects in mind? Let us collaborate to develop customized solutions.
              </p>
              <Link href="/services" className="button is-medium w-button" style={{ background: '#22396b', color: 'white', padding: '1rem 2rem', borderRadius: '6px', textDecoration: 'none', display: 'inline-block', fontWeight: 600, marginBottom: '80px' }} data-aos="fade-up" data-aos-delay="600">
                Know More
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="contact_comp contact-form-section padding-section-medium" style={{ background: "linear-gradient(rgba(255,255,255,0.95),rgba(255,255,255,0.95)),url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop') center/cover", padding: '4rem 0' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="contact-grid">
                <div className="contact-img-wrap">
                  <img src="https://cdn.prod.website-files.com/68c8ed013c167a28e6d84332/68c8ed023c167a28e6d84456_Img%20(6).avif" loading="lazy" alt="Contact" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                  <div className="title-small">Business consulting</div>
                  <h2 data-aos="fade-up">Get in touch</h2>
                  <p style={{ marginBottom: '2rem', color: '#666', fontSize: '1.1rem', textAlign: 'justify' }}>Ready to discuss your project? Click the button below to send us a message.</p>
                  <button onClick={contactUs} className="contact-btn" style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: 'white', padding: '1.2rem 3rem', border: 'none', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 20px rgba(79,70,229,0.4)', margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    Contact Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Consultation */}
        <section id="consultation" style={{ padding: '3rem 1rem', background: 'white' }} data-aos="fade-up">
          <div className="padding-global">
            <div className="container-large">
              <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <div className="consultation-box" style={{ background: '#f8f9fa', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <h3 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{display:'inline',verticalAlign:'middle',marginRight:'0.5rem'}}><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1f2937" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#1f2937" strokeWidth="2" strokeLinecap="round"/></svg>
                    Schedule a Consultation
                  </h3>
                  <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: 1.6 }}>Book a free 30-minute consultation with one of our data experts to discuss your project.</p>
                  <a href="https://calendly.com/antonytrinity" target="_blank" rel="noopener" style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    Book a Meeting
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section style={{ padding: '4rem 1rem', background: '#f8f9fa' }} data-aos="fade-up">
          <div className="padding-global">
            <div className="container-large">
              <div className="contact-cards-scroll">
                {[
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/></svg>, title: 'Locations', desc: 'USA, India, Oman, Netherlands - Global presence serving clients worldwide.', action: 'Get Direction', href: '/#global-presence' },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>, title: 'Email Address', desc: 'Please inform us if you are interested in data analytics and AI solutions.', action: 'sales@trinitetech.com', href: 'mailto:sales@trinitetech.com' },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Phone Call', desc: 'Inform us if you are interested in discussing the project or anything.', action: '+1 214-206-8558', href: 'tel:+12142068558' },
                  { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: 'Drop a Message', desc: "If you'd like to hear more about a project or like to see more of our work, drop us a line!", action: 'Send Message', href: '#contact-form' },
                ].map((card, i) => (
                  <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '300px' }} data-aos="zoom-in">
                    <div>
                      <div style={{ width: '64px', height: '64px', background: '#4285f4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>{card.icon}</div>
                      <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '1.25rem' }}>{card.title}</h3>
                      <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: 1.5 }}>{card.desc}</p>
                    </div>
                    {card.href ? (
                      <a href={card.href} style={{ color: '#4285f4', fontWeight: 500, textDecoration: 'none' }}>{card.action}</a>
                    ) : (
                      <span style={{ color: '#4285f4', fontWeight: 500 }}>{card.action}</span>
                    )}
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
