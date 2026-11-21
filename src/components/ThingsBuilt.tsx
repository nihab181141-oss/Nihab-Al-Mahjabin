import { THINGS_BUILT } from '../data/portfolio';

export function ThingsBuilt() {
  return (
    <section
      id="built"
      aria-labelledby="built-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          Open Source &amp; Tooling
        </p>
        <h2
          id="built-heading"
          className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
        >
          Things I&apos;ve Built &amp; Open-Sourced.
        </h2>
      </div>

      {/* WordPress Editorial Template List Style */}
      <div className="mt-14 max-w-4xl mx-auto divide-y divide-[#E5EBEF] border-y border-[#E5EBEF]">
        {THINGS_BUILT.map((tool, idx) => (
          <div
            key={tool.name}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-4"
          >
            <div className="md:col-span-4 flex items-center gap-3">
              <span className="font-mono text-[14px] font-bold text-[#2587B8]">0{idx + 1}</span>
              <h3 className="font-[family-name:var(--font-heading)] text-[19px] font-bold tracking-tight text-[#111318]">
                {tool.name}
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-[14.5px] leading-[1.75] text-[#687580]">{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
