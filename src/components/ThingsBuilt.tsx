import { ArrowUpRight, Code2, GitBranch } from 'lucide-react';
import { GITHUB_URL, OPEN_SOURCE_PROJECTS } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function ThingsBuilt() {
  return (
    <section
      id="open-source"
      aria-labelledby="open-source-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#0c2d48]">
            <span className="h-[2px] w-6 rounded-full bg-[#0c2d48]" aria-hidden="true" />
            <span>Open Source &amp; Tooling</span>
          </div>
          <h2
            id="open-source-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
          >
            UI Systems &amp;{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              Open-Source Tooling
            </span>
            .
          </h2>
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start lg:self-auto font-mono text-[13.5px] font-bold text-[#0c2d48] hover:underline underline-offset-4"
        >
          <GitBranch className="h-4 w-4" aria-hidden="true" />
          <span>github.com/nihab181141-oss</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {OPEN_SOURCE_PROJECTS.map((item, idx) => (
          <FadeIn
            key={item.name}
            delay={idx * 0.08}
            className="group glass-card-sheen rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-md p-7 flex flex-col justify-between hover:-translate-y-0.5 shadow-[0_14px_34px_-22px_rgba(12,45,72,0.24)]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/30 border border-white/35 text-[#0c2d48]">
                  <Code2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-[12px] font-bold text-[#0c2d48]">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[20px] leading-[1.26] font-extrabold tracking-tight text-[#111318]">
                {item.name}
              </h3>

              <p className="mt-2 font-mono text-[12px] font-semibold text-[#0c2d48]/85">{item.stack}</p>

              <p className="mt-3.5 text-[14.5px] leading-[1.72] font-medium text-[#111318]/85">{item.summary}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/25 flex items-center justify-between gap-3">
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#111318] hover:text-[#0c2d48] transition-colors"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] font-bold text-[#0c2d48] hover:underline underline-offset-4"
                >
                  Live Tool ↗
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
