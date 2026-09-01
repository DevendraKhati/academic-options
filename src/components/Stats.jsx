import React from 'react';
import { Building, Users, DollarSign, ThumbsUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      number: '50+',
      label: 'Top Tier Partners',
      subtext: 'Hiring enterprise & unicorn startups',
      icon: Building,
      color: 'text-brand-600',
      bg: 'bg-brand-50'
    },
    {
      number: '12K+',
      label: 'Graduates Placed',
      subtext: 'Across tech, marketing & design roles',
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      number: '$1M+',
      label: 'Scholarships Awarded',
      subtext: 'Empowering deserving talents globally',
      icon: DollarSign,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      number: '98%',
      label: 'Employer Satisfaction',
      subtext: 'Retention & performance rating',
      icon: ThumbsUp,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50'
    }
  ];

  return (
    <section id="outcomes" className="py-14 bg-[#f8fafc] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-4 p-2"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {item.number}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 font-normal mt-0.5 hidden sm:block">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
