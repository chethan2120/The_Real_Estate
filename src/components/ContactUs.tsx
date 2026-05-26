import React, { useState } from 'react';
import { FAQs } from '../data';
import { MapPin, Phone, Mail, Clock, ShieldCheck, MailCheck, HelpCircle, ChevronDown, ChevronUp, MessageSquarePlus } from 'lucide-react';

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQs[0].id);
  
  // Callback Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Vaishnodevi Circle');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 4500);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-brand-creamlight scroll-mt-20 border-b border-brand-creamdark/40" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-sagelight text-brand-charcoal text-xs font-mono font-bold tracking-widest uppercase mb-4">
            Connect With Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-brand-charcoal">
            Corporate Offices & Inquiries
          </h2>
          <div className="h-1 w-20 bg-brand-earth mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-600 font-sans">
            Ready to secure a site tour, schedule private loan advisory consultations, or ask detailed property questions? Reach out immediately. Our team is available 6 days a week.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20" id="contact-split-view">
          
          {/* Left Column: Office Cards & Details (5 cols) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2 mb-1 font-mono">
              Regional Office Directories
            </h3>

            {/* Office 1 */}
            <div className="bg-white p-6 rounded-2xl border border-brand-creamdark shadow-sm flex flex-col justify-between">
              <div>
                <span className="p-1 px-2.5 rounded bg-brand-creamlight text-[9px] text-brand-earth font-mono font-bold uppercase mb-3 inline-block border border-brand-creamdark">
                  Head Office
                </span>
                <h4 className="text-xl font-display font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-earth shrink-0" /> Ahmedabad Vaishnodevi H.O.
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4 pl-7">
                  4th Floor, Sangath IPL Smart Boulevard, near Vaishnodevi Circle, S.G. Highway, Ahmedabad, Gujarat 382421
                </p>
              </div>

              <div className="border-t border-brand-creamlight pt-4 flex flex-col gap-2 text-xs font-mono text-stone-700 pl-7">
                <a href="tel:+919099953232" className="flex items-center gap-2 hover:text-brand-earth transition-colors">
                  <Phone className="h-3.5 w-3.5 text-brand-earth" /> Phone: +91 90999 53232
                </a>
                <a href="tel:+7940043232" className="flex items-center gap-2 hover:text-brand-earth transition-colors">
                  <Phone className="h-3.5 w-3.5 text-stone-400" /> Tel: +91 79 4004 3232
                </a>
                <span className="flex items-center gap-2 text-stone-500">
                  <Clock className="h-3.5 w-3.5 text-stone-400" /> Mon - Sat: 10:00 AM - 7:30 PM
                </span>
              </div>
            </div>

            {/* Office 2 */}
            <div className="bg-white p-6 rounded-2xl border border-brand-creamdark shadow-sm flex flex-col justify-between">
              <div>
                <span className="p-1 px-2.5 rounded bg-brand-sagedark text-brand-charcoal text-[9px] font-mono font-bold uppercase mb-3 inline-block">
                  Fintech Desk
                </span>
                <h4 className="text-xl font-display font-bold text-brand-charcoal mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-earth shrink-0" /> GIFT City Smart Desk
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4 pl-7">
                  Office No. 12, Level 2, Smart Business Center, IFSC Zone, GIFT City, Gandhinagar, Gujarat 382355
                </p>
              </div>

              <div className="border-t border-brand-creamlight pt-4 flex flex-col gap-2 text-xs font-mono text-stone-700 pl-7">
                <a href="tel:+919913804321" className="flex items-center gap-2 hover:text-brand-earth transition-colors">
                  <Phone className="h-3.5 w-3.5 text-brand-earth" /> GIFT Cell: +91 99138 04321
                </a>
                <a href="mailto:gift@therealestates.in" className="flex items-center gap-2 hover:text-brand-earth transition-colors">
                  <Mail className="h-3.5 w-3.5 text-stone-400" /> Email: gift@therealestates.in
                </a>
                <span className="flex items-center gap-2 text-stone-500">
                  <Clock className="h-3.5 w-3.5 text-stone-400" /> Sunday: By Appointment Desk
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form Panel (7 cols) */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white p-6 sm:p-9 rounded-3xl border border-brand-creamdark shadow-sm relative">
            <div className="mb-6 pb-4 border-b border-brand-creamlight">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-earth uppercase tracking-widest">
                <MessageSquarePlus className="h-4 w-4" /> Priority Callback Ticket
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-charcoal mt-1">
                Request Professional Call back
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 font-sans mt-0.5">
                Drop your parameters below. Our licensed real estate counselor will retrieve municipal briefs for your desired area and call you.
              </p>
            </div>

            {isSent ? (
              <div className="py-16 text-center flex flex-col items-center justify-center animate-pulse-slow">
                <MailCheck className="h-14 w-14 text-brand-earth mb-4" />
                <h4 className="text-lg font-display font-bold text-brand-charcoal">Callback Ticket Established</h4>
                <p className="text-xs text-stone-600 font-sans mt-2 max-w-sm mx-auto">
                  Hello, <strong>{name}</strong>! Your scheduling ticket has been logged for <strong>{location}</strong>. A property advisor will dial you on <strong>{phone}</strong> in exactly 15 minutes.
                </p>
                <span className="border border-brand-creamdark bg-brand-creamlight p-1 px-3 text-[9px] font-mono text-brand-earth uppercase font-bold rounded mt-4">
                  Ticket-ID: RET-53922
                </span>
              </div>
            ) : (
              <form onSubmit={handleCallbackSubmit} className="flex flex-col gap-4" id="callback-request-form">
                
                {/* Full Candidate Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Chethan Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
                  />
                </div>

                {/* Email / WhatsApp splits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-mono"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9XXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-mono"
                    />
                  </div>
                </div>

                {/* Preferred Area Corridor */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Target Development Corridor
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans cursor-pointer"
                  >
                    <option value="Vaishnodevi Circle">Vaishnodevi Circle & S.G. Highway (Residential / Luxury)</option>
                    <option value="GIFT City Smart Zone">GIFT City Zone (Commercial Grade-A / High Yield)</option>
                    <option value="Science City">Science City Corridor (Royal Apartments)</option>
                    <option value="Other Area">General Ahmedebad / Land Plot portfolios</option>
                  </select>
                </div>

                {/* Specific Message inquiries */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-mono">
                    Describe your requirements (Budget size, BHK, specific configurations)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter details (e.g., looking for ready-to-move 3 BHK near Vaishnodevi Circle under ₹90L with dual allotted parking...)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-brand-creamdark/95 bg-brand-creamlight/30 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
                  />
                </div>

                {/* Submission note verification */}
                <span className="text-[10px] font-mono text-gray-400 leading-normal block mb-1">
                  *By submitting, you agree to allow our certified channel counselors to contact you over mobile calls and WhatsApp under DND compliance.
                </span>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-charcoal hover:bg-brand-earth text-brand-creamlight hover:text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow"
                  id="callback-submit-btn"
                >
                  Submit Callback Priority Queue
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Dynamic FAQ Accordion Block (From original therealestates.in data) */}
        <div className="bg-brand-creamdark/20 p-6 sm:p-10 rounded-3xl border border-brand-creamdark mt-16" id="faq-accordions">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-charcoal">
              Answers to Your Property Questions
            </h3>
            <p className="text-xs font-mono text-brand-earth uppercase font-bold mt-1">Our Knowledge Base</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {FAQs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-brand-creamdark transition-all overflow-hidden"
                  id={`faq-item-${faq.id}`}
                >
                  {/* Accordion Trigger heading button */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base text-brand-charcoal hover:text-brand-earth transition-colors focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-2 pr-4">
                      <HelpCircle className="h-4 w-4 text-brand-earth shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-brand-earth shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {/* Body expansion details panel */}
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-brand-creamlight text-xs sm:text-sm text-stone-600 font-sans leading-relaxed bg-brand-creamlight/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
