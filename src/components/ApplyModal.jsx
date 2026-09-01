import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

export default function ApplyModal({ isOpen, onClose, initialProgram = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      if (initialProgram.toLowerCase().includes('consultation')) {
        setFormData(prev => ({ ...prev, inquiryType: 'Book Free Consultation' }));
      } else if (initialProgram.toLowerCase().includes('partner')) {
        setFormData(prev => ({ ...prev, inquiryType: 'Partner With Us (Enterprise)' }));
      } else if (initialProgram.toLowerCase().includes('bootcamp')) {
        setFormData(prev => ({ ...prev, inquiryType: 'Advanced Bootcamp' }));
      } else if (initialProgram.toLowerCase().includes('internship') || initialProgram.toLowerCase().includes('c2c')) {
        setFormData(prev => ({ ...prev, inquiryType: 'Campus to Cubicle (C2C)' }));
      } else {
        setFormData(prev => ({ ...prev, inquiryType: initialProgram }));
      }
    }
  }, [initialProgram, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="bg-[#f3f4f6] rounded-[28px] max-w-[560px] w-full p-6 sm:p-10 shadow-2xl border border-slate-200/80 relative overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Thank You!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your inquiry has been received. Our team will get in touch with you shortly at <span className="font-semibold text-brand-600">{formData.email}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-md transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div>
              {/* Brand Logo Row */}
              <div className="flex items-center gap-2 mb-3">
                {/* 6-dot Asterisk Logo Icon */}
                <svg className="w-5 h-5 text-brand-600 fill-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="4" r="2.2" />
                  <circle cx="12" cy="20" r="2.2" />
                  <circle cx="5" cy="8" r="2.2" />
                  <circle cx="19" cy="16" r="2.2" />
                  <circle cx="5" cy="16" r="2.2" />
                  <circle cx="19" cy="8" r="2.2" />
                  <circle cx="12" cy="12" r="1.8" />
                </svg>
                <span className="text-base font-bold text-brand-600 tracking-tight">
                  Academic Options
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Get in Touch
              </h2>

              {/* Description */}
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed font-normal">
                Bridging the gap between ambition and opportunity. Start your journey with us today.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 placeholder:text-slate-300 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 placeholder:text-slate-300 shadow-sm transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number (Optional) & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 placeholder:text-slate-300 shadow-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-700 shadow-sm appearance-none cursor-pointer pr-10 transition-all"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Book Free Consultation">Book Free Consultation</option>
                      <option value="Partner With Us (Enterprise)">Partner With Us / Enterprise</option>
                      <option value="Campus to Cubicle (C2C)">Campus to Cubicle (C2C Track)</option>
                      <option value="Advanced Bootcamp">Advanced Training Bootcamp</option>
                      <option value="Internship Application">Internship Application</option>
                      <option value="ESG Hub Initiative">ESG Hub Initiative</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 placeholder:text-slate-300 shadow-sm transition-all resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 pt-1 text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Your data is secure. We respect your privacy and only use your information to provide relevant solutions. View our{' '}
                  <a href="#" className="text-brand-600 font-medium underline hover:text-brand-700">
                    Privacy Policy
                  </a>.
                </span>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#0047d4] hover:bg-[#003bb3] active:bg-[#003299] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Secure Your Spot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
