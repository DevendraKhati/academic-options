/**
 * @file ContactPage.jsx
 * @description "Get in Touch" contact page.
 * Includes a contact form, physical address/contact info, and a FAQ accordion.
 * 
 * @param {Object} props
 * @param {(programName?: string) => void} props.onOpenApply - Opens the consultation modal
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

export default function ContactPage({ onOpenApply }) {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How can I join the bootcamp?",
      answer: "You can join our bootcamps by applying through our website. Once you submit your application, our admissions team will review your profile and reach out for a quick assessment and enrollment details."
    },
    {
      question: "How do I partner with Academic Options?",
      企业: "We are always looking for industry partners! Please fill out the contact form above with the subject 'Partnership Inquiry', or email us directly. Our partnerships team will get back to you within 24 hours."
    },
    {
      question: "Are the programs available internationally?",
      answer: "Yes, many of our training programs and bootcamps are available online and accessible globally. However, specific placement opportunities may vary by region."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <Helmet>
        <title>Contact Us | Academic Options</title>
        <meta name="description" content="Get in touch with Academic Options. Whether you're a student seeking growth or a corporation looking for talent, we're here to connect." />
        <link rel="canonical" href="https://academicoptions.com/contact" />
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
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">Subject</label>
                <select 
                  id="subject" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors appearance-none"
                >
                  <option value="">Select a subject...</option>
                  <option value="Student Inquiry">Student Inquiry</option>
                  <option value="Partnership Inquiry">Partnership Inquiry</option>
                  <option value="General Support">General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 px-6 text-white bg-brand-600 hover:bg-brand-700 font-bold rounded-xl shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                Send Message
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
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 sm:p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer || faq.企业}
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
