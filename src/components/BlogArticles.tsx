import { ArrowUpRight, BookOpen, Calendar, Clock } from 'lucide-react';
import type { MouseEvent } from 'react';
import { ESSAYS } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

interface BlogArticlesProps {
  onNavigateEssay: (slug: string) => void;
}

export function BlogArticles({ onNavigateEssay }: BlogArticlesProps) {
  const handleEssayClick = (e: MouseEvent<HTMLAnchorElement>, slug: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigateEssay(slug);
  };

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Articles &amp; Essays</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="writing-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
        >
          Writing on product,{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            architecture &amp; execution
          </span>
          .
        </h2>
      </FadeIn>

      <div className="mt-14 max-w-4xl mx-auto space-y-4">
        {ESSAYS.map((essay) => {
          const href = `/writing/${essay.slug}`;
          return (
            <article
              key={essay.slug}
              className="group rounded-[24px] border border-[#111318]/10 bg-white/82 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 transition-all duration-200 hover:bg-white hover:border-[#2587B8]/35"
            >
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#111318]/10 text-[#2587B8]">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] font-medium text-[#475569]">
                    <span className="font-semibold text-[#2587B8]">{essay.category}</span>
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
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-[19.5px] sm:text-[22px] leading-[1.25] font-extrabold tracking-tight text-[#111318] group-hover:text-[#2587B8] transition-colors">
                    <a
                      href={href}
                      onClick={(e) => handleEssayClick(e, essay.slug)}
                      className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]"
                    >
                      {essay.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.68] text-[#475569]">{essay.summary}</p>
                </div>
              </div>

              <a
                href={href}
                onClick={(e) => handleEssayClick(e, essay.slug)}
                aria-label={`Read essay: ${essay.title}`}
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full border border-[#111318]/18 bg-white px-6 text-[13.5px] font-semibold text-[#111318] whitespace-nowrap shrink-0 transition-all duration-150 group-hover:bg-[#111318] group-hover:text-white group-hover:border-[#111318]"
              >
                <span>Read Essay</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
