/**
 * @file App.jsx
 * @description Main application root component for Academic Options.
 * Sets up global routing (React Router), sticky navigation, application/consultation
 * modal state, and page layout structure.
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImpactPage from './pages/ImpactPage';
import DiscoveryPage from './pages/DiscoveryPage';
import ContactPage from './pages/ContactPage';

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

        {/* Dynamic Route Viewports */}
        <main className="flex-grow">
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

            {/* Fallback Catch-all Route redirects to HomePage */}
            <Route path="*" element={<HomePage onOpenApply={handleOpenApply} />} />
          </Routes>
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
