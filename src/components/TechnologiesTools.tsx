import { TECHNOLOGIES_TOOLS } from '../data/portfolio';

export function TechnologiesTools() {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          Tech Stack
        </p>
        <h2
          id="technologies-heading"
          className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
        >
          Technologies &amp; Tools I Rely On.
        </h2>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
        {TECHNOLOGIES_TOOLS.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#E5EBEF] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#111318] shadow-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
