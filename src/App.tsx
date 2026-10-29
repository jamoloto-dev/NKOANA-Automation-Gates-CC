/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WorkGallery } from './components/WorkGallery';
import { AboutSection } from './components/AboutSection';
import { QuoteRequestSystem } from './components/QuoteRequestSystem';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from './data/companyData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setIsQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
  }, []);

  // Scroll to quote section
  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const quoteElement = document.getElementById('quote-request');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workElement = document.getElementById('our-work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'services', 'our-work', 'about-us', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E5] text-[#171B19] selection:bg-[#C9A23F] selection:text-[#06251D]">
      {/* Google Maps Quota Notice Banner */}
      {isQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="grow">
        {/* Cinematic Hero */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreWork={handleExploreWork}
        />

        {/* Core Services Section with Detail Views */}
        <ServicesSection
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        {/* Engineering Methodology: From Concept to Completion */}
        <ProcessSection />

        {/* Portfolio & Project Lifecycle Gallery with Lightbox */}
        <WorkGallery
          onSelectProjectForQuote={(projectTitle) => handleOpenQuote(projectTitle)}
        />

        {/* About NKOANA Automation Gates CC */}
        <AboutSection />

        {/* Quotation Request & Direct Dispatch System */}
        <QuoteRequestSystem
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService('')}
        />

        {/* Contact Information & Service Coverage Area */}
        <ContactSection onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onSelectService={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      {/* Floating Action Button for Instant WhatsApp / Call (Minimal mobile footprint) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${COMPANY_DETAILS.verifiedWhatsAppNumber.replace('+', '')}?text=${encodeURIComponent('Hello NKOANA Automation Gates, I would like to enquire about a gate security quotation.')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Enquiry"
          className="flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2.5 rounded-full shadow-lg hover:bg-[#20ba59] active:scale-95 transition-all text-xs font-semibold"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>

        <a
          href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
          aria-label="Call NKOANA Workshop"
          className="flex items-center gap-2 bg-[#06251D] text-[#C9A23F] border border-[#C9A23F]/40 p-2.5 rounded-full shadow-lg hover:bg-[#0a362b] active:scale-95 transition-all sm:hidden"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
