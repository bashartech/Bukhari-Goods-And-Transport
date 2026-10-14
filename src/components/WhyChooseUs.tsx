import React from 'react';
import { CalendarCheck, Shield, PhoneCall, Building2, UserCog, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: CalendarCheck,
      title: 'Reliable Transport Arrangements',
      description:
        'Clear, upfront communication regarding transport requirements, vehicle availability, and realistic dispatch schedules.',
    },
    {
      icon: Shield,
      title: 'Cargo Care & Integrity',
      description:
        'Emphasis on responsible cargo handling, balanced weight distribution, and secure fastening throughout the transit.',
    },
    {
      icon: PhoneCall,
      title: 'Professional Communication',
      description:
        'Direct contact with the transport proprietor for immediate inquiries, status checks, and straightforward answers without delays.',
    },
    {
      icon: Building2,
      title: 'Business-Focused Service',
      description:
        'Transportation solutions structured around your business cargo needs, operational volume, and delivery destination timelines.',
    },
    {
      icon: UserCog,
      title: 'Personalized Support',
      description:
        'Contact the company directly to discuss individual transport requests, specialized route requirements, and dedicated arrangements.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3 inline-flex items-center gap-2">
            <span>Our Principles</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Trust &amp; Reliability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Businesses Choose Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed text-balance">
            Goods transportation requires dependable planning, cargo protection, and clear communication. Here is how we ensure each transport commitment is executed with professional care.
          </p>
        </div>

        {/* 5-Card Layout: Bento with Marquee First Item */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;
            const isMarquee = index === 0;
            return (
              <div
                key={item.title}
                className={`rounded-2xl p-7 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40 group ${
                  isMarquee ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Committed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
