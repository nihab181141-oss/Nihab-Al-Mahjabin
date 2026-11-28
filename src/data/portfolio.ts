export interface VentureLogo {
  id: string;
  src: string;
  alt: string;
  kind: 'wordmark' | 'icon';
  tierOneClass: string;
  tierTwoClass: string;
}

export interface FeaturedVenture {
  title: string;
  category: string;
  statusMetric: string;
  problem: string;
  solution: string;
  techStack: string[];
  url: string;
  logoSrc: string;
}

export interface OpenSourceItem {
  name: string;
  category: string;
  stack: string;
  summary: string;
  repoUrl: string;
  liveUrl?: string;
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  milestone: string;
}

export interface EssayArticle {
  slug: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  title: string;
  summary: string;
  content: string[];
}

export interface CapabilityPillar {
  id: string;
  index: string;
  label: string;
  title: string;
  summary: string;
  outcomes: string[];
}

export interface TechStackItem {
  name: string;
  role: string;
}

const rawSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
export const SITE_URL =
  rawSiteUrl && rawSiteUrl.length > 0 ? rawSiteUrl.replace(/\/$/, '') : 'https://nihab-al-mahjabin.vercel.app';

export const GITHUB_URL = 'https://github.com/nihab181141-oss';

export const BRAND = {
  name: 'Nihab Al Mahjabin',
  email: 'nihabalmahjabin@gmail.com',
  subheadline: 'Founder, CEO & Software Architect building high-utility SaaS, EdTech, and HealthTech products.',
  intro:
    'Building and scaling 6+ digital ventures from Bangladesh for global users—combining executive strategy, product design, and full-stack React & TypeScript architecture.',
};

export const ROTATING_ROLES = [
  'Founder & CEO',
  'Software Architect',
  'Product Strategist',
  'Full-Stack Engineer',
  'Open-Source Builder',
] as const;

export const FOUNDER_BENTO = {
  eyebrow: 'Founder Story & Capabilities',
  title: 'First-principles execution from problem to production.',
  storyParagraphs: [
    'Every product I build starts by identifying a structural bottleneck—whether helping patients verify doctor credentials in Bangladesh, giving fresh graduates an accessible AI CV builder, or connecting students directly with vetted tutors.',
    'Operating at the intersection of executive strategy and hands-on engineering, I take ventures from zero-to-one product framing through React, TypeScript, and Node.js deployment without unnecessary layers between idea and user.',
  ],
  metrics: [
    { label: 'Ventures Founded', value: '6+' },
    { label: 'Years Shipping', value: '3+' },
    { label: 'Core Focus', value: 'SaaS · EdTech · HealthTech' },
  ],
  pillars: [
    {
      id: 'architecture',
      index: '01',
      label: 'Architecture',
      title: 'Venture Strategy & System Architecture',
      summary:
        'Framing real market gaps into lean, durable product roadmaps with clear conversion flows and zero technical bloat.',
      outcomes: [
        'Problem-first opportunity scoping and go-to-market positioning',
        'Decoupled frontend/API architecture built for rapid iteration',
        'Direct conversion paths engineered for measurable user adoption',
      ],
    },
    {
      id: 'engineering',
      index: '02',
      label: 'Engineering',
      title: 'Full-Stack React & TypeScript Delivery',
      summary:
        'Shipping fast, type-safe web platforms engineered for Core Web Vitals, accessibility, and multi-year maintainability.',
      outcomes: [
        'Modular React 19, Vite, Next.js, and TypeScript codebases',
        'RESTful Node.js & Express APIs backed by PostgreSQL schemas',
        'Semantic HTML, technical SEO, and WCAG-aligned navigation',
      ],
    },
    {
      id: 'craft',
      index: '03',
      label: 'Product Craft',
      title: 'Interface Systems & User Trust',
      summary:
        'Designing calm, scannable digital surfaces where typographic hierarchy and responsive detail drive immediate credibility.',
      outcomes: [
        'Consistent spacing, contrast, and token-driven Tailwind CSS systems',
        'Mobile-first layouts tuned for real-world emerging-market devices',
        'Purposeful micro-interactions that clarify state without clutter',
      ],
    },
  ] satisfies CapabilityPillar[],
};

