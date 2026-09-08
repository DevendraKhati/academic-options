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
 * All interactive sections receive `onOpenApply` prop to trigger the consultation modal.
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
  return (
    <>
      <Helmet>
        <title>Academic Options | Classroom to Corporate</title>
        <meta name="description" content="Bridging the gap between ambition and opportunity. Empowering graduates with real-world skills, industry-ready experience, and top tier placement pathways." />
        <meta name="keywords" content="internships, bootcamps, college placement, tech training, esg hub, academic options" />
        <link rel="canonical" href="https://academicoptions.com/" />
      </Helmet>
      
      {/* Each section passes onOpenApply through for modal triggers */}
      <Hero onOpenApply={handleOpenApply => onOpenApply(handleOpenApply)} />
      <Ecosystem onOpenApply={handleOpenApply => onOpenApply(handleOpenApply)} />
      <Stats />
      <Categories onOpenApply={handleOpenApply => onOpenApply(handleOpenApply)} />
      <Bootcamps onOpenApply={handleOpenApply => onOpenApply(handleOpenApply)} />
      <HowItWorks />
      <Testimonials />
      <CtaBanner onOpenApply={handleOpenApply => onOpenApply(handleOpenApply)} />
    </>
  );
}
