import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Play, Pause, Tv } from 'lucide-react';


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

export default function Hero() {
  // Interactive background states
  const [activeBackdrop, setActiveBackdrop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log('Playback error:', err));
    }
    setIsPlaying(!isPlaying);
  };

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
          referrerPolicy="no-referrer"
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

        {/* Display Typography Header with drop shadow */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-none text-brand-creamlight drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Where <span className="text-brand-earth">Integrity</span> Meets Premium Architecture
        </h1>
        
        {/* Sleek semi-transparent backing capsule for absolute text legibility */}
        <div className="mt-6 bg-brand-charcoal/50 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-brand-creamlight/10 max-w-2xl shadow-xl">
          <p className="text-sm sm:text-base text-brand-creamdark/95 font-sans font-light tracking-wide">
            Unlock exclusive smart structures in Vaishnodevi Circle and Grade-A commercial tax-free pipelines in GIFT City. Selected high-yield assets with pre-vetted legal clearances.
          </p>
        </div>

        {/* 3. VIDEO ENGINE CONTROL INTERACTIVE CHIPS */}
        <div className="mt-6 flex flex-wrap gap-2.5 justify-center items-center">
          <button
            onClick={() => setActiveBackdrop((prev) => (prev + 1) % BACKDROP_VIDEOS.length)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-charcoal/70 hover:bg-brand-charcoal text-brand-creamlight font-medium text-xs transition-all border border-brand-creamdark/20 hover:scale-105 active:scale-95 cursor-pointer"
            title="Change backdrop source"
          >
            <Tv className="h-3.5 w-3.5 text-brand-earth" />
            <span>Set Loop Backdrop: <strong>{BACKDROP_VIDEOS[activeBackdrop].label.split(' ')[1]}</strong></span>
          </button>

          <button
            onClick={togglePlayback}
            className="p-2.5 rounded-full bg-brand-charcoal/70 hover:bg-brand-charcoal text-brand-creamlight transition-all border border-brand-creamdark/20 cursor-pointer"
            aria-label={isPlaying ? "Pause background" : "Play background"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5 text-brand-sagelight" /> : <Play className="h-3.5 w-3.5 text-brand-earth" />}
          </button>
        </div>

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

        <p className="mt-4 text-[10px] font-mono text-brand-creamdark/50">
          *RERA consult licensing authorized: PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/CAA11099/2026/G1
        </p>
      </div>

    </section>
  );
}