export const TECH_STACK_DOCK: TechStackItem[] = [
  { name: 'React', role: 'Component UI architecture & interactive client state across all flagship web apps.' },
  { name: 'TypeScript', role: 'Strict static typing for predictable refactoring and safer multi-venture scaling.' },
  { name: 'Next.js', role: 'Hybrid rendering, SEO-critical routes, and high-speed production web delivery.' },
  { name: 'Tailwind CSS', role: 'Token-consistent styling, fluid responsive grids, and accessible contrast systems.' },
  { name: 'Vite', role: 'Sub-second dev builds and lean production bundles for single-page platforms.' },
  { name: 'Node.js', role: 'Server-side runtimes, API orchestration, and scalable backend business logic.' },
  { name: 'Express', role: 'Lightweight REST endpoints, middleware validation, and service integrations.' },
  { name: 'PostgreSQL', role: 'Relational data modeling, transactional integrity, and structured query tuning.' },
  { name: 'Git', role: 'Disciplined branching, release traceability, and open-source collaboration.' },
  { name: 'Figma', role: 'Rapid wireframing, typographic hierarchy studies, and component handoff specs.' },
];

export const FEATURED_PROJECTS: FeaturedVenture[] = [
  {
    title: 'FeLoW WebStaR',
    category: 'EdTech',
    statusMetric: 'Live Production · Founder & CEO',
    problem: 'Students and parents struggle to locate trustworthy, subject-matched tutors without opaque middlemen.',
    solution:
      'Built a transparent tutor discovery platform connecting learners with qualified educators through structured profiles and direct discovery.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    url: 'https://felow-webstar.vercel.app/',
    logoSrc: '/assets/aistudio/felow-webstar-wordmark-color_a106cae2.svg',
  },
  {
    title: 'SABLE (Sable for CV)',
    category: 'AI SaaS',
    statusMetric: 'Live Production · Free Open Tool',
    problem: 'Students and job seekers in Bangladesh face paywalled or poorly formatted resume builders.',
    solution:
      'Engineered an AI-guided, zero-cost CV maker enabling fresh graduates to generate clean, ATS-ready resumes in minutes.',
    techStack: ['React', 'AI Workflows', 'Netlify'],
    url: 'https://sable-for-cv.netlify.app/',
    logoSrc: '/assets/aistudio/sable-horizontal-color_b501b6d2.svg',
  },
  {
    title: 'Al Jabin Publications',
    category: 'Digital Publishing',
    statusMetric: 'Live Production · Founder & CEO',
    problem: 'Independent authors and practical learners lack streamlined digital distribution channels.',
    solution:
      'Launched an independent publishing house delivering curated ebooks, practical guides, and streamlined digital publishing workflows.',
    techStack: ['Next.js', 'TypeScript', 'Editorial UX'],
    url: 'https://al-jabin-publications.vercel.app/',
    logoSrc: '/assets/aistudio/al-jabin-publications-wordmark-color_968ade48.svg',
  },
  {
    title: 'Floraxen Labs',
    category: 'Software Studio',
    statusMetric: 'Live Production · CEO & Owner',
    problem: 'Growing businesses need reliable custom web software and AI integrations without enterprise agency overhead.',
    solution:
      'Established a digital solutions company delivering production web platforms, custom software engineering, and AI automation.',
    techStack: ['React', 'Node.js', 'AI Systems'],
    url: 'https://floraxen-labs.vercel.app',
    logoSrc: '/assets/aistudio/floraxen-labs-wordmark-color_f01dc89e.svg',
  },
  {
    title: 'Lumora Studio',
    category: 'Product Design',
    statusMetric: 'Live Production · Founder & CEO',
    problem: 'Early-stage ventures often lose credibility due to fragmented visual systems and generic templates.',
    solution:
      'Created a creative digital studio focused on cohesive brand identities, interface systems, and conversion-focused product design.',
    techStack: ['Figma', 'Design Systems', 'Frontend'],
    url: 'https://lumorastudio-two.vercel.app',
    logoSrc: '/assets/aistudio/floraxen-icon_31ae2c7f.svg',
  },
  {
    title: 'MedProfile Bangladesh',
    category: 'HealthTech',
    statusMetric: 'Live Production · Founder & Owner',
    problem: 'Patients lack a unified way to verify clinical credentials, chambers, and specialties online.',
    solution:
      'Built a dedicated digital identity platform providing doctors with structured portfolio sites highlighting qualifications and practice details.',
    techStack: ['React', 'TypeScript', 'SEO Architecture'],
    url: 'https://medprofile-bangladesh.vercel.app',
    logoSrc: '/assets/aistudio/medprofile-wordmark_db23a687.svg',
  },
];

