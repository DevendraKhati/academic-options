/**
 * @file ContactPage.jsx
 * @description "Get in Touch" contact page.
 * Includes an automated contact form forwarding to business@vakyalabs.com,
 * physical address/contact info, and a FAQ accordion.
 * 
 * @param {Object} props
 * @param {(programName?: string) => void} props.onOpenApply - Opens the consultation modal
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitFormToEmail } from '../services/mailService';

export default function ContactPage({ onOpenApply }) {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  // Form input state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Submission lifecycle state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const faqs = [
    {
      question: "How can I join the bootcamp?",
      answer: "You can join our bootcamps by applying through our website. Once you submit your application, our admissions team will review your profile and reach out for a quick assessment and enrollment details."
    },
    {
      question: "How do I partner with Academic Options?",
      answer: "We are always looking for industry partners! Please fill out the contact form above with the subject 'Partnership Inquiry', or email us directly. Our partnerships team will get back to you within 24 hours."
    },
    {
      question: "Are the programs available internationally?",
      answer: "Yes, many of our training programs and bootcamps are available online and accessible globally. However, specific placement opportunities may vary by region."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const result = await submitFormToEmail({
      formName: 'Contact Us Form',
      replyTo: formData.email,
      data: {
        'Full Name': formData.name,
        'Email Address': formData.email,
        'Subject / Inquiry': formData.subject,
        'Message': formData.message
      }
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSubmitError(result.message || 'Unable to submit your message. Please try again.');
    }
  };

  // FAQPage Schema structured data for Google Rich Results
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const contactBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://academicoptions.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://academicoptions.com/contact"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Helmet>
        {/* Primary Page Title (Max 60 chars) */}
        <title>Contact Academic Options | Lucknow Office & Support</title>

        {/* Meta Description (Max 160 chars) */}
        <meta 
          name="description" 
          content="Get in touch with Academic Options. Visit our Lucknow center, call +91-7303261295, or send an inquiry for bootcamps, partnerships, and admissions counseling." 
        />
        <link rel="canonical" href="https://academicoptions.com/contact" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Academic Options | Lucknow Office & Inquiries" />
        <meta property="og:description" content="Get in touch with Academic Options. Connect with our team for student bootcamps, enterprise partnerships, and career counseling." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://academicoptions.com/contact" />
        <meta property="og:image" content="https://academicoptions.com/logo.png" />
        <meta property="og:site_name" content="Academic Options" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Academic Options | Lucknow Office" />
        <meta name="twitter:description" content="Reach out to Academic Options for career development, enterprise partnerships, and admissions counseling." />
        <meta name="twitter:image" content="https://academicoptions.com/logo.png" />

        {/* Google Rich FAQ & Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactBreadcrumbs)}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bridging the gap between ambition and opportunity. Whether you're a student seeking growth or a corporation looking for talent, we're here to connect.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100">
            <h2 className="text-3xl font-bold text-brand-600 mb-8">Send a Message</h2>

            {/* Success Feedback Banner */}
            {submitSuccess && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm">Message Sent Successfully!</div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Thank you for reaching out. We have received your inquiry and our team will get back to you shortly.
                  </div>
                </div>
              </div>
            )}

            {/* Error Feedback Banner */}
            {submitError && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-sm">Submission Error</div>
                  <div className="text-xs text-rose-700 mt-0.5">{submitError}</div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">Subject</label>
                <div className="relative">
                  <select 
                    id="subject" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors appearance-none pr-10 cursor-pointer"
                  >
                    <option value="">Select a subject...</option>
                    <option value="Student Inquiry">Student Inquiry</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="General Support">General Support</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 text-white bg-brand-600 hover:bg-brand-700 font-bold rounded-xl shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/30 transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100 h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Presence</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Lucknow, Uttar Pradesh</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Adil Nagar, Kalyanpur, Lucknow<br/>
                      22022
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full" />

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+917303261295" className="text-slate-600 font-medium hover:text-brand-600 transition-colors">
                    +91-7303261295
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:hello@academicoptions.com" className="text-slate-600 font-medium hover:text-brand-600 transition-colors">
                    hello@academicoptions.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know about our programs and partnerships.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 sm:p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
