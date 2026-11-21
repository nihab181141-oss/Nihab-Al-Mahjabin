import { Check } from 'lucide-react';
import { SKILLS_EXPERTISE } from '../data/portfolio';

export function SkillsExpertise() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          Skills &amp; Expertise
        </p>
        <h2
          id="skills-heading"
          className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
        >
          Mastering the full spectrum of digital creation.
        </h2>
      </div>

      {/* WordPress Editorial Columns Style */}
      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 border-t border-b border-[#E5EBEF] py-12">
        {SKILLS_EXPERTISE.map((group, idx) => (
          <div
            key={group.category}
            className={`flex flex-col ${idx !== 0 ? 'md:border-l md:border-[#E5EBEF] md:pl-8' : ''}`}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[13px] font-bold text-[#2587B8]">0{idx + 1}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-bold tracking-tight text-[#111318]">
                {group.category}
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5 border-t border-[#E5EBEF]/80 pt-5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#687580]">
                  <Check className="h-4 w-4 text-[#35B99A] shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
