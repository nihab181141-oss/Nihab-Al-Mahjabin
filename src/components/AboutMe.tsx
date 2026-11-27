import { Compass, Globe } from 'lucide-react';
import { ABOUT_ME } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <FadeIn className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
            <span>About Me</span>
          </div>
          <h2
            id="about-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[42px] lg:text-[48px] [text-wrap:balance]"
          >
            Driven by vision, anchored in{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              leadership &amp; execution
            </span>
            .
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-[22px] border border-[#111318]/10 bg-white/80 p-5 shadow-[0_10px_30px_-18px_rgba(12,45,72,0.16)]">
            <div>
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-[#2587B8] shrink-0" aria-hidden="true" />
                <p className="font-[family-name:var(--font-heading)] text-[28px] font-extrabold text-[#0c2d48] tabular-nums">
                  6+
                </p>
              </div>
              <p className="mt-1 text-[13px] font-medium text-[#475569]">Independent Ventures</p>
            </div>
            <div className="border-l border-[#111318]/10 pl-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#2587B8] shrink-0" aria-hidden="true" />
                <p className="font-[family-name:var(--font-heading)] text-[28px] font-extrabold text-[#0c2d48]">
                  BD
                </p>
              </div>
              <p className="mt-1 text-[13px] font-medium text-[#475569]">Building Globally</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-[28px] border border-[#111318]/10 bg-white p-7 sm:p-10 space-y-6 text-[16px] leading-[1.85] text-[#334155] sm:text-[17.5px] shadow-[0_14px_40px_-24px_rgba(12,45,72,0.14)]">
          {ABOUT_ME.paragraphs.map((para, idx) => (
            <p key={idx} className={idx === 0 ? 'text-[17.5px] sm:text-[19px] font-semibold text-[#111318] leading-[1.7]' : ''}>
              {para}
            </p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
