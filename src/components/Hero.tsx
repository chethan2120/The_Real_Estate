import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Play, X, Sparkles, Volume2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: { location: string; type: string }) => void;
}

// Highly reliable, pre-vetted video backup tracks matching regional projects
const BACKDROP_VIDEOS = [
  {
    id: 'interior',
    label: '🛋️ Luxe Smart-Home Interior',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-42614-large.mp4',
    poster: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    title: 'Vaishnodevi Smart Flats Virtual View',
    desc: 'Breathtaking 3BHK automated apartments showcasing custom marble trim, high ceilings, and voice-assisted appliances.'
  },
  {
    id: 'skyline',
    label: '🏢 GIFT City Aerial Drone',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-skyscrapers-of-a-modern-city-under-clouds-43037-large.mp4',
    poster: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    title: 'GIFT City Grade-A Commercial Corridor',
    desc: 'Aerial helicopter overview highlighting double tax-free industrial parks, central server grids, and financial high-rises.'
  }
];

export default function Hero({ onSearch }: HeroProps) {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  // Interactive background states
  const [activeBackdrop, setActiveBackdrop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Site Tour walkthrough modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoIndex, setModalVideoIndex] = useState(0);
  const [isModalVideoMuted, setIsModalVideoMuted] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  // Force autoPlay triggers on backend loop swaps
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.warn('AutoPlay delayed by browser security rules:', err);
        });
      }
    }
  }, [activeBackdrop]);

  const handleModalVideoChange = (idx: number) => {
    setModalVideoIndex(idx);
    setIsModalVideoMuted(false); // Unmute for immersive modal view if user clicks
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.load();
        modalVideoRef.current.play().catch((err) => console.log('Modal video source change play err:', err));
      }
    }, 50);
  };

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-brand-charcoal py-20" id="home">
      
      {/* 1. STATE-DRIVEN VIDEO BACKGROUND LOOP */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {/* Soft elegant gradient layers - lightened to let the background video & photo pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/65 via-brand-charcoal/30 to-brand-charcoal/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-creamlight via-transparent to-transparent z-10 opacity-45" />
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-102 filter brightness-[80%] contrast-[105%] transition-all duration-1000 ease-in-out"
          poster={BACKDROP_VIDEOS[activeBackdrop].poster}
          id="hero-backdrop-video"
        >
          <source
            src={BACKDROP_VIDEOS[activeBackdrop].url}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* 2. MAIN HERO FRAME CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-creamlight flex flex-col items-center">
        
        {/* Top interactive status bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-earth/30 text-brand-creamdark text-[11px] font-mono uppercase tracking-widest mb-6 shadow-2xl">
          <span className="h-2 w-2 rounded-full bg-brand-earth animate-ping" />
          <CheckCircle2 className="h-3.5 w-3.5 text-brand-earth" /> 
          <span className="drop-shadow-sm">Authorized GIFT City & Vaishnodevi Property Advisors</span>
        </div>

        {/* Display Typography Header with drop shadow - REMOVED UNDERLINE FROM INTEGRITY */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-none text-brand-creamlight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Where <span className="text-brand-earth">Integrity</span> Meets Premium Architecture
        </h1>
        
        {/* Sleek semi-transparent backing capsule for absolute text legibility */}
        <div className="mt-6 bg-brand-charcoal/50 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-brand-creamlight/10 max-w-2xl shadow-xl">
          <p className="text-sm sm:text-base text-brand-creamdark/95 font-sans font-light tracking-wide">
            Unlock exclusive smart structures in Vaishnodevi Circle and Grade-A commercial tax-free pipelines in GIFT City. Selected high-yield assets with pre-vetted legal clearances.
          </p>
        </div>

        {/* 3. VIDEO ENGINE CONTROL - REMOVED Interactive Space Tour, Set Loop Backdrop, and Play/Pause buttons */}
       
        {/* Mini statistics modules in sleek dashboard design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
          <div className="bg-brand-charcoal/60 backdrop-blur-md p-4 rounded-xl border border-brand-creamdark/10 flex flex-col items-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-display font-bold text-brand-earth">1200+</span>
            <span className="text-[10px] text-brand-creamdark/70 uppercase tracking-widest font-mono">Premium Homes Sold</span>
          </div>
          <div className="bg-brand-charcoal/60 backdrop-blur-md p-4 rounded-xl border border-brand-creamdark/10 flex flex-col items-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-display font-bold text-brand-earth">₹450Cr+</span>
            <span className="text-[10px] text-brand-creamdark/70 uppercase tracking-widest font-mono">Advisor Investment Pipeline</span>
          </div>
          <div className="bg-brand-charcoal/60 backdrop-blur-md p-4 rounded-xl border border-brand-creamdark/10 flex flex-col items-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-display font-bold text-brand-earth">12+</span>
            <span className="text-[10px] text-brand-creamdark/70 uppercase tracking-widest font-mono font-bold">Vetted Smart Developers</span>
          </div>
          <div className="bg-brand-charcoal/60 backdrop-blur-md p-4 rounded-xl border border-brand-creamdark/10 flex flex-col items-center shadow-lg">
            <span className="text-2xl sm:text-3xl font-display font-bold text-brand-earth">0%</span>
            <span className="text-[10px] text-brand-creamdark/70 uppercase tracking-widest font-mono">Disputes / Approved-RERA</span>
          </div>
        </div>

        {/* 4. REAL-ESTATE FILTER PORTAL CONSOLE - REMOVED COMPLETELY */}
        {/* Search form, Location Corridor, Property Portfolio Type, Search Estates, RERA text all removed */}

      </div>

      {/* 5. IMMERSIVE WALKTHROUGH SITE TOUR MODAL WINDOW */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-brand-charcoal/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6" id="site-tour-modal">
          <div className="bg-white rounded-3xl border-2 border-brand-earth max-w-4xl w-full overflow-hidden shadow-2xl animate-float relative flex flex-col md:flex-row">
            
            {/* Close modal button top right */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-brand-charcoal text-brand-creamlight rounded-full hover:bg-brand-earth hover:text-brand-charcoal transition-all shadow cursor-pointer focus:outline-none"
              title="Close Player"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video Player Segment */}
            <div className="flex-[3] bg-brand-charcoal relative flex items-center justify-center min-h-[220px] sm:min-h-[380px]">
              <video
                ref={modalVideoRef}
                autoPlay
                controls
                muted={isModalVideoMuted}
                playsInline
                className="w-full h-full object-contain"
                poster={BACKDROP_VIDEOS[modalVideoIndex].poster}
                id="modal-walkthrough-player"
              >
                <source src={BACKDROP_VIDEOS[modalVideoIndex].url} type="video/mp4" />
                Browser lacks streaming video support.
              </video>

              {/* Sound/Mute prompt banner */}
              {isModalVideoMuted && (
                <button
                  onClick={() => setIsModalVideoMuted(false)}
                  className="absolute bottom-4 left-4 bg-brand-charcoal/80 text-brand-creamlight py-1 px-3 rounded-full text-[10px] font-mono flex items-center gap-1.5 hover:bg-brand-earth hover:text-brand-charcoal transition-all animate-pulse shadow-md cursor-pointer"
                >
                  <Volume2 className="h-3 w-3" /> Unmute Immersive Sound
                </button>
              )}
            </div>

            {/* Tour Controls and Guide Sidebar */}
            <div className="flex-[2] p-6 flex flex-col justify-between bg-brand-creamlight text-brand-charcoal">
              <div>
                <div className="flex items-center gap-1 text-[10px] font-mono tracking-widest text-brand-earth uppercase font-bold mb-2">
                  <Sparkles className="h-3.5 w-3.5" /> High Definition Site-Tour
                </div>
                
                <h3 className="text-xl font-display font-bold leading-tight text-brand-charcoal">
                  {BACKDROP_VIDEOS[modalVideoIndex].title}
                </h3>
                
                <p className="mt-3 text-xs leading-relaxed text-stone-600 font-sans">
                  {BACKDROP_VIDEOS[modalVideoIndex].desc}
                </p>

                {/* Direct site specifications checklist */}
                <div className="mt-4 p-3 bg-white border border-brand-creamdark rounded-xl flex flex-col gap-1.5">
                  <div className="text-[10px] text-brand-charcoal/60 font-mono flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-earth" /> Clear Title Pre-Approved Bank Waivers
                  </div>
                  <div className="text-[10px] text-stone-600 font-sans pl-4.5">
                    • 100% compliant RERA filings
                  </div>
                  <div className="text-[10px] text-stone-600 font-sans pl-4.5">
                    • High-speed fiber network infrastructure
                  </div>
                </div>

                {/* Scene switches */}
                <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-stone-400 mt-6 mb-2">
                  Select Walkthrough Stream
                </p>

                <div className="flex flex-col gap-2">
                  {BACKDROP_VIDEOS.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleModalVideoChange(idx)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-medium font-sans flex items-center justify-between border transition-all cursor-pointer ${
                        modalVideoIndex === idx
                          ? 'bg-brand-charcoal text-brand-creamlight border-brand-charcoal shadow-md'
                          : 'bg-white text-stone-700 border-brand-creamdark hover:bg-brand-creamdark/30'
                      }`}
                    >
                      <span>{item.label}</span>
                      <Play className="h-3 w-3 fill-current shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-creamdark flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-mono">Stream: Pure MP4 HD</span>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    // Scroll to properties view
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-xs font-bold text-brand-earth hover:underline cursor-pointer"
                >
                  Book site tour now →
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}