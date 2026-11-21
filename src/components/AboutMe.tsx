import { ABOUT_ME } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            About Me
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
          >
            {ABOUT_ME.title}
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-5 text-[15.5px] leading-[1.8] text-[#687580] sm:text-[17px]">
          {ABOUT_ME.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
