import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Users2, 
  Globe2, 
  Award, 
  Sparkles, 
  ArrowRight,
  Target,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Building2,
  GraduationCap
} from 'lucide-react';

export default function AboutPage({ onOpenApply }) {
  const values = [
    {
      title: 'Integrity',
      description: 'Unwavering transparency in our advising and corporate scouting processes.',
      icon: ShieldCheck,
      color: 'text-brand-600',
      bg: 'bg-brand-50',
      border: 'border-brand-100'
    },
    {
      title: 'Innovation',
      description: 'Pioneering new methods for skill acquisition and industry integration.',
      icon: Compass,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      title: 'Community',
      description: 'Building a lasting ecosystem where mentors and mentees thrive together.',
      icon: Users2,
      color: 'text-slate-800',
      bg: 'bg-slate-100',
      border: 'border-slate-200'
    }
  ];

  const leaders = [
    {
      name: 'Dr. Elena Vance',
      role: 'CHIEF EXECUTIVE OFFICER',
      bio: 'A former Dean of Admissions with 20 years of experience in higher education strategy and global talent pathways.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marcus Thorne',
      role: 'HEAD OF CORPORATE PARTNERSHIPS',
      bio: 'Former MD at a leading investment bank, Marcus bridges the gap between corporate requirements and elite student readiness.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Gavin Carr',
      role: 'CHIEF TECHNOLOGY OFFICER',
      bio: 'Lead architect of our proprietary AI-matching engine, previously engineering core systems at top-tier Silicon Valley firms.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Sarah Jenkins',
      role: 'DIRECTOR OF MENTORSHIP',
      bio: 'Expert in pedagogical design, Sarah oversees our network of 500+ industry practitioners and mentors across 12 sectors.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const stats = [
    { number: '15k+', label: 'Global Placements' },
    { number: '200+', label: 'Corporate Partners' },
    { number: '98%', label: 'Success Rate' },
    { number: '45', label: 'Countries Reached' }
  ];

  return (
    <div className="bg-[#f8fafc] pt-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="pt-10 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs sm:text-sm font-semibold mb-6">
            <span>Our Mission</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            Bridging the Gap Between{' '}
            <span className="text-brand-600">Ambition</span> and{' '}
            <span className="text-emerald-500">Opportunity</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal mb-12">
            Academic Options is more than an educational consultancy. We are the architects of professional futures, meticulously connecting high-achieving students with the corporate giants of tomorrow through structured pathways and visionary mentorship.
          </p>

          {/* Hero Featured Skybridge Visual */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 group">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
              alt="Skybridge connecting modern corporate towers"
              className="w-full h-[320px] sm:h-[460px] md:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* 2. Our Journey (Timeline) */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal">
              A decade of transforming the academic-to-corporate transition.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-slate-200" />

            <div className="space-y-12 md:space-y-16">
              
              {/* Event 1: 2014 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-[45%] bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-card text-right md:text-right">
                  <div className="text-2xl font-extrabold text-brand-600 mb-1">2014</div>
                  <div className="text-sm font-bold text-slate-900 mb-2">The Blueprint</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Founded in London with a singular vision: help graduates navigate the complexities of corporate entry and master technical competencies.
                  </p>
                </div>

                {/* Node Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-brand-600 shadow-sm items-center justify-center z-10" />

                <div className="hidden md:block md:w-[45%]" />
              </div>

              {/* Event 2: 2018 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="hidden md:block md:w-[45%]" />

                {/* Node Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shadow-sm items-center justify-center z-10" />

                <div className="w-full md:w-[45%] bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-card text-left">
                  <div className="text-2xl font-extrabold text-emerald-600 mb-1">2018</div>
                  <div className="text-sm font-bold text-slate-900 mb-2">Global Expansion</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Partnerships established with Ivy League and Russell Group institutions to standardize corporate readiness across global universities.
                  </p>
                </div>
              </div>

              {/* Event 3: 2024 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="w-full md:w-[45%] bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-card text-right md:text-right">
                  <div className="text-2xl font-extrabold text-brand-600 mb-1">2024</div>
                  <div className="text-sm font-bold text-slate-900 mb-2">Digital Transformation</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Launching our AI-driven pathway platform, bridging gaps for over 50,000 students annually with automated mentorship matchmaking.
                  </p>
                </div>

                {/* Node Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-brand-600 shadow-sm items-center justify-center z-10" />

                <div className="hidden md:block md:w-[45%]" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. What Drives Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card card-hover-effect text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className={`w-14 h-14 rounded-2xl ${v.bg} ${v.border} border flex items-center justify-center ${v.color} shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. The Visionaries */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Visionaries
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card card-hover-effect flex flex-col group"
              >
                {/* Photo */}
                <div className="h-64 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-0.5">{leader.name}</h3>
                    <p className="text-[11px] font-bold text-brand-600 uppercase tracking-wider mb-3">
                      {leader.role}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Our Impact by the Numbers & Global Map */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 4 Stats Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Impact by the Numbers
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card"
                  >
                    <div className="text-3xl font-extrabold text-brand-600 mb-1">
                      {s.number}
                    </div>
                    <div className="text-xs font-semibold text-slate-600">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenApply('Book Free Consultation')}
                  className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right World Map Graphic Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xl overflow-hidden relative group">
                
                {/* Header inside Map Card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider block">
                      Our Mission & Story
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      Academic Options Global Network
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Globe2 className="w-4 h-4 text-brand-600" />
                    <span>Live Nodes</span>
                  </div>
                </div>

                {/* Map Visual */}
                <div className="rounded-2xl overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
                    alt="Academic Options Global Network"
                    className="w-full h-64 sm:h-80 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Overlaid Data Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      Empowering Global Education & Careers
                    </span>
                    <span className="hidden sm:inline bg-emerald-500/80 backdrop-blur-md px-3 py-1.5 rounded-lg font-bold">
                      Active Worldwide
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
