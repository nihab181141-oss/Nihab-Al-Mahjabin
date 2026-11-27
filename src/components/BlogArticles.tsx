import { ArrowUpRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/portfolio';

interface BlogArticlesProps {
  onOpenContact: (topic?: string) => void;
}

export function BlogArticles({ onOpenContact }: BlogArticlesProps) {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>Articles &amp; Essays</span>
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
        </div>
        <h2
          id="blog-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[44px] lg:text-[50px] [text-wrap:balance]"
        >
          Writing on technology,{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            ventures &amp; craft
          </span>
          .
        </h2>
      </div>

      <div className="mt-16 max-w-4xl mx-auto space-y-4">
        {BLOG_ARTICLES.map((art) => (
          <div
            key={art.title}
            className="group rounded-[24px] border border-[#111318]/10 bg-[#EDF4F7]/50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 transition-all duration-200 hover:bg-[#EDF4F7]/85 hover:border-[#2587B8]/35"
          >
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#111318]/10 text-[#2587B8]">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] font-medium text-[#475569]">
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Calendar className="h-3.5 w-3.5 text-[#2587B8]" aria-hidden="true" />
                    {art.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Clock className="h-3.5 w-3.5 text-[#2587B8]" aria-hidden="true" />
                    {art.read}
                  </span>
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-[22px] font-extrabold tracking-tight text-[#111318] group-hover:text-[#2587B8] transition-colors">
                  {art.title}
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact(`Discussion on article: ${art.title}`)}
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full border border-[#111318]/18 bg-white px-6 text-[13.5px] font-semibold text-[#111318] whitespace-nowrap shrink-0 transition-all duration-150 group-hover:bg-[#111318] group-hover:text-white group-hover:border-[#111318] cursor-pointer"
            >
              <span>Read Essay</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
