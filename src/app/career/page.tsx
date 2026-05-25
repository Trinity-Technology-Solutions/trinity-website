'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const ZYNCJOBS_API = process.env.NEXT_PUBLIC_ZYNCJOBS_API || 'http://localhost:5000/api'
const ZYNCJOBS_URL = process.env.NEXT_PUBLIC_ZYNCJOBS_URL || 'http://localhost:5173'

type Job = {
  id: string
  slug: string
  jobTitle: string
  company: string
  location: string
  jobType: string
  workSetting: string
  experienceLevel: string
  experienceRange: string
  jobCategory: string
  skills: string[]
  salaryMin: number
  salaryMax: number
  currency: string
  description: string
  companyLogo: string | null
  createdAt: string
}

const WHY_JOIN = [
  { icon: '🌍', title: 'Global Projects', desc: 'Work on enterprise-scale data and AI projects across USA, India, Netherlands, and Oman.' },
  { icon: '📈', title: 'Career Growth', desc: 'Structured growth paths, certifications, and mentorship from 100+ years of combined leadership.' },
  { icon: '🤖', title: 'Cutting-Edge Tech', desc: 'Work with Databricks, AWS, Azure, dbt, and the latest AI/ML frameworks every day.' },
  { icon: '🏠', title: 'Flexible Work', desc: 'Hybrid and remote options available. We trust our team to deliver results from anywhere.' },
  { icon: '🎓', title: 'Learning Culture', desc: 'Sponsored certifications, internal workshops, and access to premium learning platforms.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-leading salaries, performance bonuses, and comprehensive benefits package.' },
]

const PROCESS = [
  { step: '01', title: 'Apply', desc: 'Submit your application on ZyncJobs with your resume and profile.' },
  { step: '02', title: 'Screening', desc: 'Our HR team reviews your profile and reaches out within 3 business days.' },
  { step: '03', title: 'Technical Round', desc: 'Role-specific technical assessment or case study with our engineering leads.' },
  { step: '04', title: 'HR Round', desc: 'Culture fit discussion and deep dive into your experience and goals.' },
  { step: '05', title: 'Offer Letter', desc: 'Welcome to Trinity! We move fast — offers within 48 hours of final round.' },
]

function JobCard({ job }: { job: Job }) {
  const applyUrl = `${ZYNCJOBS_URL}/jobs/${job.slug}`
  const salary = job.salaryMin && job.salaryMax
    ? `${job.currency || 'INR'} ${(job.salaryMin / 100000).toFixed(1)}L – ${(job.salaryMax / 100000).toFixed(1)}L`
    : null

  return (
    <div className="career-job-card">
      <div className="career-job-card-top">
        <div className="career-job-company-logo">
          {job.companyLogo
            ? <img src={job.companyLogo} alt={job.company} />
            : <span>{job.company?.charAt(0) || 'T'}</span>
          }
        </div>
        <div className="career-job-meta">
          <span className="career-job-type">{job.jobType}</span>
          {job.workSetting && <span className="career-job-setting">{job.workSetting}</span>}
        </div>
      </div>
      <h3 className="career-job-title">{job.jobTitle}</h3>
      <p className="career-job-company">{job.company}</p>
      <div className="career-job-details">
        <span>📍 {job.location}</span>
        {job.experienceRange && <span>⏱ {job.experienceRange}</span>}
        {salary && <span>💰 {salary}</span>}
      </div>
      {job.skills?.length > 0 && (
        <div className="career-job-skills">
          {job.skills.slice(0, 4).map((s, i) => <span key={i} className="career-skill-tag">{s}</span>)}
          {job.skills.length > 4 && <span className="career-skill-more">+{job.skills.length - 4}</span>}
        </div>
      )}
      <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="career-apply-btn">
        Apply Now →
      </a>
    </div>
  )
}

