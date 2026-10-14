import React from 'react';
import { ArrowRight, Truck, Package, Layers, ShieldCheck, Compass, Briefcase } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: '01',
      title: 'Tractor-Trailer Transportation',
      image: IMAGES.serviceTractorTrailer,
      icon: Truck,
      description:
        'Transportation of suitable commercial cargo using heavy-duty tractor-trailer vehicles designed for stable and high-capacity hauls.',
      highlights: ['High-capacity loads', 'Secure vehicle coupling', 'Long-haul capability'],
    },
    {
      id: '02',
      title: 'Goods Transportation',
      image: IMAGES.bannerTruckRoad,
      icon: Package,
      description:
        'Moving business goods and commercial materials reliably between pickup and delivery locations with verified schedule coordination.',
      highlights: ['Commercial materials', 'Inter-city routes', 'Careful goods handling'],
    },
    {
      id: '03',
      title: 'Heavy Cargo Transport',
      image: IMAGES.serviceHeavyCargo,
      icon: Layers,
      description:
        'Transportation solutions for heavy or large cargo when the appropriate vehicle, flatbed, and strapping arrangements are available.',
      highlights: ['Industrial machinery', 'Secured lashing & strapping', 'Proper weight distribution'],
    },
    {
      id: '04',
      title: 'Commercial Freight Services',
      image: IMAGES.serviceFreightTerminal,
      icon: ShieldCheck,
      description:
        'Transport support for businesses, suppliers, distributors, and other commercial customers requiring dependable logistics.',
      highlights: ['Terminal coordination', 'Supplier transport', 'Clear shipment oversight'],
    },
    {
      id: '05',
      title: 'Long-Distance Transportation',
      image: IMAGES.heroTruck,
      icon: Compass,
      description:
        'Transportation arrangements for goods moving across provincial highways between cities or other agreed nationwide destinations.',
      highlights: ['Inter-provincial routes', 'Highway freight transit', 'Scheduled checkpoints'],
    },
    {
      id: '06',
      title: 'Business Transport Solutions',
      image: IMAGES.serviceCommercialFleet,
      icon: Briefcase,
      description:
        'Transport services tailored to the requirements, cargo type, and schedule of business customers seeking consistent long-term partnerships.',
      highlights: ['Tailored transport plans', 'Direct owner communication', 'Dedicated capacity'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-3 flex items-center gap-2">
            <span>Capabilities &amp; Fleet Logistics</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Tailored Arrangements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Transportation Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Professional goods and tractor-trailer transportation tailored to business requirements. Discuss your cargo specifications directly with Pir Rehan Shah for appropriate scheduling and vehicle arrangements.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-black/50"
              >
                {/* Image Container with subtle zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Clean unboxed editorial number */}
                  <span className="absolute top-4 right-4 text-xs font-mono font-bold text-amber-400 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {service.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors py-1"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
