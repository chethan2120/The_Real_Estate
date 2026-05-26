import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PROPERTIES } from '../data';
import { MapPin, ShieldCheck, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

export default function PropertyDetailPage() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find((item) => item.id === propertyId);

  if (!property) {
    return (
      <main className="flex-1 bg-brand-creamlight py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold text-brand-charcoal mb-4">Property not found</h1>
          <p className="text-sm text-stone-600 mb-8">The portfolio you requested is unavailable or may have been removed. Please return to the listing page to view live curated assets.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/properties')}
              className="rounded-full bg-brand-earth px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg hover:bg-brand-charcoal transition-all"
            >
              Go to properties
            </button>
            <Link
              to="/"
              className="rounded-full border border-brand-charcoal bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand-charcoal hover:bg-brand-creamdark transition-all"
            >
              Back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-brand-creamlight">
      <section className="relative overflow-hidden bg-brand-charcoal text-brand-creamlight py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/75 to-brand-charcoal/90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-4 text-sm font-mono uppercase tracking-[0.35em] text-brand-sagelight">
            <button
              onClick={() => navigate('/properties')}
              className="inline-flex items-center gap-2 text-brand-creamlight/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to listings
            </button>
            <span className="text-brand-earth">/</span>
            <span>{property.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-earth font-bold mb-4">Premium portfolio detail</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                {property.title}
              </h1>
              <p className="text-sm sm:text-base text-brand-creamlight/85 leading-relaxed mb-8">
                {property.description} This page includes full property highlights, pricing, and features for buyer review.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-brand-creamlight/10 border border-brand-creamlight/15 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-sagelight mb-2">Location</p>
                  <p className="font-bold text-xl text-brand-creamlight">{property.location}</p>
                </div>
                <div className="rounded-3xl bg-brand-creamlight/10 border border-brand-creamlight/15 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-sagelight mb-2">Price range</p>
                  <p className="font-bold text-xl text-brand-creamlight">{property.price}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-[32px] overflow-hidden border border-brand-earth/20 shadow-xl">
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover min-h-[340px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-brand-creamdark shadow-sm p-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] font-bold text-brand-earth mb-6">
              <Sparkles className="h-4 w-4" /> Key details
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Asset type', value: property.type },
                { label: 'Area size', value: property.size },
                { label: 'Bedrooms / Suites', value: property.bhk },
                { label: 'Project status', value: property.status }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-brand-creamlight/80 p-5">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500 mb-2">{item.label}</p>
                  <p className="text-sm font-semibold text-brand-charcoal">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-display font-bold text-brand-charcoal mb-4">Why this asset works</h2>
              <p className="text-sm leading-relaxed text-stone-700 mb-6">{property.description}</p>
              <ul className="grid gap-3">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-3xl border border-brand-creamdark/80 bg-brand-creamlight p-4">
                    <ShieldCheck className="h-5 w-5 text-brand-earth mt-1" />
                    <span className="text-sm text-stone-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5 rounded-[32px] border border-brand-creamdark bg-brand-creamlight p-8 shadow-sm flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-brand-earth font-bold mb-3">Ready to take the next step?</p>
              <h2 className="text-2xl font-display font-bold text-brand-charcoal">Book a VIP walkthrough</h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Schedule a personalized property tour or request a detailed investment memo from our compliance desk.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-creamdark/80 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500 mb-3">Portfolio highlight</p>
              <p className="text-lg font-bold text-brand-charcoal">{property.highlight ?? 'RERA approved asset'}</p>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                Contact our advisor and receive a complete property dossier, local market yield estimate, and loan eligibility guide.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-earth px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand-charcoal shadow-lg hover:bg-brand-charcoal hover:text-white transition-all"
            >
              Schedule a property consultation
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
