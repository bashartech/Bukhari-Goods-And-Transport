import React from 'react';
import { Phone, MessageSquare, ArrowUpRight, ShieldCheck, Clock, CheckCircle2, Truck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-slate-950">
      {/* Background Authentic Tractor Trolley Highway Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroTractorTrolley}
          alt="Heavy-duty red tractor with loaded goods trolley on highway at sunset"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for high contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-14 my-auto w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Supporting unboxed kicker */}
          <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase">
            <span className="w-2 h-2 rounded-sm bg-amber-400" aria-hidden="true" />
            <span>Heavy-Duty Tractor Trolley Transport</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Commercial &amp; Rural Freight</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance mb-6">
            Moving Your Goods.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              Delivering Your Trust.
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
            Bukhari Goods and Transport Company provides dependable heavy-duty tractor trolley transportation for building materials, construction sand, bricks, stones, agricultural goods, and commercial cargo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            {/* Primary Action: Call Us Now */}
            <a
              href={COMPANY_DETAILS.phoneDialUrl}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Us Now</span>
            </a>

            {/* Secondary Action: Contact on WhatsApp */}
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 active:translate-y-0 border border-emerald-400/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>

            {/* Tertiary Action: Modal Form */}
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base rounded-xl transition-all border border-slate-700/80 hover:border-slate-500"
            >
              <span>Book Trolley</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Proprietor Direct Credibility with Owner Picture */}
          <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
              <img
                src={IMAGES.owner}
                alt="Pir Rehan Shah"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-xs">
              <div className="text-slate-400">Direct Transport Dispatch</div>
              <div className="text-white font-bold flex items-center gap-1.5">
                <span>{COMPANY_DETAILS.proprietor}</span>
                <span className="text-slate-500">·</span>
                <span className="text-amber-400 font-mono tabular-nums">{COMPANY_DETAILS.phone}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Operational Pillars Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="glass-panel rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {/* Pillar 1 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3 first:pl-0">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Heavy Payload Trolley</h4>
                <p className="text-xs text-slate-400">High-sided steel &amp; hydraulic dumpers</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sand, Bajri &amp; Bricks</h4>
                <p className="text-xs text-slate-400">Construction material haulage</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Agricultural Hauling</h4>
                <p className="text-xs text-slate-400">Wheat, toori/bhusa, crops &amp; fodder</p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Owner Service</h4>
                <p className="text-xs text-slate-400">Prompt booking with Pir Rehan Shah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
