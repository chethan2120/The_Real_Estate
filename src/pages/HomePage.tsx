import React from 'react';
import Hero from '../components/Hero';
import PropertyGallery from '../components/PropertyGallery';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Career from '../components/Career';
import ContactUs from '../components/ContactUs';

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <PropertyGallery filters={{ location: '', type: '' }} />
      <AboutUs />
      <Services />
      <Career />
      <ContactUs />
    </main>
  );
}
