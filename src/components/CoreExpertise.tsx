import { Check, Compass, Layers, Terminal } from 'lucide-react';
import { EXPERTISE_DOMAINS } from '../data/portfolio';

const DOMAIN_ICONS = [Compass, Terminal, Layers];

export function CoreExpertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
            <span>Core Competencies</span>
          </div>
          <h2
            id="expertise-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
          >
            Capabilities engineered for{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              scale &amp; impact
            </span>
            .
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-[1.72] text-[#475569] sm:text-[16px] sm:leading-[1.75]">
          Bridging big-picture entrepreneurial strategy with meticulous full-stack execution from day zero to launch.
        </p>
      </div>

      <div className="mt-16 space-y-5">
        {EXPERTISE_DOMAINS.map((domain, idx) => {
          const IconComponent = DOMAIN_ICONS[idx] ?? Compass;
          return (
            <div
              key={domain.index}
              className="rounded-[24px] border border-[#111318]/10 bg-[#EDF4F7]/45 p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-200 hover:bg-[#EDF4F7]/80 hover:border-[#2587B8]/30"
            >
              <div className="lg:col-span-4 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#111318]/10 text-[#2587B8]">
                  <IconComponent className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[13px] font-bold text-[#2587B8] tabular-nums">
                      {domain.index}
                    </span>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#475569]">
                      {domain.subtitle}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-[family-name:var(--font-heading)] text-[20.5px] sm:text-[24px] leading-[1.22] font-extrabold tracking-tight text-[#111318]">
                    {domain.title}
                  </h3>
                </div>
              </div>

            <div className="lg:col-span-4">
              <p className="text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15.5px] sm:leading-[1.8]">
                {domain.description}
              </p>
            </div>

            <div className="lg:col-span-4">
              <ul className="space-y-3">
                {domain.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[14px] sm:text-[14.5px] leading-[1.6] font-medium text-[#1E293B]">
                    <Check className="mt-1 h-4 w-4 text-[#35B99A] shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
