import { ArrowUpRight } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/portfolio';

interface BlogArticlesProps {
  onOpenContact: (topic?: string) => void;
}

export function BlogArticles({ onOpenContact }: BlogArticlesProps) {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
          Articles &amp; Essays
        </p>
        <h2
          id="blog-heading"
          className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
        >
          Writing on technology, ventures, and craft.
        </h2>
      </div>

      {/* WordPress Editorial Publication List Style */}
      <div className="mt-14 max-w-4xl mx-auto divide-y divide-[#E5EBEF] border-y border-[#E5EBEF]">
        {BLOG_ARTICLES.map((art) => (
          <div
            key={art.title}
            className="group py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 hover:bg-white/40 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-[12px] text-[#687580]">
                <span className="tabular-nums">{art.date}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{art.read}</span>
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-[20px] font-bold tracking-tight text-[#111318] group-hover:text-[#2587B8] transition-colors">
                {art.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact(`Discussion on article: ${art.title}`)}
              className="inline-flex items-center gap-2 rounded-full border border-[#2587B8]/30 px-5 py-2 text-[13px] font-semibold text-[#111318] group-hover:bg-[#2587B8] group-hover:text-white transition-all cursor-pointer shrink-0"
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
