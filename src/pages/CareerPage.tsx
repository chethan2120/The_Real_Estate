import React from 'react';
import Career from '../components/Career';
import { Link } from 'react-router-dom';
import { Briefcase, Sparkles, HeartHandshake } from 'lucide-react';

export default function CareerPage() {
  return (
    <main className="flex-1 bg-brand-creamlight">
      <section className="relative overflow-hidden bg-brand-charcoal text-brand-creamlight py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(212,163,115,0.18),_transparent_38%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-sagelight font-bold mb-4">
              Careers & Opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Grow your career with Ahmedabad’s most trusted property team.
            </h1>
            <p className="mt-6 text-sm sm:text-base text-brand-creamlight/85 leading-relaxed">
              We hire professionals who want more than a job — they want to build client relationships around trust, legal clarity, and premium results.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Briefcase className="h-5 w-5" />, label: 'Experienced roles' },
                { icon: <Sparkles className="h-5 w-5" />, label: 'High commission plans' },
                { icon: <HeartHandshake className="h-5 w-5" />, label: 'Supportive training' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-3xl border border-brand-creamlight/20 bg-brand-charcoal/30 px-5 py-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-earth text-brand-charcoal">{item.icon}</div>
                  <span className="text-xs uppercase tracking-[0.35em] font-bold text-brand-creamlight">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-earth px-7 py-3 text-sm font-bold uppercase tracking-widest text-brand-charcoal shadow-xl hover:bg-brand-creamlight hover:text-brand-charcoal transition-all"
              >
                Contact HR desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Career />
    </main>
  );
}
