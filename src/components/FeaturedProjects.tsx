import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

interface FeaturedProjectsProps {
  onOpenContact?: (topic?: string) => void;
}

export function FeaturedProjects({}: FeaturedProjectsProps) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#0c2d48]">
            <span className="h-[2px] w-6 rounded-full bg-[#0c2d48]" aria-hidden="true" />
            <span>Featured Ventures</span>
          </div>
          <h2
            id="projects-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
          >
            Startups &amp;{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              production platforms
            </span>{' '}
            I lead.
          </h2>
        </div>
        <p className="max-w-md text-[15px] leading-[1.72] font-medium text-[#111318]/80 sm:text-[15.5px] sm:leading-[1.75]">
          Six independent digital products addressing education, career tooling, healthcare identity, publishing, and software delivery.
        </p>
      </FadeIn>

      <div className="mt-14 glass-card-sheen rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-md px-4 sm:px-8 shadow-[0_18px_44px_-24px_rgba(12,45,72,0.25)] divide-y divide-white/20">
        {FEATURED_PROJECTS.map((proj, idx) => {
          const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(proj.url)}&screenshot=true&meta=false&embed=screenshot.url`;
          const hasError = imageErrors[proj.title];

          return (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px', amount: 0.12 }}
              transition={{ duration: 0.55, delay: Math.min(idx * 0.05, 0.2), ease: [0.16, 1, 0.3, 1] }}
              className="group bg-transparent py-10 sm:py-12 px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-3 flex items-start gap-4">
                <span className="font-mono text-[24px] font-bold text-[#0c2d48] tabular-nums">
                  0{idx + 1}
                </span>
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#0c2d48]">
                    {proj.category}
                  </span>
                  <p className="mt-1.5 font-mono text-[12.5px] font-semibold text-[#111318]/85">
                    {proj.statusMetric}
                  </p>
                  <p className="mt-2 font-mono text-[12px] font-medium text-[#0c2d48]/80">
                    {proj.techStack.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-[family-name:var(--font-heading)] text-[22px] sm:text-[25px] leading-[1.22] font-extrabold tracking-tight text-[#111318] group-hover:text-[#0c2d48] transition-colors">
                  {proj.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.72] font-medium text-[#111318]/90 sm:text-[15.5px]">
                  <strong className="font-bold text-[#111318]">Problem:</strong> {proj.problem}
                </p>
                <p className="mt-2 text-[15px] leading-[1.72] font-medium text-[#111318]/85 sm:text-[15.5px]">
                  <strong className="font-bold text-[#0c2d48]">Solution:</strong> {proj.solution}
                </p>

                <div className="mt-5">
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex max-w-full items-center gap-2 font-mono text-[12.5px] sm:text-[13.5px] font-bold text-[#0c2d48] hover:underline underline-offset-4"
                  >
                    <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="break-all sm:break-normal">{proj.url}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 opacity-80" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Real Website Preview Browser Frame */}
              <div className="lg:col-span-4">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${proj.title} live website`}
                  className="block overflow-hidden rounded-[16px] border border-white/35 bg-white/85 shadow-[0_12px_30px_-12px_rgba(12,45,72,0.18)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/70"
                >
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between border-b border-[#111318]/10 bg-white/60 px-4 py-2.5">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#CBD5E1]" />
                    </div>
                    <span className="font-mono text-[11px] font-medium text-[#475569] truncate max-w-[180px]">
                      {proj.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#475569]" aria-hidden="true" />
                  </div>

                  {/* Browser Viewport Frame */}
                  <div className="relative aspect-[16/10] w-full bg-[#F8FAFC] overflow-hidden flex items-center justify-center">
                    {!hasError ? (
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
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
