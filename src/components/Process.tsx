import React from 'react';
import { PhoneCall, FileText, CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

interface ProcessProps {
  onRequestQuote: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onRequestQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Contact Us',
      desc: 'Call or WhatsApp Bukhari Goods and Transport Company about your haulage requirements.',
      icon: PhoneCall,
      actionText: 'Direct Call or WhatsApp',
    },
    {
      num: '02',
      title: 'Share Material Details',
      desc: 'Specify material type (sand, bricks, toori, stone, or goods), loading point, site destination, and schedule.',
      icon: FileText,
      actionText: 'Route & Volume Specs',
    },
    {
      num: '03',
      title: 'Discuss Trolley Arrangements',
      desc: 'Confirm trolley count, dumper/cage suitability, trip pricing, and schedule directly with Pir Rehan Shah.',
      icon: CheckCircle2,
      actionText: 'Transparent Agreement',
    },
    {
      num: '04',
      title: 'Dispatch & Delivery',
      desc: 'Proceed with prompt tractor trolley positioning, safe loading, and dedicated transport to your location.',
      icon: Truck,
      actionText: 'Safe Site Delivery',
    },
  ];

  return (
    <section className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3 inline-flex items-center gap-2">
            <span>Simple &amp; Direct</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Step-by-Step Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How to Book a Tractor Trolley
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed text-balance">
            We keep the tractor trolley booking process straightforward and transparent, giving you rapid dispatch and dependable site delivery.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-amber-400/20 via-amber-400/50 to-amber-400/20 -translate-y-8 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl p-6 bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-black font-mono text-amber-400">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 text-xs font-semibold text-slate-400 flex items-center justify-between">
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="mt-14 p-6 glass-panel rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <h4 className="text-base font-bold text-white mb-1">Ready to plan your cargo movement?</h4>
            <p className="text-xs sm:text-sm text-slate-400">Directly contact Pir Rehan Shah at {COMPANY_DETAILS.phone} for immediate assistance.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-400/20 whitespace-nowrap"
            >
              Request Transport
            </button>
            <a
              href={COMPANY_DETAILS.phoneDialUrl}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
