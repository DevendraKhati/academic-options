import React from 'react';
import { 
  UserCheck, 
  BookOpen, 
  FolderKanban, 
  Award, 
  MessageSquareCode, 
  Trophy,
  ArrowRight,
  Workflow
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Registration & Assessment',
      description: 'Comprehensive profile review & skill assessment to match ideal tracks.',
      icon: UserCheck
    },
    {
      step: '02',
      title: 'Immersive Training',
      description: 'Intensive practitioner-led bootcamps with practical live sessions.',
      icon: BookOpen
    },
    {
      step: '03',
      title: 'Live Projects',
      description: 'Build real-world client deliverables alongside corporate partners.',
      icon: FolderKanban
    },
    {
      step: '04',
      title: 'Certification',
      description: 'Earn an industry-backed verified credential verifying mastery.',
      icon: Award
    },
    {
      step: '05',
      title: 'Interview Preparation',
      description: '1-on-1 mock interviews, portfolio audits, and salary negotiation.',
      icon: MessageSquareCode
    },
    {
      step: '06',
      title: 'Direct Placement',
      description: 'Priority interviews with hiring partners and guaranteed job referrals.',
      icon: Trophy
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Success Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How it works - From Classroom to Corporate
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A streamlined step-by-step pathway connecting ambition to professional success with mentorship every step.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between group relative"
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 group-hover:text-brand-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
