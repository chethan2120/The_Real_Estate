import React from 'react';

export default function WhatsAppButton() {
  const companyPhone = '919099953232';

  const handleOpenWhatsApp = () => {
    const link = `https://wa.me/${companyPhone}`;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans" id="whatsapp-widget">
      
      {/* Main floating circle trigger button - opens WhatsApp directly */}
      <button
        onClick={handleOpenWhatsApp}
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative group border-2 border-white"
        id="whatsapp-floating-trigger"
        aria-label="Contact us on WhatsApp"
      >
        {/* Radar pulsing background - authentic brand green */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]/35 group-hover:bg-[#128C7E]/20 animate-ping -z-10" />
        
        {/* Original WhatsApp Logo - Green circle with white phone */}
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M12.031 2C6.502 2 2 6.478 2 11.979c0 2.09.67 4.041 1.796 5.642L2 24l6.455-1.788a9.963 9.963 0 003.576.677c5.528 0 10.03-4.479 10.03-9.98C22.061 6.478 17.56 2 12.031 2zm0 18.364c-1.394 0-2.754-.372-3.92-1.051l-.281-.168-3.898 1.078.929-3.72-.184-.305A7.67 7.67 0 014.444 11.98c0-4.266 3.476-7.738 7.75-7.738 4.273 0 7.747 3.472 7.747 7.738 0 4.265-3.474 7.736-7.747 7.736l-3.163.072z"
          />
          <path
            fill="#ffffff"
            d="M16.806 13.84c-.266-.133-1.572-.788-1.815-.877-.243-.09-.421-.133-.598.133-.177.266-.685.877-.84 1.057-.155.18-.31.18-.576.047-.266-.133-1.123-.414-2.138-1.32a8.015 8.015 0 01-1.48-1.841c-.156-.242-.016-.375.117-.495.119-.104.263-.271.394-.407.131-.136.175-.227.262-.374.087-.147.043-.276-.022-.383a63.62 63.62 0 00-.559-1.17c-.146-.39-.301-.33-.412-.33h-.368a.708.708 0 00-.513.24c-.181.18-.69.674-.69 1.644 0 .97.706 1.91.806 2.041.1.132 1.395 2.124 3.379 2.979.472.203.841.324 1.129.415.475.152.907.13 1.249.088.381-.045 1.172-.474 1.337-.935.165-.46.165-.856.115-.94z"
          />
        </svg>
        
        {/* Dynamic bubble alert indicator */}
        <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce" />
      </button>

    </div>
  );
}