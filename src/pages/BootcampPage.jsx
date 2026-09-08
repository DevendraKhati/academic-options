/**
 * @file BootcampPage.jsx
 * @description Dedicated "Technical Bootcamps" page based on the Figma design system.
 * Highlights intensive, practitioner-led engineering tracks, curriculum architecture,
 * real-world capstone projects, placement statistics, and FAQ.
 * 
 * Sections:
 * 1. Hero — Dynamic headline, dual CTAs, and live cohort status badges.
 * 2. Key Pillars — 3 core benefits (Live Mentorship, Production Capstones, Placement Network).
 * 3. Tracks Catalog — Filterable grid of 6 in-demand technical bootcamps.
 * 4. 4-Stage Learning Roadmap — Week-by-week curriculum journey.
 * 5. Outcome Metrics — Placement percentage, salary jumps, and hiring partner logos.
 * 6. FAQ Accordion — Common admissions & schedule questions.
 * 7. Bottom CTA Banner — Fast-track enrollment trigger.
 * 
 * SEO Optimization:
 * - Google Helpful Content compliant title & description
 * - Course & BreadcrumbList Schema.org structured data for Google Education Rich Results
 * - Open Graph & Twitter card graph
 * 
 * @param {Object} props
 * @param {(programName?: string) => void} props.onOpenApply - Opens the consultation modal
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code2, 
  Cpu, 
  Server, 
  Globe2, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  FileText, 
  Users2, 
  Sparkles,
  Layers,
  Terminal,
  Laptop
} from 'lucide-react';

export default function BootcampPage({ onOpenApply }) {
  // Selected category filter tab
  const [activeTab, setActiveTab] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);

  // Technical Bootcamp Tracks
  const tracks = [
    {
      id: 'fullstack-web',
      title: 'Full-Stack Web Engineering',
      category: 'Software Engineering',
      badge: 'Most Popular',
      description: 'Master modern frontend & backend architectures. Build resilient enterprise applications from scratch.',
      icon: Code2,
      duration: '12 Weeks',
      pace: 'Full-Time / Part-Time',
      skills: ['React 19', 'TypeScript', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker'],
      outcomes: [
        'Production-deployed SaaS Capstone',
        'End-to-end testing with Vitest & Playwright',
        'Microservices API architecture'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning Engineering',
      category: 'Artificial Intelligence',
      badge: 'High Demand',
      description: 'Go beyond theory. Build generative AI systems, RAG pipelines, fine-tune LLMs, and deploy production ML models.',
      icon: Cpu,
      duration: '14 Weeks',
      pace: 'Weekend / Evenings',
      skills: ['Python', 'PyTorch', 'LLMs & RAG', 'LangChain', 'Vector DBs', 'FastAPI'],
      outcomes: [
        'Production Generative AI Search Engine',
        'Model optimization & GPU quantization',
        'Real-time streaming agent architectures'
      ]
    },
    {
      id: 'backend-cloud',
      title: 'Backend & Cloud Systems',
      category: 'Software Engineering',
      badge: 'Enterprise Focus',
      description: 'Architect high-throughput distributed backends, scalable REST/gRPC microservices, and automated cloud pipelines.',
      icon: Server,
      duration: '10 Weeks',
      pace: 'Flexible Cohort',
      skills: ['Go', 'Node.js', 'Redis', 'Kubernetes', 'AWS & Cloudflare', 'Kafka'],
      outcomes: [
        'High-concurrency payment gateway clone',
        'Distributed caching and rate-limiting',
        'Zero-downtime CI/CD deployment'
      ]
    },
    {
      id: 'data-engineering',
      title: 'Big Data & Modern Data Stack',
      category: 'Data & Analytics',
      badge: 'Trending',
      description: 'Design automated ETL/ELT pipelines, manage petabyte-scale data warehouses, and master modern data lakehouses.',
      icon: Database,
      duration: '12 Weeks',
      pace: 'Practitioner-Led',
      skills: ['Python', 'SQL', 'Apache Spark', 'Snowflake', 'dbt', 'Airflow'],
      outcomes: [
        'Automated real-time streaming ETL pipeline',
        'Enterprise analytics warehouse design',
        'Data governance & pipeline testing'
      ]
    },
    {
      id: 'cloud-devops',
      title: 'DevOps & Site Reliability (SRE)',
      category: 'Cloud & Infrastructure',
      badge: 'Industry Essential',
      description: 'Master infrastructure as code, container orchestration, observability, and robust automated cloud deployments.',
      icon: Layers,
      duration: '10 Weeks',
      pace: 'Weekend Cohort',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'AWS'],
      outcomes: [
        'Multi-region Kubernetes deployment',
        'Automated GitOps pipeline with ArgoCD',
        'Comprehensive Grafana monitoring stack'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Application Defense',
      category: 'Security',
      badge: 'Critical Need',
      description: 'Understand vulnerability assessment, penetration testing, secure code review, and cloud security architecture.',
      icon: ShieldCheck,
      duration: '12 Weeks',
      pace: 'Hands-on Lab Focus',
      skills: ['OWASP Top 10', 'Linux Hardening', 'Burp Suite', 'Cloud Security', 'SIEM'],
      outcomes: [
        'Hands-on penetration test on mock bank',
        'Automated static code security scanner',
        'Incident response protocol formulation'
      ]
    }
  ];

  // Learning Roadmap Milestones
  const roadmap = [
    {
      phase: 'Phase 01',
      title: 'Core Architecture & Foundations',
      duration: 'Weeks 1–3',
      description: 'Deep-dive into language fundamentals, modern toolchains, design patterns, and clean code practices.'
    },
    {
      phase: 'Phase 02',
      title: 'Advanced Systems & Cloud Infrastructure',
      duration: 'Weeks 4–7',
      description: 'Constructing robust microservices, database schemas, asynchronous queues, and automated test suites.'
    },
    {
      phase: 'Phase 03',
      title: 'Production Capstone Immersion',
      duration: 'Weeks 8–10',
      description: 'Collaborate in agile squads to build a full-scale commercial project reviewed by senior tech leads.'
    },
    {
      phase: 'Phase 04',
      title: 'Technical Interviews & Placement Match',
      duration: 'Weeks 11–12',
      description: 'Live whiteboard coding mock interviews, system design drills, resume reviews, and direct referral pitches.'
    }
  ];

  // Bootcamp FAQ items
  const bootcampFaqs = [
    {
      q: 'Who are the instructors and mentors in the bootcamps?',
      a: 'All our instructors are active senior practitioners, staff engineers, and tech leads working at top technology firms. You get direct code reviews and 1-on-1 mentorship sessions weekly.'
    },
    {
      q: 'Can I balance these bootcamps with a college schedule or full-time job?',
      a: 'Yes! Our cohorts are specifically tailored for working professionals and university students, featuring weekend live masterclasses, recorded sessions, and flexible office hours.'
    },
    {
      q: 'What kind of career and placement support do you provide?',
      a: 'Our placement team provides portfolio polishing, technical mock interviews (data structures, algorithms, and system design), salary negotiation coaching, and direct warm intros to our 200+ corporate hiring partners.'
    },
    {
      q: 'Are there scholarship opportunities or flexible installment plans?',
      a: 'Yes, we offer merit-based scholarships through our technical admissions assessment, as well as zero-cost EMI payment plans.'
    }
  ];

  // Filter tracks based on active tab
  const filteredTracks = activeTab === 'All' 
    ? tracks 
    : tracks.filter(t => t.category === activeTab);

  // Schema.org Structured Data for Google Education / Course Rich Results
  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Technical Bootcamps at Academic Options",
    "description": "Intensive practitioner-led technical training bootcamps in Full-Stack Web, AI/ML, Cloud DevOps, and Data Engineering.",
    "itemListElement": tracks.map((track, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": track.title,
        "description": track.description,
        "provider": {
          "@type": "Organization",
          "name": "Academic Options",
          "sameAs": "https://academicoption.in"
        },
        "timeRequired": track.duration
      }
    }))
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://academicoption.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Technical Bootcamps",
        "item": "https://academicoption.in/bootcamps"
      }
    ]
  };

  return (
    <div className="bg-[#f8fafc] pt-24 pb-20 min-h-screen">
      <Helmet>
        {/* Primary Page Title (Max 60 chars) */}
        <title>Technical Bootcamps | Full Stack, AI & Cloud Training</title>

        {/* Meta Description (Max 160 chars) */}
        <meta 
          name="description" 
          content="Master in-demand tech skills with practitioner-led bootcamps in Full-Stack, AI/ML, Cloud & DevOps. 100% project-based with direct placement pathways." 
        />
        <link rel="canonical" href="https://academicoption.in/bootcamps" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Technical Bootcamps | Full Stack, AI & Cloud Training" />
        <meta property="og:description" content="Master in-demand tech skills with practitioner-led bootcamps in Full-Stack, AI/ML, Cloud & DevOps. 100% project-based with direct placement pathways." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://academicoption.in/bootcamps" />
        <meta property="og:image" content="https://academicoption.in/logo.png" />
        <meta property="og:site_name" content="Academic Options" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Bootcamps | Academic Options" />
        <meta name="twitter:description" content="Accelerate your technical career with practitioner-led engineering cohorts and direct hiring pathways." />
        <meta name="twitter:image" content="https://academicoption.in/logo.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(courseStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="pt-10 pb-16 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-brand-600 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
                <span>Practitioner-Led Engineering Cohorts</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Master Real-World Tech.{' '}
                <span className="text-brand-600 block sm:inline">Launch Top Careers.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Bridge the divide between academic theory and enterprise engineering standards. Build scalable production applications guided by senior engineers from high-growth tech companies.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onOpenApply('Technical Bootcamp Enrollment')}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-brand-600/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Explore Cohorts & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenApply('Download Bootcamp Syllabus')}
                  className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-100/80 active:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Download Syllabus</span>
                </button>
              </div>

              {/* Quick Proof Metrics */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">94%</div>
                  <div className="text-xs text-slate-500 font-medium">Placement Rate</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">1:1</div>
                  <div className="text-xs text-slate-500 font-medium">Weekly Mentorship</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">₹14.2L</div>
                  <div className="text-xs text-slate-500 font-medium">Avg Starting CTC</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Students coding together in an interactive technical bootcamp lab"
                  className="w-full h-[360px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Glass Highlight Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Next Cohort Starting</div>
                    <div className="text-sm font-bold text-slate-900">Applications Open for Upcoming Batch</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Pillars Section */}
      <section className="py-14 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Live Practitioner Guidance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn directly from lead engineers at Tier-1 tech firms. Gain real-world architectural perspective with weekly 1-on-1 code reviews.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">100% Production Capstones</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No trivial tutorial clones. You will build and deploy distributed, scalable applications with real databases, authentication, and CI/CD pipelines.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hiring Partner Pipeline</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct portfolio showcases to our network of 200+ partner companies, complemented by rigorous system design and algorithm interview prep.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Technical Tracks Catalog */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Technical Tracks
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Curated curricula designed to take you from foundational fundamentals to job-ready engineering competence.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['All', 'Software Engineering', 'Artificial Intelligence', 'Data & Analytics', 'Cloud & Infrastructure', 'Security'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    activeTab === tab
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div 
                  key={track.id}
                  className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-blue-50 border border-blue-100 text-brand-700">
                        {track.badge}
                      </span>
                    </div>

                    {/* Track Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                      {track.title}
                    </h3>

                    {/* Track Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {track.description}
                    </p>

                    {/* Duration & Pace */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 py-3 border-y border-slate-100 mb-6">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-600" />
                        <span>{track.duration}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>{track.pace}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mb-6">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Technologies Mastered
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {track.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 text-[11px] font-semibold bg-slate-50 text-slate-700 rounded-lg border border-slate-200/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Capstone Deliverables */}
                    <div className="space-y-2 mb-8">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Key Outcomes
                      </div>
                      {track.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply CTA Button */}
                  <button
                    onClick={() => onOpenApply(track.title)}
                    className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-brand-600/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply for Cohort</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Four-Phase Curriculum Roadmap */}
      <section className="py-20 bg-white border-y border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How the Curriculum Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A structured progression engineered to build confidence, independence, and technical depth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {roadmap.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-extrabold text-brand-600 uppercase tracking-wider mb-1">
                    {step.phase}
                  </div>
                  <div className="text-xs font-semibold text-slate-400 mb-3">
                    {step.duration}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about our technical cohorts and enrollment process.
            </p>
          </div>

          <div className="space-y-4">
            {bootcampFaqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 sm:p-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Final Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-700 via-brand-600 to-indigo-700 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Accelerate Your Tech Career?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-normal">
              Join hundreds of successful graduates who transitioned from classrooms to high-growth engineering roles. Scholarships and zero-cost EMI plans available.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenApply('Bootcamp Early Application')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-600 hover:bg-blue-50 font-bold text-sm sm:text-base rounded-2xl shadow-lg transition-all duration-200 cursor-pointer"
              >
                Apply for Next Cohort
              </button>
              <button
                onClick={() => onOpenApply('Admissions Counseling Call')}
                className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-2xl border border-white/25 transition-all duration-200 cursor-pointer"
              >
                Schedule Advisor Call
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
