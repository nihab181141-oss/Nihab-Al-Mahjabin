import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { BRAND } from '../data/portfolio';

const SOCIAL_CHANNELS: { label: string; icon: ReactNode }[] = [
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#1877F2" />
        <path
          d="M15.7 12.9l.45-2.9h-2.78V8.12c0-.8.39-1.57 1.64-1.57h1.27V4.08S15.13 3.88 14.03 3.88c-2.3 0-3.8 1.39-3.8 3.91v2.21H7.68v2.9h2.55v7.02a10.2 10.2 0 0 0 3.14 0V12.9h2.33Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <defs>
          <radialGradient id="ig-app-grad" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#FDF497" />
            <stop offset="5%" stopColor="#FDF497" />
            <stop offset="45%" stopColor="#FD5949" />
            <stop offset="60%" stopColor="#D6249F" />
            <stop offset="90%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#ig-app-grad)" />
        <rect x="4.8" y="4.8" width="14.4" height="14.4" rx="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.65" />
        <circle cx="12" cy="12" r="3.3" fill="none" stroke="#FFFFFF" strokeWidth="1.65" />
        <circle cx="16.1" cy="7.9" r="1.05" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    label: 'Threads',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#101010" />
        <path
          d="M15.4 11.4c-.1-.05-.2-.1-.31-.14-.18-2.3-1.44-3.62-3.64-3.64-1.32-.01-2.43.55-3.12 1.58l1.24.85c.51-.77 1.32-.93 1.88-.93.74 0 1.29.21 1.65.64.26.31.43.73.51 1.25-.74-.13-1.55-.17-2.41-.12-2.43.14-3.99 1.56-3.88 3.53.05 1 .55 1.86 1.4 2.43.72.48 1.64.71 2.6.66 1.26-.07 2.25-.55 2.94-1.43.52-.67.85-1.53 1-2.61.6.36 1.04.84 1.29 1.41.42.96.44 2.54-.87 3.85-1.15 1.15-2.53 1.65-4.62 1.66-2.31-.02-4.07-.76-5.21-2.2-1.08-1.36-1.64-3.32-1.66-5.82.02-2.5.58-4.46 1.66-5.82 1.14-1.44 2.9-2.18 5.21-2.2 2.33.02 4.11.76 5.31 2.21.58.71 1.02 1.59 1.3 2.62l1.46-.39c-.34-1.26-.88-2.35-1.63-3.26C16.26 4.02 14.07 3.12 11.27 3.1h-.01c-2.79.02-4.96.93-6.44 2.71-1.34 1.68-2.03 4.01-2.05 6.94v.01c.02 2.93.71 5.26 2.05 6.94 1.48 1.78 3.65 2.69 6.44 2.71h.01c2.49-.02 4.24-.67 5.68-2.11 1.86-1.86 1.8-4.18 1.19-5.6-.4-.93-1.14-1.71-2.14-2.3Zm-4.05 4.41c-1.07.06-2.18-.42-2.24-1.44-.04-.75.53-1.59 2.27-1.69.2-.01.4-.02.59-.02.63 0 1.22.06 1.77.18-.2 2.52-1.39 2.91-2.39 2.97Z"
          fill="#FFFFFF"
          transform="translate(2.4 2.4) scale(0.8)"
        />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#000000" />
        <path
          d="M16.99 5.5h2.3l-5.02 5.74 5.91 7.81h-4.63l-3.62-4.74-4.15 4.74H5.48l5.37-6.14L5.18 5.5h4.75l3.27 4.33L16.99 5.5Zm-.81 12.17h1.27L9.22 6.81H7.86l8.32 10.86Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#26A5E4" />
        <path
          d="M17.8 6.86L5.72 11.52c-.82.33-.81.79-.15 1l3.1.97 7.18-4.53c.34-.21.65-.1.4.13l-5.82 5.25-.22 3.24c.32 0 .46-.14.64-.32l1.54-1.5 3.2 2.36c.59.33 1.01.16 1.16-.54l2.1-9.9c.21-.86-.33-1.25-.85-1.02Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#181717" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.8a7.2 7.2 0 0 0-2.28 14.03c.36.07.49-.16.49-.35v-1.23c-2 .43-2.42-.96-2.42-.96-.33-.83-.8-1.05-.8-1.05-.65-.45.05-.44.05-.44.72.05 1.1.74 1.1.74.64 1.1 1.68.78 2.09.6.07-.47.25-.78.46-.96-1.6-.18-3.28-.8-3.28-3.55 0-.78.28-1.42.74-1.92-.07-.18-.32-.91.07-1.9 0 0 .6-.19 1.98.74a6.88 6.88 0 0 1 3.6 0c1.38-.93 1.98-.74 1.98-.74.39.99.14 1.72.07 1.9.46.5.74 1.14.74 1.92 0 2.76-1.68 3.37-3.29 3.55.26.22.49.66.49 1.33v1.97c0 .19.13.42.5.35A7.2 7.2 0 0 0 12 4.8Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#0A66C2" />
        <path
          d="M7.94 9.54H5.38v8.22h2.56V9.54Zm-1.28-4.1a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96ZM18.62 13.15c0-2.44-1.3-3.81-3.36-3.81-1.35 0-2.18.74-2.55 1.38v-1.18h-2.54c.03.78 0 8.22 0 8.22h2.54v-4.59c0-.25.02-.49.09-.67.2-.49.65-1 1.41-1 1 0 1.45.75 1.45 1.86v4.4h2.56v-4.61Z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

interface FooterProps {
  onOpenContact: (topic?: string) => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [, setCopied] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t-2 border-[#111318]/12 bg-white text-[#111318]">
      {/* 1. Large Closing Statement */}
      <div className="mx-auto max-w-[1200px] px-5 pt-24 pb-16 sm:px-7 sm:pt-28 sm:pb-20 lg:px-10">
        <div className="rounded-[32px] border border-[#111318]/10 bg-[#EDF4F7]/75 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_-28px_rgba(12,45,72,0.16)]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
              <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
              <span>Let&apos;s Connect</span>
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.15] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[46px] sm:leading-[1.08] sm:tracking-[-0.03em] lg:text-[54px] [text-wrap:balance]">
              Let&apos;s build something{' '}
              <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
                remarkable
              </span>{' '}
              together.
            </h2>
            <p className="mt-4 sm:mt-5 text-[15px] leading-[1.75] text-[#475569] sm:text-[18px] sm:leading-[1.8]">
              Whether you are looking to launch a new digital venture, architect a high-performance web product, or discuss an ambitious idea from scratch, I&apos;m always open to meaningful collaborations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('Product Collaboration')}
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#111318] px-8 text-[15px] font-semibold text-white whitespace-nowrap shrink-0 shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1f242d] hover:shadow-[0_16px_32px_-10px_rgba(17,19,24,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* 2, 3, 4, 5. Main Footer Multi-Column Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 & 2: Personal Introduction & Ventures (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/nihab-al-mahjabin-icon-color_ca419e31.svg"
                  alt="Nihab Al Mahjabin Emblem"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-[family-name:var(--font-heading)] text-[18px] sm:text-[20px] font-extrabold tracking-tight text-[#111318]">
                  {BRAND.name}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[13px] sm:text-[13.5px] font-bold text-[#2587B8]">
                Based in Bangladesh · Working Globally
              </p>
              <p className="mt-3 sm:mt-3.5 text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15px] sm:leading-[1.8] max-w-md">
                An independent entrepreneur, CEO, and software architect dedicated to turning ambitious imagination into enduring digital ventures (Floraxen Labs, Lumora Studio, Al Jabin Publications, MedProfile Bangladesh, Sable for CV, and FeLoW WebStaR).
              </p>
            </div>
          </div>

          {/* Column 3: Explore (Col span 2) */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              <li>
                <a href="#top" className="transition-colors hover:text-[#111318]">
                  Home
                </a>
              </li>
              <li>
                <a href="#ventures" className="transition-colors hover:text-[#111318]">
                  Ventures
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#111318]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Socials (Col span 2.5) with Framer Motion Hover */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Social Channels
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              {SOCIAL_CHANNELS.map((social) => (
                <motion.li key={social.label} whileHover={{ scale: 1.06, x: 2 }} transition={{ duration: 0.2 }}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2.5 text-[#475569] hover:text-[#111318] transition-colors font-medium"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 5: More (Col span 3) */}
          <div className="lg:col-span-3">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Startups &amp; Ventures
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              <li>
                <span className="font-medium text-[#111318]">Floraxen Labs &amp; Lumora Studio</span>
                <p className="text-[12px] text-[#687580]/80">Research, software &amp; design studio</p>
              </li>
              <li>
                <span className="font-medium text-[#111318]">Al Jabin Publications</span>
                <p className="text-[12px] text-[#687580]/80">Independent publishing &amp; ebooks</p>
              </li>
              <li>
                <span className="font-medium text-[#111318]">MedProfile Bangladesh</span>
                <p className="text-[12px] text-[#687580]/80">Healthcare professional network</p>
              </li>
              <li>
                <span className="font-medium text-[#111318]">Sable for CV &amp; FeLoW WebStaR</span>
                <p className="text-[12px] text-[#687580]/80">Open source creator tools</p>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleScrollTop}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[#2587B8] transition-colors hover:text-[#111318] cursor-pointer mt-2"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 6. Final Footer Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#E5EBEF] pt-8 text-[13px] text-[#687580] sm:flex-row sm:items-center">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p className="font-medium text-[#111318]">Designed &amp; Built by {BRAND.name} (CEO &amp; Owner).</p>
        </div>
      </div>
    </footer>
  );
}
