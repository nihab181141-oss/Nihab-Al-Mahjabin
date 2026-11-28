import { ArrowRight, Calendar } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  BRAND,
  FEATURED_WORDMARKS,
  ROTATING_ROLES,
  VENTURE_GRID_ROW_ONE,
  VENTURE_GRID_ROW_TWO,
  VENTURE_LOGOS,
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
      className="relative mx-auto flex max-w-[1200px] flex-col justify-between px-5 pt-14 pb-20 sm:px-7 sm:pt-20 sm:pb-28 lg:px-10 lg:pt-24 lg:pb-32"
    >
      {/* Founder Introduction */}
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex flex-col items-center">
          <div className="flex min-h-[42px] items-center justify-center overflow-hidden px-2 sm:min-h-[54px] lg:min-h-[60px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeRole}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block whitespace-nowrap font-[family-name:var(--font-accent)] text-[22px] min-[380px]:text-[25px] leading-[1.15] font-bold italic tracking-[-0.015em] text-[#0c2d48] sm:text-[32px] lg:text-[36px]"
              >
                {activeRole}
              </motion.span>
            </AnimatePresence>
          </div>

          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-[36px] min-[380px]:text-[42px] leading-[1.06] font-extrabold tracking-[-0.03em] text-[#111318] sm:mt-3 sm:text-[58px] sm:leading-[1.04] lg:text-[72px] [text-wrap:balance]">
            {BRAND.name}
          </h1>
        </div>

        <p className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-[18px] min-[380px]:text-[20px] leading-[1.35] font-bold tracking-[-0.015em] text-[#0c2d48] sm:mt-6 sm:text-[24px] lg:text-[26px] [text-wrap:balance]">
          {BRAND.subheadline}
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-[1.72] font-medium text-[#111318]/80 sm:mt-5 sm:text-[18px] sm:leading-[1.78]">
          {BRAND.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <motion.a
            href="#projects"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#111318] px-7 sm:px-8 text-[15px] font-semibold text-white whitespace-nowrap shrink-0 shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)] transition-colors duration-150 hover:bg-[#1f242d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318]"
          >
            <span>Explore My Ventures</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact('Strategy Call');
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-[#111318]/18 bg-white/85 px-6 sm:px-7 text-[15px] font-semibold text-[#111318] whitespace-nowrap shrink-0 shadow-[0_8px_20px_-12px_rgba(12,45,72,0.22)] backdrop-blur-xs transition-colors duration-150 hover:border-[#2587B8] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318]"
          >
            <Calendar className="h-4 w-4 text-[#2587B8]" aria-hidden="true" />
            <span>Book a Strategy Call</span>
          </motion.a>
        </div>
      </div>

      {/* Dedicated Companies & Ventures Static Responsive Grid Showcase */}
      <div id="ventures" className="mt-20 sm:mt-24 lg:mt-28 bg-transparent">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0c2d48] sm:text-[12.5px]">
            Independent Ventures
          </p>
          <h2 className="mt-2.5 font-[family-name:var(--font-heading)] text-[22px] min-[380px]:text-[24px] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[32px] [text-wrap:balance]">
            Ventures I&apos;ve{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              Brought to Life
            </span>
          </h2>
          <p className="mt-3 text-[14.5px] leading-[1.65] font-medium text-[#111318]/80 sm:text-[16.5px] sm:leading-[1.7]">
            Production platforms and independent brands spanning EdTech, HealthTech, AI SaaS, and Digital Publishing.
          </p>
        </div>

        {/* Mobile-Only Showcase Layout (< 640px) */}
        <div className="mt-10 sm:hidden">
          {/* Upper Tier: Row 1 (3 logos) + Row 2 (2 logos) */}
          <div className="space-y-6">
            <div className="grid grid-cols-[1fr_1.3fr_1fr] items-center justify-items-center gap-3 min-[380px]:gap-5">
              <img
                src={VENTURE_LOGOS.felowWordmark.src}
                alt={VENTURE_LOGOS.felowWordmark.alt}
                loading="eager"
                draggable={false}
                className="h-16 min-[380px]:h-[74px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.sableHorizontal.src}
                alt={VENTURE_LOGOS.sableHorizontal.alt}
                loading="eager"
                draggable={false}
                className="h-14 min-[380px]:h-[68px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.alJabinWordmark.src}
                alt={VENTURE_LOGOS.alJabinWordmark.alt}
                loading="eager"
                draggable={false}
                className="h-16 min-[380px]:h-[74px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
            </div>

            <div className="flex items-center justify-center gap-6 min-[380px]:gap-8">
              <img
                src={VENTURE_LOGOS.floraxenLabsWordmark.src}
                alt={VENTURE_LOGOS.floraxenLabsWordmark.alt}
                loading="eager"
                draggable={false}
                className="h-12 min-[380px]:h-14 w-auto max-w-[54%] object-contain select-none pointer-events-none drop-shadow-[0_2px_10px_rgba(17,19,24,0.08)]"
              />
              <img
                src={VENTURE_LOGOS.medprofileWordmark.src}
                alt={VENTURE_LOGOS.medprofileWordmark.alt}
                loading="eager"
                draggable={false}
                className="h-20 min-[380px]:h-[90px] w-auto max-w-[42%] object-contain select-none pointer-events-none"
              />
            </div>
          </div>

          <div aria-hidden="true" className="mx-auto my-7 h-px w-full bg-[#111318]/12" />

          {/* Lower Tier: 4 + 3 + 4 + 2 balanced rows (decorative emblem repeat) */}
          <div aria-hidden="true" className="space-y-6">
            <div className="grid grid-cols-4 items-center justify-items-center gap-3.5 min-[380px]:gap-5">
              <img
                src={VENTURE_LOGOS.felowIcon.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-15 min-[380px]:h-[68px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.sableColor.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-18 min-[380px]:h-[82px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.alJabinIcon.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-15 min-[380px]:h-[68px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.floraxenIcon.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-14 min-[380px]:h-[62px] w-auto max-w-full object-contain select-none pointer-events-none drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]"
              />
            </div>

            <div className="flex items-center justify-center gap-4 min-[380px]:gap-6">
              <img
                src={VENTURE_LOGOS.floraxenLabsWordmark.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-11 min-[380px]:h-13 w-auto max-w-[42%] object-contain select-none pointer-events-none drop-shadow-[0_2px_8px_rgba(17,19,24,0.08)]"
              />
              <img
                src={VENTURE_LOGOS.alJabinWordmark.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-15 min-[380px]:h-[68px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.medprofileSymbol.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-14 min-[380px]:h-16 w-auto max-w-full object-contain select-none pointer-events-none"
              />
            </div>

            <div className="grid grid-cols-[0.9fr_1.15fr_1.15fr_0.9fr] items-center justify-items-center gap-2.5 min-[380px]:gap-4">
              <img
                src={VENTURE_LOGOS.floraxenLabsIcon.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-14 min-[380px]:h-16 w-auto max-w-full object-contain select-none pointer-events-none drop-shadow-[0_2px_10px_rgba(17,19,24,0.12)]"
              />
              <img
                src={VENTURE_LOGOS.alJabinWordmark.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-14 min-[380px]:h-16 w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.felowWordmark.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-15 min-[380px]:h-[68px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.alJabinIcon.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-14 min-[380px]:h-16 w-auto max-w-full object-contain select-none pointer-events-none"
              />
            </div>

            <div className="flex items-center justify-center gap-7 min-[380px]:gap-10">
              <img
                src={VENTURE_LOGOS.sableIcon.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-[72px] min-[380px]:h-[84px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
              <img
                src={VENTURE_LOGOS.medprofileWordmark.src}
                alt=""
                loading="eager"
                draggable={false}
                className="h-[68px] min-[380px]:h-[80px] w-auto max-w-full object-contain select-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Tablet & Desktop Showcase Layout (>= 640px) */}
        <div className="mt-8 hidden sm:block sm:mt-10">
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

          <div aria-hidden="true" className="mx-auto my-5 h-px w-full max-w-4xl bg-[#111318]/12 sm:my-6 lg:my-7" />

          {/* Lower Tier: Balanced Multi-Row Alternating Icons & Wordmarks (decorative) */}
          <div aria-hidden="true" className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 lg:gap-x-9">
              {VENTURE_GRID_ROW_ONE.map((logo) => (
                <div key={`row1-${logo.id}`} className="flex shrink-0 items-center justify-center">
                  <img
                    src={logo.src}
                    alt=""
                    loading="eager"
                    draggable={false}
                    className={`w-auto max-w-full object-contain select-none pointer-events-none ${logo.tierTwoClass}`}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 sm:gap-y-4 lg:gap-x-9">
              {VENTURE_GRID_ROW_TWO.map((logo) => (
                <div key={`row2-${logo.id}`} className="flex shrink-0 items-center justify-center">
                  <img
                    src={logo.src}
                    alt=""
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
