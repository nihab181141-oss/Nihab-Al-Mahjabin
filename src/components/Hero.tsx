import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  BRAND,
  FEATURED_WORDMARKS,
  ROTATING_ROLES,
  VENTURE_GRID_ROW_ONE,
  VENTURE_GRID_ROW_TWO,
} from '../data/portfolio';

interface HeroProps {
  onOpenContact: (topic?: string) => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  const activeRole = ROTATING_ROLES[roleIndex];

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-[1200px] flex-col justify-between px-5 pt-16 pb-24 sm:px-7 sm:pt-24 sm:pb-28 lg:px-10 lg:pt-28 lg:pb-32"
    >
      {/* Founder Introduction */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <p className="font-[family-name:var(--font-heading)] text-[17px] font-bold tracking-wide text-[#0c2d48] sm:text-[21px]">
            {BRAND.name}
          </p>

          <div className="mt-2.5 flex min-h-[54px] items-center justify-center overflow-hidden px-2 sm:min-h-[76px] lg:min-h-[90px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeRole}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block whitespace-nowrap font-[family-name:var(--font-accent)] text-[38px] leading-[1.12] font-bold italic tracking-[-0.025em] text-[#0c2d48] sm:text-[56px] lg:text-[72px]"
              >
                {activeRole}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-[30px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[42px] lg:text-[50px] [text-wrap:balance]">
          {BRAND.headline}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[16.5px] leading-[1.8] font-medium text-[#111318]/80 sm:text-[18.5px]">
          {BRAND.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => onOpenContact('Product Collaboration')}
            className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#111318] px-8 text-[15px] font-semibold text-white whitespace-nowrap shrink-0 shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1f242d] hover:shadow-[0_16px_32px_-10px_rgba(17,19,24,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318] cursor-pointer"
          >
            <span>Start Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Dedicated Companies & Ventures Static Responsive Grid Showcase */}
      <div
        id="ventures"
        className="mt-20 sm:mt-24 lg:mt-28 bg-transparent"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            Independent Ventures
          </p>
          <h2 className="mt-2.5 font-[family-name:var(--font-heading)] text-[26px] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[32px] [text-wrap:balance]">
            Ventures I&apos;ve <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">Brought to Life</span>
          </h2>
          <p className="mt-3 text-[15.5px] leading-[1.7] text-[#475569] sm:text-[16.5px]">
            A growing collection of brands, businesses, and digital products I&apos;ve envisioned and built.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          {/* Upper Tier: Responsive flex/grid for Flagship Wordmarks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-5 lg:grid lg:grid-cols-5 lg:justify-items-center lg:gap-x-8">
            {FEATURED_WORDMARKS.map((logo) => (
              <div
                key={`featured-${logo.id}`}
                className="flex min-h-[84px] min-w-[140px] items-center justify-center sm:min-h-[104px] lg:min-h-[116px] lg:w-full lg:min-w-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="eager"
                  draggable={false}
                  className={`w-auto max-w-full object-contain select-none pointer-events-none ${logo.tierOneClass}`}
                />
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="mx-auto my-5 h-px w-full max-w-4xl bg-[#111318]/12 sm:my-6 lg:my-7"
          />

          {/* Lower Tier: Balanced Multi-Row Alternating Icons & Wordmarks */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 lg:gap-x-9">
              {VENTURE_GRID_ROW_ONE.map((logo) => (
                <div
                  key={`row1-${logo.id}`}
                  className="flex shrink-0 items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    draggable={false}
                    className={`w-auto max-w-full object-contain select-none pointer-events-none ${logo.tierTwoClass}`}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 lg:gap-x-9">
              {VENTURE_GRID_ROW_TWO.map((logo) => (
                <div
                  key={`row2-${logo.id}`}
                  className="flex shrink-0 items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="eager"
                    draggable={false}
                    className={`w-auto max-w-full object-contain select-none pointer-events-none ${logo.tierTwoClass}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
