import React, { useState } from 'react';
import { MessageSquare, Send, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const companyPhone = '919099953232';

  const defaultMessages = [
    { label: 'Apartment Inquiry', text: 'Hello, I want to schedule a site tour. ' },
   
  ];

  const handleOpenWhatsApp = (messageText: string) => {
    const encodedText = encodeURIComponent(messageText);
    const link = `https://wa.me/${companyPhone}?text=${encodedText}`;
    window.open(link, '_blank', 'noopener,noreferrer');
    setShowPopup(false);
  };

  const handleSubmitCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleOpenWhatsApp(customMsg);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans" id="whatsapp-widget">
      
      {/* WhatsApp Floating Chat Box Dialog */}
      {showPopup && (
        <div className="bg-white max-w-md w-[92vw] sm:w-[420px] rounded-3xl overflow-hidden border border-brand-creamdark shadow-2xl animate-float">
          {/* Header background with company style */}
          <div className="bg-brand-charcoal text-brand-creamlight p-5 flex items-center justify-between border-b border-brand-earth/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-brand-earth flex items-center justify-center font-bold font-display text-brand-charcoal overflow-hidden border-2 border-brand-creamdark">
                  RE
                </div>
                {/* Online Indicator Dot */}
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h4 className="text-base font-semibold leading-tight font-display text-brand-creamlight">The Real Estates Desk</h4>
                <p className="text-xs text-brand-sagedark font-mono flex items-center gap-0.5">
                  <Sparkles className="h-2.5 w-2.5 text-brand-earth" /> Property Channel Advisors
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowPopup(false)}
              className="text-brand-creamdark/50 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Quick Body info */}
          <div className="p-4 bg-brand-creamlight/30 max-h-[350px] overflow-y-auto flex flex-col gap-3">
            <div className="bg-white p-4 rounded-2xl border border-brand-creamdark text-sm text-stone-600 leading-relaxed font-sans shadow-sm">
              🔑 Welcome! This is the pre-vetted Property Portal Desk of <strong>The Real Estates</strong>. Ask us about AUDA maps, developer inventories, RERA listings, and EMI quotes below!
            </div>

            <p className="text-sm uppercase font-mono font-bold tracking-widest text-stone-400 pl-1">
              Popular Advisor Questions
            </p>

            {/* Quick pre-compiled buttons */}
            <div className="flex flex-col gap-2">
              {defaultMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(item.text)}
                  className="w-full text-left p-3 bg-white border border-brand-creamdark/95 hover:border-brand-earth/50 rounded-xl text-sm text-stone-700 hover:text-brand-earth font-sans leading-relaxed transition-all shadow-sm focus:outline-none cursor-pointer text-ellipsis overflow-hidden"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom chat footer */}
          <form onSubmit={handleSubmitCustom} className="p-3 bg-white border-t border-brand-creamlight flex gap-2">
            <input
              type="text"
              required
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-4 py-3 border border-brand-creamdark/95 bg-brand-creamlight/30 text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-earth text-brand-charcoal font-sans"
            />
            <button
              type="submit"
              className="p-3 bg-brand-charcoal hover:bg-brand-earth text-brand-creamlight hover:text-brand-charcoal rounded-xl transition-all cursor-pointer shadow flex items-center justify-center shrink-0"
              title="Send to WhatsApp"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          
          <div className="bg-brand-creamlight py-2 text-center text-[9px] text-gray-400 border-t border-brand-creamdark/45 font-mono">
            Direct secure WhatsApp Connection
          </div>
        </div>
      )}

      {/* Main floating circle trigger button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative group border-2 border-white"
        id="whatsapp-floating-trigger"
        aria-label="Contact us on WhatsApp"
      >
        {/* Radar pulsing background - authentic brand green */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/35 group-hover:bg-[#128C7E]/20 animate-ping -z-10" />
        
        {/* WhatsApp Official SVG Symbol inside white fill */}
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ffffff"
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        
        {/* Dynamic bubble alert indicator */}
        <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce" />
      </button>

    </div>
  );
}