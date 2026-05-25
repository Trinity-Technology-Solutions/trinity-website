'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_pa43dns'
const EMAILJS_TEMPLATE_ID = 'template_sr6fu8g'
const EMAILJS_PUBLIC_KEY = 'jc8MwEV88GcpV6a7p'

const services = [
  { title: 'Data & AI Solutions', desc: 'Transform your business with intelligent automation and predictive analytics.', img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80' },
  { title: 'ERP Solutions', desc: 'Streamline operations with comprehensive enterprise resource planning.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
  { title: 'Software Services', desc: 'Build modern, responsive web applications that drive business growth.', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80' },
  { title: 'Staffing Solutions', desc: 'Find top talent and build your team with expert recruitment services.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80' },
]

type ServiceForm = Record<string, string>

const S: React.CSSProperties = {
  width: '100%', padding: '0.8rem 1rem', borderRadius: '12px',
  border: '2px solid rgba(255,255,255,0.9)', background: 'white',
  fontSize: '1rem', color: '#374151', appearance: 'auto',
  boxSizing: 'border-box', cursor: 'pointer', outline: 'none', fontFamily: 'inherit',
}
const I: React.CSSProperties = {
  ...S, cursor: 'text',
}
const L: React.CSSProperties = {
  display: 'block', color: '#1f2937', fontWeight: 700,
  fontSize: '1rem', marginBottom: '0.4rem',
}
const F: React.CSSProperties = { marginBottom: '0.6rem' }

function Sel({ label, qNum, field, options, val, onChange }: {
  label: string; qNum: number; field: string
  options: string[]; val: string; onChange: (v: string) => void
}) {
  return (
    <div style={F}>
      <label style={L}>{qNum}. {label} <span style={{ color: '#ef4444' }}>*</span></label>
      <select required value={val} onChange={e => onChange(e.target.value)} style={S}>
        <option value="" disabled hidden>Select...</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

// ── Service question configs ──
const serviceQuestions: Record<number, { title: string; subtitle: string; fields: { type: 'input' | 'select'; qNum: number; label: string; key: string; placeholder?: string; options?: string[] }[] }> = {
  0: {
    title: 'Data & AI Solutions',
    subtitle: 'Help us understand your AI project needs',
    fields: [
      { type: 'input', qNum: 1, label: 'What is your business/company name?', key: 'company', placeholder: 'Enter your company name' },
      { type: 'select', qNum: 2, label: 'What industry is your business in?', key: 'industry', options: ['Retail', 'E-commerce', 'Education', 'Healthcare', 'Real Estate', 'Other'] },
      { type: 'select', qNum: 3, label: 'What do you want to use AI for?', key: 'aiUse', options: ['Customer Support Automation', 'Marketing Automation', 'Lead Generation', 'Sales Automation', 'Data Analysis', 'Custom AI Solutions'] },
      { type: 'select', qNum: 4, label: 'Are you currently using any automation or software tools?', key: 'tools', options: ['No', 'CRM', 'Chatbots', 'Marketing tools', 'Custom software'] },
      { type: 'select', qNum: 5, label: 'Would you like a FREE Data & AI Solutions Consultation?', key: 'consultation', options: ['Yes', 'No'] },
    ],
  },
  1: {
    title: 'ERP Planning',
    subtitle: 'Help us understand your ERP requirements',
    fields: [
      { type: 'input', qNum: 1, label: 'What is your business/company name?', key: 'company', placeholder: 'Enter your company name' },
      { type: 'select', qNum: 2, label: 'What industry is your business in?', key: 'industry', options: ['Retail', 'Manufacturing', 'Distribution', 'Education', 'Healthcare', 'Real Estate', 'Other'] },
      { type: 'select', qNum: 3, label: 'Which business processes do you want to manage with ERP?', key: 'processes', options: ['Inventory Management', 'Sales & Billing', 'Accounting & Finance', 'HR & Payroll', 'Purchase Management', 'Customer Management (CRM)', 'Complete ERP Solution'] },
      { type: 'select', qNum: 4, label: 'Are you currently using any software for managing your business?', key: 'currentSoftware', options: ['Manual Work', 'Excel / Spreadsheets', 'Accounting software', 'ERP system', 'Other software'] },
      { type: 'select', qNum: 5, label: 'Would you like a FREE ERP Planning Consultation?', key: 'consultation', options: ['Yes', 'No'] },
    ],
  },
  2: {
    title: 'Software Services',
    subtitle: 'Help us understand your web project needs',
    fields: [
      { type: 'input', qNum: 1, label: 'What is your business/company name?', key: 'company', placeholder: 'Enter your company name' },
      { type: 'select', qNum: 2, label: 'What industry is your business in?', key: 'industry', options: ['Retail', 'E-commerce', 'Education', 'Healthcare', 'Real Estate', 'IT / Services', 'Other'] },
      { type: 'select', qNum: 3, label: 'What type of website are you looking for?', key: 'websiteType', options: ['Business website', 'E-commerce website', 'Portfolio website', 'Landing page', 'Custom web application'] },
      { type: 'select', qNum: 4, label: 'Do you need additional services for your website?', key: 'additionalServices', options: ['SEO optimization', 'Website maintenance', 'Content creation', 'Digital marketing', 'No'] },
      { type: 'select', qNum: 5, label: 'Would you like a FREE Software Services Consultation?', key: 'consultation', options: ['Yes', 'No'] },
    ],
  },
  3: {
    title: 'Staffing Solutions',
    subtitle: 'Help us understand your hiring needs',
    fields: [
      { type: 'input', qNum: 1, label: 'What is your business/company name?', key: 'company', placeholder: 'Enter your company name' },
      { type: 'select', qNum: 2, label: 'What industry is your business in?', key: 'industry', options: ['IT / Technology', 'Manufacturing', 'Retail', 'Healthcare', 'Education', 'Finance', 'Other'] },
      { type: 'select', qNum: 3, label: 'What type of staffing support do you need?', key: 'staffingType', options: ['Permanent Hiring', 'Contract Staffing', 'Temporary Staffing', 'Internship / Fresher Hiring', 'Project-based Hiring'] },
      { type: 'select', qNum: 4, label: 'Which roles are you looking to hire for?', key: 'roles', options: ['Technical roles', 'Sales & Marketing', 'Administrative / Operations', 'Customer Support', 'Other'] },
      { type: 'select', qNum: 5, label: 'Would you like a FREE Staffing Solutions Consultation?', key: 'consultation', options: ['Yes', 'No'] },
    ],
  },
}

export default function ConsultationPopup({ onClose, theme = 'purple' }: { onClose: () => void; theme?: 'purple' | 'navy' }) {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<number | null>(null)
  const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' })
  const [svcForm, setSvcForm] = useState<ServiceForm>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const btnBg = theme === 'navy' ? '#2d4a7a' : '#6b7fff'
  const modalBg = theme === 'navy'
    ? 'linear-gradient(160deg, #4a6fa5 0%, #6b8ccc 50%, #b8cce8 100%)'
    : 'linear-gradient(135deg, #6b7fff 0%, #8b9dff 50%, #ffffff 100%)'
  const cardAccent = theme === 'navy' ? '#2d4a7a' : '#6b7fff'
  const subtitleColor = theme === 'navy' ? 'rgba(255,255,255,0.85)' : '#6b7280'
  const titleColor = theme === 'navy' ? '#ffffff' : '#1f2937'

  const dotConfigs = [
    [true, false, false, false],
    [true, true, false, false],
    [true, true, true, false],
    [true, true, true, true],
  ]
  const activeDots = submitted ? dotConfigs[3] : (dotConfigs[step - 1] ?? dotConfigs[0])

  function StepDots() {
    return (
      <div className="step-indicator">
        {activeDots.map((a, i) => <div key={i} className={`step-dot${a ? ' active' : ''}`} />)}
      </div>
    )
  }

  const qConfig = selected !== null ? serviceQuestions[selected] : null

  return (
    <div className="lead-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="lead-modal" style={{ background: modalBg }}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <div className="modal-body">

          {/* ── Step 1: Service Selection ── */}
          {step === 1 && (
            <div className="step-content active">
              <StepDots />
              <h2 className="step-title" style={{ color: titleColor }}>What can we help you with?</h2>
              <p className="step-subtitle" style={{ color: subtitleColor }}>Select the service you&apos;re interested in</p>
              <div className="service-cards-grid" style={{ '--card-accent': cardAccent } as React.CSSProperties}>
                {services.map((svc, i) => (
                  <div key={i} className={`service-card-item${selected === i ? ' selected' : ''}`} onClick={() => setSelected(i)}>
                    <div className="service-card-image"><img src={svc.img} alt={svc.title} /></div>
                    <div className="service-card-content">
                      <h3 className="service-card-title">{svc.title}</h3>
                      <p className="service-card-desc">{svc.desc}</p>
                      <button className="view-more-btn" style={{ background: btnBg }} onClick={(e) => { e.stopPropagation(); setSelected(i); setStep(2) }}>View More</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="continue-section">
                <button className="continue-btn" style={{ background: `linear-gradient(135deg, ${btnBg}, ${theme === 'navy' ? '#1a2b4a' : '#5a6eee'})` }} onClick={() => setStep(2)}>Continue</button>
              </div>
            </div>
          )}

          {/* ── Step 2: Contact Details ── */}
          {step === 2 && !submitted && (
            <div className="step-content active" style={{ padding: '0 0.5rem' }}>
              <StepDots />
              <h2 className="step-title" style={{ color: titleColor }}>Tell us about yourself</h2>
              <p className="step-subtitle" style={{ color: subtitleColor }}>We&apos;ll use this to get in touch with you</p>
              <form onSubmit={(e) => { e.preventDefault(); selected !== null ? setStep(3) : setSubmitted(true) }}>
                {([
                  { label: 'Full Name', key: 'name', type: 'text' },
                  { label: 'Email Address', key: 'email', type: 'email' },
                  { label: 'Phone Number', key: 'phone', type: 'tel' },
                  { label: 'Address', key: 'address', type: 'text' },
                ] as const).map(({ label, key, type }) => (
                  <div key={key} style={{ marginBottom: '0.75rem' }}>
                    <label style={{ ...L, color: titleColor }}>{label} *</label>
                    <input type={type} required value={contact[key]} onChange={(e) => setContact({ ...contact, [key]: e.target.value })} style={I} />
                  </div>
                ))}
                <div className="btn-group" style={{ marginTop: '1rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" style={{ background: btnBg }}>Continue</button>
                </div>
              </form>
            </div>
          )}

          {/* ── Step 3: Service-specific Questions ── */}
          {step === 3 && !submitted && qConfig && (
            <div className="step-content active" style={{ padding: '0 0.3rem' }}>
              <StepDots />
              <h2 className="step-title" style={{ fontSize: '1.4rem', marginBottom: '0.1rem', color: titleColor }}>{qConfig.title}</h2>
              <p className="step-subtitle" style={{ marginBottom: '0.6rem', color: subtitleColor }}>{qConfig.subtitle}</p>
              <form onSubmit={async (e) => {
                e.preventDefault()
                setSending(true)
                const qConfig = selected !== null ? serviceQuestions[selected] : null
                const questions = qConfig?.fields.map(f => `Q${f.qNum}: ${f.label}\nAnswer: ${svcForm[f.key] ?? '-'}`).join('\n\n') ?? ''
                await emailjs.send(
                  EMAILJS_SERVICE_ID,
                  EMAILJS_TEMPLATE_ID,
                  {
                    name: contact.name,
                    email: contact.email,
                    phone: contact.phone,
                    address: contact.address,
                    service: qConfig?.title ?? 'Not selected',
                    message: `Service: ${qConfig?.title ?? 'Not selected'}`,
                    questions,
                  },
                  EMAILJS_PUBLIC_KEY
                ).catch(() => {})
                setSending(false)
                setSubmitted(true)
              }}>
                {qConfig.fields.map((f) =>
                  f.type === 'input' ? (
                    <div key={f.key} style={F}>
                      <label style={{ ...L, color: titleColor }}>{f.qNum}. {f.label} <span style={{ color: '#ef4444' }}>*</span></label>
                      <input type="text" required placeholder={f.placeholder} value={svcForm[f.key] ?? ''} onChange={(e) => setSvcForm({ ...svcForm, [f.key]: e.target.value })} style={I} />
                    </div>
                  ) : (
                    <div key={f.key} style={F}>
                      <label style={{ ...L, color: titleColor }}>{f.qNum}. {f.label} <span style={{ color: '#ef4444' }}>*</span></label>
                      <select required value={svcForm[f.key] ?? ''} onChange={e => setSvcForm({ ...svcForm, [f.key]: e.target.value })} style={S}>
                        <option value="" disabled hidden>Select...</option>
                        {f.options!.map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  )
                )}
                <div className="btn-group" style={{ marginTop: '0.5rem', gap: '0.75rem' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>Back</button>
                  <button type="submit" className="btn btn-primary" style={{ background: btnBg }} disabled={sending}>{sending ? 'Sending...' : 'Submit'}</button>
                </div>
              </form>
            </div>
          )}

          {/* ── Step 4: Success ── */}
          {submitted && (
            <div className="success-screen" style={{ padding: '2.5rem 1rem 3rem' }}>
              <StepDots />
              <div style={{
                width: 80, height: 80,
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '1.5rem auto 1.75rem',
                boxShadow: '0 8px 32px rgba(34,197,94,0.35)',
              }}>
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1f2937', margin: '0 0 0.75rem', textAlign: 'center' }}>Thank You!</h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', textAlign: 'center', margin: 0, lineHeight: 1.6 }}>
                We&apos;ve received your information and will contact you within 24 hours.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
