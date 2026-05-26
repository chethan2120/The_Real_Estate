import React from 'react';
import { TESTIMONIALS } from '../data';
import { Award, ShieldAlert, HeartHandshake, Eye, Star, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const advantages = [
    {
      icon: <Compass className="h-6 w-6 text-brand-earth" />,
      title: 'Expert Macro Guidance',
      desc: 'Our counselors deep-dive into regional AUDA urban plans, infrastructural timelines, metro routes, and tax frameworks to identify upcoming investment gold mines.'
    },
    {
      icon: <Award className="h-6 w-6 text-brand-earth" />,
      title: 'Direct Developer Inventory Access',
      desc: 'Due to decades of regional alignment, we bypass mid-brokers to secure pre-launch allotments, lower pricing indexes, and customized modification clearances.'
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-brand-earth" />,
      title: '100% Legal RERA Due Diligence',
      desc: 'Every plot, flat, and corporate block on our board underwent comprehensive municipal title research and RERA verification so development timelines remain sacred.'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-brand-earth" />,
      title: 'Transparent Paperwork Assistance',
      desc: 'We draft agreements, procure stamp certificates, and handle appointments directly within the registrar’s chambers, taking the weight completely off your shoulders.'
    }
  ];

  return (
    <section className="py-20 bg-brand-creamdark/15 scroll-mt-20 border-b border-brand-creamdark/40" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About section layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Story (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sagedark text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase mb-4">
              Our Agency Path
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal mb-6">
              The Region’s Preferred Property Authority
            </h2>

            <p className="text-stone-700 text-sm sm:text-base font-sans leading-relaxed mb-6">
              Founded over a decade ago with a simple focus to inject absolute honesty into Ahmedabad’s rapid real estate expansion, <strong>The Real Estates</strong> has grown into the leading boutique consultancy for residential smart development and commercial SEZ planning. We operate extensively out of our Vaishnodevi Circle Headquarters and GIFT City regulatory desks.
            </p>

            <p className="text-stone-700 text-sm sm:text-base font-sans leading-relaxed mb-6">
              Rather than promoting random bulk catalog inventories, we work closely as independent buyer-side representatives. We inspect architectural stress limits, cross-verify municipal approvals, structure loan alignments, and deliver properties that generate substantial wealth and physical comfort for generational families.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal font-sans">
                <CheckCircle2 className="h-4 w-4 text-brand-earth" /> Zero Middle Broker Fees
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal font-sans">
                <CheckCircle2 className="h-4 w-4 text-brand-earth" /> End-to-End Legal Audits
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal font-sans">
                <CheckCircle2 className="h-4 w-4 text-brand-earth" /> Authorized Channel Partnerships
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-charcoal font-sans">
                <CheckCircle2 className="h-4 w-4 text-brand-earth" /> Multi-Layered Vastu Compliance
              </div>
            </div>
          </div>

          {/* Right Column: Visual Brand Block (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Design backing grid */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-brand-sagedark rounded-3xl -z-10 opacity-60" />
            
            <div className="bg-brand-charcoal text-brand-creamlight p-8 sm:p-10 rounded-3xl border border-brand-earth/20 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
              {/* Floating ambient shapes */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-earth/10 rounded-full blur-2xl" />
              
              <div>
                <Eye className="h-10 w-10 text-brand-earth mb-6" />
                <h3 className="text-2xl font-display font-bold tracking-tight mb-4 text-brand-creamlight">
                  A Clear Corporate Mission
                </h3>
                <p className="text-sm font-sans text-brand-creamdark/80 leading-relaxed">
                  "To elevate the professional standard of property consultancies across Gujarat by replacing aggressive marketing pitches with clear, mathematically validated investment reports and zero-stress documentation handovers."
                </p>
              </div>

              <div className="border-t border-brand-creamdark/25 pt-6 mt-6">
                <p className="text-xs font-mono text-brand-earth uppercase tracking-widest font-semibold">
                  Founder Pledge
                </p>
                <p className="text-sm font-display font-semibold mt-1">
                  The Trust Advisory Board, The Real Estates
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Unmatched Advantages Section */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal">
              Unmatched Advantages By The Real Estates
            </h3>
            <p className="text-xs font-mono text-brand-earth uppercase font-bold tracking-wider mt-1">Our Standard Checklist Guarantee</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-brand-creamdark hover:border-brand-earth/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-brand-creamlight rounded-xl w-fit mb-4 border border-brand-creamdark">
                    {adv.icon}
                  </div>
                  <h4 className="text-base font-display font-bold text-brand-charcoal mb-2">
                    {adv.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Showcase Slider */}
        <div className="bg-brand-creamlight p-8 sm:p-12 rounded-3xl border border-brand-creamdark shadow-sm">
          <div className="text-center max-w-lg mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-charcoal">
              Endorsements From Premium Shareholders
            </h3>
            <p className="text-xs font-mono text-brand-earth uppercase font-bold mt-1">Over 1,200+ content families</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-2xl border border-brand-creamdark/80 relative flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-brand-earth" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans italic leading-relaxed mb-6">
                    "{test.text}"
                  </p>
                </div>
                
                <div className="border-t border-brand-creamdark/40 pt-4">
                  <p className="text-xs font-display font-bold text-brand-charcoal">{test.name}</p>
                  <p className="text-[10px] font-mono text-stone-500 mt-0.5">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
