import { PERSONAL_INTRODUCTION } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function PersonalIntroduction() {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          Personal Introduction
        </p>
        <h2
          id="intro-heading"
          className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
        >
          {PERSONAL_INTRODUCTION.greeting}
        </h2>
        <p className="mt-5 text-[17px] leading-[1.75] font-medium text-[#111318] sm:text-[19px] [text-wrap:balance]">
          {PERSONAL_INTRODUCTION.statement}
        </p>
        <p className="mt-4 text-[15.5px] leading-[1.8] text-[#687580] sm:text-[17px] [text-wrap:balance]">
          {PERSONAL_INTRODUCTION.vision}
        </p>
      </FadeIn>
    </section>
  );
}
