import React from 'react';
import { ArrowUp, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/companyData';

interface FooterProps {
  onOpenQuote: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171B19] text-white border-t border-[#C9A23F]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xs bg-[#C9A23F] text-[#06251D] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-[#06251D]" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                NKOANA Automation Gates CC
              </span>
            </div>

            <p className="text-xs text-[#C9A23F] font-semibold tracking-wide uppercase">
              {COMPANY_DETAILS.tagline}
            </p>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Specialized security engineering and automation from concept to completion. Serving homes, agricultural estates, and commercial facilities throughout Mmotong and the greater Limpopo province.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] transition-colors rounded-xs shadow-xs"
              >
                Request a Formal Quote
              </button>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#C9A23F]">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-[#C9A23F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#C9A23F]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-white/75">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="hover:text-[#C9A23F] text-left transition-colors"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#C9A23F]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-white/75">
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#C9A23F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A23F] shrink-0" />
                <span className="font-mono tabular-nums">{COMPANY_DETAILS.primaryPhone}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.altPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#C9A23F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A23F] shrink-0" />
                <span className="font-mono tabular-nums">{COMPANY_DETAILS.altPhone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="flex items-center gap-2 hover:text-[#C9A23F] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A23F] shrink-0" />
                <span className="font-mono">{COMPANY_DETAILS.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-white/60">
                <MapPin className="w-3.5 h-3.5 text-[#C9A23F] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.postalAddress}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} NKOANA Automation Gates CC. All rights reserved. Registered Close Corporation (CC), South Africa.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-white/40">Mmotong · Polokwane · Limpopo</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C9A23F] hover:text-white transition-colors"
              aria-label="Return to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
