import { ArrowRight, Check, Copy } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      onOpenContact('General Hello');
    }
  };

  const activeRole = ROTATING_ROLES[roleIndex];

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-[1200px] flex-col justify-between px-5 pt-14 pb-20 sm:px-7 sm:pt-20 sm:pb-24 lg:px-10 lg:pt-24 lg:pb-28"
    >
      {/* Founder Introduction */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-col items-center">
          <p className="font-[family-name:var(--font-heading)] text-[26px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#0b1117] drop-shadow-[0_1px_14px_rgba(255,255,255,0.38)] sm:text-[34px] lg:text-[40px]">
            {BRAND.name}
          </p>

          <div className="mt-2.5 flex min-h-[46px] items-center justify-center overflow-hidden px-2 sm:min-h-[64px] lg:min-h-[76px]">
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

        <h1 className="mt-5 font-[family-name:var(--font-heading)] text-[26px] leading-[1.18] font-bold tracking-[-0.02em] text-[#111318]/90 sm:text-[34px] lg:text-[38px] [text-wrap:balance]">
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
            <span>Start a Conversation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#E5EBEF] bg-white px-6 text-[14px] font-medium text-[#111318] whitespace-nowrap shrink-0 shadow-[0_6px_18px_-8px_rgba(17,19,24,0.12)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(17,19,24,0.16)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39A9D5] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#35B99A]" aria-hidden="true" />
                <span>Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-[#687580]" aria-hidden="true" />
                <span>{BRAND.email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dedicated Companies & Ventures Static Responsive Grid Showcase */}
      <div id="ventures" className="mt-20 sm:mt-24 lg:mt-28">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-[14px] font-semibold tracking-wide text-[#111318]/80">
            Companies &amp; Ventures
          </h2>
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

          {/* Lower Tier: Responsive Balanced Multi-Row Static Grids */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-4 sm:grid-cols-3 sm:gap-x-7 lg:grid-cols-5 lg:gap-x-8">
              {VENTURE_GRID_ROW_ONE.map((logo, index) => (
                <div
                  key={`row1-${logo.id}`}
                  className={`flex min-h-[84px] w-full items-center justify-center sm:min-h-[96px] lg:min-h-[112px] ${
                    index === 4 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
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

            <div className="mx-auto grid max-w-4xl grid-cols-2 items-center justify-items-center gap-x-5 gap-y-4 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-8">
              {VENTURE_GRID_ROW_TWO.map((logo) => (
                <div
                  key={`row2-${logo.id}`}
                  className="flex min-h-[84px] w-full items-center justify-center sm:min-h-[96px] lg:min-h-[112px]"
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
