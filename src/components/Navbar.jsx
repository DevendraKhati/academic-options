/**
 * @file Navbar.jsx
 * @description Global sticky navigation header component with glassmorphism styling,
 * real-time search trigger, active route indicators, and mobile drawer menu.
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Search
} from 'lucide-react';

/**
 * @param {Object} props
 * @param {(programName?: string) => void} props.onOpenApply - Function to trigger the application modal.
 */
export default function Navbar({ onOpenApply }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Listen to scroll events to apply blurred glassmorphic header style when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smoothly navigates to anchor tags on the home/discovery pages or switches routes.
   * @param {string} href - Target route or anchor (e.g., '/#programs', '/discovery').
   * @param {() => void} [action] - Optional modal trigger action.
   */
  const handleNavClick = (href, action) => {
    setMobileMenuOpen(false);
    if (action) {
      action();
      return;
    }
    if (href.startsWith('/#') || href.includes('#')) {
      const [path, hash] = href.split('#');
      const targetPath = path || '/';
      if (location.pathname !== targetPath) {
        navigate(href);
      } else {
        const elem = document.getElementById(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Primary navigation item definitions
  const navLinks = [
    { name: 'Bootcamps', path: '/bootcamps' },
    { name: 'Launchpad', path: '/#programs' },
    { name: 'B2B SaaS', path: '/#ecosystem' },
    { name: 'Discovery', path: '/discovery' },
    { name: 'Impact', path: '/impact' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  /**
   * Handles search form submission from the header search box, redirecting to Discovery.
   */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/discovery');
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-white/90 backdrop-blur-md py-3.5 md:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Emblem */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img 
              src="/logo.png" 
              alt="Academic Options Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isCurrent = link.path === location.pathname;
              if (link.path.includes('#')) {
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-50/60 rounded-lg transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    if (isCurrent) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    isCurrent
                      ? 'text-brand-600 bg-brand-50 font-bold border-b-2 border-brand-600'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-brand-50/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar & Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Search Input Box */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200/60 focus:bg-white border border-transparent focus:border-brand-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500/20 w-36 lg:w-44 transition-all"
              />
            </form>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenApply('Get Started')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-full shadow-md shadow-brand-600/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenApply('Get Started')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-brand-600 rounded-full"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          
          {/* Mobile Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative mb-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search colleges or programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </form>

          {/* Mobile Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              if (link.path.includes('#')) {
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname === link.path) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg ${
                    location.pathname === link.path
                      ? 'text-brand-600 bg-brand-50 font-bold'
                      : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply('Get Started');
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-brand-600 rounded-xl shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
