import React from 'react';
import { Star, Quote, MessageSquareHeart, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Chen',
      role: 'Software Engineering Intern',
      company: 'Placed at CloudTech Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      text: 'The internship program was the turning point in my career. The hands-on exposure and direct mentorship gave me the confidence to land a full-time role at a fast-growing tech firm.',
      stars: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Data Analyst Trainee',
      company: 'Placed at Nexus Analytics',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      text: 'Academic Options bridges the gap perfectly. Not only did I learn modern data stacks, but the live corporate projects gave me real portfolio talking points for every single interview!',
      stars: 5
    },
    {
      name: 'David Nguyen',
      role: 'Digital Marketing Specialist',
      company: 'Placed at GrowthWave Media',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      text: 'The 1-on-1 mentorship and practical campaign experience were incredible. Within 3 weeks of graduating, I received two job offers from top growth agencies.',
      stars: 5
    }
  ];

  return (
    <section id="impact" className="py-20 md:py-28 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Interns Say
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Hear from students and career-switchers who transformed their careers through our ecosystem.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* User Profile Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-13 h-13 rounded-full object-cover border-2 border-brand-100 shadow-sm"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <p className="text-xs text-brand-600 font-medium">{item.role}</p>
                    <p className="text-[11px] text-slate-400 font-normal">{item.company}</p>
                  </div>
                </div>

                {/* Quote Body */}
                <div className="relative mb-6">
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
              </div>

              {/* Stars Rating */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(item.stars)].map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">Verified Graduate</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
