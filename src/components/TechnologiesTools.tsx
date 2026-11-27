import type { ReactNode } from 'react';
import { TECHNOLOGIES_TOOLS } from '../data/portfolio';

const TECH_ICONS: Record<string, ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0EA5E9]" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 12 12)" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="#3178C6" />
      <path
        d="M7 11.2h4.6v1.4H10.1V18H8.5v-5.4H7v-1.4Zm5.6 5.2c.5.4 1.2.6 1.9.6.8 0 1.2-.3 1.2-.8 0-.4-.3-.7-1.2-1l-.5-.2c-1.2-.4-1.8-1-1.8-2.1 0-1.2 1-2.1 2.6-2.1.9 0 1.6.2 2.2.6l-.6 1.3c-.5-.3-1-.5-1.6-.5-.6 0-1 .3-1 .7 0 .4.3.7 1.1.9l.5.2c1.3.4 2 1 2 2.2 0 1.3-1.1 2.2-2.8 2.2-1 0-2-.3-2.6-.8l.6-1.2Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#06B6D4]" fill="currentColor" aria-hidden="true">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6Zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12Z" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M21 4.5 12.4 20a.5.5 0 0 1-.88 0L3 4.5a.5.5 0 0 1 .53-.73l8.47 1.52a.5.5 0 0 0 .18 0l8.29-1.52a.5.5 0 0 1 .53.73Z" fill="#646CFF" />
      <path d="m15.8 3.2-5.4 1.06a.4.4 0 0 0-.32.37l-.33 5.58a.4.4 0 0 0 .49.41l1.5-.35a.4.4 0 0 1 .48.47l-.45 2.18a.4.4 0 0 0 .51.46l.93-.28a.4.4 0 0 1 .51.46l-.71 3.45c-.04.22.25.33.37.14l.09-.14 4.5-8.98a.4.4 0 0 0-.43-.57l-1.55.3a.4.4 0 0 1-.46-.5l1-3.48a.4.4 0 0 0-.49-.53Z" fill="#FFCA28" />
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#3C873A]" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 20 7.1v9.8L12 21.5 4 16.9V7.1L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path
        d="M9.6 14.2V9.8l4.8 4.4V9.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#111318]" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M6.8 14.5c0-1.6 1-2.8 2.4-2.8 1.3 0 2.1.9 2.1 2.2v.4H6.9m6.1-2.4 3.4 4.4m0-4.4-3.4 4.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#F05032]" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" transform="rotate(45 12 12)" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="8.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="15.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 10v4m1.1-3.3 1.5 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M9 3h3v6H9a3 3 0 0 1 0-6Z" fill="#F24E1E" />
      <path d="M12 3h3a3 3 0 0 1 0 6h-3V3Z" fill="#FF7262" />
      <path d="M12 9h3a3 3 0 0 1 0 6h-3V9Z" fill="#1ABCFE" />
      <path d="M9 9h3v6H9a3 3 0 0 1 0-6Z" fill="#A259FF" />
      <path d="M9 15h3v3a3 3 0 0 1-3-3Z" fill="#0ACF83" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#336791]" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6.5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.12" />
      <path d="M5 6.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 11.5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  'Next.js': (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#111318]" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" fill="currentColor" />
      <path d="M8.8 15.6V8.4l7.6 9.8M15.2 8.4v4.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function TechnologiesTools() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Tech Stack</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="technologies-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[44px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[50px] [text-wrap:balance]"
        >
          Technologies &amp; Tools I{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            Rely On
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {TECHNOLOGIES_TOOLS.map((tech, idx) => (
          <div
            key={tech}
            className="rounded-[22px] border border-[#111318]/10 bg-white px-5 py-5 flex flex-col justify-between shadow-[0_10px_28px_-20px_rgba(12,45,72,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2587B8]/35"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4F7]">
                {TECH_ICONS[tech]}
              </div>
              <span className="font-mono text-[11.5px] font-bold text-[#64748B] tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-4 font-[family-name:var(--font-heading)] text-[15.5px] sm:text-[17px] leading-[1.25] font-extrabold tracking-tight text-[#111318]">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
