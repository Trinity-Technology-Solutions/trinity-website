'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function CareerPage() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({ duration: 1000, easing: 'ease-out-quart', once: true, offset: 120 })
    })
  }, [])

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">

        {/* Hero */}
        <section className="section-with-curve" style={{ background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2084&q=80') center/cover", minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <div className="padding-global" style={{ width: '100%' }}>
            <div className="container-large">
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', marginBottom: '1.5rem', color: 'white', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>CAREER</div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2, color: 'white' }} data-aos="fade-down" data-aos-duration="800">Join Our Team</h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }} data-aos="fade-up" data-aos-delay="200">Shape the future of technology with Trinity Technology Solutions. We&apos;re looking for passionate innovators to join our mission of digital transformation.</p>
                <Link href="/jobs" className="button is-medium w-button" style={{ background: '#4d65ff', color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'inline-block' }} data-aos="fade-up" data-aos-delay="400">
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section style={{ padding: '80px 0', background: "linear-gradient(rgba(248,249,250,0.95),rgba(248,249,250,0.95)),url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop') center/cover" }} data-aos="fade-up">
          <div className="padding-global">
            <div className="container-large">
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#333' }}>Why Work With Us</h2>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>Join a team that values innovation, growth, and making a real impact in the world of technology.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
                {[
                  { color: 'linear-gradient(135deg,#4f46e5,#7c3aed)', title: 'Innovation First', desc: 'Work with cutting-edge technologies and be part of groundbreaking projects that shape the future.' },
                  { color: 'linear-gradient(135deg,#ec4899,#f97316)', title: 'Growth & Learning', desc: 'Continuous learning opportunities, certifications, and career development programs to help you grow.' },
                  { color: 'linear-gradient(135deg,#059669,#0d9488)', title: 'Work-Life Balance', desc: 'Flexible working arrangements, remote options, and a culture that values your well-being.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                    <div style={{ width: '60px', height: '60px', background: item.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
                    </div>
                    <h3 style={{ color: '#333', fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section style={{ padding: '80px 0', background: "linear-gradient(rgba(248,249,250,0.95),rgba(248,249,250,0.95)),url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop') center/cover" }} data-aos="fade-up">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#333' }}>Our Hiring Process</h2>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>Simple, transparent, and designed to find the best fit for both you and our team.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem' }}>
              {[
                { step: '1', title: 'Apply', desc: 'Submit your application with resume and cover letter.' },
                { step: '2', title: 'Screen', desc: 'Initial phone/video call to discuss your background and interests.' },
                { step: '3', title: 'Interview', desc: 'Technical and cultural fit interviews with our team.' },
                { step: '4', title: 'Offer', desc: 'Welcome to the Trinity Technology Solutions family!' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: '#1a237e', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>{item.step}</div>
                  <h3 style={{ color: '#333', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '80px 0', background: 'linear-gradient(135deg,#1a237e,#3d3dff)', color: 'white' }} data-aos="fade-up">
          <div className="padding-global">
            <div className="container-large">
              <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Don&apos;t See Your Role?</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9, textAlign: 'justify' }}>We&apos;re always looking for talented individuals. Send us your resume and let us know how you&apos;d like to contribute to our mission.</p>
                <a href="mailto:sales@trinitetech.com" style={{ background: 'white', color: '#1a237e', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'inline-block' }}>
                  Send Your Resume
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
