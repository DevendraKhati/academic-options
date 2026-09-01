import React, { useState } from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Banknote, 
  SlidersHorizontal, 
  Star, 
  ArrowRight, 
  Plus, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Building2,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { colleges as defaultColleges } from '../data/colleges';

export default function DiscoveryPage({ onOpenApply }) {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedSpec, setSelectedSpec] = useState('All');
  const [selectedFee, setSelectedFee] = useState('Any Range');
  const [comparedColleges, setComparedColleges] = useState([]);
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const initialColleges = defaultColleges;

  const trendingSpecs = [
    { name: 'AI & ML', spec: 'Engineering' },
    { name: 'FinTech', spec: 'Management' },
    { name: 'Digital Marketing', spec: 'Management' },
    { name: 'Biotech', spec: 'Medical' }
  ];

  const filteredColleges = initialColleges.filter((college) => {
    const matchesCity = selectedCity === 'All Cities' || college.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesSpec = selectedSpec === 'All' || college.specialization.toLowerCase() === selectedSpec.toLowerCase();
    
    let matchesFee = true;
    if (selectedFee === 'Under ₹2L/Yr') {
      matchesFee = college.feeValue < 200000;
    } else if (selectedFee === '₹2L - ₹5L/Yr') {
      matchesFee = college.feeValue >= 200000 && college.feeValue <= 500000;
    } else if (selectedFee === '₹5L - ₹10L/Yr') {
      matchesFee = college.feeValue >= 500000 && college.feeValue <= 1000000;
    } else if (selectedFee === 'Above ₹10L/Yr') {
      matchesFee = college.feeValue > 1000000;
    }

    return matchesCity && matchesSpec && matchesFee;
  });

  const toggleCompare = (college) => {
    if (comparedColleges.some(c => c.id === college.id)) {
      setComparedColleges(comparedColleges.filter(c => c.id !== college.id));
    } else {
      if (comparedColleges.length < 3) {
        setComparedColleges([...comparedColleges, college]);
      }
    }
  };

  return (
    <div className="bg-[#f8fafc] pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Subtitle */}
        <div className="pt-6 pb-8 space-y-2 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            College Discovery Engine
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Advanced data-driven insights to help you bridge the gap between academic aspiration and your ideal career trajectory in India.
          </p>
        </div>

        {/* Top Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-end">
            
            {/* Location Dropdown */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-brand-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-slate-700 cursor-pointer"
                >
                  <option value="All Cities">All Cities</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Pilani">Pilani</option>
                </select>
              </div>
            </div>

            {/* Specialization Dropdown */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Specialization
              </label>
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-brand-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedSpec}
                  onChange={(e) => setSelectedSpec(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-slate-700 cursor-pointer"
                >
                  <option value="All">All Disciplines</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Management">Management</option>
                  <option value="Medical">Medical & Healthcare</option>
                </select>
              </div>
            </div>

            {/* Fees Range Dropdown */}
            <div className="lg:col-span-3">
              <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                Fees Range (per year)
              </label>
              <div className="relative">
                <Banknote className="w-4 h-4 text-brand-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedFee}
                  onChange={(e) => setSelectedFee(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-slate-700 cursor-pointer"
                >
                  <option value="Any Range">Any Range</option>
                  <option value="Under ₹2L/Yr">Under ₹2L/Yr</option>
                  <option value="₹2L - ₹5L/Yr">₹2L - ₹5L/Yr</option>
                  <option value="₹5L - ₹10L/Yr">₹5L - ₹10L/Yr</option>
                  <option value="Above ₹10L/Yr">Above ₹10L/Yr</option>
                </select>
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="lg:col-span-3">
              <button
                onClick={() => {}}
                className="w-full py-2.5 px-4 bg-[#0047d4] hover:bg-[#003bb3] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Apply Filters</span>
              </button>
            </div>

          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar (3-4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Stats Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                Quick Stats
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Top Avg Package
                  </div>
                  <div className="text-2xl font-extrabold text-brand-600">
                    ₹24.5 LPA
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Verified Colleges
                  </div>
                  <div className="text-2xl font-extrabold text-brand-600">
                    450+
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Active Reviews
                  </div>
                  <div className="text-2xl font-extrabold text-brand-600">
                    12.8k
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Specializations Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Trending Specializations
              </h3>

              <div className="flex flex-wrap gap-2">
                {trendingSpecs.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedSpec(item.spec)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200/70 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Stacked University Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Render Filtered University Cards in Stack Layout */}
              {filteredColleges.map((college) => {
                const isCompared = comparedColleges.some(c => c.id === college.id);
                return (
                  <div
                    key={college.id}
                    id={college.slug}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card card-hover-effect flex flex-col justify-between group relative"
                  >
                    <div>
                      {/* Photo + Rating Badge */}
                      <div className="h-44 relative overflow-hidden bg-slate-100">
                        <img
                          src={college.image}
                          alt={college.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{college.rating}</span>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="p-5 space-y-3">
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                            {college.name}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {college.location}
                          </p>
                        </div>

                        {/* 2-Column Metrics Box */}
                        <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                          <div className="border-r border-slate-200/60 pr-1">
                            <span className="text-[10px] text-slate-400 font-semibold block">
                              Placements
                            </span>
                            <span className="text-xs font-bold text-brand-600">
                              {college.placements}
                            </span>
                          </div>
                          <div className="pl-1">
                            <span className="text-[10px] text-slate-400 font-semibold block">
                              Fees
                            </span>
                            <span className="text-xs font-bold text-brand-600">
                              {college.fees}
                            </span>
                          </div>
                        </div>

                        {/* Tag Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {college.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="p-5 pt-0 flex items-center gap-2">
                      <button
                        onClick={() => onOpenApply(`College Profile: ${college.name}`)}
                        className="flex-1 py-2.5 text-xs font-bold text-brand-600 hover:text-white bg-white hover:bg-brand-600 border border-brand-200 rounded-xl transition-all text-center cursor-pointer"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => toggleCompare(college)}
                        title={isCompared ? 'Remove from compare' : 'Add to compare'}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                          isCompared
                            ? 'bg-brand-600 text-white border-brand-600'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                        }`}
                      >
                        <Plus className={`w-3.5 h-3.5 ${isCompared ? 'rotate-45' : ''} transition-transform`} />
                      </button>
                    </div>

                  </div>
                );
              })}

              {/* Card: Smart Comparison Tool Widget */}
              <div className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 rounded-3xl p-6 border border-brand-200/80 shadow-card flex flex-col justify-between relative overflow-hidden">
                
                {/* Background Ripple */}
                <div className="absolute right-[-40px] bottom-[-40px] w-40 h-40 rounded-full border-4 border-brand-100/60 pointer-events-none" />

                <div className="space-y-4">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-100/80 text-brand-700 text-[11px] font-bold">
                    <span>New Feature</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      Smart Comparison Tool
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Select up to 3 colleges to compare side-by-side on 20+ metrics including alumni network and ROI.
                    </p>
                  </div>

                  {/* Compared Slots */}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-brand-300 text-brand-600 font-bold text-xs flex items-center justify-center shadow-sm">
                      {comparedColleges[0] ? '✓' : '1'}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-brand-300 text-brand-600 font-bold text-xs flex items-center justify-center shadow-sm">
                      {comparedColleges[1] ? '✓' : '2'}
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-slate-300 text-slate-400 font-bold text-xs flex items-center justify-center">
                      {comparedColleges[2] ? '✓' : '+'}
                    </div>
                    {comparedColleges.length > 0 && (
                      <span className="text-[11px] text-brand-600 font-bold ml-1">
                        {comparedColleges.length} Selected
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      if (comparedColleges.length > 0) {
                        setShowComparisonModal(true);
                      } else {
                        onOpenApply('College Comparison Tool');
                      }
                    }}
                    className="w-full py-3 px-4 bg-[#0047d4] hover:bg-[#003bb3] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all text-center cursor-pointer"
                  >
                    Start Comparing
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Comparison Modal Dialog */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Side-by-Side Comparison</h3>
                <p className="text-xs text-slate-500">Comparing selected institutions</p>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {comparedColleges.map((c) => (
                <div key={c.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                  <h4 className="text-xs font-bold text-slate-900">{c.name}</h4>
                  <div className="text-sm font-extrabold text-brand-600">{c.placements}</div>
                  <div className="text-xs text-slate-600">Fees: {c.fees}</div>
                  <div className="text-[11px] text-emerald-600 font-bold">ROI: {c.roiScore}</div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setShowComparisonModal(false);
                onOpenApply('Full College Comparison Report');
              }}
              className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer transition-colors"
            >
              Request Full Comparison Report
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
