import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Megaphone, 
  TrendingUp, 
  Palette, 
  PenTool, 
  ArrowRight,
  Briefcase,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Categories({ onOpenApply }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Frontend, Backend & Full-Stack modern web engineering',
      icon: Code2,
      tag: 'Engineering',
      rolesCount: '48 Active Openings',
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Data analytics, predictive models, pipelines & visualization',
      icon: BarChart3,
      tag: 'Data',
      rolesCount: '36 Active Openings',
      skills: ['Python', 'SQL', 'Pandas', 'Machine Learning', 'PowerBI']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'SEO, performance ads, growth hacking & social media strategy',
      icon: Megaphone,
      tag: 'Marketing',
      rolesCount: '42 Active Openings',
      skills: ['Google Ads', 'SEO / SEM', 'Meta Ads', 'Analytics', 'Copywriting']
    },
    {
      id: 'biz-dev',
      title: 'Business Development',
      description: 'B2B sales strategy, lead generation, client relationships & growth',
      icon: TrendingUp,
      tag: 'Business',
      rolesCount: '30 Active Openings',
      skills: ['B2B Sales', 'CRM Systems', 'Pitch Decks', 'Negotiation', 'Market Research']
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Design systems, Figma wireframing, user research & prototyping',
      icon: Palette,
      tag: 'Design',
      rolesCount: '25 Active Openings',
      skills: ['Figma', 'Wireframing', 'User Research', 'Design Systems', 'Usability Testing']
    },
    {
      id: 'content-writing',
      title: 'Content Writing',
      description: 'Copywriting, technical blogging, PR narratives & editorial strategy',
      icon: PenTool,
      tag: 'Marketing',
      rolesCount: '28 Active Openings',
      skills: ['Technical Writing', 'SEO Copy', 'Storytelling', 'Editorial', 'Social Copy']
    }
  ];

  const filterTabs = ['All', 'Engineering', 'Data', 'Marketing', 'Business', 'Design'];

  const filteredCategories = selectedFilter === 'All' 
    ? categories 
    : categories.filter(c => c.tag.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="programs" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Internship Categories
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Discover opportunities designed to launch your career across high-demand domains.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                selectedFilter === tab
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onOpenApply(`Internship: ${cat.title}`)}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-card card-hover-effect cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50/80 border border-brand-100/80 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                      {cat.rolesCount}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                    {cat.skills.length > 3 && (
                      <span className="text-[11px] font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                        +{cat.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-brand-600 transition-colors">
                  <span>View Details & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenApply('View all Programs')}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-full shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View all Programs</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </section>
  );
}
