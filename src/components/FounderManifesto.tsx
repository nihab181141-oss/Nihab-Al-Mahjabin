import { Compass, PenTool, TrendingUp } from 'lucide-react';
import { MANIFESTO_POINTS } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

const MANIFESTO_ICONS = [Compass, PenTool, TrendingUp];

export function FounderManifesto() {
  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
            <span>Founder Philosophy &amp; Vision</span>
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          </div>
          <h2
            id="manifesto-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[44px] lg:text-[50px] [text-wrap:balance]"
          >
            First principles.{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              Extreme craft.
            </span>{' '}
            Unwavering vision.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8] text-[#475569] sm:text-[18px]">
            The best businesses and software are built not by following convention, but by reasoning from fundamental truths and obsessing over every detail.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {MANIFESTO_POINTS.map((point, idx) => {
          const IconComponent = MANIFESTO_ICONS[idx] ?? Compass;
          return (
            <div
              key={point.index}
              className="flex flex-col justify-between rounded-[24px] border border-[#111318]/10 bg-[#EDF4F7]/50 p-7 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EDF4F7]/85 hover:border-[#2587B8]/30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#111318]/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#111318]/10 text-[#2587B8]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[14px] font-bold text-[#2587B8] tabular-nums">
                      {point.index}
                    </span>
                  </div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#475569]">
                    {point.subtitle}
                  </span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[23px] font-extrabold tracking-tight text-[#111318]">
                  {point.title}
                </h3>
                <p className="mt-3.5 text-[15.5px] leading-[1.8] text-[#475569]">
                  {point.description}
                </p>
              </div>
              <p className="mt-6 border-t border-[#111318]/8 pt-4 text-[14px] font-semibold text-[#0c2d48]">
                {point.benefit}
              </p>
            </div>
          );
        })}
      </FadeIn>
    </section>
  );
}
