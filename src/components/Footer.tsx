import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, PhoneCall, ShieldCheck, Landmark } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-creamlight pt-16 pb-8 border-t border-brand-earth/20 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Brand column (5 cols) */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4">
          <Link to="/" className="focus:outline-none transition-transform hover:scale-105 inline-block">
            <Logo className="h-16 justify-start -ml-3 brightness-110" />
          </Link>
          
          <p className="text-xs sm:text-sm text-brand-creamdark/70 leading-relaxed max-w-sm mt-2">
            The Real Estates is Ahmedabad and Gandhinagar’s elite boutique real estate agency, specializing in premium residential smart homes, luxury villa plots, and corporate Grade-A co-working spaces. Backed by absolute transparency and 0% consultation fee structures.
          </p>

          <div className="flex flex-col gap-2 text-xs font-mono text-brand-creamdark/50 mt-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-earth" /> GujRERA Agent License: AG/GJ/AHMD/2026/020
            </span>
            <span className="flex items-center gap-1.5">
              <Landmark className="h-4 w-4 text-brand-earth" /> Corporate ID Spec: U70109GJ2015PTC085202
            </span>
          </div>
        </div>

        {/* Quick Links Column (3 cols) */}
        <div className="lg:col-span-4 xl:col-span-3">
          <h4 className="text-xs font-bold text-brand-earth uppercase tracking-widest font-mono mb-4 border-b border-brand-creamdark/10 pb-2">
            Useful Links
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-brand-creamdark/80 font-semibold">
            <li>
              <Link to="/properties" className="hover:text-brand-earth transition-colors cursor-pointer text-left w-full block">
                Selected Properties
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-earth transition-colors cursor-pointer text-left w-full block">
                About The Real Estates
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-brand-earth transition-colors cursor-pointer text-left w-full block">
                Advisory Services & EMI Calculator
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-brand-earth transition-colors cursor-pointer text-left w-full block">
                Job Positions / Career Bureau
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand-earth transition-colors cursor-pointer text-left w-full block">
                Schedule Branch Office Visit
              </Link>
            </li>
          </ul>
        </div>

        {/* Operating Locations Summary (4 cols) */}
        <div className="lg:col-span-8 xl:col-span-4 flex flex-col gap-4">
          <h4 className="text-xs font-bold text-brand-earth uppercase tracking-widest font-mono mb-2 border-b border-brand-creamdark/10 pb-2">
            Company Communications
          </h4>
          
          <div className="flex flex-col gap-3 text-xs font-sans text-brand-creamdark/80">
            <div>
              <p className="font-bold text-brand-creamlight font-mono uppercase tracking-wider text-[10px]">Ahmedabad Head Office</p>
              <p className="mt-0.5 text-stone-400">4th Floor, Sangath IPL Smart Boulevard, near Vaishnodevi Circle, S.G. Highway, Ahmedabad, India 382421</p>
            </div>
            <div>
              <p className="font-bold text-brand-creamlight font-mono uppercase tracking-wider text-[10px]">GIFT City Desk</p>
              <p className="mt-0.5 text-stone-400">Office No. 12, Smart Business Terminal, GIFT City, Gandhinagar, India 382355</p>
            </div>
            <div className="flex flex-col gap-1 pt-1.5 border-t border-brand-creamdark/10">
              <a href="tel:+919099953232" className="flex items-center gap-1.5 hover:text-brand-earth transition-colors">
                <PhoneCall className="h-3.5 w-3.5 text-brand-earth" /> Phone Contact: +91 90999 53232
              </a>
              <a href="mailto:info@therealestates.in" className="flex items-center gap-1.5 hover:text-brand-earth transition-colors">
                <Mail className="h-3.5 w-3.5 text-brand-earth" /> Official Email: info@therealestates.in
              </a>
            </div>
          </div>
        </div>
      </div>
  
      {/* Copyrights row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-brand-creamdark/30 gap-3">
        <p>© 2026 The Real Estates Consultancy Private Limited. All rights reserved.</p>
        <div className="flex gap-4">
         <p className="text-xs sm:text-sm text-brand-creamdark/75 leading-snug max-w-xl">
            Designed and Maintained by{' '}
            <a
              href="https://webnxt.co/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-earth font-semibold hover:text-brand-creamlight">
              WebNxt
            </a>
          </p>
          <span className="hover:text-brand-earth transition-colors">Terms of Representation</span>
          <span>|</span>
          <span className="hover:text-brand-earth transition-colors">Privacy Covenant</span>
          <span>|</span>
          <span className="hover:text-brand-earth transition-colors">Vastu Guidelines</span>
        </div>
      </div>
    </footer>
  );
}
