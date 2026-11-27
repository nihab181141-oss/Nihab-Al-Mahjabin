import { Check, Code2, Server, Target } from 'lucide-react';
import { SKILLS_EXPERTISE } from '../data/portfolio';

const SKILL_ICONS = [Target, Code2, Server];

export function SkillsExpertise() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Skills &amp; Expertise</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="skills-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[44px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[50px] [text-wrap:balance]"
        >
          Mastering the full spectrum of{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            digital creation
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {SKILLS_EXPERTISE.map((group, idx) => {
          const IconComponent = SKILL_ICONS[idx] ?? Target;
          return (
            <div
              key={group.category}
              className="flex flex-col rounded-[24px] border border-[#111318]/10 bg-white p-7 sm:p-8 shadow-[0_14px_36px_-22px_rgba(12,45,72,0.14)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF4F7] text-[#2587B8] shrink-0">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="font-mono text-[12px] font-bold text-[#2587B8] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-[19.5px] sm:text-[21px] leading-[1.24] font-extrabold tracking-tight text-[#111318]">
                    {group.category}
                  </h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3.5 sm:space-y-4 border-t border-[#111318]/10 pt-5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] sm:text-[15.5px] font-medium text-[#334155]">
                    <Check className="h-4.5 w-4.5 text-[#35B99A] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
