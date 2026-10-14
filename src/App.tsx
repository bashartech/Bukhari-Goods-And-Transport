import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TransportInquiryModal } from './components/TransportInquiryModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top sticky navigation */}
      <Navbar onRequestQuote={() => handleOpenQuote()} />

      {/* Main website content */}
      <main className="flex-1">
        {/* 1. Cinematic Hero Section */}
        <Hero onRequestQuote={() => handleOpenQuote()} />

        {/* 2. Transportation Services */}
        <Services onSelectService={(service) => handleOpenQuote(service)} />

        {/* 3. About Bukhari Goods and Transport */}
        <About />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Transportation Process */}
        <Process onRequestQuote={() => handleOpenQuote()} />

        {/* 6. Promotional Banner */}
        <Banner onRequestQuote={() => handleOpenQuote()} />

        {/* 7. Contact Details & Direct Inquiries */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Transport Quote & Inquiry Modal */}
      <TransportInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />
    </div>
  );
}
