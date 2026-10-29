import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, ShieldCheck, ArrowUpRight, Compass } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES } from '../data/companyData';
import { LocationMap } from './LocationMap';

interface ContactSectionProps {
  onOpenQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="contact" className="py-20 bg-white border-b border-[#06251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-2">
            Direct Communication & Support
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#06251D] tracking-tight">
            Contact NKOANA Automation Gates CC
          </h2>
          <p className="mt-3 text-base text-[#171B19]/75 leading-relaxed">
            Reach out directly for quotation requests, site assessment bookings, and gate motor troubleshooting across Mmotong, Polokwane, and surrounding communities.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Primary Telephone */}
          <div className="p-6 bg-[#F5F0E5]/60 rounded-xs border border-[#06251D]/10 flex flex-col justify-between hover:border-[#C9A23F]/50 transition-colors">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#06251D] text-[#C9A23F] flex items-center justify-center mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#06251D]/60 uppercase tracking-wider font-semibold">
                Primary Phone Line
              </div>
              <div className="font-mono text-lg font-bold text-[#06251D] mt-1 tabular-nums">
                {COMPANY_DETAILS.primaryPhone}
              </div>
              <p className="text-xs text-[#171B19]/70 mt-2 leading-relaxed">
                Direct workshop line for fast call responses and new quotes.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#06251D] hover:text-[#C9A23F] transition-colors"
            >
              <span>Call Primary Line</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Alternative Phone */}
          <div className="p-6 bg-[#F5F0E5]/60 rounded-xs border border-[#06251D]/10 flex flex-col justify-between hover:border-[#C9A23F]/50 transition-colors">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#06251D] text-[#C9A23F] flex items-center justify-center mb-4">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#06251D]/60 uppercase tracking-wider font-semibold">
                Alternative Phone
              </div>
              <div className="font-mono text-lg font-bold text-[#06251D] mt-1 tabular-nums">
                {COMPANY_DETAILS.altPhone}
              </div>
              <p className="text-xs text-[#171B19]/70 mt-2 leading-relaxed">
                Secondary technician line when on-site installations are in progress.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.altPhone.replace(/\s+/g, '')}`}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#06251D] hover:text-[#C9A23F] transition-colors"
            >
              <span>Call Alternative Line</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: WhatsApp Support */}
          <div className="p-6 bg-[#F5F0E5]/60 rounded-xs border border-[#06251D]/10 flex flex-col justify-between hover:border-[#25D366]/50 transition-colors">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#25D366] text-white flex items-center justify-center mb-4">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#06251D]/60 uppercase tracking-wider font-semibold">
                WhatsApp Chat
              </div>
              <div className="font-mono text-lg font-bold text-[#06251D] mt-1 tabular-nums">
                {COMPANY_DETAILS.whatsappDisplay}
              </div>
              <p className="text-xs text-[#171B19]/70 mt-2 leading-relaxed">
                Send driveway photos, gate motor models, or dimensions directly.
              </p>
            </div>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.verifiedWhatsAppNumber.replace('+', '')}?text=${encodeURIComponent('Hello NKOANA Automation Gates, I would like to request information or a quote.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#06251D] hover:text-[#25D366] transition-colors"
            >
              <span>Start WhatsApp Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Official Email */}
          <div className="p-6 bg-[#F5F0E5]/60 rounded-xs border border-[#06251D]/10 flex flex-col justify-between hover:border-[#C9A23F]/50 transition-colors">
            <div>
              <div className="w-9 h-9 rounded-xs bg-[#06251D] text-[#C9A23F] flex items-center justify-center mb-4">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs text-[#06251D]/60 uppercase tracking-wider font-semibold">
                Official Email
              </div>
              <div className="font-mono text-sm font-bold text-[#06251D] mt-1 break-all">
                {COMPANY_DETAILS.email}
              </div>
              <p className="text-xs text-[#171B19]/70 mt-2 leading-relaxed">
                For formal tenders, procurement requests, and architectural plans.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#06251D] hover:text-[#C9A23F] transition-colors"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Postal & Service Region Clarification Box */}
        <div className="p-6 sm:p-8 bg-[#06251D] text-white rounded-xs border border-[#C9A23F]/30 shadow-md grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C9A23F] text-xs uppercase tracking-wider font-semibold">
              <MapPin className="w-4 h-4" />
              <span>Postal Correspondence Address</span>
            </div>
            <div className="font-mono text-sm font-medium text-white">
              {COMPANY_DETAILS.postalAddress}
            </div>
            <p className="text-xs text-white/60">
              Note: This is an official postal address. Client site measurements and physical fabrication installations take place across Limpopo.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C9A23F] text-xs uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Active Service Coverage</span>
            </div>
            <div className="text-sm font-medium text-white">
              Mmotong, Polokwane, Seshego & Surrounding Areas
            </div>
            <p className="text-xs text-white/60">
              On-site assessments and installations are arranged directly with property owners and project managers.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#C9A23F] text-xs uppercase tracking-wider font-semibold">
              <Clock className="w-4 h-4" />
              <span>Business Operating Hours</span>
            </div>
            <div className="text-xs text-white/90 space-y-1 font-mono">
              <div>Mon – Fri: {COMPANY_DETAILS.operatingHours.weekdays}</div>
              <div>Saturday: {COMPANY_DETAILS.operatingHours.saturday}</div>
              <div className="text-white/60">Sunday: Emergency callouts by arrangement</div>
            </div>
          </div>

        </div>

        {/* Interactive Google Map: Find Our Location & Service Corridor */}
        <div className="mt-14 pt-10 border-t border-[#06251D]/10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-1">
                Geographic Presence
              </div>
              <h3 className="font-display text-2xl font-bold text-[#06251D]">
                Find Our Location & Service Coverage
              </h3>
              <p className="text-xs sm:text-sm text-[#171B19]/70 mt-1">
                Explore our primary operations base in Mmotong and regional installation corridors across Polokwane and Seshego.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#06251D] font-medium bg-[#F5F0E5] px-3 py-1.5 rounded-xs border border-[#06251D]/10 shrink-0">
              <Compass className="w-3.5 h-3.5 text-[#C9A23F]" />
              <span>Mmotong 0742, Limpopo</span>
            </div>
          </div>

          <LocationMap />
        </div>

      </div>
    </section>
  );
};
