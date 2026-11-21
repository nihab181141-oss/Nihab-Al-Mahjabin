import { ArrowUpRight } from 'lucide-react';
import { FIELD_NOTES } from '../data/portfolio';

interface FounderFieldNotesProps {
  onOpenContact: (topic?: string) => void;
}

export function FounderFieldNotes({ onOpenContact }: FounderFieldNotesProps) {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28 border-t border-[#E5EBEF]"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-[13px] font-semibold tracking-wide text-[#2587B8]">
            Founder Field Notes
          </p>
          <h2
            id="insights-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.14] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[38px] lg:text-[44px] [text-wrap:balance]"
          >
            Mental models &amp; essays on building products.
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-[1.7] text-[#687580]">
          Reflections on venture strategy, software architecture, and cultivating taste from the trenches of entrepreneurship.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {FIELD_NOTES.map((note) => (
          <article
            key={note.id}
            className="group flex flex-col justify-between rounded-[22px] border border-[#E5EBEF] bg-white p-7 shadow-[0_10px_30px_-14px_rgba(17,19,24,0.08)] transition-all duration-200 hover:-translate-y-1 hover:border-[#39A9D5]/40"
          >
            <div>
              {/* Unboxed metadata with typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#687580]">
                <span className="font-semibold text-[#2587B8]">{note.category}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{note.date}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{note.readTime}</span>
              </div>

              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-[19px] font-bold tracking-tight text-[#111318] group-hover:text-[#2587B8] transition-colors">
                {note.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.7] text-[#687580]">
                {note.summary}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5EBEF]">
              <button
                type="button"
                onClick={() => onOpenContact(`Discussion on: ${note.title}`)}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111318] group-hover:text-[#2587B8] transition-colors cursor-pointer"
              >
                <span>Explore the Details</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
