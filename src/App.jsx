/**
 * @file App.jsx
 * @description Main application root component for Academic Options.
 * Sets up global routing (React Router), sticky navigation, application/consultation
 * modal state, and page layout structure.
 * 
 * Performance & SEO Optimization:
 * - Employs route-level code splitting using React.lazy() and Suspense.
 * - This separates subpage JavaScript bundles, cutting initial bundle size and
 *   dramatically improving Google Core Web Vitals (Largest Contentful Paint & INP).
 */

import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import ScrollToTop from './components/ScrollToTop';

// Eagerly loaded critical landing page for immediate First Contentful Paint (FCP)
import HomePage from './pages/HomePage';

// Lazy-loaded secondary routes for optimal code splitting & faster bundle delivery
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const DiscoveryPage = lazy(() => import('./pages/DiscoveryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BootcampPage = lazy(() => import('./pages/BootcampPage'));

/**
 * Lightweight fallback spinner displayed during route transitions
 */
function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-3" role="status" aria-label="Loading page">
      <div className="w-10 h-10 border-3 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Loading content...</span>
    </div>
  );
}

export default function App() {
  // Global state to manage the "Get in Touch" / Apply consultation modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  /**
   * Opens the application / consultation modal with an optional preselected program or inquiry type.
   * @param {string} programName - The name or context of the program (e.g., 'Book Free Consultation', 'Web Development').
   */
  const handleOpenApply = (programName = '') => {
    setSelectedProgram(programName);
    setModalOpen(true);
  };

  /**
   * Closes the modal and resets the selected program state.
   */
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProgram('');
  };

  return (
    <Router>
      {/* Automatically scrolls window to top on route navigation */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-[#f8fafc] selection:bg-brand-500 selection:text-white">
        
        {/* Sticky Header Navigation */}
        <Navbar onOpenApply={handleOpenApply} />

        {/* Dynamic Route Viewports with Suspense Boundary for Code Splitting */}
        <main className="flex-grow">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              {/* Landing Homepage */}
              <Route path="/" element={<HomePage onOpenApply={handleOpenApply} />} />

              {/* About Us Page (Mission, Timeline, Leadership, Values) */}
              <Route path="/about" element={<AboutPage onOpenApply={handleOpenApply} />} />

              {/* Contact Us Page */}
              <Route path="/contact" element={<ContactPage onOpenApply={handleOpenApply} />} />

              {/* Social Impact & Programs Page (Well-being, Olympiads, Honorary Doctorates) */}
              <Route path="/impact" element={<ImpactPage onOpenApply={handleOpenApply} />} />

              {/* College Discovery Engine Page (Stacked University Cards & Comparison Tool) */}
              <Route path="/discovery" element={<DiscoveryPage onOpenApply={handleOpenApply} />} />

              {/* Technical Bootcamps Page (Engineering tracks, curriculum, outcomes) */}
              <Route path="/bootcamps" element={<BootcampPage onOpenApply={handleOpenApply} />} />

              {/* Fallback Catch-all Route redirects to HomePage */}
              <Route path="*" element={<HomePage onOpenApply={handleOpenApply} />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Multi-column Footer */}
        <Footer onOpenApply={handleOpenApply} />

        {/* Interactive "Get in Touch" / Apply Consultation Modal */}
        <ApplyModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          initialProgram={selectedProgram}
        />
      </div>
    </Router>
  );
}
