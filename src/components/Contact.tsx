import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, User, MapPin, ShieldCheck, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [quickPickup, setQuickPickup] = useState('');
  const [quickDropoff, setQuickDropoff] = useState('');
  const [quickCargo, setQuickCargo] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `*Transport Inquiry — Bukhari Goods and Transport Company*`,
      quickPickup ? `*Pickup Location:* ${quickPickup}` : null,
      quickDropoff ? `*Destination:* ${quickDropoff}` : null,
      quickCargo ? `*Cargo Details:* ${quickCargo}` : null,
    ].filter(Boolean);

    const message = encodeURIComponent(parts.join('\n'));
    const url = `https://wa.me/923413467752?text=${message}`;
    setQuickSent(true);
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3 flex items-center gap-2">
            <span>Direct Inquiries</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Owner-Direct Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact Bukhari Goods &amp; Transport
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Reach out directly to discuss cargo requirements, trailer suitability, rates, and schedule arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Official Contact Cards */}
          <div className="lg:col-span-6 space-y-5">
            {/* Primary Phone Card */}
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Official Contact Number</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                      {COMPANY_DETAILS.phone}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={COMPANY_DETAILS.phoneDialUrl}
                  className="py-3 px-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Directly</span>
                </a>
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Proprietor & Company Profile */}
            <div className="rounded-2xl p-6 bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase">Proprietor</div>
                  <div className="text-lg font-bold text-white">{COMPANY_DETAILS.proprietor}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dedicated to cargo safety, professional service, and reliable transport arrangements.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Inquiry Card */}
          <div className="lg:col-span-6 rounded-2xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-1">Direct Cargo Inquiry</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Send your route and goods details directly to Pir Rehan Shah on WhatsApp for an immediate response.
              </p>
            </div>

            {quickSent ? (
              <div className="py-6 text-center space-y-3 bg-slate-950/50 rounded-xl p-4 border border-slate-800">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Opening WhatsApp...</h4>
                <p className="text-xs text-slate-400">
                  Your inquiry message has been prepared for transmission.
                </p>
                <button
                  type="button"
                  onClick={() => setQuickSent(false)}
                  className="text-xs text-amber-400 hover:underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickInquiry} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Pickup City / Location
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Karachi, Lahore, Faisalabad, etc."
                    value={quickPickup}
                    onChange={(e) => setQuickPickup(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Destination City / Facility
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rawalpindi, Peshawar, Multan, etc."
                    value={quickDropoff}
                    onChange={(e) => setQuickDropoff(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Cargo / Goods Description
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Type of goods, container requirements, approximate weight, etc."
                    value={quickCargo}
                    onChange={(e) => setQuickCargo(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
