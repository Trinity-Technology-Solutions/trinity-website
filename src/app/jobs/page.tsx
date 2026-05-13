import Link from 'next/link'

export default function JobsPage() {
  return (
    <div className="page-wrapper">
      <main style={{ paddingTop: '80px' }}>
        <section className="section-with-curve" style={{ background: 'white', padding: '60px 0' }}>
          <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 style={{ fontSize: '2.5rem', color: '#22396b', marginBottom: '1rem' }}>Current Job Openings</h1>
              <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                Explore exciting career opportunities with Trinity Technology Solutions and join our team of innovative professionals.
              </p>
            </div>
            <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <iframe
                id="jobsIframe"
                src="https://jobsapi.ceipal.com/APISource/v3/index.html?api_key=YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09&cp_id=Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09"
                width="100%"
                frameBorder={0}
                scrolling="no"
                allowTransparency={true}
                style={{ border: 0, width: '100%', height: '900px', display: 'block' }}
                title="Trinity Jobs"
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <h3 style={{ color: '#22396b', marginBottom: '1rem' }}>Interested in AI Solutions?</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>Take our AI Solutions quiz to test your knowledge and explore opportunities in artificial intelligence.</p>
              <Link href="/contact" style={{ background: '#6c757d', color: 'white', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
