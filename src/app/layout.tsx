import type { Metadata } from 'next'
import './globals.css'
import 'aos/dist/aos.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import '@/styles/trinity-styles.css'
import '@/styles/animations.css'
import '@/styles/mobile-fix.css'
import '@/styles/mobile-complete-fix.css'
import '@/styles/consistent-header-spacing.css'
import '@/styles/cross-platform-flags.css'
import '@/styles/mobile-responsive-fix.css'
import '@/styles/curvy-wave.css'
import '@/styles/mobile-button-fix.css'
import '@/styles/header-styles.css'
import '@/styles/lead-popup.css'
import '@/styles/lead-popup-cards.css'
import '@/styles/inter-font.css'
import '@/styles/faq-redesign.css'
import '@/styles/career.css'
import '@/styles/responsive-global.css'
import '@/styles/sticky-banner.css'
import '@/styles/chatbot.css'

export const metadata: Metadata = {
  title: 'Data Analytics and AI Services | Trinity Technology Solutions',
  description: 'We deliver expert data analytics and AI solutions across India, the Netherlands, Oman, and the USA to help businesses turn data into sustainable growth.',
  keywords: 'Data Analytics, Data and Artificial Intelligence, Data and Analytics Services, Data Analytics and AI, Data Analytics Consulting',
  openGraph: {
    title: 'Trinity Technology Solutions | Data Analytics & AI Transformation',
    description: 'We deliver expert data analytics and AI solutions across India, the Netherlands, Oman, and the USA.',
    images: ['https://cdn.prod.website-files.com/66d714555784f849823be7fa/66f15a07a91a9c050c0700d0_Info%20Graphics.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trinity Technology Solutions | Data Analytics & AI Transformation',
    description: 'We deliver expert data analytics and AI solutions across India, the Netherlands, Oman, and the USA.',
    images: ['https://cdn.prod.website-files.com/66d714555784f849823be7fa/66f15a07a91a9c050c0700d0_Info%20Graphics.jpg'],
  },
  verification: { google: 'SQOh55Ri1bMC2hsTB05o2ZZs-T_CW_oiyBDRId16aKg' },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/favicon_io_trinity/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon_io_trinity/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_io_trinity/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon_io_trinity/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/favicon_io_trinity/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1F0Z7P35WV" />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1F0Z7P35WV');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Trinity Technology Solutions",
          "url": "https://trinitetech.com",
          "logo": "https://cdn.prod.website-files.com/68c8ed013c167a28e6d84332/68c8eeafa4b5417495dddb90_Trinity%20Logo%20PNG%20(3).png",
          "description": "Trinity Technology Solutions delivers expert data analytics and AI solutions.",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+1-214-206-8558", "contactType": "customer service", "email": "sales@trinitetech.com" },
          "sameAs": ["https://www.linkedin.com/company/trinity-technology-solutions/"]
        })}} />
      </head>
      <body style={{ overflowX: 'hidden', overflowY: 'auto', height: 'auto' }}>
        <ScrollAnimations />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
