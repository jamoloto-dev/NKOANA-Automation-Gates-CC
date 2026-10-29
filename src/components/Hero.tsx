import React from 'react';
import { ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { IllustrativeVisual } from './IllustrativeVisual';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreWork }) => {
  return (
    <section id="home" className="relative bg-[#06251D] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#C9A23F]/20 overflow-hidden">
      {/* Subtle gold grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C9A23F 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust statement & location kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#C9A23F] font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#C9A23F] rounded-full inline-block" />
                Mmotong · Polokwane · Limpopo
              </span>
              <span aria-hidden="true" className="text-white/30">|</span>
              <span className="text-white/80">{COMPANY_DETAILS.trustStatement}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Security. <br className="hidden sm:inline" />
              <span className="text-[#C9A23F]">Precision.</span> <br className="hidden sm:inline" />
              Automation.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-white/85 max-w-xl font-normal leading-relaxed text-pretty">
              From custom gate fabrication to intelligent access control, we deliver security solutions built around your property.
            </p>

            {/* CTA Decision Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] active:bg-[#b89132] transition-colors rounded-sm shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#06251D]" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C9A23F]/60 transition-colors rounded-sm whitespace-nowrap"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Direct Quick-Contact Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-white/75">
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-[#C9A23F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A23F]" />
                <span className="font-medium text-white">Call:</span>
                <span className="tabular-nums font-mono text-[#C9A23F] font-semibold">{COMPANY_DETAILS.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.verifiedWhatsAppNumber.replace('+', '')}?text=${encodeURIComponent('Hello NKOANA Automation Gates, I would like to enquire about a security gate quotation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C9A23F] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span className="font-medium text-white">WhatsApp:</span>
                <span className="tabular-nums font-mono">{COMPANY_DETAILS.whatsappDisplay}</span>
              </a>

              <div className="flex items-center gap-1.5 text-white/60">
                <MapPin className="w-3.5 h-3.5 text-[#C9A23F]" />
                <span>Mmotong 0742</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-sm p-1.5 bg-gradient-to-br from-[#C9A23F]/40 via-white/10 to-[#C9A23F]/20 border border-[#C9A23F]/30 shadow-2xl">
              <IllustrativeVisual
                type="sliding-gate"
                title="Automated Sliding Driveway Security Gate"
                imageUrl="/images/hero-automated-gate.jpeg"
                imageAlt="Modern automated sliding security driveway gate with architectural brick pillars"
                className="h-72 sm:h-84 lg:h-96 w-full rounded-xs"
                showBadge={true}
              />

              {/* Technical specs overlay bar */}
              <div className="mt-2 bg-[#171B19] px-3.5 py-2.5 rounded-xs border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="text-white/90 font-medium">Full Project Lifecycle</span>
                </div>
                <span className="text-[#C9A23F] font-mono text-[11px]">Concept → Completion</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Trust Pillars Banner */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xs bg-[#C9A23F]/15 border border-[#C9A23F]/30 text-[#C9A23F] flex items-center justify-center font-bold text-sm shrink-0">
              01
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">Custom Steel Fabrication</div>
              <div className="text-xs text-white/70 mt-0.5 leading-relaxed">
                Precision-welded gates, burglar bars, and palisades tailored to exact property measurements.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xs bg-[#C9A23F]/15 border border-[#C9A23F]/30 text-[#C9A23F] flex items-center justify-center font-bold text-sm shrink-0">
              02
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">Industrial Automation</div>
              <div className="text-xs text-white/70 mt-0.5 leading-relaxed">
                Heavy-duty sliding & swing motors with loadshedding battery backups and safety sensors.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xs bg-[#C9A23F]/15 border border-[#C9A23F]/30 text-[#C9A23F] flex items-center justify-center font-bold text-sm shrink-0">
              03
            </div>
            <div>
              <div className="font-display font-semibold text-white text-sm">Perimeter Protection</div>
              <div className="text-xs text-white/70 mt-0.5 leading-relaxed">
                Electric fencing, siren energizers, intercoms, and access control for reliable perimeter security.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
