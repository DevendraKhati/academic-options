/**
 * @file ApplyModal.jsx
 * @description Pixel-accurate "Get in Touch" popup modal based on the Figma design.
 * Handles student/partner inquiries, free consultation bookings, and program applications
 * with input validation and a feedback confirmation state.
 */

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ArrowRight, CheckCircle2, ChevronDown, Loader2, AlertCircle } from 'lucide-react';
import { submitFormToEmail } from '../services/mailService';

/**
 * @typedef {Object} ApplyModalProps
 * @property {boolean} isOpen - Whether the modal is currently visible.
 * @property {() => void} onClose - Callback function to close the modal.
 * @property {string} [initialProgram] - Optional context or program title passed from the trigger button.
 */

export default function ApplyModal({ isOpen, onClose, initialProgram = '' }) {
  // Form input field values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  // Controls submission lifecycle
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Synchronize the initial program context into the dropdown selection
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

  /**
   * Handles form submission and triggers automated email dispatch to business@vakyalabs.com
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const trimmedFullName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedFullName || !trimmedEmail || !formData.inquiryType) {
      setSubmitError('Please complete all required fields.');
      setIsSubmitting(false);
      return;
    }

    const result = await submitFormToEmail({
      formName: 'Consultation & Application Form',
      replyTo: trimmedEmail,
      data: {
        'Full Name': trimmedFullName,
        'Email Address': trimmedEmail,
        'Phone Number': trimmedPhone || 'Not provided',
        'Inquiry Type': formData.inquiryType,
        'Message': trimmedMessage || 'No additional message provided'
      }
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.message || 'Unable to submit your application. Please try again.');
    }
  };

  /**
   * Resets form state and triggers the parent onClose callback.
   */
  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError('');
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
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-[#f3f4f6] rounded-[28px] max-w-[560px] w-full p-6 sm:p-10 shadow-2xl border border-slate-200/80 relative overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing when clicking inside
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
          /* Success Screen */
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Thank You!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Your inquiry has been received. Our admissions mentor will get in touch with you shortly at{' '}
              <span className="font-semibold text-brand-600">{formData.email}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div>
              {/* Brand Logo Row */}
              <div className="flex items-center gap-2 mb-3">
                <img 
                  src="/logo.png" 
                  alt="Academic Options" 
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Get in Touch
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-slate-500 mt-1.5 leading-relaxed font-normal">
                Bridging the gap between ambition and opportunity. Start your journey with us today.
              </p>
            </div>

            {/* Form Inputs */}
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
                    maxLength={100}
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
                    maxLength={120}
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
                    maxLength={25}
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

              {/* Row 3: Message Textarea */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  maxLength={2000}
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

              {/* Error Message Notification */}
              {submitError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 bg-[#0047d4] hover:bg-[#003bb3] active:bg-[#003299] text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Secure Your Spot</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
