/**
 * Company information and data structures for NKOANA Automation Gates CC.
 * Strictly adheres to verified business details provided by the owner.
 * No invented certifications, testimonials, or statistics.
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  category: 'automation' | 'fencing' | 'access' | 'fabrication' | 'maintenance';
  fullDescription: string;
  keyFeatures: string[];
  technicalSpecs: { label: string; value: string }[];
  typicalUseCases: string[];
  quoteGuidelines: string[];
  imageUrl?: string;
  imageAlt?: string;
  isGenuineOwnerAsset?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  phase: string;
  category: 'automation' | 'fencing' | 'access' | 'fabrication' | 'maintenance';
  location: string;
  description: string;
  technicalHighlights: string[];
  materialsUsed: string[];
  isOwnerPhoto?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  customImageUrl?: string;
  visualType: 'sliding-gate' | 'gate-motor' | 'electric-fence' | 'intercom' | 'palisade' | 'welding';
}

export const COMPANY_DETAILS = {
  name: 'NKOANA Automation Gates CC',
  legalName: 'NKOANA Automation Gates Close Corporation',
  shortName: 'NKOANA Gates',
  tagline: 'Security & Automation Solutions — From Concept to Completion.',
  trustStatement: 'Reliable. Secure. Professional.',
  primaryPhone: '076 655 0546',
  primaryPhoneInternational: '+27766550546',
  altPhone: '083 615 9298',
  altPhoneInternational: '+27836159298',
  email: 'nkoanagates@gmail.com',
  postalAddress: 'P.O. Box 7748, Mmotong 0742, South Africa',
  serviceRegion: 'Mmotong, Polokwane, Seshego, and surrounding Limpopo areas',
  verifiedWhatsAppNumber: '+27766550546', // Primary business line
  whatsappDisplay: '076 655 0546',
  operatingHours: {
    weekdays: '08:00 – 17:00',
    saturday: '08:00 – 13:00',
    sunday: 'Closed (Emergency motor breakdown support by appointment)',
  },
  colors: {
    forest: '#06251D',
    gold: '#C9A23F',
    cream: '#F5F0E5',
    charcoal: '#171B19',
    white: '#FFFFFF',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'automated-gates',
    title: 'Automated Gate Systems',
    tagline: 'Smooth, motorized driveway security engineered for daily durability',
    category: 'automation',
    shortDesc: 'Custom sliding and swing gate automation equipped with heavy-duty motor gearboxes, reliable battery backups, and multi-channel remote receivers.',
    fullDescription: 'We design, fabricate, and automate high-security driveway and perimeter gates. Whether converting an existing manual steel gate or manufacturing a brand-new cantilever sliding gate from the ground up, our installations prioritize motor torque, track alignment, loadshedding battery resilience, and obstacle anti-crush safety.',
    imageUrl: '/images/hero-automated-gate.jpeg',
    imageAlt: 'Modern horizontal slat automated sliding security driveway gate with brick pillars',
    isGenuineOwnerAsset: false,
    keyFeatures: [
      'Heavy-duty sliding and swing gate motor installations',
      'Battery backup power systems to ensure operation during loadshedding',
      'Long-range remote controls, wireless push-buttons, and keypad integration',
      'Infrared safety safety beams (photocells) to prevent vehicular and pedestrian impact',
      'Smooth heavy-gauge steel track and machined wheel assemblies',
    ],
    technicalSpecs: [
      { label: 'Gate Types Supported', value: 'Sliding gates, double swing, single pedestrian' },
      { label: 'Duty Cycle', value: 'High-frequency residential and light commercial' },
      { label: 'Power Backup', value: '12V/24V deep-cycle battery standby configurations' },
      { label: 'Safety Systems', value: 'Infrared anti-crush safety photocells & soft-stop limits' },
      { label: 'Access Modalities', value: '433MHz rolling-code remotes, GSM triggers & keypads' },
    ],
    typicalUseCases: [
      'Residential driveway access in residential areas and estates',
      'Commercial depot security gates requiring controlled visitor entry',
      'Upgrading older, heavy manual gates with modern motor automation',
    ],
    quoteGuidelines: [
      'Approximate opening width (e.g., 3.5m, 4.5m, 6m)',
      'Gate type preference (sliding or swing)',
      'Availability of an electrical feed near the gate pillar',
    ],
  },
  {
    id: 'electric-fencing',
    title: 'Electric Fencing',
    tagline: 'High-voltage perimeter deterrent systems and alarm integrations',
    category: 'fencing',
    shortDesc: 'Multi-strand wall-top and freestanding electric fencing with energizer control units, ceramic insulators, and alarm siren trigger options.',
    fullDescription: 'Perimeter protection is the critical first barrier of any property. We install high-tensile wire electric fence systems mounted on durable square tubing brackets or round tube posts, tensioned with heavy-duty springs and insulators. Connected to an energizer monitor, the fence delivers an active deterrent shock while monitoring for wire cutting, tampering, or grounding.',
    imageUrl: '/images/electric-fence-walltop-energizer.jpeg',
    imageAlt: 'High-security wall-top multi-strand electric fence with energizer monitor box',
    isGenuineOwnerAsset: false,
    keyFeatures: [
      'Multi-strand wall-top brackets (straight, angled, or piggyback)',
      'Certified energizer systems with regulated high-voltage pulses',
      'Audible alarm siren and strobe light trigger upon wire tampering',
      'Battery-backed energizer enclosure ensuring continuous perimeter safety',
      'High-grade UV-resistant nylon or ceramic tension bobbins',
    ],
    technicalSpecs: [
      { label: 'Wiring Material', value: 'High-tensile galvanized or aluminum wire strands' },
      { label: 'Stanchion Profiles', value: 'Galvanized or powder-coated square tubing with anti-corrosion caps' },
      { label: 'Energizer Output', value: 'Compliant regulated pulse energizers with battery standby' },
      { label: 'Monitoring', value: 'Cut-wire, tamper, grounding, and fence short detection' },
    ],
    typicalUseCases: [
      'Perimeter brick or block boundary walls for residential properties',
      'Securing perimeter palisade or mesh fences in industrial and business sites',
      'Upgrading outdated, sagging wire fences with new tensioners and bobbins',
    ],
    quoteGuidelines: [
      'Estimated linear meters of boundary wall or fence',
      'Wall type (plastered brick, concrete palisade, or bare wall)',
      'Number of corners or elevation step-downs along the boundary',
    ],
  },
  {
    id: 'access-control',
    title: 'Intercoms & Access Control',
    tagline: 'Reliable visitor screening and seamless property entry systems',
    category: 'access',
    shortDesc: 'High-definition video intercoms, backlit digital keypads, RFID tag readers, and smartphone mobile gate triggers for effortless visitor screening and secured access.',
    fullDescription: 'Control who enters your property without stepping outside. We supply and install modern intercom and access control hardware, ranging from robust anti-vandal gate station keypads to crisp video screens and GSM mobile gate openers that let you grant access straight from your cellular phone.',
    imageUrl: '/images/intercoms-access-control.png',
    imageAlt: 'NKOANA Intercoms & Access Control: Hikvision video intercom, digital keypad, RFID key tag reader, and mobile app interface',
    isGenuineOwnerAsset: true,
    keyFeatures: [
      'Audio and color video intercom stations with gate-release triggers',
      'Weather-sealed digital keypads for pin-code family or staff entry',
      'Contactless RFID key tags and card readers for instantaneous entry',
      'Smart mobile phone application integration for live video screening and remote unlocking',
      'Magnetic lock (mag-lock) and electric striker installations for pedestrian gates',
      'Neat conduit cabling, flush/surface pillar mounting, and surge protection',
    ],
    technicalSpecs: [
      { label: 'Audio/Video', value: 'Two-way clear voice communications with infrared night vision' },
      { label: 'Outdoor Enclosures', value: 'Weather-resistant IP65 metal casing with rain hoods' },
      { label: 'Lock Compatibility', value: 'Fail-safe magnetic locks, 12V rim strikers, and motor trigger relays' },
      { label: 'Connectivity', value: 'Wired multi-core, wireless RF, or GSM SIM-based configurations' },
    ],
    typicalUseCases: [
      'Driveway gate pillars where drivers need to announce arrival',
      'Pedestrian security gates requiring PIN or tag verification',
      'Properties where homeowners require gate operation via mobile handset',
    ],
    quoteGuidelines: [
      'Distance from the front gate to the main dwelling or office',
      'Preferred intercom style (Audio handset, Video monitor, or Mobile phone GSM)',
      'Number of pedestrian or vehicle gates to be controlled',
    ],
  },
  {
    id: 'palisade-fencing',
    title: 'Palisade Fencing',
    tagline: 'Heavy-duty steel security fencing with anti-climb spiked profiles',
    category: 'fencing',
    shortDesc: 'Custom fabricated and modular hot-rolled steel palisade fencing providing high physical containment, visibility, and boundary integrity.',
    fullDescription: 'Steel palisade fencing is one of the most effective physical barriers against intruders. We fabricate and install robust palisade panels featuring 3-spike, 7-spike, or devil-fork anti-climb profiles, anchored securely with reinforced steel posts set in deep concrete footings and assembled with anti-tamper snap-off shear nuts.',
    imageUrl: '/images/automated-sliding-gate-motor.jpeg',
    imageAlt: 'Anti-climb spearhead spikes mounted atop security gate perimeter',
    isGenuineOwnerAsset: false,
    keyFeatures: [
      'Heavy-gauge hot-rolled steel pales with sharp anti-climb spikes',
      'Sturdy horizontal angle iron bearers and heavy square support posts',
      'Secure mounting with tamper-proof shear-off nuts and continuous weld joints',
      'Rust-resistant red oxide or zinc chromate primer and industrial enamel finish',
      'Custom fabricated matching sliding and pedestrian palisade gates',
    ],
    technicalSpecs: [
      { label: 'Pale Thickness', value: 'High-strength steel pales with rigid corrugation' },
      { label: 'Spike Options', value: '3-Spike, 7-Spike spearhead, or trident top profiles' },
      { label: 'Post Anchoring', value: 'Deep excavated footings with reinforced concrete pour' },
      { label: 'Fasteners', value: 'M8/M10 tamper-resistant shear nuts or direct workshop weld' },
    ],
    typicalUseCases: [
      'Frontage and perimeter boundary containment for residential properties',
      'Industrial warehouses, commercial yards, and equipment storage depots',
      'School perimeters, municipal buildings, and community facilities',
    ],
    quoteGuidelines: [
      'Linear meters of fencing required',
      'Preferred fence height (e.g., 1.8m, 2.0m, or 2.4m)',
      'Ground condition (flat ground, stepped slope, or rocky terrain)',
    ],
  },
  {
    id: 'fabrication-welding',
    title: 'Fabrication & Welding',
    tagline: 'Precision structural metalwork, custom steel gates, and burglar protection',
    category: 'fabrication',
    shortDesc: 'Expert metal fabrication including custom architectural sliding gates, matching pedestrian gates, security burglar bars, and structural frames.',
    fullDescription: 'Every gate or security barrier starts with solid steelwork. Our fabrication service translates your design vision into structurally sound, beautifully finished metal installations. We work with square tubing, rectangular hollow sections, angle iron, and decorative sheet steel, applying precision welding and rigorous anti-corrosion preparation.',
    imageUrl: '/images/custom-welded-security-gate.jpeg',
    imageAlt: 'Genuine NKOANA fabricated heavy-duty double steel security gate with diamond trellis burglar bars',
    isGenuineOwnerAsset: true,
    keyFeatures: [
      'Custom architectural driveway gate fabrication to fit exact property dimensions',
      'Heavy-duty burglar bars and security gates for doors and windows',
      'Precision welded mitre corners, flat ground seams, and sturdy hinges',
      'Matching pedestrian access gates with lockbox prep and closer brackets',
      'Thorough multi-coat metal priming and durable gloss or matte paint finishing',
    ],
    technicalSpecs: [
      { label: 'Welding Methods', value: 'Precision MIG and shielded metal arc welding (SMAW)' },
      { label: 'Steel Sections', value: 'Structural RHS, SHS, solid bar, flat bar, and cold-rolled sheets' },
      { label: 'Joint Finishing', value: 'Flush ground visible joints with sealed end-caps to prevent water ingress' },
      { label: 'Corrosion Shield', value: 'Acid etch wash, rust-inhibiting primer, and weather-tough enamel' },
    ],
    typicalUseCases: [
      'Properties requiring a distinctive, custom-designed entrance gate',
      'Fitting high-security burglar bars inside or outside window reveals',
      'Bespoke pedestrian security gates matching existing boundary structures',
    ],
    quoteGuidelines: [
      'Desired gate design style (modern horizontal slat, ornamental, or minimalist)',
      'Dimensions of openings (width and height)',
      'Whether installation and painting are included in the scope',
    ],
  },
  {
    id: 'repairs-maintenance',
    title: 'Maintenance & Repairs',
    tagline: 'Restoring gate alignment, motor responsiveness, and perimeter security',
    category: 'maintenance',
    shortDesc: 'Rapid troubleshooting and repair services for jammed gates, broken motor gearboxes, worn wheel bearings, and damaged fencing.',
    fullDescription: 'Gate motors and security perimeters endure continuous mechanical wear and outdoor exposure. When a motor stops responding, a gate comes off its track, or a fence wire snaps, our technicians provide hands-on diagnostics and repair. We address mechanical friction, track warping, electrical wiring faults, and worn components to restore your safety without delay.',
    imageUrl: '/images/automated-sliding-gate-motor.jpeg',
    imageAlt: 'Sliding gate motor plinth mounting, track mechanism and safety pinion',
    isGenuineOwnerAsset: false,
    keyFeatures: [
      'Gate motor mechanical and electronic diagnostics',
      'Replacement of seized or noisy steel gate wheel bearings',
      'Straightening, leveling, and welding of bent or sagged gate tracks',
      'Standby battery testing and replacement for uninterrupted power',
      'Electric fence wire re-tensioning and insulator repair',
    ],
    technicalSpecs: [
      { label: 'Common Repairs', value: 'Gearbox replacements, limit switch calibration, PC board repairs' },
      { label: 'Track Maintenance', value: 'Track welding, foundation re-anchoring, debris clearing' },
      { label: 'Battery Checks', value: 'Load-testing of 12V/24V batteries and charger circuit evaluation' },
      { label: 'Hardware Spares', value: 'Standard industrial wheels, anti-lift brackets, and safety stoppers' },
    ],
    typicalUseCases: [
      'Gate motor struggling or humming without moving the gate',
      'Gate sticking midway across the driveway track',
      'Remotes failing to trigger the gate from standard operating distance',
      'Perimeter electric fence tripping the alarm siren continuously',
    ],
    quoteGuidelines: [
      'Make or description of your gate motor (if visible)',
      'Specific symptom (motor hums, gate doesn’t budge, remote doesn’t work, track damaged)',
      'Urgency of the repair and location in or around Mmotong/Polokwane',
    ],
  },
];

export interface LifecycleStepItem {
  step: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  isGenuineOwnerAsset?: boolean;
}

export const PROJECT_LIFECYCLE_STEPS: LifecycleStepItem[] = [
  {
    step: '01',
    title: 'Site Assessment & Consultation',
    description: 'We inspect your property perimeter, check ground levels, evaluate power availability, and discuss your security requirements.',
    imageUrl: '/images/field-electric-fence-installation.jpeg',
    imageAlt: 'On-site perimeter inspection and boundary measurement in Limpopo',
    isGenuineOwnerAsset: true,
  },
  {
    step: '02',
    title: 'Concept & Technical Design',
    description: 'We finalize dimensions, select steel profiles, calculate weight and windage factors, and specify the ideal motor and accessories.',
    imageUrl: '/images/hero-automated-gate.jpeg',
    imageAlt: 'Architectural specification and design layout for modern automated gate',
    isGenuineOwnerAsset: false,
  },
  {
    step: '03',
    title: 'Precision Workshop Fabrication',
    description: 'Our team cuts, welds, cleans, and applies rust-inhibiting primers to heavy-duty steel sections in the metalwork shop.',
    imageUrl: '/images/custom-welded-security-gate.jpeg',
    imageAlt: 'Genuine NKOANA metal fabrication: custom steel security gate with diamond trellis bars',
    isGenuineOwnerAsset: true,
  },
  {
    step: '04',
    title: 'Site Preparation & Installation',
    description: 'We pour reinforced concrete track foundations, anchor posts, align guide rollers, and mount the physical gate and fence structures.',
    imageUrl: '/images/automated-sliding-gate-motor.jpeg',
    imageAlt: 'Gate track alignment, concrete plinth pouring, and heavy-duty motor installation',
    isGenuineOwnerAsset: false,
  },
  {
    step: '05',
    title: 'Automation, Wiring & Commissioning',
    description: 'We wire the motor, energizer, or intercom, tune safety beams, program remotes, and walk you through system operation and maintenance.',
    imageUrl: '/images/intercoms-access-control.png',
    imageAlt: 'NKOANA Automation & Access Control: Hikvision video intercom, digital keypad, RFID access, and smartphone app integration',
    isGenuineOwnerAsset: true,
  },
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-access',
    title: 'Video Intercom, RFID Keypad & Mobile Access Station',
    phase: 'Gate automation & commissioning',
    category: 'access',
    location: 'Entrance Pillar Station, Limpopo Residence',
    description: 'Verified genuine NKOANA access control integration: Hikvision outdoor video intercom station with backlit numeric keypad, contactless RFID key tag reader, pedestrian gate electric striker release, and live smartphone mobile app monitoring.',
    technicalHighlights: ['Two-way HD video & crystal voice intercom', 'Contactless RFID tag swipe & visitor keypad access', 'Remote smartphone gate release & live visual verification'],
    materialsUsed: ['Weatherproof IP65 intercom enclosure', 'Surface pillar mounting bracket', 'Shielded communication cabling & striker relay'],
    imageUrl: '/images/intercoms-access-control.png',
    imageAlt: 'Verified NKOANA Intercoms & Access Control: Hikvision video intercom, RFID keytag, digital keypad, and smartphone app',
    isOwnerPhoto: true,
    visualType: 'intercom',
  },
  {
    id: 'proj-1',
    title: 'Modern Horizontal Slat Automated Sliding Gate',
    phase: 'Gate automation & commissioning',
    category: 'automation',
    location: 'Residential Entrance, Limpopo',
    description: 'Heavy-gauge steel sliding gate featuring contemporary horizontal slat infill, heavy-duty ground track on reinforced concrete plinth, high-torque motor automation, and loadshedding battery standby.',
    technicalHighlights: ['Smooth nylon-toothed rack drive', 'Dual safety infrared photocells', 'Charcoal powder-coat anti-rust finish'],
    materialsUsed: ['76x38mm rectangular steel tubing', 'Cast steel wheel bearings', 'Industrial gate motor drive unit'],
    imageUrl: '/images/hero-automated-gate.jpeg',
    imageAlt: 'Modern horizontal slat automated sliding security driveway gate with brick pillars',
    isOwnerPhoto: false,
    visualType: 'sliding-gate',
  },
  {
    id: 'proj-2',
    title: 'Automated Sliding Gate with Anti-Climb Spearhead Spikes',
    phase: 'Site preparation & installation',
    category: 'automation',
    location: 'Private Property, Mmotong Region',
    description: 'Precision mechanical installation of a sliding motor mechanism mounted on elevated concrete plinth to prevent water pooling, paired with anti-climb spearhead spikes along the top rail.',
    technicalHighlights: ['Elevated damp-proof concrete base', 'Anti-theft lockable motor cage', 'Integrated 24V battery reserve'],
    materialsUsed: ['Reinforced concrete plinth', 'Steel anti-theft bracket', 'Weatherproof conduit cabling'],
    imageUrl: '/images/automated-sliding-gate-motor.jpeg',
    imageAlt: 'Automated sliding gate with spearhead spikes and heavy-duty motor on paved driveway',
    isOwnerPhoto: false,
    visualType: 'gate-motor',
  },
  {
    id: 'proj-3',
    title: 'Wall-Top 8-Strand High-Security Electric Fence & Energizer',
    phase: 'Security fencing',
    category: 'fencing',
    location: 'Perimeter Boundary, Polokwane Region',
    description: 'Square tubing stanchion installation along a plastered masonry perimeter wall with high-tensile wire, tension springs, ceramic insulators, wall-mounted energizer control box, and siren alert integration.',
    technicalHighlights: ['Multi-zone cut & tamper detection', 'Lightning surge arrestors', 'Compliant warning signage'],
    materialsUsed: ['Galvanized square tubing uprights', 'UV-stabilized bobbins', 'High-tensile aluminum wire'],
    imageUrl: '/images/electric-fence-walltop-energizer.jpeg',
    imageAlt: 'Wall-top 8-strand electric security fence with certified energizer monitor box',
    isOwnerPhoto: false,
    visualType: 'electric-fence',
  },
  {
    id: 'proj-4',
    title: 'Rural & Agricultural Perimeter Electric Fence — Limpopo',
    phase: 'Security fencing',
    category: 'fencing',
    location: 'Field Installation, Limpopo Site',
    description: 'Verified genuine NKOANA on-site installation: Extensive multi-strand high-tensile electric perimeter security fence with galvanized tubular corner straining posts, ceramic isolators, and heavy-duty tensioners.',
    technicalHighlights: ['Multi-strand high-tension wire alignment', 'Tubular corner straining post with diagonal bracing', 'Ground earthing system for high deterrent voltage'],
    materialsUsed: ['Galvanized steel strainer post', 'High-tensile fence wire', 'Ceramic porcelain strain bobbins'],
    imageUrl: '/images/field-electric-fence-installation.jpeg',
    imageAlt: 'Verified NKOANA on-site field installation of multi-strand security fence in Limpopo',
    isOwnerPhoto: true,
    visualType: 'electric-fence',
  },
  {
    id: 'proj-5',
    title: 'Custom Fabricated Diamond Trellis Double Security Gate',
    phase: 'Fabrication & welding',
    category: 'fabrication',
    location: 'Workshop Fabrication & Fitting, Mmotong',
    description: 'Verified genuine NKOANA metalwork: Custom manufactured heavy-gauge steel double entrance security gate with integrated diamond trellis burglar proofing, vertical reinforcing bars, and heavy-duty shoot-bolts.',
    technicalHighlights: ['Precision welded mitre corners', 'High-security diamond trellis infill', 'Heavy-duty center shoot bolts & padlock lugs'],
    materialsUsed: ['Heavy structural steel RHS frame', 'Solid steel trellis lattice', 'Industrial weather-resistant paint finish'],
    imageUrl: '/images/custom-welded-security-gate.jpeg',
    imageAlt: 'Verified NKOANA workshop fabrication: heavy-duty steel security gate with trellis burglar bars',
    isOwnerPhoto: true,
    visualType: 'welding',
  },
  {
    id: 'proj-6',
    title: 'Gate Automation Motor Mechanism & Track Assembly',
    phase: 'Gate automation & commissioning',
    category: 'automation',
    location: 'Driveway Access, Limpopo Area',
    description: 'Sliding gate motor installation mounted directly to anchor plinth with precision-spaced toothed rack, heavy ground track, guide rollers, and emergency manual release key.',
    technicalHighlights: ['Precision toothed rack engagement', 'Heavy-gauge ground track with low-friction wheels', 'Anti-lift safety brackets'],
    materialsUsed: ['Steel drive rack', 'Industrial gate motor drive unit', 'Reinforced ground fasteners'],
    imageUrl: '/images/automated-sliding-gate-motor.jpeg',
    imageAlt: 'Heavy-duty gate motor unit mounted on plinth with drive gear and track',
    isOwnerPhoto: false,
    visualType: 'gate-motor',
  },
];
