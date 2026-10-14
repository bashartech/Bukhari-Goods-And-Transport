import React from 'react';
import { Truck, Phone, MessageSquare, ArrowUp, Shield } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-900">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white">
                {COMPANY_DETAILS.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Dependable tractor-trailer transportation and goods freight services. Dedicated to cargo safety, direct owner communication, and reliable transport arrangements.
            </p>

            <div className="pt-2 text-xs text-slate-300">
              <div className="font-semibold text-white">Proprietor: {COMPANY_DETAILS.proprietor}</div>
              <div className="text-slate-400 mt-0.5">Commercial Goods &amp; Tractor-Trailer Logistics</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Transportation Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About the Company</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Direct Dispatch &amp; Inquiries</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={COMPANY_DETAILS.phoneDialUrl}
                className="flex items-center gap-2.5 text-slate-200 hover:text-amber-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:border-amber-400/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Phone</div>
                  <div className="font-mono font-semibold">{COMPANY_DETAILS.phone}</div>
                </div>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/40">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">WhatsApp Dispatch</div>
                  <div className="font-semibold text-emerald-400">Chat with Pir Rehan Shah</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>&copy; {currentYear} {COMPANY_DETAILS.name}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
