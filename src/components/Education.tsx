import { Award, Calendar, GraduationCap } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolio';

const EDUCATION_ICONS = [GraduationCap, Award];

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Education &amp; Roots</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="education-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[44px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[50px] [text-wrap:balance]"
        >
          Academic foundation &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            continuous learning
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATION_LIST.map((edu, idx) => {
          const IconComponent = EDUCATION_ICONS[idx] ?? GraduationCap;
          return (
            <div
              key={edu.degree}
              className="rounded-[24px] border border-[#111318]/10 bg-[#EDF4F7]/50 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:bg-[#EDF4F7]/85 hover:border-[#2587B8]/30"
            >
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-[#111318]/10 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#111318]/10 text-[#2587B8]">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[13px] font-bold text-[#2587B8] tabular-nums">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {edu.period}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[20px] sm:text-[22px] leading-[1.24] font-extrabold tracking-tight text-[#111318]">
                  {edu.institution}
                </h3>
                <h4 className="mt-2.5 sm:mt-3 text-[15.5px] sm:text-[16.5px] font-bold text-[#0c2d48]">{edu.degree}</h4>
                <p className="mt-2.5 sm:mt-3 text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15.5px] sm:leading-[1.8]">
                  {edu.highlights}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
