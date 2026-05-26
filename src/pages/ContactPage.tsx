import React from 'react';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { PhoneCall, MapPin, Mail, Sparkles } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-1 bg-brand-creamlight">
      <section className="relative overflow-hidden bg-brand-deepnavy text-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-creamlight/75 font-bold mb-4">
                Contact Center
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Talk to a licensed property advisor today.
              </h1>
              <p className="mt-6 text-sm sm:text-base text-brand-creamlight/85 leading-relaxed">
                For immediate access to project inventories, loan structures, and VIP visit scheduling, our contact page is the fastest way to secure support.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: <PhoneCall className="h-5 w-5" />, title: 'Call Us', detail: '+91 90999 53232' },
                  { icon: <Mail className="h-5 w-5" />, title: 'Email', detail: 'info@therealestates.in' },
                  { icon: <MapPin className="h-5 w-5" />, title: 'Visit', detail: 'GIFT City, Gandhinagar or Ahmedabad H.O.' },
                  { icon: <Sparkles className="h-5 w-5" />, title: 'Support', detail: '6 days a week, 10AM - 7PM' }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-xl">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/20 text-brand-earth mb-4">
                      {item.icon}
                    </div>
                    <p className="text-xs uppercase tracking-[0.35em] font-bold text-brand-creamlight/80">{item.title}</p>
                    <p className="mt-3 text-sm font-semibold text-white">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] bg-white/10 border border-white/20 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.35em] text-brand-creamlight font-bold">Immediate Action</p>
                <h2 className="text-3xl font-display font-bold text-white">Schedule your private site tour</h2>
                <p className="text-sm text-brand-creamlight/80 leading-relaxed">
                  Submit a request below and our coordinator will contact you within 30 minutes to confirm the date and route for your portfolio visit.
                </p>
                <Link
                  to="/contact#callback-request-form"
                  className="inline-flex items-center justify-center rounded-full bg-white text-brand-charcoal px-6 py-3 text-sm font-bold uppercase tracking-widest shadow-lg hover:bg-brand-creamdark transition-all"
                >
                  Register callback request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
