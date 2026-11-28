import { WORK_EXPERIENCE } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Leadership Timeline</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="experience-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
        >
          Executive leadership &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            architectural milestones
          </span>
          .
        </h2>
      </FadeIn>

      <div className="mt-14 max-w-4xl mx-auto divide-y divide-[#111318]/12 border-y border-[#111318]/12">
        {WORK_EXPERIENCE.map((exp) => (
          <div
            key={exp.company}
            className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
          >
            <div className="md:col-span-3">
              <span className="font-mono text-[13px] font-bold text-[#2587B8] tabular-nums">
                {exp.period}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-[family-name:var(--font-heading)] text-[19px] sm:text-[21px] leading-[1.25] font-extrabold tracking-tight text-[#111318]">
                {exp.company}
              </h3>
              <p className="mt-1 text-[14px] font-bold text-[#0c2d48]">{exp.role}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-[14.5px] leading-[1.72] text-[#475569] sm:text-[15px]">
                {exp.milestone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
