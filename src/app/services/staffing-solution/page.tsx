'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import ConsultationPopup from '@/components/ConsultationPopup'

const staffingServices = [
    {
        title: 'Temporary Staffing',
        desc: 'Rapidly scale teams for peak demand, projects, or short-term needs with vetted temporary talent.',
        capabilities: ['Short-term placements', 'Rapid onboarding', 'Flexible contracts', 'Payroll & compliance'],
        color: '#3b82f6',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/></svg>,
        image: '/assets/images/Temporary Staffing.jpg'
    },
    {
        title: 'Permanent Recruitment',
        desc: 'Find and hire skilled long-term professionals who fit your culture and business goals.',
        capabilities: ['Executive search', 'Technical hiring', 'Culture fit evaluation', 'Offer negotiation'],
        color: '#10b981',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
        image: '/assets/images/Permanent Recruitment.jpg'
    },
    {
        title: 'Contract & Project Staffing',
        desc: 'Assemble project-focused teams with domain experts for defined delivery windows.',
        capabilities: ['Project-based teams', 'Contract specialists', 'Scaled resourcing', 'Delivery support'],
        color: '#8b5cf6',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        image: '/assets/images/Contract & Project Staffing.jpg'
    },
    {
        title: 'Managed Talent & RPO',
        desc: 'End-to-end recruitment outsourcing and managed talent programs to streamline hiring.',
        capabilities: ['RPO services', 'Managed talent pools', 'Recruitment analytics', 'Continuous sourcing'],
        color: '#06b6d4',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        image: '/assets/images/Managed Talent & RPO.jpg'
    }
]

const processSteps = [
    { title: 'Discovery', desc: 'Understand your staffing needs, roles, and company culture.' },
    { title: 'Talent Sourcing', desc: 'Access our global network to find top candidates across regions.' },
    { title: 'Screening & Assessment', desc: 'Rigorous vetting process to ensure quality matches for your roles.' },
    { title: 'Interview & Selection', desc: 'Coordinate interviews and provide hiring recommendations.' },
    { title: 'Onboarding Support', desc: 'Seamless integration and compliance documentation.' },
    { title: 'Ongoing Management', desc: 'Monitor placements and optimize for long-term success.' }
]

const whyChooseUs = [
    'Global talent networks across USA, India, Oman, Netherlands',
    'Industry-focused recruiters with deep domain expertise',
    'Flexible engagement and pricing models',
    'Fast time-to-hire with quality candidates',
    'Complete onboarding and compliance support'
]

function SolutionCard({ solution, index }: { solution: typeof staffingServices[0], index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="solution-card"
            style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e5e7eb',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: `linear-gradient(to right, ${solution.color}, transparent)`,
                zIndex: 10
            }} />

            <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                position: 'relative',
                background: `linear-gradient(135deg, ${solution.color}22, ${solution.color}11)`
            }}>
                <img
                    src={solution.image}
                    alt={solution.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                    }}
                    className="solution-card-img"
                />
            </div>

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.3
                }}>
                    {solution.title}
                </h3>

                <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0 0 1.25rem 0',
                    fontSize: '0.9rem',
                    flex: 1
                }}>
                    {solution.desc}
                </p>

                <div>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: solution.color,
                        margin: '0 0 0.75rem 0',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        Capabilities:
                    </h4>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.5rem'
                    }}>
                        {solution.capabilities.map((cap, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                fontSize: '0.8rem',
                                color: '#4b5563'
                            }}>
                                <span style={{ color: solution.color, fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</span>
                                <span>{cap}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

function StepCard({ step, index }: { step: typeof processSteps[0], index: number }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '1.5rem',
                textAlign: 'center',
                position: 'relative',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
            }}
        >
            <div>
                <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                }}>
                    {index + 1}
                </div>
                <h4 style={{
                    color: '#f1f5f9',
                    fontSize: '1rem',
                    fontWeight: 600,
                    margin: '0 0 0.5rem 0'
                }}>
                    {step.title}
                </h4>
            </div>
            <p style={{
                color: '#94a3b8',
                fontSize: '0.85rem',
                margin: 0,
                lineHeight: '1.6'
            }}>
                {step.desc}
            </p>
        </motion.div>
    )
}

