import React, { useState } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#06251D] border-b border-[#C9A23F]/20 text-white backdrop-blur-md">
      {/* Top Bar 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single Brand Element */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A23F]"
        >
          <div className="w-9 h-9 rounded-sm bg-[#C9A23F] text-[#06251D] flex items-center justify-center font-bold shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#06251D] stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#C9A23F] transition-colors">
              NKOANA
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#C9A23F]/90 font-medium -mt-1">
              Automation Gates CC
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-[#C9A23F] border-[#C9A23F]'
                    : 'text-white/80 border-transparent hover:text-white hover:border-[#C9A23F]/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
            className="hidden lg:flex items-center gap-2 text-xs text-white/70 hover:text-[#C9A23F] transition-colors py-2 px-3 rounded-sm border border-white/10 hover:border-[#C9A23F]/40"
            title="Call primary workshop line"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A23F]" />
            <span className="tabular-nums font-mono">{COMPANY_DETAILS.primaryPhone}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] active:bg-[#b89132] transition-colors rounded-sm whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenQuote}
            className="px-3 py-1.5 text-xs font-semibold text-[#06251D] bg-[#C9A23F] rounded-sm whitespace-nowrap"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A23F]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#06251D] border-b border-[#C9A23F]/30 px-5 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="py-2.5 px-3 rounded-sm text-base font-medium text-white/90 hover:bg-white/10 hover:text-[#C9A23F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <div className="text-xs text-white/60 uppercase tracking-wider px-3">Direct Contact Lines</div>
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:text-[#C9A23F]"
            >
              <Phone className="w-4 h-4 text-[#C9A23F]" />
              <span className="tabular-nums font-mono">{COMPANY_DETAILS.primaryPhone} (Primary)</span>
            </a>
            <a
              href={`tel:${COMPANY_DETAILS.altPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 px-3 py-2 text-sm text-white/90 hover:text-[#C9A23F]"
            >
              <Phone className="w-4 h-4 text-[#C9A23F]" />
              <span className="tabular-nums font-mono">{COMPANY_DETAILS.altPhone} (Alternative)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full mt-2 py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] rounded-sm shadow-md"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
