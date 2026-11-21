export interface VentureLogo {
  id: string;
  src: string;
  alt: string;
  kind: 'wordmark' | 'icon';
  tierOneClass: string;
  tierTwoClass: string;
}

export interface ManifestoPoint {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  benefit: string;
}

export interface ExpertiseDomain {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface FieldNote {
  id: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  category: string;
}

export const BRAND = {
  name: 'Nihab Al Mahjabin',
  email: 'nihabalmahjabin@gmail.com',
  headline: 'Visionary Leader, Entrepreneur & CEO architecting enduring digital ventures.',
  intro:
    'I build, scale, and lead multiple technology startups and open-source ecosystems from Bangladesh to the global stage, bridging visionary strategy with world-class engineering.',
};

export const ROTATING_ROLES = [
  'Entrepreneur',
  'Visionary CEO',
  'Founder',
  'Product Architect',
  'Innovator',
  'Leader',
  'Open Source Creator',
  'Strategist',
] as const;

export const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    index: '01',
    title: 'First-Principles Leadership',
    subtitle: 'Strip Away Noise',
    description:
      'We disregard superficial complexity and industry dogma to solve core operational bottlenecks from the ground up.',
    benefit: 'Delivers rock-solid system foundations that eliminate technical debt before it starts.',
  },
  {
    index: '02',
    title: 'Uncompromising Craft & Taste',
    subtitle: 'Obsessive Quality',
    description:
      'Every interaction, typographic hierarchy, and code module is calibrated to build instant, enduring user trust.',
    benefit: 'Elevates brand credibility and converts discerning visitors into loyal brand advocates.',
  },
  {
    index: '03',
    title: 'Long-Term Compound Value',
    subtitle: 'Sustainable Growth',
    description:
      'We architect scalable digital ecosystems designed to compound in efficiency, performance, and revenue year over year.',
    benefit: 'Protects your capital investment and ensures effortless future feature expansion.',
  },
];

export const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    index: '01',
    title: 'Venture Strategy & Architecture',
    subtitle: 'Zero-to-One Growth',
    description: 'Transforming raw market opportunities into structured, high-conversion product roadmaps across multiple startups.',
    points: [
      'Precise opportunity framing and go-to-market positioning',
      'Frictionless user journey and workflow mapping',
      'Data-informed milestone prioritization for rapid validation',
    ],
  },
  {
    index: '02',
    title: 'Full-Stack Web Engineering',
    subtitle: 'Performance & Scale',
    description: 'Building lightning-fast, modular React & TypeScript web applications engineered for enterprise reliability.',
    points: [
      'Component-driven architecture with zero runtime bloat',
      'Optimized core web vitals for instant page responsiveness',
      'Robust state management and secure backend integrations',
    ],
  },
  {
    index: '03',
    title: 'Interface System Craft',
    subtitle: 'Human-Centered UX',
    description: 'Designing calm, accessible digital surfaces where aesthetic restraint meets effortless usability.',
    points: [
      'Tokenized design systems ensuring absolute visual consistency',
      'WCAG AA accessible contrast and keyboard navigation',
      'Fluid responsive layouts optimized across every device screen',
    ],
  },
];

export const FIELD_NOTES: FieldNote[] = [
  {
    id: 'note-1',
    date: 'November 2026',
    readTime: '4 min read',
    category: 'Venture Strategy',
    title: 'Why Exceptional Products Feel Inevitable',
    summary:
      'Examining how ruthless simplification and first-principles empathy transform complex enterprise workflows into intuitive daily habits.',
  },
  {
    id: 'note-2',
    date: 'October 2026',
    readTime: '5 min read',
    category: 'Engineering Craft',
    title: 'The Compound Returns of Modular TypeScript',
    summary:
      'How investing in rigorous type safety and decoupled component primitives early on accelerates multi-year shipping velocity.',
  },
  {
    id: 'note-3',
    date: 'September 2026',
    readTime: '3 min read',
    category: 'Founder Leadership',
    title: 'Cultivating Aesthetic Taste in a Crowded Market',
    summary:
      'In an era flooded with generic templates, genuine visual restraint and uncompromising quality remain the ultimate competitive moats.',
  },
];

export const PERSONAL_INTRODUCTION = {
  greeting: 'Hello, I am Nihab Al Mahjabin.',
  statement:
    'A visionary entrepreneur, CEO, and software architect based in Bangladesh, founding and leading multiple high-impact digital ventures.',
  vision:
    'As the owner and CEO of FeLoW WebStaR, SABLE, Floraxen Labs, Lumora Studio, and MedProfile Bangladesh, my life work is dedicated to conceiving, designing, and launching digital products that combine rigorous engineering with uncompromising aesthetic taste.',
};

