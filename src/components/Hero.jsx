import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Building2,
  Award,
  Star
} from 'lucide-react';

export default function Hero({ onOpenApply }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-200/40 via-blue-100/30 to-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 shadow-sm text-brand-700 text-xs sm:text-sm font-semibold animate-pulse">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Next Cohort Applications Now Open</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Bridging the{' '}
              <span className="text-brand-600 relative inline-block">
                Gap
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-brand-300/60 rounded-full"></span>
              </span>{' '}
              between Ambition and Opportunity.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Empowering graduates with real-world skills, industry-ready experience, and top tier placement pathways. Join fast-growing companies and accelerate your career journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenApply('Explore Programs')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button
                onClick={() => onOpenApply('Book Free Consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 mr-2 text-brand-600" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Industry Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>1-on-1 Dedicated Mentorship</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Direct Placement Support</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Visual Card with Office/Studio Presentation */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Academic Options Collaborative Innovation Hub"
                  className="w-full h-[380px] sm:h-[440px] object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                {/* Overlaid Banner Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/50 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                    Academic Options Studio
                  </span>
                </div>

                {/* Live Cohort Status Tag */}
                <div className="absolute top-4 right-4 bg-brand-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>Spring 2026 Active</span>
                </div>

                {/* Bottom Card Summary */}
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Partner Network</div>
                      <div className="text-sm font-bold text-slate-900">50+ Enterprise Leaders</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg border border-amber-200 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>

              </div>

              {/* Floating Metric Card (Left Overlay) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-lg p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-[260px] animate-bounce-subtle">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 leading-tight">94%</div>
                  <div className="text-xs font-semibold text-slate-700">Placement Rate</div>
                  <div className="text-[11px] text-slate-500 font-normal">Within 90 days</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
