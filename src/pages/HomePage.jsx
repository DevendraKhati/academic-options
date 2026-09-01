import React from 'react';
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
