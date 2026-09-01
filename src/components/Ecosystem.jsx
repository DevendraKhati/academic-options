import React from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  Terminal, 
  Users2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Leaf
} from 'lucide-react';

export default function Ecosystem({ onOpenApply }) {
  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A unified platform built to help students, universities, and businesses thrive in a rapidly changing work sphere.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Campus to Cubicle (C2C) - Spans 7 cols */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-card card-hover-effect relative overflow-hidden flex flex-col justify-between">
            
            {/* Faint Rocket Watermark in the background right */}
            <div className="absolute right-[-20px] bottom-[-20px] text-slate-100 pointer-events-none opacity-40 select-none">
              <Rocket className="w-72 h-72 rotate-12 stroke-[0.8]" />
            </div>

            <div className="relative z-10 space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Campus to Cubicle (C2C)
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base max-w-lg">
                  Transform fresh graduates into corporate-ready professionals through tailored bootcamps, practical internships, and placement assistance.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-6">
              <button 
                onClick={() => onOpenApply('Campus to Cubicle (C2C)')}
                className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group"
              >
                <span>Explore Track</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Card 2: ESG Hub - Spans 5 cols (Mint Gradient) */}
          <div className="md:col-span-5 bg-gradient-to-br from-emerald-50 via-teal-50/60 to-emerald-100/40 rounded-3xl p-8 lg:p-10 border border-emerald-200/70 shadow-card card-hover-effect flex flex-col justify-between">
            
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-emerald-200/80 flex items-center justify-center text-emerald-600 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    ESG Hub
                  </h3>
                  <span className="bg-emerald-200/60 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Sustainable
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Driving meaningful impact through sustainable development programs for high-growth enterprises and ethical ventures.
                </p>
              </div>
            </div>

            {/* Metric Progress Bar */}
            <div className="pt-6">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-emerald-200/60 shadow-sm space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <Leaf className="w-3.5 h-3.5" />
                    Verified ESG Standard
                  </span>
                  <span className="text-emerald-600">100% Impact</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full w-full"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Card 3: Bootcamps - Spans 5 cols */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between">
            
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-600 shadow-sm">
                <Terminal className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Bootcamps
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Intensive 8–12 week industry-led bootcamps designed to build real-world competency, full-scale projects, and production portfolios.
                </p>
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="pt-6 space-y-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Live Practitioner-Led Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Direct Corporate Project Sponsorship</span>
              </div>
            </div>

          </div>

          {/* Card 4: Social Awareness - Spans 7 cols */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-card card-hover-effect flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            
            <div className="space-y-5 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                <Users2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Social Awareness
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Promoting inclusivity, ethical business practices, and grassroots youth development initiatives across diverse communities.
                </p>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => onOpenApply('Social Awareness Program')}
                  className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group"
                >
                  <span>Discover Social Programs</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Thumbnail Image */}
            <div className="w-full sm:w-48 sm:h-44 rounded-2xl overflow-hidden shadow-md border border-slate-100 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" 
                alt="Community and Inclusivity Workshop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
