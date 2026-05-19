'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, useInView } from 'framer-motion'
import ConsultationPopup from '@/components/ConsultationPopup'

const aiSolutions = [
  {
    title: 'Data Management & Modernization',
    desc: 'Converting disorganized, scattered data into a well integrated, scalable, high quality data solution.',
    capabilities: ['Data integration & consolidation', 'Data quality & governance', 'Data modernization strategies', 'Cloud data migration'],
    color: '#3b82f6',
    icon: '🗄️',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    title: 'AI & Machine Learning Solutions',
    desc: 'Deploy smart systems that predict, automate, and improve outcomes.',
    capabilities: ['Machine learning model development', 'Predictive analytics', 'Generative AI solutions', 'AI automation systems'],
    color: '#8b5cf6',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop'
  },
  {
    title: 'Business Intelligence & Advanced Analytics',
    desc: 'Turn complex data into actionable insights in real-time with dashboards and analytics.',
    capabilities: ['Data visualization dashboards', 'KPI tracking systems', 'Real-time reporting', 'Advanced analytics'],
    color: '#06b6d4',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    title: 'Data Engineering & Infrastructure',
    desc: 'Build scalable data pipelines and architectures that support AI and analytics at scale.',
    capabilities: ['Data pipeline development (ETL/ELT)', 'Data warehousing', 'Big data processing', 'Cloud-based data architecture'],
    color: '#10b981',
    icon: '⚙️',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  }
]

const implementationSteps = [
  { title: 'Data Evaluation & Planning', desc: 'Understand your current data maturity, and uncover your data opportunities' },
  { title: 'Data Architecture Design', desc: 'Developing reliable, scalable data solutions' },
  { title: 'AI & Analytics Development', desc: 'Developing intelligent data models and dashboards' },
  { title: 'Data Integration & Delivery', desc: 'Integrating into your business flows' },
  { title: 'Optimization & Scaling', desc: 'Continually optimizing and scaling our solutions' }
]

const whyChooseUs = [
  'End-to-end data & AI expertise',
  'Scalable & secure architecture',
  'Industry focused solutions',
  'Accelerated implementation cycles',
  'ROI & business focused'
]

function SolutionCard({ solution, index }: { solution: typeof aiSolutions[0], index: number }) {
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
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${solution.color}40, ${solution.color}20)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            fontSize: '3rem',
            opacity: 0.9
          }}>
            {solution.icon}
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
        position: 'relative'
      }}
    >
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
        fontWeight: '600',
        margin: '0 0 0.5rem 0'
      }}>
        {step.title}
      </h4>
      <p style={{
        color: '#94a3b8',
        fontSize: '0.85rem',
        margin: 0,
        lineHeight: '1.5'
      }}>
        {step.desc}
      </p>
    </motion.div>
  )
}

export default function AISolutionPage() {
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
            background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&h=1080&fit=crop') center/cover", 
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
                    background: 'rgba(139,92,246,0.2)', 
                    borderRadius: '50px', 
                    marginBottom: '2rem',
                    border: '1px solid rgba(139,92,246,0.3)'
                  }}
                >
                  <span style={{ color: '#c084fc', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>AI SOLUTIONS</span>
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
                  Data & AI Solutions for Intelligent Business Transformation
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ 
                    fontSize: '1.3rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    maxWidth: '700px', 
                    margin: '0 auto 2rem', 
                    lineHeight: 1.6 
                  }}
                >
                  We turn your complex data into actionable intelligence through AI powered solutions, scalable data infrastructure, and advanced analytics.
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
                      background: 'linear-gradient(135deg, #8b5cf6, #c084fc)', 
                      color: 'white', 
                      padding: '0.875rem 2rem', 
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

        {/* Problem Statement */}
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
                Why Most Businesses Fail to Leverage Data
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#6b7280', 
                maxWidth: '800px', 
                margin: '0 auto', 
                lineHeight: 1.7 
              }}>
                To stand ahead in the highly competitive business world, data plays a major role in deciding the entire business strategy. Today, every business has access to a huge amount of data, but they can't convert that data into actionable insights. Without connected systems, poor data quality, and AI adaptation, businesses cannot scale and make decisions.
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#6b7280', 
                maxWidth: '800px', 
                margin: '1rem auto 0', 
                lineHeight: 1.7,
                fontWeight: 600
              }}>
                Even if the business is at the top of the competition, if its data foundation is not strong that fails to deliver real business value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
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
                Build a Future-Ready Data & AI Solutions
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#6b7280', 
                maxWidth: '800px', 
                margin: '0 auto', 
                lineHeight: 1.7 
              }}>
                We help businesses build complete Data & AI solutions which combine all your data for creating intelligent decision systems and driving their innovation process. Companies use our advanced analytics and artificial intelligence technology, together with our modern data engineering solutions, to turn their data into valuable business assets.
              </p>
            </motion.div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {aiSolutions.map((solution, index) => (
                <SolutionCard key={index} solution={solution} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach */}
        <section style={{ 
          padding: '80px 0', 
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: 'rgba(139,92,246,0.1)',
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
                color: '#f1f5f9', 
                marginBottom: '1.5rem' 
              }}>
                Our Data & AI Implementation Approach
              </h2>
            </motion.div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem'
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
                Why Choose Our Data & AI Solutions
              </h2>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem',
                maxWidth: '800px',
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
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
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
          background: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)',
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
                Ready to Unlock the Power of Your Data?
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem', 
                opacity: 0.9,
                lineHeight: 1.6
              }}>
                Build intelligent systems, automate operations, and drive smarter decisions with our Data & AI solutions.
              </p>
              <button 
                onClick={() => router.push('/contact')}
                style={{ 
                  background: 'white', 
                  color: '#8b5cf6', 
                  padding: '1rem 2.5rem', 
                  borderRadius: '8px', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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
        
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: 'repeat(2, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="repeat(auto-fit, minmax(200px, 1fr))"] {
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