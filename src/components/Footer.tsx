import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer" style={{background:'#1a1a1a',color:'#ffffff',padding:'6rem 0 4rem',position:'relative',overflow:'hidden',overflowX:'clip',minHeight:'400px',maxWidth:'100vw'}}>
      <div style={{position:'absolute',bottom:'20px',left:'0',right:'0',textAlign:'center',fontSize:'12rem',fontWeight:900,color:'rgba(255,255,255,0.05)',whiteSpace:'nowrap',zIndex:1,pointerEvents:'none',overflow:'hidden',width:'100%'}}>Trinity Technology</div>
      <div style={{position:'relative',zIndex:2,maxWidth:'1400px',margin:'0 auto',padding:'0 2rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'3rem',marginBottom:'3rem',alignItems:'start'}}>
          <div style={{minHeight:'120px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'2rem'}}>
              <img src="/assets/images/trinity-logo.webp" alt="Trinity Technology Solutions" style={{height:'60px',width:'auto'}} />
            </div>
            <p style={{color:'#888',fontSize:'1.1rem',margin:0,lineHeight:1.4,textAlign:'justify'}}>© Copyright Trinity Technology Solutions 2025. All rights reserved.</p>
          </div>
          <div style={{minHeight:'120px'}}>
            <h4 style={{color:'#ffffff',fontSize:'1.4rem',fontWeight:600,marginBottom:'2rem'}}>Pages</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <Link href="/" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>Home</Link>
              <Link href="/services" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>Services</Link>
              <Link href="/about-us" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>About</Link>
              <Link href="/contact" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>Contact</Link>
              <Link href="/career" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>Career</Link>
            </div>
          </div>
          <div style={{minHeight:'120px'}}>
            <h4 style={{color:'#ffffff',fontSize:'1.4rem',fontWeight:600,marginBottom:'2rem'}}>Follow Us</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <a href="https://www.linkedin.com/company/trinity-technology-solutions/posts/?feedView=all" target="_blank" rel="noopener" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div style={{minHeight:'120px'}}>
            <h4 style={{color:'#ffffff',fontSize:'1.4rem',fontWeight:600,marginBottom:'2rem'}}>Contact</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <a href="mailto:sales@trinitetech.com" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>sales@trinitetech.com</a>
              <a href="tel:+12142068558" style={{color:'#888',textDecoration:'none',fontSize:'1.1rem'}}>+1 214-206-8558</a>
              <span style={{color:'#888',fontSize:'1rem'}}>USA, India, Oman, Netherlands</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        footer a:hover { color: #ffffff !important; }
        @media (max-width: 1024px) {
          footer > div:nth-child(2) > div { grid-template-columns: 1fr 1fr !important; gap: 1.5rem !important; }
          footer > div:nth-child(2) > div > div:first-child { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 768px) {
          footer > div:nth-child(2) > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
