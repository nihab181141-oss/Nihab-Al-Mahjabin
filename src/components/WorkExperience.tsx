import { WORK_EXPERIENCE } from '../data/portfolio';

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          Work Experience
        </p>
        <h2
          id="experience-heading"
          className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
        >
          Professional leadership &amp; founding journey.
        </h2>
      </div>

      {/* WordPress Editorial Timeline / Row Style */}
      <div className="mt-14 max-w-4xl mx-auto divide-y divide-[#E5EBEF] border-y border-[#E5EBEF]">
        {WORK_EXPERIENCE.map((exp) => (
          <div
            key={exp.company}
            className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-4"
          >
            <div className="md:col-span-4">
              <span className="font-mono text-[13px] font-semibold text-[#2587B8] tabular-nums">
                {exp.period}
              </span>
              <h3 className="mt-1 font-[family-name:var(--font-heading)] text-[20px] font-bold tracking-tight text-[#111318]">
                {exp.company}
              </h3>
            </div>
            <div className="md:col-span-8">
              <h4 className="text-[16px] font-semibold text-[#2587B8]">{exp.role}</h4>
              <p className="mt-2 text-[15px] leading-[1.75] text-[#687580]">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
