import React from 'react';
import { PROJECT_LIFECYCLE_STEPS } from '../data/companyData';
import { Compass, DraftingCompass, Flame, Construction, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const ProcessSection: React.FC = () => {
  const stepIcons = [
    <Compass className="w-4 h-4 text-[#C9A23F]" key="0" />,
    <DraftingCompass className="w-4 h-4 text-[#C9A23F]" key="1" />,
    <Flame className="w-4 h-4 text-[#C9A23F]" key="2" />,
    <Construction className="w-4 h-4 text-[#C9A23F]" key="3" />,
    <CheckCircle2 className="w-4 h-4 text-[#C9A23F]" key="4" />,
  ];

  return (
    <section className="py-20 bg-[#06251D] text-white border-b border-[#C9A23F]/20 relative overflow-hidden">
      {/* Background ambient pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C9A23F 1px, transparent 1px), linear-gradient(to bottom, #C9A23F 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-2">
            Engineering Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            From Concept to Completion
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            Every automated gate, security fence, and access control system follows our disciplined 5-stage engineering lifecycle, illustrated below with genuine on-site and workshop imagery.
          </p>
        </div>

        {/* Step Flow Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROJECT_LIFECYCLE_STEPS.map((step, idx) => (
            <RevealOnScroll
              key={step.step}
              delayMs={idx * 60}
              className="h-full"
            >
              <div className="bg-[#0A362B]/80 rounded-xs border border-[#C9A23F]/25 hover:border-[#C9A23F]/60 transition-all duration-200 flex flex-col justify-between overflow-hidden group shadow-lg h-full">
                <div>
                  {/* Step Image Slot */}
                  <div className="relative h-36 w-full overflow-hidden bg-[#06251D] border-b border-[#C9A23F]/20">
                    {step.imageUrl ? (
                      <img
                        src={step.imageUrl}
                        alt={step.imageAlt || step.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#06251D] text-[#C9A23F]/40 font-mono text-xs">
                        Stage Schematic
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A362B] via-[#0A362B]/20 to-transparent pointer-events-none" />

                    {/* Stage number tag */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#06251D]/90 backdrop-blur-xs text-[#C9A23F] text-[10px] font-mono rounded-xs border border-[#C9A23F]/40 flex items-center gap-1 z-10">
                      <span>Phase {step.step}</span>
                    </div>

                    {/* Verification label */}
                    {step.isGenuineOwnerAsset && (
                      <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 bg-[#C9A23F] text-[#06251D] text-[9px] font-bold uppercase rounded-xs flex items-center gap-1 z-10">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        <span>Genuine</span>
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1 rounded-xs bg-[#06251D] border border-[#C9A23F]/30 text-[#C9A23F]">
                        {stepIcons[idx]}
                      </div>
                      <h3 className="font-display text-sm font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs text-white/75 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-[#06251D]/60 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C9A23F] font-mono">
                  <span>Stage {idx + 1} of 5</span>
                  <span className="text-white/40">NKOANA CC</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
