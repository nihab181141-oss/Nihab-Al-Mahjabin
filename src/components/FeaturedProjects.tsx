import { ArrowUpRight, Globe, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

interface FeaturedProjectsProps {
  onOpenContact: (topic?: string) => void;
}

export function FeaturedProjects({}: FeaturedProjectsProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleVisitUrl = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-[1200px] px-5 py-24 sm:px-7 sm:py-28 lg:px-10 lg:py-32"
    >
      <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
            <span>Featured Ventures</span>
          </div>
          <h2
            id="projects-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[44px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[50px] [text-wrap:balance]"
          >
            Startups &amp;{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              digital ecosystems
            </span>{' '}
            I lead.
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-[1.72] text-[#475569] sm:text-[15.5px] sm:leading-[1.75]">
          Each venture is designed around real human needs, clean craft, and lasting utility.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 divide-y divide-[#111318]/14 border-y border-[#111318]/14">
        {FEATURED_PROJECTS.map((proj, idx) => {
          const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(proj.url || '')}&screenshot=true&meta=false&embed=screenshot.url`;
          const hasError = imageErrors[proj.title];

          return (
            <div
              key={proj.title}
              className="group bg-transparent py-10 sm:py-12 px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-3 flex items-center lg:items-start gap-4">
                <span className="font-mono text-[24px] font-bold text-[#2587B8] tabular-nums">
                  0{idx + 1}
                </span>
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#2587B8]">
                    {proj.category}
                  </span>
                  <p className="mt-1.5 font-mono text-[12.5px] font-medium text-[#475569]">{proj.metrics}</p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-[family-name:var(--font-heading)] text-[22px] sm:text-[25px] leading-[1.22] font-extrabold tracking-tight text-[#111318] group-hover:text-[#2587B8] transition-colors">
                  {proj.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[#475569] sm:text-[15.5px] sm:leading-[1.8]">
                  {proj.summary}
                </p>
                {proj.url && (
                  <div className="mt-5">
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center gap-2 font-mono text-[12.5px] sm:text-[13.5px] font-semibold text-[#2587B8] hover:underline underline-offset-4"
                      onClick={(e) => {
                        e.preventDefault();
                        handleVisitUrl(proj.url);
                      }}
                    >
                      <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="break-all sm:break-normal">{proj.url}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 opacity-75" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>

              {/* Real Website Preview Browser Frame */}
              <div className="lg:col-span-4">
                <div 
                  onClick={() => handleVisitUrl(proj.url)}
                  className="cursor-pointer overflow-hidden rounded-[16px] border border-[#E5EBEF] bg-white shadow-[0_12px_30px_-12px_rgba(17,19,24,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#2587B8]/40"
                >
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between border-b border-[#E5EBEF] bg-[#EDF4F7]/80 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                    </div>
                    <span className="font-mono text-[11px] text-[#687580] truncate max-w-[180px]">
                      {proj.url ? proj.url.replace('https://', '').replace('/', '') : 'preview.app'}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#687580]" aria-hidden="true" />
                  </div>

                  {/* Browser Viewport Frame */}
                  <div className="relative aspect-[16/10] w-full bg-[#F8FAFC] overflow-hidden flex items-center justify-center">
                    {!hasError && proj.url ? (
                      <img
                        src={screenshotUrl}
                        alt={`${proj.title} live website preview`}
                        loading="lazy"
                        onError={() => handleImageError(proj.title)}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <span className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-[#111318]">
                          {proj.title}
                        </span>
                        <span className="mt-1 text-[12px] text-[#687580]">
                          Click to open live website →
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </FadeIn>
    </section>
  );
}
