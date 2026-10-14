import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip visible on hover / desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/95 text-slate-100 text-xs font-semibold rounded-xl border border-slate-700 shadow-xl backdrop-blur-md transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with Pir Rehan Shah</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={COMPANY_DETAILS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-950/50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 group"
        aria-label="Chat with Bukhari Goods and Transport on WhatsApp"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.808.484 3.518 1.332 5.002L2 22l5.12-1.309a9.98 9.98 0 0 0 4.911 1.34h.004c5.536 0 10.03-4.494 10.03-10.031C22.065 6.494 17.568 2 12.031 2zm0 18.364h-.003a8.318 8.318 0 0 1-4.24-1.161l-.304-.18-3.153.805.842-3.073-.198-.315a8.27 8.27 0 0 1-1.272-4.409c0-4.593 3.737-8.33 8.333-8.33 2.225 0 4.316.868 5.89 2.441a8.27 8.27 0 0 1 2.438 5.889c0 4.594-3.737 8.333-8.333 8.333zm4.568-6.242c-.25-.125-1.48-.73-1.71-.813-.23-.083-.397-.125-.563.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062s-1.057-.39-2.013-1.242c-.744-.664-1.246-1.485-1.392-1.735-.146-.25-.015-.386.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.084-.167.042-.313-.02-.438s-.563-1.355-.772-1.856c-.203-.489-.41-.422-.563-.43-.146-.008-.313-.01-.48-.01s-.438.063-.667.313c-.23.25-.875.855-.875 2.084s.896 2.417 1.021 2.584c.125.166 1.763 2.693 4.272 3.777.597.258 1.064.412 1.428.528.6.191 1.146.164 1.577.1.48-.072 1.48-.605 1.688-1.189.209-.584.209-1.084.146-1.189-.062-.104-.229-.166-.479-.291z" />
        </svg>
      </a>
    </aside>
  );
};
