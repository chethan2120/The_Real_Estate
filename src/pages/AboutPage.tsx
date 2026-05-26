import React from 'react';
import AboutUs from '../components/AboutUs';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-1 bg-brand-creamdark/15">
      <section className="relative overflow-hidden bg-brand-sagedark text-brand-charcoal py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(132,175,190,0.16),_transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-earth font-bold mb-4">
              Brand Story
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Built for investors, guided by compliance, designed for legacy.
            </h1>
            <p className="mt-6 text-sm sm:text-base text-brand-charcoal/80 leading-relaxed">
              The Real Estates has grown from a boutique consultancy into the region’s trusted property advisor by preserving every client’s capital, simplifying approvals, and strengthening relationships with developers in Ahmedabad and GIFT City.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-charcoal px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand-creamlight shadow-lg hover:bg-brand-earth transition-all"
              >
                Speak to a licensed advisor
              </Link>
              <Link
                to="/properties"
                className="rounded-full border border-brand-charcoal px-6 py-3 text-sm font-bold uppercase tracking-widest text-brand-charcoal bg-white/90 hover:bg-white transition-all"
              >
                View curated assets
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3 mb-16">
            {[
              {
                icon: <Compass className="h-6 w-6 text-brand-earth" />,
                title: 'Transparent Partner Process',
                text: 'Our entire property selection and legal review is shared with clients through live progress dashboards and compliance milestones.'
              },
              {
                icon: <Award className="h-6 w-6 text-brand-earth" />,
                title: 'Premium Corridor Intelligence',
                text: 'Specialization in Vaishnodevi, GIFT City, and Ahmedabad high-growth nodes ensures our advisory picks are always ahead of market shifts.'
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-brand-earth" />,
                title: 'Verified RERA Assurance',
                text: 'Every property we recommend has been checked against developer approvals, title history, and Gujarat RERA filings before being offered to clients.'
              }
            ].map((item, idx) => (
              <div key={idx} className="rounded-[32px] border border-brand-creamdark bg-white p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-brand-sagelight mb-5">
                  {item.icon}
                </div>
                <h2 className="text-xl font-display font-bold text-brand-charcoal mb-3">{item.title}</h2>
                <p className="text-sm text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <AboutUs />
        </div>
      </section>
    </main>
  );
}