export const ABOUT_ME = {
  title: 'Driven by vision, anchored in leadership and execution.',
  paragraphs: [
    'My journey as an entrepreneur and CEO began with a fundamental belief: that ambitious digital ventures can originate from anywhere in the world and impact millions.',
    'Today, I lead multiple independent startups and platforms—including FeLoW WebStaR, SABLE, Floraxen Labs, Lumora Studio, and MedProfile Bangladesh. I thrive at the intersection of executive strategy, system architecture, and human-centered design.',
    'When I am not scaling startups or architecting codebases, you can find me studying architectural geometry, exploring global market trends, and mentoring emerging tech leaders.',
  ],
};

export const SKILLS_EXPERTISE = [
  { category: 'Executive Leadership', items: ['Venture Direction', 'Startup Scaling', 'Market Positioning', 'Strategic Alliance'] },
  { category: 'Frontend Engineering', items: ['React 19 & Vite', 'TypeScript Architecture', 'Tailwind CSS & Design Systems', 'Responsive UI/UX'] },
  { category: 'Backend & Systems', items: ['Node.js & Express', 'RESTful APIs', 'Database Modeling', 'Cloud Deployment'] },
];

export const FEATURED_PROJECTS = [
  {
    title: 'FeLoW WebStaR',
    category: 'Tutor Discovery Platform',
    summary: 'FeLoW WebStaR is a tutor discovery platform designed to connect students and parents with suitable tutors while helping educators discover teaching opportunities. We aim to make quality tutoring more accessible through a simple, transparent, and community-driven experience.',
    metrics: 'Founder & CEO · Education Tech',
    url: 'https://felow-webstar.vercel.app/',
    logoSrc: '/assets/aistudio/felow-webstar-wordmark-color_a106cae2.svg',
  },
  {
    title: 'SABLE (Sable for CV)',
    category: 'AI-Powered CV Maker',
    summary: 'SABLE is a completely free, AI-powered CV maker designed for students, fresh graduates, job seekers, and people from all backgrounds in Bangladesh. It helps anyone create professional, job-ready CVs through a simple AI-guided process.',
    metrics: 'Founder & Owner · Open Source',
    url: 'https://sable-for-cv.netlify.app/',
    logoSrc: '/assets/aistudio/sable-horizontal-color_b501b6d2.svg',
  },
  {
    title: 'Floraxen Labs',
    category: 'Digital Solutions Company',
    summary: 'Floraxen Labs is a digital solutions company focused on building modern websites, custom software, and AI-powered solutions. We help businesses transform ideas into impactful digital experiences through innovation, thoughtful design, and technology.',
    metrics: 'CEO & Owner · Live Platform',
    url: 'https://floraxen-labs.vercel.app',
    logoSrc: '/assets/aistudio/floraxen-labs-wordmark-color_f01dc89e.svg',
  },
  {
    title: 'Lumora Studio',
    category: 'Creative Digital Studio',
    summary: 'Lumora Studio is a creative digital studio crafting distinctive brand identities, modern digital experiences, and impactful visual designs. We blend creativity, strategy, and design to help brands build a strong and memorable presence.',
    metrics: 'Founder & CEO · Creative Studio',
    url: 'https://lumorastudio-two.vercel.app',
    logoSrc: '/assets/aistudio/floraxen-icon_31ae2c7f.svg',
  },
  {
    title: 'MedProfile Bangladesh',
    category: 'Digital Identity Platform',
    summary: 'MedProfile Bangladesh is a digital identity platform dedicated to helping doctors build a strong and professional online presence. We create personalized doctor portfolio websites that showcase medical qualifications, expertise, achievements, and professional journeys.',
    metrics: 'Founder & Owner · Health Tech',
    url: 'https://medprofile-bangladesh.vercel.app',
    logoSrc: '/assets/aistudio/medprofile-wordmark_db23a687.svg',
  },
];

export const THINGS_BUILT = [
  { name: 'FeLoW WebStaR', desc: 'Tutor discovery platform connecting students and parents with suitable tutors.' },
  { name: 'SABLE for CV', desc: 'Completely free, AI-powered CV maker for students and job seekers in Bangladesh.' },
];

