import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { PROPERTIES } from '../data';
import { MapPin, LayoutGrid, CheckCircle, ArrowUpDown, Shield, PhoneCall, X, Search, Sparkles } from 'lucide-react';

interface PropertyGalleryProps {
  filters: { location: string; type: string };
}

export default function PropertyGallery({ filters }: PropertyGalleryProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Residential' | 'Commercial'>(
    (filters.type as any) || 'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(filters.location || '');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Tour Booking States
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Sync state with prop filtering if props change
  React.useEffect(() => {
    if (filters.type) {
      setActiveTab(filters.type as any);
    }
    if (filters.location) {
      setSelectedLocation(filters.location);
    }
  }, [filters]);

  const handleBookTour = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingDate) return;
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingName('');
      setBookingPhone('');
      setBookingDate('');
      setBookingTime('');
      setSelectedProperty(null); // Close modal on success delay
    }, 4000);
  };

  // Filter properties
  const filteredProperties = PROPERTIES.filter((prop) => {
    const matchesTab = activeTab === 'All' || prop.type === activeTab;
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.bhk.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation =
      selectedLocation === '' ||
      (selectedLocation === 'Vaishnodevi' && prop.location.includes('Vaishnodevi')) ||
      (selectedLocation === 'GIFT' && prop.location.includes('GIFT'));

    return matchesTab && matchesSearch && matchesLocation;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortOrder === 'asc') return a.numericPrice - b.numericPrice;
    if (sortOrder === 'desc') return b.numericPrice - a.numericPrice;
    return 0;
  });

  return (
    <section className="py-20 bg-brand-creamlight scroll-mt-20 border-b border-brand-creamdark/40" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sagelight text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="h-3 w-3 text-brand-earth" /> Selected Curations
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal">
            Premium Verification Properties
          </h2>
          <div className="h-1 w-20 bg-brand-earth mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            Explore premium plots, smart multi-generational apartments, and commercial zones across Ahmedabad and Gandhinagar’s elite growth corridors. 100% legal RERA certification.
          </p>
        </div>

        {/* Filter controls panel */}
        <div className="bg-brand-creamdark/45 rounded-2xl p-5 border border-brand-creamdark shadow-sm mb-12 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
              <input
                type="text"
                placeholder="Search properties, locations, square footage..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-brand-creamdark/95 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-earth text-brand-charcoal shadow-inner"
              />
            </div>

            {/* Region Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-white border border-brand-creamdark/95 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-earth text-brand-charcoal cursor-pointer"
              >
                <option value="">All Regions</option>
                <option value="Vaishnodevi">Vaishnodevi Circle Area</option>
                <option value="GIFT">GIFT City Smart SEZ</option>
              </select>

              {/* Sort Order */}
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? '' : 'asc')}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-creamdark/95 rounded-xl font-sans text-sm hover:bg-brand-creamdark/20 text-brand-charcoal transition-all cursor-pointer"
              >
                <ArrowUpDown className="h-4 w-4 text-brand-earth" />
                <span>
                  {sortOrder === 'asc'
                    ? 'Price: Low to High'
                    : sortOrder === 'desc'
                    ? 'Price: High to Low'
                    : 'Sort by Price'}
                </span>
              </button>
            </div>
          </div>

          {/* Portfolio Type Tabs */}
          <div className="flex flex-wrap gap-2 border-t border-brand-creamdark/30 pt-4">
            {['All', 'Residential', 'Commercial'].map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-brand-earth text-white shadow'
                      : 'bg-white hover:bg-brand-creamdark/50 text-brand-charcoal border border-brand-creamdark/80'
                  }`}
                >
                  {tab === 'All' ? 'All Portfolios' : tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Total stats count indicator */}
        <div className="mb-6 text-xs text-stone-500 font-mono flex justify-between items-center bg-brand-creamdark/10 p-2.5 rounded-lg border border-brand-creamdark/10">
          <span>Found {sortedProperties.length} curated matches for your filter sets</span>
          <span className="text-brand-earth">Updated live today</span>
        </div>

        {/* Properties Grid */}
        {sortedProperties.length > 0 ? (
          <div className="flex flex-col gap-16 font-sans" id="properties-grid">
            
            {/* RESIDENTIAL PROJECTS SECTION */}
            {sortedProperties.filter(p => p.type === 'Residential').length > 0 && (
              <div id="residential-projects-section">
                <div className="flex items-center gap-4 mb-8 border-b border-brand-creamdark/40 pb-3">
                  <h3 className="text-lg sm:text-2xl font-display font-extrabold uppercase text-brand-charcoal tracking-wider flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-full bg-brand-charcoal" />
                    Residential Projects
                  </h3>
                  <div className="flex-1 h-px bg-transparent" />
                  <span className="text-xs font-mono bg-brand-charcoal/10 text-brand-charcoal px-3 py-1 rounded-full font-bold">
                    {sortedProperties.filter(p => p.type === 'Residential').length} Curated Homes
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedProperties.filter(p => p.type === 'Residential').map((product) => (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProperty(product)}
                      className="group bg-white rounded-3xl overflow-hidden border border-brand-creamdark/80 hover:border-brand-earth/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Image Section Header */}
                      <div className="relative h-60 overflow-hidden bg-stone-100">
                        <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-brand-charcoal/0 z-10 transition-colors" />
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {product.highlight && (
                          <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-brand-charcoal text-brand-creamlight text-[10px] uppercase font-mono tracking-widest font-bold border border-brand-earth/30">
                            {product.highlight}
                          </span>
                        )}
                        <span className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-lg bg-brand-creamlight/95 backdrop-blur-sm text-brand-charcoal text-xs font-mono font-bold border border-brand-creamdark">
                          {product.status}
                        </span>
                      </div>

                      {/* Info specifications */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Location Badge */}
                          <p className="flex items-center gap-1 text-xs font-bold text-brand-earth uppercase tracking-widest mb-2 font-mono">
                            <MapPin className="h-3 w-3" /> {product.location}
                          </p>

                          <h3 className="text-xl font-display font-bold text-brand-charcoal group-hover:text-brand-earth transition-colors leading-tight mb-2">
                            {product.title}
                          </h3>

                          <p className="text-sm text-stone-500 line-clamp-2 mb-4 font-sans leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          {/* Core Specs chips */}
                          <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-brand-creamdark/20 mb-4 font-mono text-xs text-brand-charcoal">
                            <div className="bg-brand-creamlight p-2 rounded-lg border border-brand-creamdark/30 flex items-center gap-1 justify-center">
                              <span className="font-bold text-[10px] text-gray-500">TYPE:</span>
                              <span className="font-semibold text-brand-earth">{product.bhk}</span>
                            </div>
                            <div className="bg-brand-creamlight p-2 rounded-lg border border-brand-creamdark/30 flex items-center gap-1 justify-center">
                              <span className="font-bold text-[10px] text-gray-500">SIZE:</span>
                              <span className="font-semibold">{product.size}</span>
                            </div>
                          </div>

                          {/* Footer bottom pricing */}
                          <div className="flex justify-between items-center pt-2">
                            <div>
                              <p className="text-[10px] font-bold text-gray-400 font-mono tracking-wider uppercase mb-0.5">Budget Guide</p>
                              <p className="text-lg font-display font-bold text-brand-charcoal tracking-tight">
                                {product.price}
                              </p>
                            </div>
                            <Link
                              to={`/properties/${product.id}`}
                              onClick={(event) => event.stopPropagation()}
                              className="px-4 py-2 bg-brand-creamdark/60 text-brand-charcoal group-hover:bg-brand-earth group-hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                            >
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* COMMERCIAL PROJECTS SECTION */}
            {sortedProperties.filter(p => p.type === 'Commercial').length > 0 && (
              <div id="commercial-projects-section">
                <div className="flex items-center gap-4 mb-8 border-b border-brand-creamdark/40 pb-3">
                  <h3 className="text-lg sm:text-2xl font-display font-extrabold uppercase text-brand-charcoal tracking-wider flex items-center gap-2.5">
                    <span className="h-3 w-3 rounded-full bg-brand-earth" />
                    Commercial Projects
                  </h3>
                  <div className="flex-1 h-px bg-transparent" />
                  <span className="text-xs font-mono bg-brand-earth/15 text-brand-earth px-3 py-1 rounded-full font-bold">
                    {sortedProperties.filter(p => p.type === 'Commercial').length} Curated Offices
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedProperties.filter(p => p.type === 'Commercial').map((product) => (
                    <div
                      key={product.id}
                      onClick={() => setSelectedProperty(product)}
                      className="group bg-white rounded-3xl overflow-hidden border border-brand-creamdark/80 hover:border-brand-earth/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      {/* Image Section Header */}
                      <div className="relative h-60 overflow-hidden bg-stone-100">
                        <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-brand-charcoal/0 z-10 transition-colors" />
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        {product.highlight && (
                          <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-brand-charcoal text-brand-creamlight text-[10px] uppercase font-mono tracking-widest font-bold border border-brand-earth/30">
                            {product.highlight}
                          </span>
                        )}
                        <span className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-lg bg-brand-creamlight/95 backdrop-blur-sm text-brand-charcoal text-xs font-mono font-bold border border-brand-creamdark">
                          {product.status}
                        </span>
                      </div>

                      {/* Info specifications */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Location Badge */}
                          <p className="flex items-center gap-1 text-xs font-bold text-brand-earth uppercase tracking-widest mb-2 font-mono">
                            <MapPin className="h-3 w-3" /> {product.location}
                          </p>

                          <h3 className="text-xl font-display font-bold text-brand-charcoal group-hover:text-brand-earth transition-colors leading-tight mb-2">
                            {product.title}
                          </h3>

                          <p className="text-sm text-stone-500 line-clamp-2 mb-4 font-sans leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div>
                          {/* Core Specs chips */}
                          <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-brand-creamdark/20 mb-4 font-mono text-xs text-brand-charcoal">
                            <div className="bg-brand-creamlight p-2 rounded-lg border border-brand-creamdark/30 flex items-center gap-1 justify-center">
                              <span className="font-bold text-[10px] text-gray-500">TYPE:</span>
                              <span className="font-semibold text-brand-earth">{product.bhk}</span>
                            </div>
                            <div className="bg-brand-creamlight p-2 rounded-lg border border-brand-creamdark/30 flex items-center gap-1 justify-center">
                              <span className="font-bold text-[10px] text-gray-500">SIZE:</span>
                              <span className="font-semibold">{product.size}</span>
                            </div>
                          </div>

                          {/* Footer bottom pricing */}
                          <div className="flex justify-between items-center pt-2">
                            <div>
                              <p className="text-[10px] font-bold text-gray-400 font-mono tracking-wider uppercase mb-0.5">Budget Guide</p>
                              <p className="text-lg font-display font-bold text-brand-charcoal tracking-tight">
                                {product.price}
                              </p>
                            </div>
                            <Link
                              to={`/properties/${product.id}`}
                              onClick={(event) => event.stopPropagation()}
                              className="px-4 py-2 bg-brand-creamdark/60 text-brand-charcoal group-hover:bg-brand-earth group-hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                            >
                              View More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-brand-creamdark max-w-lg mx-auto">
            <LayoutGrid className="h-12 w-12 text-brand-earth mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-display font-semibold text-brand-charcoal">No curated properties fit search criteria</h3>
            <p className="text-sm text-stone-500 font-sans mt-2">
              Try adjusting your filters, clearing your search query, or selecting another residential/commercial area.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('');
                setActiveTab('All');
              }}
              className="mt-4 px-4 py-2 bg-brand-earth text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-charcoal transition-colors cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Interactive Property Dossier & Site Tour Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" id="property-modal">
            <div className="bg-brand-creamlight max-w-4xl w-full rounded-3xl overflow-hidden border border-brand-creamdark shadow-2xl relative block my-auto animate-float">
              
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProperty(null);
                  setBookingSubmitted(false);
                }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-charcoal/80 text-brand-creamlight hover:bg-brand-earth hover:text-white transition-colors cursor-pointer"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left Side: Layout Image & Quick Info (5 cols) */}
                <div className="md:col-span-5 relative bg-stone-900 h-64 md:h-auto">
                  <img
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-90 p-6 flex flex-col justify-end text-brand-creamlight">
                    <span className="p-1 px-2.5 rounded bg-brand-earth text-[9px] uppercase font-mono font-bold tracking-widest w-fit mb-2">
                      RERA Approved Portfolio
                    </span>
                    <h3 className="text-2xl font-display font-bold leading-tight">{selectedProperty.title}</h3>
                    <p className="text-xs text-brand-creamdark/80 font-mono mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-brand-earth" /> {selectedProperty.location}
                    </p>
                  </div>
                </div>

                {/* Right Side: Description & Tour Scheduler Form (7 cols) */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                  
                  {/* Property Details */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded bg-brand-sagedark text-brand-charcoal text-xs font-mono font-bold">
                        {selectedProperty.bhk}
                      </span>
                      <span className="px-3 py-1 rounded bg-brand-sagelight text-brand-charcoal text-xs font-mono">
                        {selectedProperty.size}
                      </span>
                      <span className="px-3 py-1 rounded bg-brand-creamdark text-brand-charcoal text-xs font-bold uppercase tracking-wider font-mono">
                        {selectedProperty.status}
                      </span>
                    </div>

                    <p className="text-[10px] font-bold text-brand-earth font-mono uppercase tracking-widest mb-1">
                      Asset Investment Guideline
                    </p>
                    <p className="text-2xl font-display font-bold text-brand-charcoal tracking-tight mb-4">
                      {selectedProperty.price}
                    </p>

                    <p className="text-sm text-stone-600 font-sans leading-relaxed mb-6">
                      {selectedProperty.description}
                    </p>

                    {/* List of Features */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2 font-mono flex items-center gap-1">
                        <Shield className="h-4 w-4 text-brand-earth" /> Key Highlights & Structural Specifications:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {selectedProperty.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 font-sans">
                            <CheckCircle className="h-3.5 w-3.5 text-brand-sagedark shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Scheduled Site Tour section */}
                  <div className="border-t border-brand-creamdark pt-5">
                    {bookingSubmitted ? (
                      <div className="bg-brand-sagedark/20 border border-brand-sagedark p-4 rounded-xl text-center flex flex-col items-center justify-center py-8">
                        <PhoneCall className="h-8 w-8 text-brand-earth animate-bounce mb-3" />
                        <h4 className="font-display font-bold text-brand-charcoal">Private Chauffeur Tour Booked!</h4>
                        <p className="text-xs text-stone-600 font-sans mt-1 max-w-sm">
                          Thank you, <strong>{bookingName}</strong>. Our elite advisor team has blocked out <strong>{bookingDate}</strong> at <strong>{bookingTime || "11:00 AM"}</strong> for your VIP guided portfolio checkout. A counselor will dial you in 15 minutes.
                        </p>
                        <span className="text-[9px] font-mono text-stone-400 mt-2">Reference ID: ESTATES-VISIT-0{(selectedProperty.id)}</span>
                      </div>
                    ) : (
                      <div>
                        <h4 className="text-sm font-display font-bold text-brand-charcoal mb-3 flex items-center gap-1.5">
                          <PhoneCall className="h-4 w-4 text-brand-earth animate-pulse" /> Reserve Free Chauffeur Site Tour
                        </h4>
                        
                        <form onSubmit={handleBookTour} className="grid grid-cols-2 gap-3" id="tour-book-form">
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            className="col-span-2 sm:col-span-1 px-3 py-2 border border-brand-creamdark/95 bg-white text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
                          />
                          <input
                            type="tel"
                            required
                            placeholder="WhatsApp Number"
                            value={bookingPhone}
                            onChange={(e) => setBookingPhone(e.target.value)}
                            className="col-span-2 sm:col-span-1 px-3 py-2 border border-brand-creamdark/95 bg-white text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
                          />
                          <div className="col-span-2 sm:col-span-1 flex flex-col gap-0.5">
                            <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-mono pl-1">
                              Visit Date
                            </label>
                            <input
                              type="date"
                              required
                              value={bookingDate}
                              onChange={(e) => setBookingDate(e.target.value)}
                              className="w-full px-3 py-2 border border-brand-creamdark/95 bg-white text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-mono"
                            />
                          </div>
                          <div className="col-span-2 sm:col-span-1 flex flex-col gap-0.5">
                            <label className="text-[9px] font-bold text-gray-500 uppercase tracking-widest font-mono pl-1">
                              Preferred Hour
                            </label>
                            <select
                              value={bookingTime}
                              onChange={(e) => setBookingTime(e.target.value)}
                              className="w-full px-3 py-2 border border-brand-creamdark/95 bg-white text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-mono cursor-pointer"
                            >
                              <option value="10:00 AM">10:00 AM - 12:00 PM</option>
                              <option value="12:00 PM">12:00 PM - 03:00 PM</option>
                              <option value="03:00 PM">03:00 PM - 05:00 PM</option>
                              <option value="05:00 PM">05:00 PM - 07:30 PM</option>
                            </select>
                          </div>
                          
                          <button
                            type="submit"
                            className="col-span-2 w-full py-2.5 bg-brand-earth hover:bg-brand-charcoal text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow mt-2"
                            id="book-tour-submit"
                          >
                            Block VIP Tour Coordinates
                          </button>
                        </form>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
