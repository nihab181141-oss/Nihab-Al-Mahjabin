import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BRAND, ESSAYS, EssayArticle } from '../data/portfolio';
import { SeoHead } from './SeoHead';

interface EssayPageProps {
  essay: EssayArticle;
  onNavigateHome: (sectionId?: string) => void;
  onNavigateEssay: (slug: string) => void;
  onOpenContact: (topic?: string) => void;
}

export function EssayPage({
  essay,
  onNavigateHome,
  onNavigateEssay,
  onOpenContact,
}: EssayPageProps) {
  const otherEssays = ESSAYS.filter((item) => item.slug !== essay.slug);

  return (
    <>
      <SeoHead
        title={`${essay.title} | ${BRAND.name}`}
        description={essay.summary}
        path={`/writing/${essay.slug}`}
        type="article"
        article={essay}
      />

      <main className="flex-1 mx-auto w-full max-w-[840px] px-5 pt-12 pb-24 sm:px-7 sm:pt-16 sm:pb-28">
        <a
          href="/#writing"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome('writing');
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#111318]/15 bg-white/85 px-4 py-2 text-[13.5px] font-semibold text-[#111318] transition-colors hover:border-[#2587B8] hover:text-[#2587B8]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to All Essays</span>
        </a>

        <article className="mt-8 rounded-[30px] border border-[#111318]/10 bg-white p-7 sm:p-12 shadow-[0_18px_46px_-26px_rgba(12,45,72,0.16)]">
          <header>
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[13px] font-medium text-[#475569]">
              <span className="font-bold text-[#2587B8] uppercase tracking-wider">{essay.category}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={essay.isoDate} className="inline-flex items-center gap-1.5 tabular-nums">
                <Calendar className="h-3.5 w-3.5 text-[#2587B8]" aria-hidden="true" />
                {essay.date}
              </time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <Clock className="h-3.5 w-3.5 text-[#2587B8]" aria-hidden="true" />
                {essay.readTime}
              </span>
            </div>

            <h1 className="mt-4 font-[family-name:var(--font-heading)] text-[30px] min-[380px]:text-[34px] leading-[1.14] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] [text-wrap:balance]">
              {essay.title}
            </h1>

            <p className="mt-4 text-[16.5px] sm:text-[18px] leading-[1.7] font-medium text-[#475569]">
              {essay.summary}
            </p>

            <div className="mt-6 pt-5 border-t border-[#E5EBEF] flex items-center justify-between text-[13.5px] text-[#475569]">
              <span>
                By <strong className="font-bold text-[#111318]">{BRAND.name}</strong> · Founder &amp; Software Architect
              </span>
            </div>
          </header>

          <div className="mt-8 space-y-6 text-[16px] sm:text-[17.5px] leading-[1.82] text-[#111318]/85">
            {essay.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-[22px] border border-[#111318]/10 bg-[#EDF4F7]/75 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="font-[family-name:var(--font-heading)] text-[19px] font-extrabold text-[#111318]">
                Building a SaaS, EdTech, or HealthTech product?
              </p>
              <p className="mt-1 text-[14.5px] text-[#475569]">
                Discuss product architecture, zero-to-one launch strategy, or engineering partnerships.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact(`Strategy Call — ${essay.title}`)}
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#111318] px-6 text-[14px] font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#1f242d] transition-colors cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </article>

        <section aria-label="More essays" className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-[20px] font-extrabold text-[#111318]">
            Continue Reading
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherEssays.map((item) => (
              <a
                key={item.slug}
                href={`/writing/${item.slug}`}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                  e.preventDefault();
                  onNavigateEssay(item.slug);
                }}
                className="group rounded-[20px] border border-[#111318]/10 bg-white/90 p-5 transition-all hover:border-[#2587B8]/40 hover:-translate-y-0.5"
              >
                <span className="font-mono text-[12px] font-semibold text-[#2587B8]">
                  {item.category} · {item.readTime}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-[17px] font-extrabold text-[#111318] group-hover:text-[#2587B8] transition-colors">
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
