'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import ConsultationPopup from '@/components/ConsultationPopup'

const erpServices = [
    {
        title: 'ERP Consulting & Strategy',
        desc: 'Assess your processes, identify gaps, and develop a clear ERP roadmap with your objectives in mind.',
        capabilities: ['Process assessment & gap analysis', 'ERP selection strategy', 'Roadmap design', 'Business outcomes planning'],
        color: '#2563eb',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
        image: '/assets/images/Card-1 ERP.jpg'
    },
    {
        title: 'ERP Implementation Services',
        desc: 'Complete ERP implementation from system setup to custom configuration that supports your business.',
        capabilities: ['System configuration', 'Custom module setup', 'User onboarding', 'Go-live planning'],
        color: '#0f766e',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg>,
        image: '/assets/images/Card-2 ERP.jpg'
    },
    {
        title: 'ERP Integration Services',
        desc: 'Effortless integration with existing tools, CRM\'s, and other applications for seamless workflows.',
        capabilities: ['API integration', 'Middleware setup', 'Third-party connectors', 'Automation workflows'],
        color: '#d97706',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
        image: '/assets/images/card-3 ERP.jpg'
    },
    {
        title: 'Custom ERP Software Solutions',
        desc: 'Develop and customize ERP solutions to fit your business and processes for maximum efficiency.',
        capabilities: ['Custom module development', 'User experience design', 'Workflow automation', 'Scalable architecture'],
        color: '#9333ea',
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/></svg>,
        image: '/assets/images/Card-4 ERP.jpg'
    }
]

const implementationSteps = [
    { title: 'Business Analysis', desc: 'Review your core processes and define the ERP requirements that drive efficiency.' },
    { title: 'ERP Strategy & Planning', desc: 'Design the ERP blueprint, timelines, and success metrics for your transformation.' },
    { title: 'System Design & Configuration', desc: 'Configure the ERP platform to manage finance, supply chain, HR, inventory and more.' },
    { title: 'Integration & Data Migration', desc: 'Connect legacy systems and move your data securely into the new ERP environment.' },
    { title: 'Testing & Deployment', desc: 'Validate workflows, train users, and launch the solution with confidence.' },
    { title: 'Ongoing Support & Optimization', desc: 'Continuously improve system performance and support business growth.' }
]

const whyChooseUs = [
    'Official Odoo partner delivering proven ERP expertise',
    'Custom ERP product deployment for tailored business outcomes',
    'Business-oriented ROI focus, not just software implementation',
    'Fully customized ERP setups for your processes and scale',
    'Scalable systems built for future-ready growth'
]

function SolutionCard({ solution, index }: { solution: typeof erpServices[0], index: number }) {
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

function StepCard({ step, index }: { step: typeof implementationSteps[0], index: number }) {
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
                    background: 'linear-gradient(135deg, #2563eb, #0f766e)',
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

export default function ERPSolutionPage() {
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
                        background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/assets/images/header image erp.jpg') center/cover",
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
                                        background: 'rgba(37,99,235,0.2)',
                                        borderRadius: '50px',
                                        marginBottom: '2rem',
                                        border: '1px solid rgba(37,99,235,0.3)'
                                    }}
                                >
                                    <span style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>ERP SOLUTIONS</span>
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
                                    Transform Your Business with a Leading ERP Solution Provider
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
                                    Streamline, eliminate, and control inefficiencies in real time with our end-to-end ERP solutions designed for growth, scale, and business-wide visibility.
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
                                            background: 'linear-gradient(135deg, #2563eb, #0f766e)',
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

                {/* Why Your Business Needs ERP */}
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
                                Why Your Business Needs ERP
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#6b7280',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.7
                            }}>
                                Is your business growing too slowly because of disconnected systems and manual processes? ERP brings your business together into one smart system so you can automate core processes, centralize data, and make better decisions with real-time visibility.
                            </p>
                        </motion.div>

                        <div className="erp-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', alignItems: 'stretch' }}>
                            {[
                                'Automate core business processes',
                                'Centralize data across business functions',
                                'Make smarter decisions with real-time data',
                                'Scale without complexity'
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
                                        Designed to remove friction, reduce manual effort, and keep your teams aligned across finance, operations, HR, inventory, and more.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What We Do - ERP Services */}
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
                                We offer end-to-end ERP solutions that unify your core business processes, finance, HR, operations, inventory, and supply chain, into a single integrated platform with a focus on business outcomes, not just software implementation.
                            </p>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }}>
                            {erpServices.map((solution, index) => (
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
                        background: 'rgba(37,99,235,0.1)',
                        borderRadius: '50%',
                        filter: 'blur(80px)'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '400px',
                        height: '400px',
                        background: 'rgba(15,118,110,0.1)',
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
                                Our Approach
                            </h2>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(6, minmax(180px, 1fr))',
                            gap: '1.5rem',
                            alignItems: 'stretch',
                            gridAutoRows: '1fr'
                        }}>
                            {implementationSteps.map((step, index) => (
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
                                Why Choose Us as Your ERP Provider
                            </h2>

                            <div className="erp-benefits-grid" style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '1rem',
                                maxWidth: '900px',
                                margin: '0 auto',
                                alignItems: 'stretch'
                            }}>
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
                                            background: 'linear-gradient(135deg, #2563eb, #0f766e)',
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
                    background: 'linear-gradient(135deg, #2563eb 0%, #0f766e 100%)',
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
                                Let's Build Your ERP System
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '2rem',
                                opacity: 0.95,
                                lineHeight: 1.6
                            }}>
                                Ready to streamline operations and scale your business with the right ERP solution? Book a free consultation and get a tailored roadmap for your enterprise.
                            </p>
                            <button
                                onClick={() => router.push('/contact')}
                                style={{
                                    background: 'white',
                                    color: '#2563eb',
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
          border-color: rgba(37,99,235,0.3);
        }

        .solution-card-img {
          transition: transform 0.4s ease;
        }

        .solution-card:hover .solution-card-img {
          transform: scale(1.05);
        }

        .erp-features-grid {
          gridTemplateColumns: repeat(2, 1fr);
        }

        .erp-benefits-grid {
          gridTemplateColumns: repeat(2, 1fr);
        }

        @media (max-width: 1200px) {
          .erp-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .erp-benefits-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(4, minmax(180px, 1fr)) !important;
          }
        }

        @media (max-width: 980px) {
          .erp-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .erp-benefits-grid {
            grid-template-columns: 1fr !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(3, minmax(180px, 1fr)) !important;
          }
        }

        @media (max-width: 760px) {
          .erp-features-grid {
            grid-template-columns: 1fr !important;
          }

          .erp-benefits-grid {
            grid-template-columns: 1fr !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(2, minmax(180px, 1fr)) !important;
          }
        }

        @media (max-width: 540px) {
          .erp-features-grid {
            grid-template-columns: 1fr !important;
          }

          .erp-benefits-grid {
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
          div[style*="repeat(auto-fit, minmax(240px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }

          div[style*="repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }

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
