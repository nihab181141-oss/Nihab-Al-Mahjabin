export interface VentureLogo {
  id: string;
  src: string;
  alt: string;
  kind: 'wordmark' | 'icon';
  tierOneClass: string;
  tierTwoClass: string;
}

export const BRAND = {
  name: 'Nihab Al Mahjabin',
  email: 'nihabalmahjabin@gmail.com',
  headline: 'Building bold ideas into products that matter.',
  intro:
    'I partner with ambition and imagination—conceiving, designing, and engineering digital ventures and web products built with clarity, conviction, and lasting craft.',
};

export const ROTATING_ROLES = [
  'Entrepreneur',
  'Visionary',
  'Founder',
  'Product Builder',
  'Developer',
  'Innovator',
  'Creator',
  'Investor',
  'Strategist',
  'Problem Solver',
  'Dreamer',
  'Lifelong Learner',
] as const;

export const VENTURE_LOGOS: Record<string, VentureLogo> = {
  floraxenLabsWordmark: {
    id: 'floraxen-labs-wordmark',
    src: '/assets/aistudio/floraxen-labs-wordmark-color_f01dc89e.svg',
    alt: 'Floraxen Labs',
    kind: 'wordmark',
    tierOneClass: 'h-18 sm:h-22 lg:h-26 drop-shadow-[0_2px_10px_rgba(17,19,24,0.08)]',
    tierTwoClass: 'h-16 sm:h-18 lg:h-22 drop-shadow-[0_2px_8px_rgba(17,19,24,0.08)]',
  },
  medprofileWordmark: {
    id: 'medprofile-wordmark',
    src: '/assets/aistudio/medprofile-wordmark_db23a687.svg',
    alt: 'MedProfile Bangladesh',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-14 sm:h-16 lg:h-20',
  },
  felowWordmark: {
    id: 'felow-webstar-wordmark',
    src: '/assets/aistudio/felow-webstar-wordmark-color_a106cae2.svg',
    alt: 'FeLow WebStaR',
    kind: 'wordmark',
    tierOneClass: 'h-20 sm:h-24 lg:h-28',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
  sableWordmark: {
    id: 'sable-wordmark',
    src: '/assets/aistudio/sable-wordmark-color_64735df4.svg',
    alt: 'Sable',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
  floraxenIcon: {
    id: 'floraxen-icon',
    src: '/assets/aistudio/floraxen-icon_31ae2c7f.svg',
    alt: 'Floraxen',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
  },
  floraxenLabsIcon: {
    id: 'floraxen-labs-icon',
    src: '/assets/aistudio/floraxen-labs-icon-color_1__cad83d7f.svg',
    alt: 'Floraxen Labs Emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
  },
  medprofileSymbol: {
    id: 'medprofile-symbol',
    src: '/assets/aistudio/medprofile-symbol_e2b00b4b.svg',
    alt: 'MedProfile Emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
  felowIcon: {
    id: 'felow-webstar-icon',
    src: '/assets/aistudio/felow-webstar-icon-color_69459cad.svg',
    alt: 'FeLow WebStaR Emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
  sableIcon: {
    id: 'sable-icon',
    src: '/assets/aistudio/sable-icon-color_0322c06c.svg',
    alt: 'Sable Emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
};

// Upper tier: prominent wordmarks (larger than icons)
export const FEATURED_WORDMARKS: VentureLogo[] = [
  VENTURE_LOGOS.floraxenLabsWordmark,
  VENTURE_LOGOS.medprofileWordmark,
  VENTURE_LOGOS.felowWordmark,
  VENTURE_LOGOS.sableWordmark,
];

// Lower tier rows: spacious static multi-row arrangement combining icons & alternating marks
export const VENTURE_GRID_ROW_ONE: VentureLogo[] = [
  VENTURE_LOGOS.floraxenIcon,
  VENTURE_LOGOS.sableWordmark,
  VENTURE_LOGOS.medprofileSymbol,
  VENTURE_LOGOS.floraxenLabsWordmark,
  VENTURE_LOGOS.felowIcon,
];

export const VENTURE_GRID_ROW_TWO: VentureLogo[] = [
  VENTURE_LOGOS.floraxenLabsIcon,
  VENTURE_LOGOS.felowWordmark,
  VENTURE_LOGOS.sableIcon,
  VENTURE_LOGOS.medprofileWordmark,
];