export const WORK_EXPERIENCE = [
  {
    role: 'Founder & CEO',
    company: 'FeLoW WebStaR & SABLE',
    period: '2024 — Present',
    description: 'Building accessible community-driven tutor discovery and AI-powered career enablement platforms.',
  },
  {
    role: 'Founder, CEO & Owner',
    company: 'Floraxen Labs',
    period: '2023 — Present',
    description: 'Leading digital solutions, custom software development, and AI-powered product engineering.',
  },
  {
    role: 'Founder & CEO',
    company: 'Lumora Studio',
    period: '2024 — Present',
    description: 'Crafting distinctive brand identities, modern digital experiences, and impactful visual designs.',
  },
  {
    role: 'Founder & Owner',
    company: 'MedProfile Bangladesh',
    period: '2023 — Present',
    description: 'Empowering medical professionals with personalized portfolio websites showcasing clinical expertise.',
  },
];

export const EDUCATION_LIST = [
  {
    degree: 'Foundational Studies & Academic Roots',
    institution: 'Higher Education & Continuous Learning',
    period: 'Completed / Ongoing',
    highlights: 'Building a rigorous academic and self-directed foundation in computer science and entrepreneurship.',
  },
  {
    degree: 'Venture Leadership & Startup Execution',
    institution: 'Real-World CEO & Founder Journey',
    period: '2023 — Present',
    highlights: 'Successfully founded and scaling 5+ active startups and digital platforms.',
  },
];

export const TECHNOLOGIES_TOOLS = [
  'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'Git', 'Figma', 'PostgreSQL', 'Next.js'
];

export const BLOG_ARTICLES = [
  { title: 'Why Exceptional Products Feel Inevitable', date: 'Nov 2026', read: '4 min read' },
  { title: 'The Compound Returns of Modular TypeScript', date: 'Oct 2026', read: '5 min read' },
  { title: 'Cultivating Aesthetic Taste in a Crowded Market', date: 'Sep 2026', read: '3 min read' },
];

export const INTERESTS_SIDE = [
  { topic: 'Architecture & Geometry', note: 'Studying how spatial proportion influences digital calmness.' },
  { topic: 'Typography & Print', note: 'Exploring classic neo-grotesque and editorial serif pairings.' },
  { topic: 'Philosophy of Speed', note: 'Balancing lightning-fast execution with deliberate, thoughtful depth.' },
];

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Threads', href: '#' },
  { label: 'X (Twitter)', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export const VENTURE_LOGOS: Record<string, VentureLogo> = {
  felowWordmark: {
    id: 'felow-webstar-wordmark',
    src: '/assets/aistudio/felow-webstar-wordmark-color_a106cae2.svg',
    alt: 'FeLow WebStaR',
    kind: 'wordmark',
    tierOneClass: 'h-20 sm:h-24 lg:h-28',
    tierTwoClass: 'h-20 sm:h-24 lg:h-28',
  },
  sableHorizontal: {
    id: 'sable-horizontal',
    src: '/assets/aistudio/sable-horizontal-color_b501b6d2.svg',
    alt: 'Sable Horizontal',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
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
  sableWordmark: {
    id: 'sable-wordmark',
    src: '/assets/aistudio/sable-wordmark-color_64735df4.svg',
    alt: 'Sable',
    kind: 'wordmark',
    tierOneClass: 'h-16 sm:h-20 lg:h-24',
    tierTwoClass: 'h-12 sm:h-14 lg:h-16',
  },
  sableColor: {
    id: 'sable-color',
    src: '/assets/aistudio/sable-color_dffc439e.svg',
    alt: 'Sable Logo',
    kind: 'wordmark',
    tierOneClass: 'h-20 sm:h-24 lg:h-28',
    tierTwoClass: 'h-16 sm:h-18 lg:h-22',
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

export const VENTURE_WORDMARKS: VentureLogo[] = [
  VENTURE_LOGOS.felowWordmark,
  VENTURE_LOGOS.sableHorizontal,
  VENTURE_LOGOS.floraxenLabsWordmark,
  VENTURE_LOGOS.medprofileWordmark,
];

export const FEATURED_WORDMARKS = VENTURE_WORDMARKS;

export const VENTURE_GRID_ROW_ONE: VentureLogo[] = [
  VENTURE_LOGOS.felowIcon,
  VENTURE_LOGOS.sableColor,
  VENTURE_LOGOS.floraxenIcon,
  VENTURE_LOGOS.floraxenLabsWordmark,
  VENTURE_LOGOS.medprofileSymbol,
];

export const VENTURE_GRID_ROW_TWO: VentureLogo[] = [
  VENTURE_LOGOS.floraxenLabsIcon,
  VENTURE_LOGOS.felowWordmark,
  VENTURE_LOGOS.sableIcon,
  VENTURE_LOGOS.medprofileWordmark,
];
