import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, X, Cpu, Zap, Radio, Shield, Wrench, Hammer } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/companyData';
import { IllustrativeVisual } from './IllustrativeVisual';
import { RevealOnScroll } from './RevealOnScroll';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceVisualType = (id: string): 'sliding-gate' | 'gate-motor' | 'electric-fence' | 'intercom' | 'palisade' | 'welding' => {
    switch (id) {
      case 'automated-gates':
        return 'sliding-gate';
      case 'electric-fencing':
        return 'electric-fence';
      case 'access-control':
        return 'intercom';
      case 'palisade-fencing':
        return 'palisade';
      case 'fabrication-welding':
        return 'welding';
      case 'repairs-maintenance':
        return 'gate-motor';
      default:
        return 'sliding-gate';
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'automated-gates':
        return <Cpu className="w-5 h-5 text-[#C9A23F]" />;
      case 'electric-fencing':
        return <Zap className="w-5 h-5 text-[#C9A23F]" />;
      case 'access-control':
        return <Radio className="w-5 h-5 text-[#C9A23F]" />;
      case 'palisade-fencing':
        return <Shield className="w-5 h-5 text-[#C9A23F]" />;
      case 'fabrication-welding':
        return <Hammer className="w-5 h-5 text-[#C9A23F]" />;
      case 'repairs-maintenance':
        return <Wrench className="w-5 h-5 text-[#C9A23F]" />;
      default:
        return <Shield className="w-5 h-5 text-[#C9A23F]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F5F0E5] border-b border-[#06251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-2">
            Specialized Security Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#06251D] tracking-tight">
            Comprehensive Security & Automation Services
          </h2>
          <p className="mt-4 text-[#171B19]/80 text-base sm:text-lg leading-relaxed">
            Delivering robust perimeter protection and precision gate engineering across Mmotong, Polokwane, and surrounding Limpopo communities.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const visualType = getServiceVisualType(service.id);
            const serviceIndexFormatted = String(index + 1).padStart(2, '0');

            return (
              <RevealOnScroll
                key={service.id}
                delayMs={index * 75}
                className="h-full"
              >
                <div className="bg-white rounded-xs border border-[#06251D]/10 hover:border-[#C9A23F]/50 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md group overflow-hidden h-full">
                  <div>
                    {/* Visual Header */}
                    <div className="h-52 w-full border-b border-[#06251D]/10 relative overflow-hidden">
                      <IllustrativeVisual
                        type={visualType}
                        title={service.title}
                        imageUrl={service.imageUrl}
                        imageAlt={service.imageAlt}
                        isGenuineOwnerAsset={service.isGenuineOwnerAsset}
                        className="w-full h-full"
                        showBadge={true}
                      />
                      <div className="absolute top-3 left-3 bg-[#06251D]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#C9A23F] rounded-xs border border-[#C9A23F]/30 flex items-center gap-1.5 z-10">
                        <span>{serviceIndexFormatted}</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/80 capitalize">{service.category}</span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        {getServiceIcon(service.id)}
                        <h3 className="font-display text-xl font-bold text-[#06251D] group-hover:text-[#06251D] transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#C9A23F] font-medium mb-3">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-[#171B19]/75 line-clamp-3 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>

                      {/* Key features bullet points */}
                      <div className="space-y-1.5 pt-2 border-t border-[#06251D]/5">
                        {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#171B19]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#06251D] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-0 border-t border-[#06251D]/5 flex items-center justify-between gap-3 mt-4">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-[#06251D] hover:text-[#C9A23F] flex items-center gap-1 transition-colors py-2"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F]/20 hover:bg-[#C9A23F] hover:text-[#06251D] transition-colors rounded-xs border border-[#C9A23F]/50"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="relative bg-[#F5F0E5] text-[#171B19] rounded-sm max-w-3xl w-full border border-[#C9A23F]/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#06251D] text-white p-6 border-b border-[#C9A23F]/30 flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-semibold mb-1">
                  Service Specifications & Scope
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  {selectedService.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close details"
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm">
              
              {/* Visual preview */}
              <div className="h-60 sm:h-72 w-full rounded-xs overflow-hidden border border-[#06251D]/15">
                <IllustrativeVisual
                  type={getServiceVisualType(selectedService.id)}
                  title={selectedService.title}
                  imageUrl={selectedService.imageUrl}
                  imageAlt={selectedService.imageAlt}
                  isGenuineOwnerAsset={selectedService.isGenuineOwnerAsset}
                  className="w-full h-full"
                  showBadge={true}
                />
              </div>

              {/* Scope Description */}
              <div>
                <h4 className="font-display font-bold text-base text-[#06251D] mb-2">
                  What We Deliver
                </h4>
                <p className="text-[#171B19]/85 leading-relaxed">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="font-display font-bold text-base text-[#06251D] mb-3">
                  Technical Specifications
                </h4>
                <div className="border border-[#06251D]/10 rounded-xs overflow-hidden bg-white">
                  {selectedService.technicalSpecs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className={`grid grid-cols-1 sm:grid-cols-3 p-3 text-xs ${
                        sIdx % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E5]/50'
                      } ${sIdx > 0 ? 'border-t border-[#06251D]/10' : ''}`}
                    >
                      <div className="font-semibold text-[#06251D] sm:col-span-1">
                        {spec.label}
                      </div>
                      <div className="text-[#171B19]/80 sm:col-span-2 mt-0.5 sm:mt-0 font-mono text-xs">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Use Cases */}
              <div>
                <h4 className="font-display font-bold text-base text-[#06251D] mb-2">
                  Typical Use Cases
                </h4>
                <ul className="space-y-1.5">
                  {selectedService.typicalUseCases.map((useCase, uIdx) => (
                    <li key={uIdx} className="flex items-start gap-2 text-xs text-[#171B19]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#06251D] shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quotation Preparation Guidelines */}
              <div className="bg-[#06251D]/5 p-4 rounded-xs border border-[#06251D]/10">
                <div className="font-semibold text-xs text-[#06251D] uppercase tracking-wider mb-2">
                  Helpful Details When Requesting a Quote
                </div>
                <ul className="space-y-1 text-xs text-[#171B19]/75 list-disc list-inside">
                  {selectedService.quoteGuidelines.map((guide, gIdx) => (
                    <li key={gIdx}>{guide}</li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-white p-4 sm:p-5 border-t border-[#06251D]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#171B19]/60">
                Ready to discuss your site specifications?
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-[#171B19]/80 hover:text-[#171B19] border border-[#171B19]/20 rounded-xs"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] transition-colors rounded-xs shadow-xs"
                >
                  <span>Request Quote for This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#06251D]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
