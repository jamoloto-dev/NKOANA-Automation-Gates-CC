import React from 'react';
import { ShieldCheck, Target, Hammer, Layers, MapPin, Building2, Check } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-[#F5F0E5] border-b border-[#06251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Company Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold">
              About NKOANA Automation Gates CC
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#06251D] tracking-tight">
              Security & Automation Solutions Built Around Your Property
            </h2>

            <p className="text-base text-[#171B19]/85 leading-relaxed">
              <strong>NKOANA Automation Gates CC</strong> is a specialized security and automation enterprise based in Mmotong, South Africa. We design, fabricate, install, and service custom automated gate systems, electric fencing, palisade perimeter barriers, and intercom access controllers.
            </p>

            <p className="text-sm text-[#171B19]/80 leading-relaxed">
              Our service approach is grounded in the principle of <em>“Concept to Completion.”</em> Rather than supplying off-the-shelf components that fail under outdoor stress, we oversee every project from initial site assessment and true-gauge metal fabrication to concrete plinth anchoring, motor torque commissioning, and regular preventative servicing.
            </p>

            {/* Core Workmanship Focus Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xs border border-[#06251D]/10 flex items-start gap-3 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#C9A23F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-sm text-[#06251D]">
                    Structural Integrity
                  </h3>
                  <p className="text-xs text-[#171B19]/75 mt-1 leading-relaxed">
                    Heavy-wall steel tubing, precision-welded joints, and multi-coat anti-rust primers withstand outdoor exposure.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#06251D]/10 flex items-start gap-3 shadow-xs">
                <Target className="w-5 h-5 text-[#C9A23F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-sm text-[#06251D]">
                    Reliable Automation
                  </h3>
                  <p className="text-xs text-[#171B19]/75 mt-1 leading-relaxed">
                    Correctly dimensioned motors with standby battery systems ensure uninterrupted access through power outages.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#06251D]/10 flex items-start gap-3 shadow-xs">
                <Hammer className="w-5 h-5 text-[#C9A23F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-sm text-[#06251D]">
                    Precision Fabrication
                  </h3>
                  <p className="text-xs text-[#171B19]/75 mt-1 leading-relaxed">
                    Gates, burglar bars, and palisades are cut, welded, and aligned in workshop jigs to avoid sagging and track wear.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#06251D]/10 flex items-start gap-3 shadow-xs">
                <Layers className="w-5 h-5 text-[#C9A23F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-sm text-[#06251D]">
                    Complete Property Protection
                  </h3>
                  <p className="text-xs text-[#171B19]/75 mt-1 leading-relaxed">
                    Seamless integration between palisades, electric fence energizers, infrared safety beams, and intercoms.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Enterprise Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#06251D] text-white p-7 rounded-xs border border-[#C9A23F]/30 shadow-lg">
              
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
                <Building2 className="w-5 h-5 text-[#C9A23F]" />
                <h3 className="font-display font-bold text-base text-white">
                  Verified Business Information
                </h3>
              </div>

              <div className="divide-y divide-white/10 text-xs mt-2">
                <div className="py-3 flex flex-col gap-1">
                  <span className="text-white/60">Registered Entity</span>
                  <span className="font-medium text-white text-sm">{COMPANY_DETAILS.name}</span>
                  <span className="text-[11px] text-[#C9A23F]">Close Corporation (CC) Registered in South Africa</span>
                </div>

                <div className="py-3 flex flex-col gap-1">
                  <span className="text-white/60">Core Service Region</span>
                  <span className="font-medium text-white">{COMPANY_DETAILS.serviceRegion}</span>
                </div>

                <div className="py-3 flex flex-col gap-1">
                  <span className="text-white/60">Postal Address</span>
                  <div className="flex items-start gap-1.5 text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A23F] shrink-0 mt-0.5" />
                    <span>{COMPANY_DETAILS.postalAddress}</span>
                  </div>
                  <span className="text-[11px] text-white/50 italic">
                    (Official postal correspondence address. On-site assessments scheduled throughout Limpopo.)
                  </span>
                </div>

                <div className="py-3 flex flex-col gap-1">
                  <span className="text-white/60">Primary Workmanship Values</span>
                  <div className="flex flex-col gap-1.5 mt-1">
                    <div className="flex items-center gap-2 text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#C9A23F]" />
                      <span>Direct owner-led project oversight on all installations</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#C9A23F]" />
                      <span>Transparent component specifications & formal quotations</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Check className="w-3.5 h-3.5 text-[#C9A23F]" />
                      <span>Prompt local maintenance & motor emergency troubleshooting</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 bg-[#0A362B] p-3 rounded-xs text-[11px] text-white/80">
                <strong className="text-[#C9A23F]">Integrity Commitment:</strong> We do not make unsubstantiated claims or list third-party affiliations without verification. Our focus is providing honest, durable security workmanship for property owners.
              </div>

            </div>
          </div>

        </div>

        {/* Photographic Showcase of Verified Workmanship */}
        <div className="mt-16 pt-12 border-t border-[#06251D]/10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-1">
                Authentic Field Execution
              </div>
              <h3 className="font-display text-2xl font-bold text-[#06251D]">
                Verified NKOANA Fabrication & Field Installations
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#06251D] font-medium bg-white px-3 py-1.5 rounded-xs border border-[#06251D]/10 shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#C9A23F]" />
              <span>Genuine On-Site Photography</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo 1: Custom Trellis Double Security Gate */}
            <div className="bg-white rounded-xs border border-[#06251D]/10 overflow-hidden shadow-xs group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#06251D]">
                <img
                  src="/images/custom-welded-security-gate.jpeg"
                  alt="Verified NKOANA workshop metal fabrication: heavy-duty steel security gate with diamond trellis burglar bars"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#06251D]/90 backdrop-blur-xs text-[#C9A23F] text-[10px] font-mono rounded-xs border border-[#C9A23F]/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A23F]" />
                  <span>Verified Workshop Metalwork</span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-xs font-mono text-[#C9A23F] uppercase tracking-wider mb-1">
                  Mmotong Workshop Fabrication
                </div>
                <h4 className="font-display font-bold text-base text-[#06251D]">
                  Custom Welded Steel Security Gate
                </h4>
                <p className="text-xs text-[#171B19]/75 mt-1.5 leading-relaxed">
                  Manufactured from heavy structural steel tubing with high-security diamond trellis infill and center lock fixtures to safeguard property entryways.
                </p>
              </div>
            </div>

            {/* Photo 2: Farm/Perimeter Multi-Strand Electric Fence */}
            <div className="bg-white rounded-xs border border-[#06251D]/10 overflow-hidden shadow-xs group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#06251D]">
                <img
                  src="/images/field-electric-fence-installation.jpeg"
                  alt="Verified NKOANA on-site field installation: multi-strand high-tensile security fence in Limpopo"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#06251D]/90 backdrop-blur-xs text-[#C9A23F] text-[10px] font-mono rounded-xs border border-[#C9A23F]/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A23F]" />
                  <span>Verified Field Installation</span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-xs font-mono text-[#C9A23F] uppercase tracking-wider mb-1">
                  Limpopo Rural Perimeter Site
                </div>
                <h4 className="font-display font-bold text-base text-[#06251D]">
                  Multi-Strand High-Tensile Security Fence
                </h4>
                <p className="text-xs text-[#171B19]/75 mt-1.5 leading-relaxed">
                  Real on-site field installation featuring galvanized tubular corner straining posts, precision-spaced porcelain insulators, and heavy-duty spring tensioning.
                </p>
              </div>
            </div>

            {/* Photo 3: Video Intercom & Access Control System */}
            <div className="bg-white rounded-xs border border-[#06251D]/10 overflow-hidden shadow-xs group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#06251D]">
                <img
                  src="/images/intercoms-access-control.png"
                  alt="Verified NKOANA access control installation: video intercom, RFID keytag reader, digital keypad, and smartphone app integration"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#06251D]/90 backdrop-blur-xs text-[#C9A23F] text-[10px] font-mono rounded-xs border border-[#C9A23F]/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A23F]" />
                  <span>Verified Access Integration</span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-xs font-mono text-[#C9A23F] uppercase tracking-wider mb-1">
                  Pillar Access Control Station
                </div>
                <h4 className="font-display font-bold text-base text-[#06251D]">
                  Video Intercom & Digital Access Control
                </h4>
                <p className="text-xs text-[#171B19]/75 mt-1.5 leading-relaxed">
                  Featuring outdoor video screening, illuminated PIN keypad, contactless RFID access, and live smartphone application unlocking.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