export default function StaffingSolutionPage() {
    const [showPopup, setShowPopup] = useState(false)
    const router = useRouter()

    useEffect(() => {
        import('aos').then((AOS) => {
            AOS.default.init({ duration: 800, easing: 'ease-out', once: true, offset: 50 })
        })
    }, [])

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">

                {/* Hero Section */}
                <section
                    className="hero-fade-in section-with-curve"
                    data-aos="fade-up"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/images/Staffying center page.jpg') center/cover no-repeat",
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white'
                    }}
                >
                    <div className="padding-global" style={{ width: '100%' }}>
                        <div className="container-large">
                            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1.5rem',
                                        background: 'rgba(59,130,246,0.2)',
                                        borderRadius: '50px',
                                        marginBottom: '2rem',
                                        border: '1px solid rgba(59,130,246,0.3)'
                                    }}
                                >
                                    <span style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>STAFFING SOLUTIONS</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    style={{
                                        fontSize: '3.5rem',
                                        fontWeight: 800,
                                        marginBottom: '1.5rem',
                                        lineHeight: 1.1,
                                        color: '#ffffff'
                                    }}
                                >
                                    Expert Staffing Solutions for Your Business
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    style={{
                                        fontSize: '1.3rem',
                                        color: 'rgba(255,255,255,0.9)',
                                        maxWidth: '760px',
                                        margin: '0 auto 2rem',
                                        lineHeight: 1.7
                                    }}
                                >
                                    We streamline hiring, reduce recruitment challenges, and help you build high-performing teams that drive growth across USA, India, Oman, and Netherlands.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        flexWrap: 'wrap',
                                        justifyContent: 'center',
                                        marginTop: '2rem'
                                    }}
                                >
                                    <button
                                        onClick={() => router.push('/contact')}
                                        style={{
                                            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                                            color: 'white',
                                            padding: '0.95rem 2.25rem',
                                            borderRadius: '8px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Your Business Needs Staffing Solutions */}
                <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
                    <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '3rem' }}
                        >
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#1f2937',
                                marginBottom: '1.5rem'
                            }}>
                                Why Your Business Needs Strategic Staffing
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#6b7280',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.7
                            }}>
                                Finding and retaining top talent is critical to business growth. Our expert staffing solutions connect you with pre-screened, qualified professionals who align with your company culture and deliver immediate impact.
                            </p>
                        </motion.div>

                        <div className="staffing-features-grid" style={{ display: 'grid', gap: '1.5rem', alignItems: 'stretch' }}>
                            {[
                                'Access to extensive global talent networks',
                                'Reduce time-to-hire and recruitment costs',
                                'Flexible staffing models for any business need',
                                'Quality assurance with rigorous screening'
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        background: 'white',
                                        padding: '1.5rem',
                                        borderRadius: '16px',
                                        boxShadow: '0 8px 30px rgba(15,23,42,0.05)',
                                        border: '1px solid #e5e7eb'
                                    }}
                                >
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{item}</h3>
                                    <p style={{ color: '#4b5563', lineHeight: 1.75, margin: 0, fontSize: '0.96rem' }}>
                                        Designed to streamline your hiring process, reduce friction, and ensure you get the right talent matched to your specific requirements and business goals.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What We Do - Staffing Services */}
                <section style={{ padding: '80px 0', background: 'white' }}>
                    <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#1f2937',
                                marginBottom: '1.5rem'
                            }}>
                                What We Do
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#6b7280',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.7
                            }}>
                                We offer comprehensive staffing solutions that deliver pre-screened, qualified talent for temporary, permanent, contract, and project-based needs. Our focus is on quality matches and long-term success.
                            </p>
                        </motion.div>

                        <div className="svc-inner-grid-2" style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                            {staffingServices.map((solution, index) => (
                                <SolutionCard key={index} solution={solution} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-100px',
                        left: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'rgba(59,130,246,0.1)',
                        borderRadius: '50%',
                        filter: 'blur(80px)'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'rgba(6,182,212,0.1)',
                        borderRadius: '50%',
                        filter: 'blur(80px)'
                    }} />

                    <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#f8fafc',
                                marginBottom: '1.5rem'
                            }}>
                                Our Proven Process
                            </h2>
                        </motion.div>

                        <div className="steps-grid-auto" style={{ display: 'grid', gap: '1.5rem', alignItems: 'stretch' }}>
                            {processSteps.map((step, index) => (
                                <StepCard key={index} step={step} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
                    <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '3rem' }}
                        >
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                color: '#1f2937',
                                marginBottom: '2rem'
                            }}>
                                Why Choose Trinity Technology
                            </h2>

                            <div className="staffing-benefits-grid why-grid-auto" style={{ display: 'grid', gap: '1rem', maxWidth: '900px', margin: '0 auto', alignItems: 'stretch' }}>
                                {whyChooseUs.map((reason, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '1rem',
                                            background: 'white',
                                            borderRadius: '12px',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold'
                                        }}>
                                            ✓
                                        </div>
                                        <span style={{
                                            color: '#374151',
                                            fontWeight: 500,
                                            fontSize: '0.95rem'
                                        }}>
                                            {reason}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{
                    padding: '80px 0',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <div className="container-large" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                color: 'white'
                            }}>
                                Build Your Winning Team Today
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '2rem',
                                opacity: 0.95,
                                lineHeight: 1.6
                            }}>
                                Ready to find the right talent for your organization? Schedule a free consultation and let's discuss your staffing needs and goals.
                            </p>
                            <button
                                onClick={() => router.push('/contact')}
                                style={{
                                    background: 'white',
                                    color: '#3b82f6',
                                    padding: '1rem 2.5rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
                            >
                                Contact Us
                            </button>
                        </motion.div>
                    </div>
                </section>

            </main>

            <style>{`
        .solution-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          border-color: rgba(59,130,246,0.3);
        }

        .solution-card-img {
          transition: transform 0.4s ease;
        }

        .solution-card:hover .solution-card-img {
          transform: scale(1.05);
        }

        .staffing-features-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .staffing-benefits-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 1200px) {
          .staffing-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .staffing-benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 980px) {
          .staffing-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .staffing-benefits-grid {
            grid-template-columns: 1fr !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(3, minmax(180px, 1fr)) !important;
          }
        }

        @media (max-width: 760px) {
          .staffing-features-grid {
            grid-template-columns: 1fr !important;
          }

          .staffing-benefits-grid {
            grid-template-columns: 1fr !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(2, minmax(180px, 1fr)) !important;
          }
        }

        @media (max-width: 540px) {
          .staffing-features-grid {
            grid-template-columns: 1fr !important;
          }

          .staffing-benefits-grid {
            grid-template-columns: 1fr !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 'repeat(2, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          h1[style*="3.5rem"] {
            font-size: 2.5rem !important;
          }

          h2[style*="2.5rem"] {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          h1[style*="3.5rem"] {
            font-size: 2rem !important;
          }

          h2[style*="2.5rem"] {
            font-size: 1.75rem !important;
          }
        }
      `}</style>

            {showPopup && <ConsultationPopup onClose={() => setShowPopup(false)} theme="navy" />}
        </div>
    )
}
