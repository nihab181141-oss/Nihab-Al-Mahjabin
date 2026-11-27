import { THINGS_BUILT } from '../data/portfolio';

export function ThingsBuilt() {
  return (
    <section
      id="built"
      aria-labelledby="built-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Open Source &amp; Tooling</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="built-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[44px] lg:text-[50px] [text-wrap:balance]"
        >
          Things I&apos;ve Built &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            Open-Sourced
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 max-w-4xl mx-auto space-y-4">
        {THINGS_BUILT.map((tool, idx) => (
          <div
            key={tool.name}
            className="rounded-[22px] border border-[#111318]/10 bg-[#EDF4F7]/50 px-6 py-7 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-all duration-200 hover:bg-[#EDF4F7]/85 hover:border-[#2587B8]/30"
          >
            <div className="md:col-span-5 flex items-center gap-3.5">
              <span className="font-mono text-[15px] font-bold text-[#2587B8] tabular-nums">
                0{idx + 1}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight text-[#111318]">
                {tool.name}
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-[15.5px] leading-[1.8] text-[#475569]">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
