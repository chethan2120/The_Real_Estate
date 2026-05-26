import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropertyGallery from '../components/PropertyGallery';
import { PROPERTIES } from '../data';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';

export default function PropertiesPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filters = {
    location: params.get('location') || '',
    type: params.get('type') || ''
  };

  const featured = PROPERTIES.slice(0, 3);

  return (
    <main className="flex-1 bg-brand-creamlight">
      <section className="relative overflow-hidden bg-brand-charcoal text-brand-creamlight py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/70 to-brand-charcoal/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-sagelight font-bold mb-4">
              Curated Property Marketplace
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Discover Pre-Vetted Residences & Smart Corporate Assets
            </h1>
            <p className="mt-6 text-sm sm:text-base text-brand-creamdark max-w-2xl leading-relaxed">
              Experience a premium property search page built around honesty, RERA compliance, and yield optimization for Ahmedabad’s fastest-growing corridors.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-earth px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-xl hover:bg-brand-sagedark transition-colors"
              >
                Request a bespoke tour
              </Link>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-brand-creamdark font-mono">
                <Sparkles className="h-4 w-4 text-brand-earth" /> {PROPERTIES.length} premium portfolios
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-creamlight py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-earth font-bold mb-3">
                Spotlight Portfolios
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal leading-tight">
                Top curated projects with immediate investor appeal
              </h2>
            </div>
            <div className="lg:col-span-5 text-sm text-stone-600">
              Search by corridor, sector, or asset type then review each listing with full feature details and route planning estimates.
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((property) => (
              <Link
                key={property.id}
                to={`/properties/${property.id}`}
                className="group block rounded-[32px] overflow-hidden border border-brand-creamdark/80 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-brand-creamlight">
                    <p className="text-xs uppercase tracking-[0.35em] font-mono mb-2">{property.type}</p>
                    <h3 className="text-xl font-display font-bold">{property.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-stone-500 leading-relaxed mb-4">{property.description}</p>
                  <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-charcoal">
                    <span className="rounded-full bg-brand-creamdark px-3 py-2">{property.bhk}</span>
                    <span className="rounded-full bg-brand-creamdark px-3 py-2">{property.location}</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <span className="text-sm font-bold text-brand-earth">{property.price}</span>
                    <ArrowRight className="h-5 w-5 text-brand-earth" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PropertyGallery filters={filters} />
    </main>
  );
}