export const OPEN_SOURCE_PROJECTS: OpenSourceItem[] = [
  {
    name: 'Modular React & Tailwind Portfolio System',
    category: 'UI Architecture',
    stack: 'React 19 · TypeScript · Tailwind v4',
    summary:
      'Token-driven landing architecture featuring Bento Grid composition, History API article routing, dynamic SEO meta management, and accessible navigation.',
    repoUrl: GITHUB_URL,
  },
  {
    name: 'SABLE Resume Layout Engine',
    category: 'Document Tooling',
    stack: 'TypeScript · Print CSS · AI Prompts',
    summary:
      'Structured client-side resume schema and print-calibrated layout primitives designed to export clean, ATS-compatible CVs without server roundtrips.',
    repoUrl: GITHUB_URL,
    liveUrl: 'https://sable-for-cv.netlify.app/',
  },
  {
    name: 'Structured Schema & Meta Head Utility',
    category: 'Technical SEO',
    stack: 'TypeScript · JSON-LD · React Hooks',
    summary:
      'Lightweight React head synchronization utility keeping canonical URLs, Open Graph tags, and Person/Article metadata aligned across SPA routes.',
    repoUrl: GITHUB_URL,
  },
];

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
  {
    role: 'Founder & CEO',
    company: 'Al Jabin Publications',
    period: '2026 — Present',
    milestone: 'Directed digital publishing architecture, editorial catalog rollout, and reader-first web distribution.',
  },
  {
    role: 'Founder & CEO',
    company: 'FeLoW WebStaR & SABLE',
    period: '2024 — Present',
    milestone: 'Led zero-to-one product strategy and frontend delivery across tutor discovery and AI resume workflows.',
  },
  {
    role: 'Founder & CEO',
    company: 'Lumora Studio',
    period: '2024 — Present',
    milestone: 'Established reusable brand and UI system standards across multiple client and internal product launches.',
  },
  {
    role: 'Founder, CEO & Owner',
    company: 'Floraxen Labs',
    period: '2023 — Present',
    milestone: 'Architected full-stack web solutions, technical roadmaps, and AI-enabled client delivery pipelines.',
  },
  {
    role: 'Founder & Owner',
    company: 'MedProfile Bangladesh',
    period: '2023 — Present',
    milestone: 'Designed structured clinical portfolio templates and SEO architecture for medical practitioners nationwide.',
  },
];

