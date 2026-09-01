import React from 'react';
import { 
  Megaphone, 
  Cpu, 
  Server, 
  Code, 
  ArrowRight, 
  Clock, 
  GraduationCap, 
  Zap,
  Check
} from 'lucide-react';

export default function Bootcamps({ onOpenApply }) {
  const bootcamps = [
    {
      id: 'marketing-bootcamp',
      title: 'Digital Marketing',
      description: 'Master SEO, SEM, paid media campaigns, growth metrics and brand storytelling.',
      icon: Megaphone,
      duration: '8 Weeks',
      format: 'Live Online Cohort',
      highlights: ['Google & Meta Ads', 'SEO Growth Engine', 'Live Budget Project']
    },
    {
      id: 'ai-bootcamp',
      title: 'AI & Machine Learning',
      description: 'Build production AI applications, prompt engineering pipelines, and predictive algorithms.',
      icon: Cpu,
      duration: '12 Weeks',
      format: 'Practitioner-Led',
      highlights: ['LLMs & RAG Systems', 'PyTorch / TensorFlow', 'Capstone Deployment']
    },
    {
      id: 'node-bootcamp',
      title: 'Node.js Backend',
      description: 'Architect resilient backend microservices, performant REST/GraphQL APIs, and cloud infrastructure.',
      icon: Server,
      duration: '10 Weeks',
      format: 'Hands-on Coding',
      highlights: ['Express & NestJS', 'PostgreSQL & Redis', 'Docker & CI/CD']
    },
    {
      id: 'fullstack-bootcamp',
      title: 'Full Stack Web',
      description: 'Design and deploy responsive, modern web applications with React, Next.js, and TypeScript.',
      icon: Code,
      duration: '12 Weeks',
      format: 'Full Immersion',
      highlights: ['React 19 & Next.js', 'Tailwind & UI systems', 'Cloudflare Serverless']
    }
  ];

  return (
    <section id="bootcamps" className="py-20 md:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Accelerated Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Advanced Training Bootcamps
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Master in-demand skills with our practitioner-led tracks. 100% project-based with 1-on-1 mentorship.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bootcamps.map((camp) => {
            const Icon = camp.icon;
            return (
              <div
                key={camp.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-105 transition-transform duration-200 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {camp.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {camp.description}
                  </p>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                    <div className="flex items-center text-xs font-semibold text-slate-600 gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>{camp.duration} • {camp.format}</span>
                    </div>
                    {camp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-500 gap-1.5">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenApply(`Bootcamp: ${camp.title}`)}
                    className="inline-flex items-center text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenApply('View all Bootcamps')}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-full shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View all Bootcamps</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