export default function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filtered, setFiltered] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')
  const [page, setPage] = useState(1)
  const PER_PAGE = 9

  useEffect(() => {
    fetch(`${ZYNCJOBS_API}/jobs?limit=100`)
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : []
        setJobs(list)
        setFiltered(list)
        setLoading(false)
      })
      .catch(() => {
        setError('Unable to load jobs. Please try again later.')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let result = jobs
    if (search) result = result.filter(j =>
      j.jobTitle?.toLowerCase().includes(search.toLowerCase()) ||
      j.company?.toLowerCase().includes(search.toLowerCase()) ||
      j.skills?.some(s => s.toLowerCase().includes(search.toLowerCase()))
    )
    if (locationFilter) result = result.filter(j => j.location?.toLowerCase().includes(locationFilter.toLowerCase()))
    if (typeFilter) result = result.filter(j => j.jobType === typeFilter)
    setFiltered(result)
    setPage(1)
  }, [search, locationFilter, typeFilter, jobs])

  const locations = [...new Set(jobs.map(j => j.location).filter(Boolean))]
  const types = [...new Set(jobs.map(j => j.jobType).filter(Boolean))]
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const totalPages = Math.ceil(filtered.length / PER_PAGE)

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">

        {/* Hero */}
        <section className="career-hero">
          <div className="career-hero-bg" />
          <div className="career-wrap">
              <div className="career-hero-content">
                <div className="career-hero-badge">WE'RE HIRING</div>
                <h1 className="career-hero-title">
                  Build Your Future<br />
                  <span className="career-hero-gradient">With Trinity</span>
                </h1>
                <p className="career-hero-desc">
                  Join a team of data and AI innovators transforming enterprises across 4 continents.
                  Work on real problems with real impact.
                </p>
                <div className="career-hero-btns">
                  <a href="#open-positions" className="career-hero-btn-primary">Explore Openings</a>
                  <a href="mailto:sales@trinitetech.com" className="career-hero-btn-secondary">Join Talent Network</a>
                </div>
                <div className="career-hero-stats">
                  {[['50+', 'Open Roles'], ['4', 'Countries'], ['100+', 'Team Members'], ['5★', 'Culture Rating']].map(([n, l]) => (
                    <div key={l} className="career-hero-stat">
                      <span className="career-hero-stat-num">{n}</span>
                      <span className="career-hero-stat-label">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="career-why">
          <div className="career-wrap">
              <div className="career-section-header">
                <div className="career-section-label">WHY TRINITY</div>
                <h2 className="career-section-title">More Than Just a <span className="career-gradient-text">Job</span></h2>
                <p className="career-section-sub">We invest in our people as much as we invest in our technology.</p>
              </div>
              <div className="career-why-grid">
                {WHY_JOIN.map((item, i) => (
                  <div key={i} className="career-why-card">
                    <div className="career-why-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="career-jobs" id="open-positions">
          <div className="career-wrap">
              <div className="career-section-header">
                <div className="career-section-label">OPEN POSITIONS</div>
                <h2 className="career-section-title">Find Your <span className="career-gradient-text">Next Role</span></h2>
                <p className="career-section-sub">All positions are sourced live from ZyncJobs — our recruitment platform.</p>
              </div>

              {/* Filters */}
              <div className="career-filters">
                <div className="career-search-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="career-search-icon">
                    <circle cx="11" cy="11" r="8" stroke="#94a3b8" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by title, skill, or company..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="career-search-input"
                  />
                </div>
                <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} className="career-filter-select">
                  <option value="">All Locations</option>
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="career-filter-select">
                  <option value="">All Types</option>
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {(search || locationFilter || typeFilter) && (
                  <button onClick={() => { setSearch(''); setLocationFilter(''); setTypeFilter('') }} className="career-filter-clear">
                    Clear Filters
                  </button>
                )}
              </div>

              {/* Results count */}
              {!loading && !error && (
                <p className="career-results-count">
                  Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'position' : 'positions'}
                  {(search || locationFilter || typeFilter) && ' matching your filters'}
                </p>
              )}

              {/* Job Grid */}
              {loading && (
                <div className="career-loading">
                  {[...Array(6)].map((_, i) => <div key={i} className="career-skeleton" />)}
                </div>
              )}

              {error && (
                <div className="career-error">
                  <span>⚠️</span>
                  <p>{error}</p>
                  <a href={`${ZYNCJOBS_URL}/jobs`} target="_blank" rel="noopener noreferrer" className="career-apply-btn">
                    Browse on ZyncJobs →
                  </a>
                </div>
              )}

              {!loading && !error && paginated.length === 0 && (
                <div className="career-empty">
                  <span>🔍</span>
                  <p>No positions found matching your criteria.</p>
                  <button onClick={() => { setSearch(''); setLocationFilter(''); setTypeFilter('') }} className="career-filter-clear">
                    Clear Filters
                  </button>
                </div>
              )}

              {!loading && !error && paginated.length > 0 && (
                <div className="career-jobs-grid">
                  {paginated.map(job => <JobCard key={job.id} job={job} />)}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="career-pagination">
                  <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="career-page-btn">← Prev</button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button key={i} onClick={() => setPage(i + 1)} className={`career-page-btn ${page === i + 1 ? 'active' : ''}`}>{i + 1}</button>
                  ))}
                  <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="career-page-btn">Next →</button>
                </div>
              )}

              {/* Powered by badge */}
              <div className="career-powered-by">
                <span>Powered by</span>
                <a href={ZYNCJOBS_URL} target="_blank" rel="noopener noreferrer">ZyncJobs</a>
              </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="career-process">
          <div className="career-wrap">
              <div className="career-section-header">
                <div className="career-section-label">HOW IT WORKS</div>
                <h2 className="career-section-title">Our Hiring <span className="career-gradient-text">Process</span></h2>
                <p className="career-section-sub">Transparent, fast, and candidate-friendly. From apply to offer in under 2 weeks.</p>
              </div>
              <div className="career-process-steps">
                {PROCESS.map((item, i) => (
                  <div key={i} className="career-process-step">
                    <div className="career-process-num">{item.step}</div>
                    {i < PROCESS.length - 1 && <div className="career-process-line" />}
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* CTA */}
        <section className="career-cta">
          <div className="career-wrap">
              <div className="career-cta-inner">
                <h2>Didn't Find the Right Role?</h2>
                <p>We're always looking for exceptional talent. Drop us your resume and we'll reach out when the perfect opportunity arises.</p>
                <div className="career-cta-btns">
                  <a href="mailto:sales@trinitetech.com" className="career-cta-btn-primary">Send Your Resume</a>
                  <a href={`${ZYNCJOBS_URL}/jobs`} target="_blank" rel="noopener noreferrer" className="career-cta-btn-secondary">Browse All Jobs on ZyncJobs →</a>
                </div>
              </div>
          </div>
        </section>

      </main>
    </div>
  )
}
