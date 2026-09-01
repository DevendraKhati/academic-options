import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  HeartHandshake, 
  Leaf, 
  Search, 
  MapPin, 
  GraduationCap, 
  Edit3, 
  Star, 
  Download, 
  Award, 
  Code2, 
  Calculator, 
  CheckCircle2, 
  FileText,
  Building,
  ChevronRight
} from 'lucide-react';

export default function ImpactPage({ onOpenApply }) {
  // College Discovery Engine Filter State
  const [cityFilter, setCityFilter] = useState('');
  const [specFilter, setSpecFilter] = useState('All');
  const [examFilter, setExamFilter] = useState('');

  const colleges = [
    {
      id: 'iit-delhi',
      name: 'IIT Delhi',
      location: 'New Delhi, India',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
      tag: 'Engineering',
      courses: 'BTech / MTech',
      placement: 'Placement Rate: 96%',
      exams: 'JEE Advanced'
    },
    {
      id: 'iim-ahmedabad',
      name: 'IIM Ahmedabad',
      location: 'Gujarat, India',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      tag: 'Management',
      courses: 'MBA / PGPX',
      placement: 'Placement Rate: 100%',
      exams: 'CAT / GMAT'
    },
    {
      id: 'bits-pilani',
      name: 'BITS Pilani',
      location: 'Rajasthan, India',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
      tag: 'Engineering',
      courses: 'B.E. / M.E.',
      placement: 'Placement Rate: 94%',
      exams: 'BITSAT'
    }
  ];

  const filteredColleges = colleges.filter((c) => {
    const matchesCity = cityFilter === '' || c.location.toLowerCase().includes(cityFilter.toLowerCase());
    const matchesSpec = specFilter === 'All' || c.tag.toLowerCase() === specFilter.toLowerCase();
    const matchesExam = examFilter === '' || c.exams.toLowerCase().includes(examFilter.toLowerCase());
    return matchesCity && matchesSpec && matchesExam;
  });

  return (
    <div className="bg-[#f8fafc] pt-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="pt-10 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <span>Social Impact & Programs</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Bridging Gaps through{' '}
            <span className="text-brand-600 block sm:inline">Purposeful Education</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Empowering the next generation with social consciousness, competitive excellence, and global recognition.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenApply('Explore Impact Programs')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-full shadow-lg shadow-brand-600/25 hover:shadow-xl transition-all duration-200"
            >
              <span>Explore Programs</span>
              <ArrowDown className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => onOpenApply('View Impact Report')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <span>View Impact Report</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. Awareness & Well-being */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Awareness & Well-being
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Programs designed to nurture the mind and the planet.
              </p>
            </div>
            <button
              onClick={() => onOpenApply('All Well-being Initiatives')}
              className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-700 inline-flex items-center group"
            >
              <span>All Initiatives</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 2 Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Card 1: Mindful Campus Initiative (Spans 7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card card-hover-effect flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="space-y-4 flex-1">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Mindful Campus Initiative
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Integrating mental health support and emotional intelligence workshops directly into the academic curriculum to reduce student burnout and foster resilience.
                  </p>
                </div>

                <div className="space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24/7 Crisis Support for Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Peer-led Empathy Circles</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onOpenApply('Mindful Campus Initiative')}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-full shadow-md transition-all"
                  >
                    Join Program
                  </button>
                </div>
              </div>

              {/* Right Peaceful Thumbnail */}
              <div className="w-full md:w-52 h-56 rounded-2xl overflow-hidden shadow-sm border border-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
                  alt="Mindful living space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Eco-Bridge Project (Spans 5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Eco-Bridge Project
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Leading environmental sustainability efforts through hands-on campus projects and reforestation drives.
                  </p>
                </div>

                {/* Progress Metric */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-700">Trees Planted</span>
                    <span className="text-emerald-600">12,480+</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full w-[78%]"></div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenApply('Eco-Bridge Project Contribution')}
                  className="w-full py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-sm transition-all text-center"
                >
                  Contribute Now
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. College Discovery Engine */}
      <section id="discovery" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              College Discovery Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Find your ideal academic path. Compare top universities, courses, and placement records with data-driven insights.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/80 shadow-md mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
              
              {/* Location */}
              <div className="lg:col-span-3 relative">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search Cities..."
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
              </div>

              {/* Specialization */}
              <div className="lg:col-span-3 relative">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Specialization
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={specFilter}
                    onChange={(e) => setSpecFilter(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="All">All Disciplines</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Management">Management</option>
                    <option value="Science">Data & Science</option>
                  </select>
                </div>
              </div>

              {/* Entrance Exam */}
              <div className="lg:col-span-3 relative">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Entrance Exam
                </label>
                <div className="relative">
                  <Edit3 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="JEE, CAT, NEET..."
                    value={examFilter}
                    onChange={(e) => setExamFilter(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-3 pt-5 sm:pt-4">
                <button
                  onClick={() => {}}
                  className="w-full py-2.5 px-4 bg-[#0047d4] hover:bg-[#003bb3] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Colleges</span>
                </button>
              </div>

            </div>
          </div>

          {/* 3 University Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Rating */}
                  <div className="h-48 relative overflow-hidden bg-slate-100">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{college.rating}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                      {college.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{college.location}</span>
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                        {college.courses}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {college.placement}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Brochure Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenApply(`Brochure Download: ${college.name}`)}
                    className="w-full py-2.5 px-4 text-xs font-bold text-brand-600 bg-brand-50/70 hover:bg-brand-600 hover:text-white border border-brand-200 rounded-xl transition-all duration-200"
                  >
                    Download Brochure
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Global Excellence - Olympiads */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">
                GLOBAL EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                National & International Olympiads
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We provide a platform for students to test their mettle against the best minds globally. Our Olympiad support programs include mentoring from past winners and specialized resource kits.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Row 1 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Math & Science</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Advanced preparation for IMO, IPhO, and regional competitions.</p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Informatics & Coding</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Coding bootcamps designed for competitive programming excellence.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Bento Grid of Visuals */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                
                {/* 500+ Gold Medals Card */}
                <div className="bg-[#f0f4fe] rounded-3xl p-6 text-center flex flex-col items-center justify-center border border-blue-100 shadow-sm">
                  <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 mb-1">
                    500+
                  </div>
                  <div className="text-xs font-bold text-slate-700">
                    Gold Medals
                  </div>
                </div>

                {/* Student Photo */}
                <div className="rounded-3xl overflow-hidden shadow-sm h-40">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                    alt="Student preparing for olympiad"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Awards Ceremony Photo */}
                <div className="rounded-3xl overflow-hidden shadow-sm h-44">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
                    alt="Award ceremony"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Join Today Blue Card */}
                <div 
                  onClick={() => onOpenApply('Olympiad Enrollment')}
                  className="bg-brand-600 hover:bg-brand-700 rounded-3xl p-6 text-white flex flex-col justify-between shadow-md cursor-pointer group transition-colors"
                >
                  <div>
                    <h4 className="text-lg font-bold">Join Today</h4>
                    <p className="text-[11px] text-blue-100 mt-1">Next session starts Oct 15th</p>
                  </div>
                  <div className="pt-2">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Honorary Doctorate Recognition */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl md:rounded-4xl bg-[#334155] p-8 sm:p-12 text-white shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                    Honorary Doctorate Recognition
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Honoring individuals who have made significant contributions to society, education, and innovation. Our global committee selects visionaries for the Honoris Causa degree.
                  </p>
                </div>

                {/* 2 Sub Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">
                      Nomination
                    </h4>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      Peer-nominated excellence across 12 diverse categories.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">
                      Convocation
                    </h4>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      Annual global ceremony at prestigious partner institutions.
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenApply('Nominate a Visionary (Honorary Doctorate)')}
                    className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs rounded-full shadow-md transition-all"
                  >
                    Nominate a Visionary
                  </button>
                </div>
              </div>

              {/* Right Certificate Graphic */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                    alt="Honorary Doctorate Degree and Certificate"
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow-sm">
                    Honoris Causa Recognition
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
