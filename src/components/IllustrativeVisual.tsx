import React, { useState } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

interface IllustrativeVisualProps {
  type: 'sliding-gate' | 'gate-motor' | 'electric-fence' | 'intercom' | 'palisade' | 'welding';
  title?: string;
  className?: string;
  showBadge?: boolean;
  imageUrl?: string;
  customImageUrl?: string;
  imageAlt?: string;
  isGenuineOwnerAsset?: boolean;
  isOwnerPhoto?: boolean;
}

export const IllustrativeVisual: React.FC<IllustrativeVisualProps> = ({
  type,
  title,
  className = '',
  showBadge = true,
  imageUrl,
  customImageUrl,
  imageAlt,
  isGenuineOwnerAsset = false,
  isOwnerPhoto = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const activeImage = customImageUrl || imageUrl;
  const isVerified = isGenuineOwnerAsset || isOwnerPhoto || !!customImageUrl;

  if (activeImage && !imageError) {
    return (
      <div className={`relative overflow-hidden bg-[#06251D] group ${className}`}>
        <img
          src={activeImage}
          alt={imageAlt || title || 'NKOANA Automation Gates project photo'}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle dark green/black vignette gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06251D]/90 via-[#06251D]/20 to-transparent pointer-events-none opacity-80" />

        {showBadge && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#06251D]/90 backdrop-blur-xs text-white/95 text-[11px] px-2.5 py-1.5 rounded-xs border border-[#C9A23F]/35 flex items-center justify-between gap-2 shadow-md">
            <div className="flex items-center gap-1.5 truncate">
              {isVerified ? (
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A23F] shrink-0" />
              ) : (
                <Sparkles className="w-3 h-3 text-[#C9A23F] shrink-0" />
              )}
              <span className={`font-semibold truncate ${isVerified ? 'text-[#C9A23F]' : 'text-white/90'}`}>
                {isVerified ? 'Verified NKOANA Installation' : (title || 'Visual Reference Standard')}
              </span>
            </div>
            <span className="text-[10px] text-white/60 font-mono shrink-0 uppercase tracking-wider">
              {isVerified ? 'Genuine Asset' : 'Reference'}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#06251D] select-none ${className}`}>
      {/* Background blueprint subtle grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, #C9A23F 1px, transparent 1px), linear-gradient(to bottom, #C9A23F 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* SVG Technical Illustrations */}
      <div className="relative w-full h-full flex items-center justify-center p-6">
        {type === 'sliding-gate' && (
          <svg viewBox="0 0 400 240" className="w-full h-full max-h-56 text-[#C9A23F]" fill="none" stroke="currentColor">
            {/* Ground line & concrete plinth */}
            <line x1="20" y1="210" x2="380" y2="210" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.3" />
            <rect x="30" y="210" width="340" height="15" fill="#171B19" stroke="#C9A23F" strokeWidth="1" strokeOpacity="0.4" />
            
            {/* Gate Pillars */}
            <rect x="40" y="50" width="30" height="160" fill="#0A362B" stroke="#C9A23F" strokeWidth="1.5" />
            <rect x="330" y="50" width="30" height="160" fill="#0A362B" stroke="#C9A23F" strokeWidth="1.5" />
            <rect x="36" y="44" width="38" height="8" fill="#C9A23F" />
            <rect x="326" y="44" width="38" height="8" fill="#C9A23F" />

            {/* Sliding Gate Outer Frame */}
            <rect x="90" y="60" width="220" height="142" rx="2" stroke="#FFFFFF" strokeWidth="2.5" fill="#082A21" fillOpacity="0.7" />
            
            {/* Horizontal Louver Slats */}
            {[75, 90, 105, 120, 135, 150, 165, 180].map((y) => (
              <line key={y} x1="95" y1={y} x2="305" y2={y} stroke="#C9A23F" strokeWidth="2" strokeOpacity="0.85" />
            ))}
            
            {/* Drive Toothed Rack */}
            <line x1="90" y1="192" x2="310" y2="192" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="3 3" />
            
            {/* Wheel Rollers */}
            <circle cx="120" cy="206" r="6" fill="#C9A23F" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="280" cy="206" r="6" fill="#C9A23F" stroke="#FFFFFF" strokeWidth="1.5" />
            
            {/* Automated Motor Box */}
            <rect x="68" y="170" width="26" height="38" rx="2" fill="#171B19" stroke="#C9A23F" strokeWidth="1.5" />
            <circle cx="81" cy="182" r="3" fill="#C9A23F" />
            <line x1="72" y1="198" x2="90" y2="198" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Infrared Safety Beam indicator */}
            <line x1="70" y1="190" x2="330" y2="190" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.6" />
          </svg>
        )}

        {type === 'gate-motor' && (
          <svg viewBox="0 0 400 240" className="w-full h-full max-h-56 text-[#C9A23F]" fill="none" stroke="currentColor">
            {/* Plinth */}
            <rect x="110" y="185" width="180" height="28" fill="#171B19" stroke="#C9A23F" strokeWidth="1.5" />
            
            {/* Motor Housing */}
            <path d="M 140 185 L 140 90 Q 140 70 160 70 L 240 70 Q 260 70 260 90 L 260 185 Z" fill="#0A362B" stroke="#FFFFFF" strokeWidth="2" />
            
            {/* Top Motor Cowl / Accent */}
            <rect x="155" y="60" width="90" height="14" rx="2" fill="#C9A23F" />
            
            {/* Manual Release Access Hatch */}
            <rect x="175" y="105" width="50" height="30" rx="3" fill="#06251D" stroke="#C9A23F" strokeWidth="1.5" />
            <circle cx="200" cy="120" r="4" fill="#C9A23F" />
            <line x1="200" y1="120" x2="200" y2="126" stroke="#06251D" strokeWidth="1.5" />

            {/* Drive Sprocket / Pinion Gear */}
            <circle cx="295" cy="155" r="22" stroke="#C9A23F" strokeWidth="3" strokeDasharray="4 3" fill="#171B19" />
            <circle cx="295" cy="155" r="8" fill="#C9A23F" />
            
            {/* Toothed Steel Rack Interlocking */}
            <rect x="250" y="128" width="120" height="10" fill="#FFFFFF" fillOpacity="0.8" />
            <line x1="250" y1="138" x2="370" y2="138" stroke="#C9A23F" strokeWidth="3" strokeDasharray="4 2" />

            {/* Battery Backup & Status LEDs */}
            <rect x="165" y="150" width="70" height="22" rx="2" fill="#171B19" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="178" cy="161" r="3" fill="#10B981" />
            <circle cx="190" cy="161" r="3" fill="#C9A23F" />
            <circle cx="202" cy="161" r="3" fill="#3B82F6" />
          </svg>
        )}

        {type === 'electric-fence' && (
          <svg viewBox="0 0 400 240" className="w-full h-full max-h-56 text-[#C9A23F]" fill="none" stroke="currentColor">
            {/* Masonry Boundary Wall */}
            <rect x="30" y="140" width="340" height="85" fill="#171B19" stroke="#C9A23F" strokeWidth="1.5" />
            {/* Brick pattern lines */}
            <line x1="30" y1="165" x2="370" y2="165" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.15" />
            <line x1="30" y1="190" x2="370" y2="190" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.15" />
            
            {/* Square Tubing Uprights / Stanchions */}
            <rect x="60" y="30" width="12" height="110" fill="#0A362B" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect x="194" y="30" width="12" height="110" fill="#0A362B" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect x="328" y="30" width="12" height="110" fill="#0A362B" stroke="#FFFFFF" strokeWidth="1.5" />
            
            {/* Wall Top Base Mounts */}
            <rect x="52" y="136" width="28" height="8" fill="#C9A23F" />
            <rect x="186" y="136" width="28" height="8" fill="#C9A23F" />
            <rect x="320" y="136" width="28" height="8" fill="#C9A23F" />

            {/* Electric Wires with Bobbins */}
            {[45, 60, 75, 90, 105, 120].map((y) => (
              <g key={y}>
                <line x1="40" y1={y} x2="360" y2={y} stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.9" />
                <circle cx="66" cy={y} r="4" fill="#C9A23F" />
                <circle cx="200" cy={y} r="4" fill="#C9A23F" />
                <circle cx="334" cy={y} r="4" fill="#C9A23F" />
              </g>
            ))}

            {/* Warning Sign */}
            <rect x="235" y="65" width="45" height="30" rx="2" fill="#EAB308" stroke="#171B19" strokeWidth="1.5" />
            <polygon points="257,70 263,77 257,83 252,83" fill="#171B19" />
          </svg>
        )}

        {type === 'intercom' && (
          <svg viewBox="0 0 400 240" className="w-full h-full max-h-56 text-[#C9A23F]" fill="none" stroke="currentColor">
            {/* Brick Entrance Pillar */}
            <rect x="110" y="20" width="180" height="200" fill="#0A362B" stroke="#C9A23F" strokeWidth="1.5" />
            
            {/* Weatherproof Intercom Unit Faceplate */}
            <rect x="145" y="45" width="110" height="150" rx="6" fill="#171B19" stroke="#FFFFFF" strokeWidth="2" />
            
            {/* Camera Lens with IR LEDs */}
            <circle cx="200" cy="75" r="16" fill="#06251D" stroke="#C9A23F" strokeWidth="2" />
            <circle cx="200" cy="75" r="7" fill="#171B19" />
            <circle cx="188" cy="75" r="2" fill="#EF4444" />
            <circle cx="212" cy="75" r="2" fill="#EF4444" />
            
            {/* Speaker Grille */}
            <line x1="175" y1="102" x2="225" y2="102" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="180" y1="107" x2="220" y2="107" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" />
            
            {/* Digital PIN Keypad */}
            {[
              [170, 120], [200, 120], [230, 120],
              [170, 138], [200, 138], [230, 138],
              [170, 156], [200, 156], [230, 156],
            ].map(([x, y], idx) => (
              <rect key={idx} x={x - 8} y={y - 6} width="16" height="12" rx="1.5" fill="#06251D" stroke="#C9A23F" strokeWidth="1" />
            ))}

            {/* Call / Bell Button */}
            <rect x="162" y="172" width="76" height="14" rx="2" fill="#C9A23F" />
            <circle cx="180" cy="179" r="3" fill="#06251D" />
          </svg>
        )}

        {type === 'palisade' && (
          <svg viewBox="0 0 400 240" className="w-full h-full max-h-56 text-[#C9A23F]" fill="none" stroke="currentColor">
            {/* Ground & Footing */}
            <line x1="20" y1="200" x2="380" y2="200" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.3" />
            <rect x="50" y="195" width="30" height="35" fill="#171B19" stroke="#C9A23F" strokeWidth="1" />
            <rect x="320" y="195" width="30" height="35" fill="#171B19" stroke="#C9A23F" strokeWidth="1" />

            {/* Main Support Posts */}
            <rect x="58" y="40" width="14" height="160" fill="#0A362B" stroke="#FFFFFF" strokeWidth="2" />
            <rect x="328" y="40" width="14" height="160" fill="#0A362B" stroke="#FFFFFF" strokeWidth="2" />
            <polygon points="58,40 65,26 72,40" fill="#C9A23F" />
            <polygon points="328,40 335,26 342,40" fill="#C9A23F" />

            {/* Horizontal Angle Iron Bearers */}
            <line x1="45" y1="80" x2="355" y2="80" stroke="#FFFFFF" strokeWidth="5" />
            <line x1="45" y1="160" x2="355" y2="160" stroke="#FFFFFF" strokeWidth="5" />

            {/* 7-Spike Pales */}
            {[100, 130, 160, 190, 220, 250, 280].map((x) => (
              <g key={x}>
                {/* Pale body */}
                <rect x={x - 6} y="45" width="12" height="145" fill="#06251D" stroke="#C9A23F" strokeWidth="1.5" />
                {/* Center rib corrugation */}
                <line x1={x} y1="45" x2={x} y2="190" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.4" />
                {/* Multi-spike spear top */}
                <polygon points={`${x - 8},45 ${x},25 ${x + 8},45`} fill="#C9A23F" />
                <polygon points={`${x - 11},48 ${x - 5},38 ${x - 4},48`} fill="#C9A23F" />
                <polygon points={`${x + 4},48 ${x + 5},38 ${x + 11},48`} fill="#C9A23F" />
                {/* Anti-tamper bolt indicators */}
                <circle cx={x} cy="80" r="2.5" fill="#FFFFFF" />
                <circle cx={x} cy="160" r="2.5" fill="#FFFFFF" />
              </g>
            ))}
          </svg>
        )}

        {type === 'welding' && (
          <svg viewBox="0 0 400 240" className="w-full h-full max-h-56 text-[#C9A23F]" fill="none" stroke="currentColor">
            {/* Fabrication Workbench */}
            <rect x="40" y="160" width="320" height="15" fill="#171B19" stroke="#C9A23F" strokeWidth="1.5" />
            <line x1="70" y1="175" x2="70" y2="225" stroke="#FFFFFF" strokeWidth="4" />
            <line x1="330" y1="175" x2="330" y2="225" stroke="#FFFFFF" strokeWidth="4" />

            {/* Steel Gate Frame Corner (Mitred 45 degree) */}
            <path d="M 80 155 L 80 50 L 220 50 L 220 80 L 110 80 L 110 155 Z" fill="#0A362B" stroke="#FFFFFF" strokeWidth="2" />
            
            {/* Clamping Jigs */}
            <rect x="65" y="95" width="20" height="25" fill="#C9A23F" />
            <rect x="150" y="38" width="25" height="18" fill="#C9A23F" />
            
            {/* Weld Bead Seam */}
            <line x1="80" y1="50" x2="110" y2="80" stroke="#F59E0B" strokeWidth="4" strokeDasharray="3 2" />

            {/* Welding Torch Nozzle */}
            <line x1="160" y1="130" x2="100" y2="72" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            <line x1="160" y1="130" x2="185" y2="155" stroke="#C9A23F" strokeWidth="6" strokeLinecap="round" />
            
            {/* Arc Glow & Sparks */}
            <circle cx="98" cy="70" r="10" fill="#FEF08A" fillOpacity="0.8" />
            <circle cx="98" cy="70" r="4" fill="#FFFFFF" />
            <line x1="98" y1="70" x2="82" y2="60" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="98" y1="70" x2="114" y2="62" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="98" y1="70" x2="90" y2="85" stroke="#F59E0B" strokeWidth="1.5" />
            <line x1="98" y1="70" x2="110" y2="84" stroke="#F59E0B" strokeWidth="1.5" />
          </svg>
        )}
      </div>

      {/* Label indicating technical visualization / genuine site photo status */}
      {showBadge && (
        <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-xs text-white/90 text-[11px] px-2.5 py-1.5 rounded-sm border border-[#C9A23F]/30 flex items-center justify-between">
          <span className="font-medium text-[#C9A23F] truncate">
            {title ? title : 'Engineering Technical Specification'}
          </span>
          <span className="text-[10px] text-white/60 ml-2 whitespace-nowrap">
            Illustrative Schematic
          </span>
        </div>
      )}
    </div>
  );
};
