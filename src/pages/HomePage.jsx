/**
 * @file HomePage.jsx
 * @description Main landing page component that composes all homepage sections
 * in the correct visual order from top to bottom:
 *
 * 1. Hero — Headline, CTAs, and 94% placement floating card
 * 2. Ecosystem — "Our Ecosystem" bento grid (C2C, ESG, Bootcamps, Social)
 * 3. Stats — Key metrics bar (Partners, Graduates, Scholarships, Satisfaction)
 * 4. Categories — 6 filterable internship category cards
 * 5. Bootcamps — 4 advanced training bootcamp cards
 * 6. HowItWorks — 6-step "Classroom to Corporate" journey roadmap
 * 7. Testimonials — 3 success story review cards
 * 8. CtaBanner — Full-width gradient CTA with dual action buttons
 *
 * SEO Optimization (Google Helpful Content & Core Algorithm Standards):
 * - Primary targeted title under 60 characters
 * - Action-oriented meta description under 160 characters
 * - Complete Open Graph (Facebook/LinkedIn) and Twitter card graph
 * - WebSite & SearchAction Schema.org structured data for Google Sitelinks Searchbox
 *
 * @param {Object} props
 * @param {(programName?: string) => void} props.onOpenApply - Opens the global consultation modal
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Ecosystem from '../components/Ecosystem';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import Bootcamps from '../components/Bootcamps';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

export default function HomePage({ onOpenApply }) {
  // Structured Data (JSON-LD) for Sitelinks Searchbox and WebSite schema
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Academic Options",
    "url": "https://academicoptions.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://academicoptions.com/discovery?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Page Title (Max 60 chars) */}
        <title>Academic Options | College to Corporate Career Launchpad</title>
        
        {/* Meta Description (Max 160 chars, intent-focused) */}
        <meta 
          name="description" 
          content="Bridging the gap between ambition and opportunity. Empowering graduates with industry bootcamps, corporate internships, and accredited college discovery in India." 
        />
        <meta name="keywords" content="academic options, college discovery india, campus to cubicle, tech bootcamps, corporate placement, student internships, lucknow education consultancy" />
        <link rel="canonical" href="https://academicoptions.com/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Academic Options | College to Corporate Career Launchpad" />
        <meta property="og:description" content="Bridging the gap between ambition and opportunity. Empowering graduates with industry bootcamps, corporate internships, and accredited college discovery in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://academicoptions.com/" />
        <meta property="og:image" content="https://academicoptions.com/logo.png" />
        <meta property="og:site_name" content="Academic Options" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Academic Options | College to Corporate Career Launchpad" />
        <meta name="twitter:description" content="Empowering graduates with real-world skills, industry bootcamps, and direct placement pathways." />
        <meta name="twitter:image" content="https://academicoptions.com/logo.png" />

        {/* WebSite Search Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(homeStructuredData)}
        </script>
      </Helmet>
      
      {/* 1. Hero Section */}
      <Hero onOpenApply={(program) => onOpenApply(program)} />

      {/* 2. Ecosystem Bento Grid Section */}
      <Ecosystem onOpenApply={(program) => onOpenApply(program)} />

      {/* 3. Impact & Partner Metrics Bar */}
      <Stats />

      {/* 4. Filterable Internship Pathway Categories */}
      <Categories onOpenApply={(program) => onOpenApply(program)} />

      {/* 5. Intensive Training Bootcamps */}
      <Bootcamps onOpenApply={(program) => onOpenApply(program)} />

      {/* 6. Step-by-Step Pathway Roadmap */}
      <HowItWorks />

      {/* 7. Student Placement Testimonials */}
      <Testimonials />

      {/* 8. Full-Width Gradient CTA Banner */}
      <CtaBanner onOpenApply={(program) => onOpenApply(program)} />
    </>
  );
}
