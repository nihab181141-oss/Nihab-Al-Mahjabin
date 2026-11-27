import { PERSONAL_INTRODUCTION } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function PersonalIntroduction() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <FadeIn className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Personal Introduction</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>

        <h2
          id="intro-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[44px] lg:text-[52px] [text-wrap:balance]"
        >
          Hello, I am{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            Nihab Al Mahjabin
          </span>
          .
        </h2>

        <div className="mt-10 rounded-[28px] border border-[#111318]/10 bg-[#EDF4F7]/55 px-6 py-8 sm:px-10 sm:py-10">
          <span
            aria-hidden="true"
            className="block font-[family-name:var(--font-accent)] text-[44px] leading-none text-[#2587B8]/40 select-none"
          >
            &ldquo;
          </span>
          <p className="mt-1 text-[18px] leading-[1.7] font-semibold text-[#111318] sm:text-[21px] [text-wrap:balance]">
            {PERSONAL_INTRODUCTION.statement}
          </p>
          <p className="mt-5 text-[16px] leading-[1.85] text-[#475569] sm:text-[17.5px] [text-wrap:balance]">
            {PERSONAL_INTRODUCTION.vision}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
