import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle2, Truck, MapPin, Calendar, Package } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/company';
import { IMAGES } from '../assets/images';

interface TransportInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const TransportInquiryModal: React.FC<TransportInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [cargoType, setCargoType] = useState(preselectedService || 'Sand, Bajri & Gravel Hauling');
  const [pickupCity, setPickupCity] = useState('');
  const [dropoffCity, setDropoffCity] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [cargoWeight, setCargoWeight] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textLines = [
      `*Tractor Trolley Inquiry — Bukhari Goods & Transport*`,
      customerName ? `*Customer:* ${customerName}` : null,
      customerPhone ? `*Phone:* ${customerPhone}` : null,
      `*Material / Service:* ${cargoType}`,
      pickupCity ? `*Loading Point:* ${pickupCity}` : null,
      dropoffCity ? `*Unloading Site:* ${dropoffCity}` : null,
      preferredDate ? `*Preferred Schedule:* ${preferredDate}` : null,
      cargoWeight ? `*Estimated Trips / Volume:* ${cargoWeight}` : null,
      additionalNotes ? `*Notes:* ${additionalNotes}` : null,
    ].filter(Boolean);

    const message = encodeURIComponent(textLines.join('\n'));
    const url = `https://wa.me/923413467752?text=${message}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Owner mini avatar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
              <img
                src={IMAGES.owner}
                alt="Pir Rehan Shah"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 id="inquiry-modal-title" className="text-lg font-bold text-white tracking-tight">Request Tractor Trolley Quote</h3>
              <p className="text-xs text-slate-400">Direct coordination with Pir Rehan Shah</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Trolley Inquiry Prepared!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your tractor trolley request has been formatted and WhatsApp is opening now. You can also dial Pir Rehan Shah directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={COMPANY_DETAILS.phoneDialUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-lg shadow-amber-500/20"
                >
                  <Phone className="w-4 h-4" />
                  Call: {COMPANY_DETAILS.phone}
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Loading Site / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Quarry, Riverbed, Farm, City"
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    Unloading Destination / Plot *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Construction Plot, Mandi, Facility"
                    value={dropoffCity}
                    onChange={(e) => setDropoffCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-amber-400" />
                    Cargo / Trolley Service *
                  </label>
                  <select
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  >
                    <option value="Sand, Bajri & Gravel Hauling">Sand, Bajri &amp; Gravel Hauling</option>
                    <option value="Agricultural Crops & Wheat Straw (Toori/Bhusa)">Agricultural Straw (Toori / Bhusa) &amp; Crops</option>
                    <option value="Stone, Boulders & Quarry Transport">Stone, Boulders &amp; Quarry Transport</option>
                    <option value="Bricks & Building Material Delivery">Bricks (Eent) &amp; Building Supplies</option>
                    <option value="Plot Filling & Earthwork (Mitti Bharai)">Plot Foundation Filling (Mitti Bharai)</option>
                    <option value="Commercial Goods & General Freight">Commercial Goods &amp; General Freight</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    Preferred Dispatch Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Immediate / Tomorrow"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name / Contractor Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or business"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g., 03XX XXXXXXX"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Trolley Count or Specific Material Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Number of trolleys/trips needed, site access condition, or special instructions."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry via WhatsApp
                </button>
                <a
                  href={COMPANY_DETAILS.phoneDialUrl}
                  className="w-full sm:w-auto py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call Directly
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
