import { DraftingCompass, Type, Zap } from 'lucide-react';
import { INTERESTS_SIDE } from '../data/portfolio';

const INTEREST_ICONS = [DraftingCompass, Type, Zap];

export function InterestsSide() {
  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Personal Side</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="interests-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[44px] lg:text-[50px] [text-wrap:balance]"
        >
          Interests &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            Obsessions
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {INTERESTS_SIDE.map((item, idx) => {
          const IconComponent = INTEREST_ICONS[idx] ?? DraftingCompass;
          return (
            <div
              key={item.topic}
              className="rounded-[24px] border border-[#111318]/10 bg-white p-7 sm:p-8 shadow-[0_14px_36px_-22px_rgba(12,45,72,0.14)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4F7] text-[#2587B8]">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-[14px] font-bold text-[#2587B8] tabular-nums">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight text-[#111318]">
                {item.topic}
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.8] text-[#475569]">{item.note}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
