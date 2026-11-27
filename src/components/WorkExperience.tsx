import { WORK_EXPERIENCE } from '../data/portfolio';

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Work Experience</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="experience-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[44px] lg:text-[50px] [text-wrap:balance]"
        >
          Professional leadership &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            founding journey
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 max-w-4xl mx-auto space-y-5">
        {WORK_EXPERIENCE.map((exp) => (
          <div
            key={exp.company}
            className="rounded-[24px] border border-[#111318]/10 bg-white p-7 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start shadow-[0_12px_32px_-22px_rgba(12,45,72,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2587B8]/30"
          >
            <div className="md:col-span-4">
              <span className="font-mono text-[13px] font-bold text-[#2587B8] tabular-nums">
                {exp.period}
              </span>
              <h3 className="mt-1.5 font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight text-[#111318]">
                {exp.company}
              </h3>
            </div>
            <div className="md:col-span-8">
              <h4 className="text-[17px] font-bold text-[#0c2d48]">{exp.role}</h4>
              <p className="mt-2.5 text-[15.5px] leading-[1.8] text-[#475569]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
