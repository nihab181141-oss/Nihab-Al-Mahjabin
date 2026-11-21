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
      className="relative mx-auto flex max-w-[1200px] flex-col justify-between px-5 pt-14 pb-20 sm:px-7 sm:pt-20 sm:pb-24 lg:px-10 lg:pt-24 lg:pb-28"
    >
      {/* Founder Introduction */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-col items-center">
          <p className="font-[family-name:var(--font-heading)] text-[16px] font-semibold tracking-wide text-[#111318]/85 sm:text-[19px]">
            {BRAND.name}
          </p>

          <div className="mt-2 flex min-h-[46px] items-center justify-center overflow-hidden px-2 sm:min-h-[64px] lg:min-h-[76px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeRole}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block whitespace-nowrap font-[family-name:var(--font-accent)] text-[32px] leading-[1.15] font-bold italic tracking-[-0.02em] text-[#0c2d48] sm:text-[48px] lg:text-[60px]"
              >
                {activeRole}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <h1 className="mt-5 font-[family-name:var(--font-heading)] text-[28px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[36px] lg:text-[42px] [text-wrap:balance]">
          {BRAND.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.7] font-normal text-[#111318]/85 sm:text-[16px]">
          {BRAND.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={() => onOpenContact('Product Collaboration')}
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#111318] px-7 text-[14px] font-medium text-white whitespace-nowrap shrink-0 shadow-[0_10px_24px_-10px_rgba(17,19,24,0.45)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1f242d] hover:shadow-[0_14px_28px_-10px_rgba(17,19,24,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318] cursor-pointer"
          >
            <span>Start Now</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Dedicated Companies & Ventures Static Responsive Grid Showcase */}
      <div id="ventures" className="mt-20 sm:mt-24 lg:mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[22px] font-bold tracking-tight text-[#111318] sm:text-[26px]">
            My Independent Ventures Those I&apos;ve Brought to Life
          </h2>
          <p className="mt-2 text-[14px] text-[#687580] sm:text-[15px]">
            A growing collection of brands, businesses and digital products I&apos;ve envisioned and built.
          </p>
        </div>

        <div className="mt-6 sm:mt-8">
          {/* Upper Tier: 2-col mobile -> 4-col desktop grid for Flagship Wordmarks */}
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-4 sm:gap-x-7 sm:gap-y-5 md:grid-cols-4 lg:gap-x-9">
            {FEATURED_WORDMARKS.map((logo) => (
              <div
                key={`featured-${logo.id}`}
                className="flex min-h-[84px] w-full items-center justify-center sm:min-h-[104px] lg:min-h-[116px]"
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
