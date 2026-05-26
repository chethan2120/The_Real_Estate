import React from 'react';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-brand-creamlight">
      <section className="relative overflow-hidden bg-brand-earth text-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_38%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-brand-creamlight/85 font-bold mb-4">
              Advisory Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Every investment decision supported by data, process, and people.
            </h1>
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-brand-creamlight/85">
              From residential home selection to complex GIFT City investment structuring, our service page helps you compare, decide, and execute with confidence.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Calculator className="h-5 w-5" />, label: 'Loan calculator' },
                { icon: <FileText className="h-5 w-5" />, label: 'Document support' },
                { icon: <Sparkles className="h-5 w-5" />, label: 'Premium service portal' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-3xl border border-white/20 bg-white/10 px-5 py-4 shadow-sm backdrop-blur-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-brand-earth">{item.icon}</div>
                  <span className="text-xs uppercase tracking-[0.35em] font-bold">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-brand-charcoal px-6 py-3 text-sm font-bold uppercase tracking-widest shadow-lg hover:bg-brand-creamdark transition-all"
              >
                Request service proposal
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
}
