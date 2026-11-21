import { Check } from 'lucide-react';
import { EXPERTISE_DOMAINS } from '../data/portfolio';

export function CoreExpertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            Core Competencies
          </p>
          <h2
            id="expertise-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
          >
            Capabilities engineered for scale and impact.
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-[1.7] text-[#687580]">
          Bridging big-picture entrepreneurial strategy with meticulous full-stack execution from day zero to launch.
        </p>
      </div>

      {/* WordPress Editorial Template List Style (No Cards) */}
      <div className="mt-14 divide-y divide-[#E5EBEF] border-y border-[#E5EBEF]">
        {EXPERTISE_DOMAINS.map((domain) => (
          <div
            key={domain.index}
            className="py-10 first:pt-4 last:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start transition-colors duration-200 hover:bg-white/40 px-4 sm:px-6 rounded-lg"
          >
            <div className="lg:col-span-3 flex items-center lg:items-start gap-4">
              <span className="font-mono text-[20px] font-bold text-[#2587B8] tabular-nums">
                {domain.index}
              </span>
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#687580]">
                  {domain.subtitle}
                </span>
                <h3 className="mt-1 font-[family-name:var(--font-heading)] text-[22px] font-bold tracking-tight text-[#111318]">
                  {domain.title}
                </h3>
              </div>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[15px] leading-[1.75] text-[#687580]">
                {domain.description}
              </p>
            </div>

            <div className="lg:col-span-4">
              <ul className="space-y-2.5">
                {domain.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[13.5px] text-[#334155]">
                    <Check className="mt-0.5 h-4 w-4 text-[#35B99A] shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
