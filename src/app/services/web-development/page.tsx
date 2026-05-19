'use client'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import ConsultationPopup from '@/components/ConsultationPopup'

const webServices = [
    {
        title: 'Business Website Development',
        desc: 'Design corporate, business websites that help organizations build a real digital presence, show off their offerings, and pull in better leads.',
        capabilities: ['Modern layouts', 'Intuitive navigation', 'Conversion-focused design', 'Lead generation optimization'],
        color: '#3b82f6',
        icon: '🏢',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop'
    },
    {
        title: 'E-Commerce Website Development',
        desc: 'Launch feature-packed online stores with safe payment options, smooth shopping experiences, and visually engaging designs.',
        capabilities: ['Secure payment integration', 'Product management', 'Shopping cart optimization', 'Mobile-optimized stores'],
        color: '#10b981',
        icon: '🛒',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
        title: 'Custom Website Development',
        desc: 'Create tailored digital solutions with advanced capabilities, smooth integrations, and scalable infrastructure.',
        capabilities: ['Custom features', 'API integrations', 'Scalable architecture', 'Advanced functionality'],
        color: '#8b5cf6',
        icon: '⚙️',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
    },
    {
        title: 'Responsive Website Design',
        desc: 'Fully responsive websites that look and work perfectly on any screen - desktop, tablet, or smartphone.',
        capabilities: ['Mobile-first design', 'Cross-browser compatibility', 'Performance optimization', 'Flexible layouts'],
        color: '#06b6d4',
        icon: '📱',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
        title: 'CMS Website Development',
        desc: 'Content Management System websites that let businesses keep their online content fresh and update it themselves.',
        capabilities: ['Easy content updates', 'User-friendly interface', 'Flexible architecture', 'Minimal technical effort'],
        color: '#f59e0b',
        icon: '📝',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop'
    },
    {
        title: 'Landing Page Development',
        desc: 'High-converting landing pages optimized for user engagement that turn marketing efforts into real results.',
        capabilities: ['Conversion optimization', 'Performance tracking', 'A/B testing ready', 'Lead capture forms'],
        color: '#ec4899',
        icon: '🚀',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop'
    }
]

const developmentSteps = [
    { title: 'Requirement Analysis', desc: 'Understand your business needs and define clear project objectives.' },
    { title: 'Planning & Strategy', desc: 'Develop a comprehensive strategy and technical roadmap for your website.' },
    { title: 'UI/UX Design', desc: 'Create beautiful, user-focused designs that enhance user experience.' },
    { title: 'Website Development', desc: 'Build your website using modern, scalable technologies and best practices.' },
    { title: 'Testing & Quality Assurance', desc: 'Thoroughly test functionality, performance, and security across all devices.' },
    { title: 'Launch & Ongoing Support', desc: 'Deploy your website and provide continuous support and maintenance.' }
]

const whyChooseUs = [
    'SEO-friendly website development',
    'Fast loading performance',
    'Mobile responsive design',
    'Modern UI/UX design',
    'Secure website development',
    'Scalable solutions'
]

const techStack = [
    'Next.js', 'React.js', 'Node.js', 'AWS', 'Azure',
    'Strapi', 'Java', 'Oracle', 'SAP', 'Odoo'
]

function ServiceCard({ service, index }: { service: typeof webServices[0], index: number }) {
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
                background: `linear-gradient(to right, ${service.color}, transparent)`,
                zIndex: 10
            }} />

            <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                position: 'relative',
                background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`
            }}>
                <img
                    src={service.image}
                    alt={service.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                    }}
                    className="solution-card-img"
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        fontSize: '3rem',
                        opacity: 0.9
                    }}>
                        {service.icon}
                    </div>
                </div>
            </div>

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.3
                }}>
                    {service.title}
                </h3>

                <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    margin: '0 0 1.25rem 0',
                    fontSize: '0.9rem',
                    flex: 1
                }}>
                    {service.desc}
                </p>

                <div>
                    <h4 style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: service.color,
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
                        {service.capabilities.map((cap, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.5rem',
                                fontSize: '0.8rem',
                                color: '#4b5563'
                            }}>
                                <span style={{ color: service.color, fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</span>
                                <span>{cap}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

function StepCard({ step, index }: { step: typeof developmentSteps[0], index: number }) {
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

export default function WebDevelopmentPage() {
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
                        background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop') center/cover",
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
                                    <span style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>WEB DEVELOPMENT</span>
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
                                    Professional Website Development Services for Modern Business
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
                                    From business websites, e-commerce, portfolio, landing pages, and custom applications, we build scalable websites to meet your business requirements.
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

                {/* Introduction */}
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
                                Custom Website Development Services
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#6b7280',
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.7
                            }}>
                                At Trinity Technology Solutions, we offer end-to-end website development services for startups, small businesses, enterprises, and growing brands across industries.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Web Development Services */}
                <section style={{ padding: '80px 0', background: 'white' }}>
                    <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                        <div className="services-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '2rem',
                            marginBottom: '3rem',
                            alignItems: 'stretch'
                        }}>
                            {webServices.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Development Process */}
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
                                Our Website Development Process
                            </h2>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(6, minmax(180px, 1fr))',
                            gap: '1.5rem',
                            alignItems: 'stretch',
                            gridAutoRows: '1fr'
                        }}>
                            {developmentSteps.map((step, index) => (
                                <StepCard key={index} step={step} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technology Stack */}
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
                                Our Technology Stack
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                gap: '1rem'
                            }}>
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        style={{
                                            padding: '1.25rem',
                                            background: 'white',
                                            borderRadius: '12px',
                                            border: '1px solid #e5e7eb',
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                            fontWeight: 600,
                                            color: '#1f2937',
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section style={{ padding: '80px 0', background: 'white' }}>
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
                                Why Choose Trinity Technology Solutions for Website Development?
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1rem',
                                maxWidth: '900px',
                                margin: '0 auto'
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
                                            background: '#f9fafb',
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
                                Build Your Business with a Powerful Website!
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                marginBottom: '2rem',
                                opacity: 0.95,
                                lineHeight: 1.6
                            }}>
                                Ready to transform your digital presence? Request a consultation and let's discuss your website development needs.
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

        .services-grid {
          gridTemplateColumns: repeat(3, 1fr);
        }

        /* Desktop: 3 columns (3 cards per row) */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(4, minmax(180px, 1fr)) !important;
          }
        }

        /* Tablet: 2 columns (2 cards per row) */
        @media (max-width: 980px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(3, minmax(180px, 1fr)) !important;
          }
        }

        /* Small tablet: 2 columns */
        @media (max-width: 760px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: repeat(2, minmax(180px, 1fr)) !important;
          }
        }

        /* Mobile: 1 column (1 card per row) */
        @media (max-width: 540px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          div[style*="grid-template-columns: 'repeat(6, minmax(180px, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 'repeat(auto-fit, minmax(280px, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="repeat(auto-fit, minmax(150px, 1fr))"] {
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
