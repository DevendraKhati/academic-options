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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleOpenApply = (programName = '') => {
    setSelectedProgram(programName);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProgram('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8fafc] selection:bg-brand-500 selection:text-white">
        
        {/* Sticky Header */}
        <Navbar onOpenApply={handleOpenApply} />

        {/* Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenApply={handleOpenApply} />} />
            <Route path="/about" element={<AboutPage onOpenApply={handleOpenApply} />} />
            <Route path="/impact" element={<ImpactPage onOpenApply={handleOpenApply} />} />
            <Route path="/discovery" element={<DiscoveryPage onOpenApply={handleOpenApply} />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onOpenApply={handleOpenApply} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenApply={handleOpenApply} />

        {/* Interactive "Get in Touch" / Apply Modal */}
        <ApplyModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          initialProgram={selectedProgram}
        />
      </div>
    </Router>
  );
}
