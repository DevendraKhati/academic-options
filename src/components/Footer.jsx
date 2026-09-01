import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Heart
} from 'lucide-react';

export default function Footer({ onOpenApply }) {
  return (
    <footer id="about" className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Col 1: Brand Info (Spans 4 cols) */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <circle cx="12" cy="4" r="2.2" />
                  <circle cx="12" cy="20" r="2.2" />
                  <circle cx="5" cy="8" r="2.2" />
                  <circle cx="19" cy="16" r="2.2" />
                  <circle cx="5" cy="16" r="2.2" />
                  <circle cx="19" cy="8" r="2.2" />
                  <circle cx="12" cy="12" r="1.8" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Academic Options
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Bridging the gap between ambitious talent and top-tier global enterprise opportunities through world-class training and direct corporate pathways.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-white hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-white hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-white hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-white hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 hover:text-white hover:bg-brand-600 flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (Spans 2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link to="/#programs" className="hover:text-brand-600 transition-colors">Internship Pathways</Link></li>
              <li><Link to="/#bootcamps" className="hover:text-brand-600 transition-colors">Advanced Bootcamps</Link></li>
              <li><Link to="/#ecosystem" className="hover:text-brand-600 transition-colors">Our Ecosystem</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs (Spans 2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#programs" className="hover:text-brand-600 transition-colors">Web Development</Link></li>
              <li><Link to="/#programs" className="hover:text-brand-600 transition-colors">Data Science</Link></li>
              <li><Link to="/#programs" className="hover:text-brand-600 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/#programs" className="hover:text-brand-600 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/#programs" className="hover:text-brand-600 transition-colors">ESG Hub</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies (Spans 2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Col 5: Get In Touch (Spans 2 cols) */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                <span className="text-slate-600 break-all">admissions@academicoptions.org</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                <span className="text-slate-600">+1 (555) 019-2834</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                <span className="text-slate-600">London & Global Hubs</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Academic Options. Bridging the gap between classroom and corporate.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-brand-600">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600">Terms of Service</a>
            <button onClick={() => onOpenApply?.('General Inquiry')} className="hover:text-brand-600">Contact Us</button>
            <a href="#" className="hover:text-brand-600">Careers</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
