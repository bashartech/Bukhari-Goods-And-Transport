import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { IMAGES } from '../assets/images';

interface BannerProps {
  onRequestQuote: () => void;
}

export const Banner: React.FC<BannerProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background Cinematic Tractor Trolley Road View */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.bannerTractorTrolley}
          alt="Panoramic view of red tractor trolley transport on highway at sunset"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Dark Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Subtle unboxed label */}
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3 flex items-center gap-2">
            <span>Tractor Trolley Goods Logistics</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Construction &amp; Commercial</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Your Cargo.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Our Commitment.
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Looking for dependable tractor trolley transportation for sand, bricks, boulders, agricultural straw, or business cargo? Contact Bukhari Goods and Transport Company to arrange prompt vehicle dispatch.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={COMPANY_DETAILS.phoneDialUrl}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {COMPANY_DETAILS.phone}</span>
            </a>

            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-md shadow-emerald-950/40 hover:-translate-y-0.5 active:translate-y-0 border border-emerald-400/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base rounded-xl transition-all border border-slate-700/80"
            >
              <span>Book Trolley</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Direct proprietor indicator with owner small avatar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-amber-400 shrink-0">
              <img
                src={IMAGES.owner}
                alt="Pir Rehan Shah"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <span>Proprietor: <strong className="text-white">{COMPANY_DETAILS.proprietor}</strong></span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Commercial Tractor Trolley Hauling</span>
          </div>
        </div>
      </div>
    </section>
  );
};
