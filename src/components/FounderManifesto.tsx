import { MANIFESTO_POINTS } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function FounderManifesto() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            Founder Philosophy &amp; Vision
          </p>
          <h2
            id="manifesto-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
          >
            First principles. Extreme craft. Unwavering vision.
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-[#687580] sm:text-[17px]">
            The best businesses and software are built not by following convention, but by reasoning from fundamental truths and obsessing over every detail.
          </p>
        </div>
      </FadeIn>

      {/* WordPress Editorial Columns Style (No Cards) */}
      <FadeIn delay={0.15} className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 border-t border-b border-[#E5EBEF] py-12">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div
            key={point.index}
            className={`flex flex-col justify-between ${idx !== 0 ? 'md:border-l md:border-[#E5EBEF] md:pl-8' : ''}`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[14px] font-bold text-[#2587B8] tabular-nums">
                  {point.index}
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-[#687580]">
                  {point.subtitle}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-[21px] font-bold tracking-tight text-[#111318]">
                {point.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-[#687580]">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
