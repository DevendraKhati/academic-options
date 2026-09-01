import React from 'react';
import { ArrowRight, Sparkles, Handshake } from 'lucide-react';

export default function CtaBanner({ onOpenApply }) {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-3xl md:rounded-4xl bg-gradient-to-r from-brand-700 via-brand-600 to-blue-700 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl shadow-brand-700/20 overflow-hidden">
          
          {/* Decorative Subtle Background Orbs */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Take The Next Step</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to cross the bridge?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto font-normal leading-relaxed">
              Join thousands of students and launch your dream career today with leading companies hiring now.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenApply('Apply for Programs')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-brand-700 bg-white hover:bg-slate-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Apply for Programs</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={() => onOpenApply('Partner With Us')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md rounded-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Handshake className="w-4 h-4 mr-2" />
                <span>Partner With Us</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
