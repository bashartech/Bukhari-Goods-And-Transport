import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { Logo } from './Logo';

interface NavbarProps {
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Trolley Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-xl py-2.5'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Zone 1: Brand Wordmark with Owner Image integrated in logo emblem */}
          <a
            href="#home"
            className="hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: Navigation Links (single-line, clean hover underline) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone + Primary CTA */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            <a
              href={COMPANY_DETAILS.phoneDialUrl}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              onClick={onRequestQuote}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md shadow-amber-400/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Request Trolley
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={COMPANY_DETAILS.phoneDialUrl}
              className="p-2 text-amber-400 bg-slate-800/80 rounded-lg border border-slate-700"
              aria-label="Call company"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/60 border border-slate-700/60"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 pb-4 border-t border-slate-800/90 bg-slate-950/98 backdrop-blur-2xl rounded-xl px-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm"
              >
                Request Trolley Quote
              </button>
              <a
                href={COMPANY_DETAILS.phoneDialUrl}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