export const ESSAYS: EssayArticle[] = [
  {
    slug: 'why-exceptional-products-feel-inevitable',
    date: 'Nov 2026',
    isoDate: '2026-11-12',
    readTime: '4 min read',
    category: 'Venture Strategy',
    title: 'Why Exceptional Products Feel Inevitable',
    summary:
      'How removing operational friction and designing around first-principles user behavior turns complex workflows into intuitive daily tools.',
    content: [
      'Most software fails long before scaling becomes a technical bottleneck. It fails because the product forces users to learn internal team jargon instead of matching the mental model they already carry into the workflow.',
      'When building platforms like SABLE for fresh graduates or MedProfile Bangladesh for clinicians, the highest-leverage engineering decision is rarely adding another configuration panel. It is deciding which steps can be eliminated altogether without reducing capability.',
      'Products feel inevitable when every screen answers a single user question clearly: what is this, why does it matter right now, and what happens when I click next? Strip away decorative complexity, tighten feedback loops, and let real utility do the heavy lifting.',
    ],
  },
  {
    slug: 'building-modular-frontends-at-scale-with-typescript',
    date: 'Oct 2026',
    isoDate: '2026-10-18',
    readTime: '5 min read',
    category: 'Engineering Craft',
    title: 'Building Modular Frontends at Scale with TypeScript',
    summary:
      'Practical lessons on decoupled UI primitives, strict data contracts, and maintaining shipping speed across multiple active startups.',
    content: [
      'Running multiple independent ventures in parallel forces discipline. If every product requires bespoke state plumbing and fragile CSS overrides, iteration slows to a crawl within months.',
      'Strict TypeScript interfaces at the data boundary—separating venture schemas, SEO metadata, and presentation components—allow UI updates to stay isolated and predictable. When a copy or layout upgrade happens, the compiler verifies every surface immediately.',
      'Combined with Tailwind CSS design tokens and lightweight component primitives, a small engineering team can ship production-grade experiences across EdTech, HealthTech, and SaaS without accumulating brittle frontend debt.',
    ],
  },
  {
    slug: 'intersection-of-executive-strategy-and-product-craft',
    date: 'Sep 2026',
    isoDate: '2026-09-24',
    readTime: '3 min read',
    category: 'Founder Leadership',
    title: 'The Intersection of Executive Strategy and Product Craft',
    summary:
      'Why hands-on architecture and deliberate visual restraint remain decisive advantages when launching digital products in crowded markets.',
    content: [
      'Strategy decks mean very little if the live landing experience loses a visitor in the first five seconds. Positioning, typography, page speed, and call-to-action clarity are all executive decisions—not afterthoughts handed off at launch.',
      'Being both founder and software architect collapses the gap between market insight and implementation. Customer feedback collected in the morning can turn into a cleaner onboarding flow or sharper value proposition in production the same week.',
      'In crowded categories saturated with generic templates, clarity and craft act as direct trust signals. Visitors judge reliability by how thoughtfully a product works on their phone screen.',
    ],
  },
];

