import React from 'react';
import { ShieldCheck, Phone, MessageSquare, UserCheck, Handshake, Truck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { IMAGES } from '../assets/images';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Owner Pir Rehan Shah portrait & Tractor Trolley */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-950 group">
              {/* Owner Portrait as Primary Hero Feature */}
              <img
                src={IMAGES.owner}
                alt="Pir Rehan Shah - Proprietor Bukhari Goods & Transport Company"
                className="w-full h-full object-cover aspect-[4/5] object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Floating Proprietor Spotlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Proprietor &amp; Founder</div>
                    <div className="text-lg font-extrabold text-white">{COMPANY_DETAILS.proprietor}</div>
                    <div className="text-xs text-slate-300 font-mono flex items-center gap-1.5 mt-0.5">
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>{COMPANY_DETAILS.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-amber-400/30 rounded-br-2xl pointer-events-none -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Company Story & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3 flex items-center gap-2">
              <span>About The Company</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Direct Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Your Trusted Partner in Tractor Trolley Transportation
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Bukhari Goods and Transport Company is dedicated to serving customers who need dependable tractor trolley and goods transportation. Under the proprietorship of <strong className="text-white font-bold">{COMPANY_DETAILS.proprietor}</strong>, the company aims to build lasting business relationships through professional communication, careful cargo handling, and reliable transport arrangements.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Whether you need bulk sand and gravel for construction projects, red clay bricks from kilns, high-volume agricultural straw (toori/bhusa) transport, quarry stone haulage, or soil foundation filling (bharai), we provide robust tractor trolleys backed by straightforward pricing and punctual execution.
            </p>

            {/* Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-2">
                  <Truck className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-bold text-white">Robust Tractor Trolley Capacity</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High-sided steel bodies and heavy tires capable of navigating unpaved construction paths and highway routes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center gap-2.5 mb-2">
                  <Handshake className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-bold text-white">Direct Owner Dealing</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Coordinate directly with Pir Rehan Shah for immediate availability, fair trip rates, and real-time scheduling.
                </p>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_DETAILS.phoneDialUrl}
                className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Pir Rehan Shah</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm rounded-xl transition-colors border border-slate-700"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
