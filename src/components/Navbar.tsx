import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Career', to: '/careers' },
  { label: 'Contact Us', to: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (isActive: boolean) =>
    `px-5 py-2.5 rounded-lg text-lg font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
      isActive
        ? 'bg-brand-earth text-white shadow-sm'
        : 'text-brand-charcoal hover:text-brand-earth hover:bg-brand-creamdark/50'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-brand-creamlight/95 backdrop-blur-md shadow-md py-3 border-b border-brand-creamdark'
          : 'bg-brand-creamlight/85 backdrop-blur-sm py-5'
      }`}
       style={{ scrollBehavior: 'smooth' }}
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="focus:outline-none transition-transform hover:scale-102">
          <Logo className="h-20 sm:h-24" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => linkClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-3 bg-brand-charcoal hover:bg-brand-earth text-brand-creamlight hover:text-brand-charcoal rounded-lg text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-sm border border-brand-earth/20"
          >
            Book Site Tour
          </Link>
        </nav>

        <div className="flex items-center lg:hidden">
          <a
            href="tel:+919099953232"
            className="mr-3 p-2 rounded-full bg-brand-creamdark text-brand-charcoal hover:bg-brand-earth hover:text-white transition-colors"
            title="Call Us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-brand-creamdark text-brand-charcoal hover:text-brand-earth hover:bg-brand-sagelight transition-all cursor-pointer">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-creamlight border-b border-brand-creamdark shadow-xl py-4 px-6 flex flex-col gap-3 font-sans" id="mobile-drawer">
          <p className="text-base font-bold text-brand-earth tracking-widest uppercase mb-2">Main Menu</p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                  isActive
                    ? 'bg-brand-earth text-white font-semibold'
                    : 'text-brand-charcoal hover:bg-brand-creamdark hover:text-brand-earth'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-brand-creamdark/55 mt-1 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-brand-charcoal text-brand-creamlight rounded-xl font-bold text-base tracking-wide hover:bg-brand-earth hover:text-brand-charcoal transition-all shadow"
            >
              Schedule Free Site Visit
            </Link>
            <div className="flex justify-around text-center text-sm text-stone-500 font-mono mt-2">
              <span>RERA No: AG/GJ/AHMD/2026/020</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