export const VENTURE_LOGOS: Record<string, VentureLogo> = {
  felowWordmark: {
    id: 'felow-webstar-wordmark',
    src: '/assets/aistudio/felow-webstar-wordmark-color_a106cae2.svg',
    alt: 'FeLoW WebStaR — Tutor Discovery Platform logo',
    kind: 'wordmark',
    tierOneClass: 'h-20 sm:h-24 lg:h-28',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
  sableHorizontal: {
    id: 'sable-horizontal',
    src: '/assets/aistudio/sable-horizontal-color_b501b6d2.svg',
    alt: 'SABLE — AI-Powered CV Maker logo',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
  floraxenLabsWordmark: {
    id: 'floraxen-labs-wordmark',
    src: '/assets/aistudio/floraxen-labs-wordmark-color_f01dc89e.svg',
    alt: 'Floraxen Labs — Software & AI Solutions logo',
    kind: 'wordmark',
    tierOneClass: 'h-18 sm:h-22 lg:h-26 drop-shadow-[0_2px_10px_rgba(17,19,24,0.08)]',
    tierTwoClass: 'h-16 sm:h-18 lg:h-22 drop-shadow-[0_2px_8px_rgba(17,19,24,0.08)]',
  },
  medprofileWordmark: {
    id: 'medprofile-wordmark',
    src: '/assets/aistudio/medprofile-wordmark_db23a687.svg',
    alt: 'MedProfile Bangladesh — Doctor Digital Identity Platform logo',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-14 sm:h-16 lg:h-20',
  },
  sableWordmark: {
    id: 'sable-wordmark',
    src: '/assets/aistudio/sable-wordmark-color_64735df4.svg',
    alt: 'SABLE wordmark',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
  sableColor: {
    id: 'sable-color',
    src: '/assets/aistudio/sable-color_dffc439e.svg',
    alt: 'SABLE color emblem',
    kind: 'wordmark',
    tierOneClass: 'h-20 sm:h-24 lg:h-28',
    tierTwoClass: 'h-16 sm:h-18 lg:h-22',
  },
  floraxenIcon: {
    id: 'floraxen-icon',
    src: '/assets/aistudio/floraxen-icon_31ae2c7f.svg',
    alt: 'Lumora Studio emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
  },
  floraxenLabsIcon: {
    id: 'floraxen-labs-icon',
    src: '/assets/aistudio/floraxen-labs-icon-color_1__cad83d7f.svg',
    alt: 'Floraxen Labs emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28 drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]',
  },
  medprofileSymbol: {
    id: 'medprofile-symbol',
    src: '/assets/aistudio/medprofile-symbol_e2b00b4b.svg',
    alt: 'MedProfile Bangladesh emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
  felowIcon: {
    id: 'felow-webstar-icon',
    src: '/assets/aistudio/felow-webstar-icon-color_69459cad.svg',
    alt: 'FeLoW WebStaR emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
  sableIcon: {
    id: 'sable-icon',
    src: '/assets/aistudio/sable-icon-color_0322c06c.svg',
    alt: 'SABLE emblem',
    kind: 'icon',
    tierOneClass: 'h-12 sm:h-14 lg:h-16',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
  alJabinWordmark: {
    id: 'al-jabin-publications-wordmark',
    src: '/assets/aistudio/al-jabin-publications-wordmark-color_968ade48.svg',
    alt: 'Al Jabin Publications — Independent Publishing House logo',
    kind: 'wordmark',
    tierOneClass: 'h-20 sm:h-24 lg:h-28',
    tierTwoClass: 'h-16 sm:h-20 lg:h-24',
  },
  alJabinIcon: {
    id: 'al-jabin-publications-icon',
    src: '/assets/aistudio/al-jabin-publications-icon-color_5b7e2d55.svg',
    alt: 'Al Jabin Publications emblem',
    kind: 'icon',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
};

export const VENTURE_WORDMARKS: VentureLogo[] = [
  VENTURE_LOGOS.felowWordmark,
  VENTURE_LOGOS.sableHorizontal,
  VENTURE_LOGOS.alJabinWordmark,
  VENTURE_LOGOS.floraxenLabsWordmark,
  VENTURE_LOGOS.medprofileWordmark,
];

export const FEATURED_WORDMARKS = VENTURE_WORDMARKS;

export const VENTURE_GRID_ROW_ONE: VentureLogo[] = [
  VENTURE_LOGOS.felowIcon,
  VENTURE_LOGOS.sableColor,
  VENTURE_LOGOS.alJabinIcon,
  VENTURE_LOGOS.floraxenIcon,
  VENTURE_LOGOS.floraxenLabsWordmark,
  VENTURE_LOGOS.alJabinWordmark,
  VENTURE_LOGOS.medprofileSymbol,
];

export const VENTURE_GRID_ROW_TWO: VentureLogo[] = [
  VENTURE_LOGOS.floraxenLabsIcon,
  VENTURE_LOGOS.alJabinWordmark,
  VENTURE_LOGOS.felowWordmark,
  VENTURE_LOGOS.alJabinIcon,
  VENTURE_LOGOS.sableIcon,
  VENTURE_LOGOS.medprofileWordmark,
];
