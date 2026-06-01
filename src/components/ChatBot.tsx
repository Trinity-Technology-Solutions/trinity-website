'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type Msg = { sender: 'bot' | 'user'; text: string }

const QUICK_ACTIONS = [
  { label: 'What does Trinity Technology Solutions do?' },
  { label: 'Databricks Partnership' },
  { label: 'Contact Information' },
  { label: 'Career Opportunities' },
  { label: 'Marketing Services' },
  { label: 'Schedule a Meeting', href: '/contact' },
]

function getResponse(input: string): string {
  const t = input.toLowerCase()
  if (t.includes('what does trinity') || t.includes('what do you do') || t.includes('tell me about'))
    return 'Trinity Technology Solutions is a digital transformation company offering IT consulting, software development, cloud solutions, and data engineering services tailored for enterprises across various industries.'
  if (t.includes('location') || t.includes('where are you') || t.includes('office'))
    return 'We are headquartered in Chennai, India, and serve clients globally across the U.S., Europe, and Asia-Pacific regions. Our office hours are Monday to Friday, 9:00 AM to 6:00 PM IST.'
  if (t.includes('contact') || t.includes('reach') || t.includes('email') || t.includes('talk'))
    return "You can contact us by emailing sales@trinitetech.com or using the contact form on our website. We'll assist you promptly!"
  if (t.includes('schedule') || t.includes('meeting') || t.includes('appointment'))
    return 'Redirecting you to our appointment booking section...'
  if (t.includes('databricks'))
    return 'Yes, we are a certified Databricks partner! We provide Modern Data Platform with Databricks Lakehouse, Migration Accelerator, Data Governance & Lineage using Unity Catalog, and Industry-Specific Accelerators for BFSI, Retail, Healthcare, and more.'
  if (t.includes('service') || t.includes('solutions'))
    return 'We provide end-to-end IT services including application development, cloud infrastructure, DevOps, data engineering, and digital marketing via our sister brand, Growthpulse.'
  if (t.includes('marketing') || t.includes('growthpulse'))
    return 'Growthpulse, our sister brand, offers B2B lead generation, paid ad campaigns (Google, LinkedIn), SEO, content marketing, and marketing automation services to drive growth.'
  if (t.includes('hiring') || t.includes('career') || t.includes('job'))
    return "Yes! We're always looking for talented individuals. Please check our Careers page or email your resume to sales@trinitetech.com."
  if (t.includes('quote') || t.includes('proposal') || t.includes('pricing') || t.includes('cost'))
    return 'Send your requirements to sales@trinitetech.com or fill out the form on our website, and our team will respond with a customized proposal.'
  return "That's a great question! I'm Trinity, here to help you explore how Trinity Technology Solutions can transform your business. Would you like to know more about our services, partnerships, or discuss your specific challenges?"
}

export default function ChatBot() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [greetingVisible, setGreetingVisible] = useState(false)
  const [greetingDismissed, setGreetingDismissed] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { sender: 'bot', text: "Hi! I'm Trinity, your digital transformation assistant from Trinity Technology Solutions. I can help you with our IT consulting, software development, cloud solutions, data engineering services, and more. How can I assist you today?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuick, setShowQuick] = useState(true)
  const messagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setGreetingVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (messagesRef.current)
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [msgs, isTyping])

  function openChat() { setOpen(true); setGreetingVisible(false); window.dispatchEvent(new CustomEvent('chatbot-open')) }
  function closeChat() { setOpen(false); window.dispatchEvent(new CustomEvent('chatbot-close')) }

  function sendMessage(text?: string) {
    const msg = text ?? input.trim()
    if (!msg || isTyping) return
    setMsgs(prev => [...prev, { sender: 'user', text: msg }])
    setInput('')
    setShowQuick(false)
    setIsTyping(true)

    const isSchedule = msg.toLowerCase().includes('schedule') || msg.toLowerCase().includes('meeting')

    setTimeout(() => {
      setIsTyping(false)
      setMsgs(prev => [...prev, { sender: 'bot', text: getResponse(msg) }])
      if (isSchedule) router.push('/contact')
    }, 1500)
  }

  return (
    <>
      {/* Greeting popup */}
      {greetingVisible && !greetingDismissed && !open && (
        <div className="cb-greeting" onClick={openChat}>
          <div className="cb-greeting-content">
            <div className="cb-greeting-avatar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="cb-greeting-text">
              <p>Hi! I&apos;m Trinity. Need help with our IT solutions or data services?</p>
              <small>Click to chat with me!</small>
            </div>
            <button className="cb-dismiss" onClick={(e) => { e.stopPropagation(); setGreetingDismissed(true) }}>×</button>
          </div>
        </div>
      )}

      {/* FAB */}
      {!open && (
        <button className="cb-fab" onClick={openChat} aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="cb-window">
          {/* Header */}
          <div className="cb-header">
            <div className="cb-header-info">
              <div className="cb-header-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3>Trinity</h3>
                <p>Digital Transformation Assistant</p>
              </div>
            </div>
            <button className="cb-close" onClick={closeChat}>×</button>
          </div>

          {/* Messages */}
          <div className="cb-messages" ref={messagesRef}>
            {msgs.map((m, i) => (
              <div key={i} className={`cb-msg ${m.sender}`}>
                <div className={`cb-msg-avatar ${m.sender}`}>
                  {m.sender === 'bot'
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="#22396b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/></svg>
                  }
                </div>
                <div className={`cb-bubble ${m.sender}`}>{m.text}</div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="cb-msg bot">
                <div className="cb-msg-avatar bot">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15C21 15.53 20.79 16.04 20.41 16.41C20.04 16.79 19.53 17 19 17H7L3 21V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H19C19.53 3 20.04 3.21 20.41 3.59C20.79 3.96 21 4.47 21 5V15Z" stroke="#22396b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="cb-bubble bot cb-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          {/* Quick actions */}
          {showQuick && (
            <div className="cb-quick-actions">
              {QUICK_ACTIONS.map((q) => (
                <button key={q.label} className="cb-quick-btn" onClick={() => {
                  if (q.href) { router.push(q.href); return }
                  sendMessage(q.label)
                }}>
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="cb-input-row">
            <input
              className="cb-input"
              type="text"
              placeholder="Ask Trinity about Trinity Technology Solutions..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
            />
            <button className="cb-send" onClick={() => sendMessage()} disabled={isTyping} aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
