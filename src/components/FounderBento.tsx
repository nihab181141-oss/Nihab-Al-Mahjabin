import { CheckCircle2, Clock, Layers, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FOUNDER_BENTO } from '../data/portfolio';
import {
  ALL_MARQUEE_TOOLS,
  TECH_MARQUEE_ROW_ONE,
  TECH_MARQUEE_ROW_THREE,
  TECH_MARQUEE_ROW_TWO,
  type MarqueeTool,
} from '../data/techStack';
import { FadeIn } from './EditorialMotion';

function OfficialBrandIcon({ tool, size = 'sm' }: { tool: MarqueeTool; size?: 'sm' | 'md' }) {
  const boxClass = size === 'md' ? 'h-10 w-10 rounded-xl' : 'h-7 w-7 rounded-lg';
  const svgClass = size === 'md' ? 'h-5 w-5' : 'h-4 w-4';
  const backdropClass = tool.darkBackdrop
    ? 'bg-[#111318] border border-[#111318]'
    : 'bg-white border border-[#111318]/8';

  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${boxClass} ${backdropClass}`}>
      <svg
        viewBox="0 0 24 24"
        className={svgClass}
        fill={`#${tool.icon.hex}`}
        role="img"
        aria-hidden="true"
      >
        <path d={tool.icon.path} />
      </svg>
    </span>
  );
}

function TechMarqueeLane({
  items,
  animationClass,
  activeId,
  onSelect,
}: {
  items: MarqueeTool[];
  animationClass: string;
  activeId: string;
  onSelect: (tool: MarqueeTool) => void;
}) {
  return (
    <div className="marquee-edge-fade overflow-hidden py-0.5">
      <div className={`flex w-max gap-2.5 ${animationClass} hover:[animation-play-state:paused]`}>
        {[0, 1].map((pass) => (
          <div
            key={pass}
            aria-hidden={pass === 1}
            className="flex shrink-0 items-center gap-2.5"
          >
            {items.map((tool) => {
              const isSelected = activeId === tool.id;
              return (
                <button
                  key={`${pass}-${tool.id}`}
                  type="button"
                  tabIndex={pass === 1 ? -1 : 0}
                  onClick={() => onSelect(tool)}
                  onMouseEnter={() => onSelect(tool)}
                  aria-label={`${tool.name} (${tool.category})`}
                  aria-pressed={pass === 0 ? isSelected : undefined}
                  className={`inline-flex items-center gap-2.5 rounded-2xl border px-3 py-2 transition-all duration-150 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'border-[#2587B8] bg-[#EDF4F7] shadow-[0_6px_16px_-8px_rgba(37,135,184,0.4)]'
                      : 'border-[#111318]/10 bg-[#F8FAFC] hover:border-[#2587B8]/40 hover:bg-white'
                  }`}
                >
                  <OfficialBrandIcon tool={tool} />
                  <span className="font-[family-name:var(--font-heading)] text-[13px] font-bold tracking-tight text-[#111318] whitespace-nowrap">
                    {tool.name}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDhakaTime(): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(new Date());
  } catch {
    return 'UTC+6';
  }
}

export function FounderBento() {
  const [dhakaTime, setDhakaTime] = useState<string>(() => formatDhakaTime());
  const [activeTech, setActiveTech] = useState<MarqueeTool>(TECH_MARQUEE_ROW_ONE[0]);
  const [activePillarId, setActivePillarId] = useState(FOUNDER_BENTO.pillars[0].id);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDhakaTime(formatDhakaTime());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const selectedPillar =
    FOUNDER_BENTO.pillars.find((pillar) => pillar.id === activePillarId) ?? FOUNDER_BENTO.pillars[0];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="max-w-3xl">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
          <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          <span>{FOUNDER_BENTO.eyebrow}</span>
        </div>
        <h2
          id="about-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.15] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
        >
          Founder Story &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            Execution System
          </span>
          .
        </h2>
        <p className="mt-3 text-[15.5px] leading-[1.7] text-[#475569] sm:text-[17px]">
          {FOUNDER_BENTO.title}
        </p>
      </FadeIn>

      {/* Bento Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Card 1: Founder Story (col-span-7) */}
        <FadeIn className="lg:col-span-7 rounded-[28px] border border-[#111318]/10 bg-white p-7 sm:p-9 shadow-[0_14px_36px_-22px_rgba(12,45,72,0.14)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#2587B8]">
              <span>Why I Build</span>
            </div>
            <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[22px] sm:text-[26px] leading-[1.22] font-extrabold tracking-tight text-[#111318]">
              Solving structural market gaps from Bangladesh to global markets.
            </h3>
            <div className="mt-4 space-y-3.5 text-[15px] sm:text-[15.5px] leading-[1.78] text-[#475569]">
              {FOUNDER_BENTO.storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E5EBEF] flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-[#111318]">
            <span>Direct Founder-Led Architecture</span>
          </div>
        </FadeIn>

        {/* Card 2: Live Location Clock & Key Metrics (col-span-5) */}
        <FadeIn
          delay={0.08}
          className="lg:col-span-5 rounded-[28px] border border-[#111318]/10 bg-[#EDF4F7]/75 p-7 sm:p-9 shadow-[0_14px_36px_-22px_rgba(12,45,72,0.14)] flex flex-col justify-between gap-6"
        >
          <div className="rounded-[20px] border border-[#111318]/10 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#111318]">
                <MapPin className="h-4 w-4 text-[#2587B8]" aria-hidden="true" />
                <span>Dhaka, Bangladesh</span>
              </span>
              <span className="font-mono text-[11.5px] font-semibold text-[#2587B8]">
                Asia/Dhaka · BST
              </span>
            </div>

            <div className="mt-4 flex items-baseline justify-between gap-3">
              <div className="inline-flex items-center gap-2 font-mono text-[22px] sm:text-[26px] font-bold tracking-tight text-[#111318] tabular-nums">
                <Clock className="h-5 w-5 text-[#2587B8]" aria-hidden="true" />
                <span>{dhakaTime}</span>
              </div>
              <span className="text-[12.5px] font-semibold text-[#475569]">Remote Worldwide</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {FOUNDER_BENTO.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-[18px] border border-[#111318]/10 bg-white px-5 py-3.5"
              >
                <span className="text-[13px] font-semibold text-[#475569]">{metric.label}</span>
                <span className="font-[family-name:var(--font-heading)] text-[16px] sm:text-[17px] font-extrabold text-[#111318]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Card 3: 72-Tool Infinite Engineering Marquee (col-span-6) */}
        <FadeIn
          delay={0.12}
          className="lg:col-span-6 rounded-[28px] border border-[#111318]/10 bg-white p-7 sm:p-9 shadow-[0_14px_36px_-22px_rgba(12,45,72,0.14)] flex flex-col justify-between overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider text-[#2587B8]">
                  Production Tech Stack
                </p>
                <h3 className="mt-1.5 font-[family-name:var(--font-heading)] text-[21px] sm:text-[24px] font-extrabold tracking-tight text-[#111318]">
                  Tools &amp; Ecosystem Marquee
                </h3>
              </div>
              <span className="font-mono text-[12px] font-bold text-[#64748B] tabular-nums shrink-0">
                {ALL_MARQUEE_TOOLS.length} Official Tools
              </span>
            </div>

            <div className="mt-6 space-y-2.5">
              <TechMarqueeLane
                items={TECH_MARQUEE_ROW_ONE}
                animationClass="animate-marquee-left"
                activeId={activeTech.id}
                onSelect={setActiveTech}
              />
              <TechMarqueeLane
                items={TECH_MARQUEE_ROW_TWO}
                animationClass="animate-marquee-right"
                activeId={activeTech.id}
                onSelect={setActiveTech}
              />
              <TechMarqueeLane
                items={TECH_MARQUEE_ROW_THREE}
                animationClass="animate-marquee-left-slow"
                activeId={activeTech.id}
                onSelect={setActiveTech}
              />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#111318]/10 bg-[#EDF4F7]/65 px-4 py-3.5 sm:px-5 sm:py-4 flex items-start gap-3.5">
            <OfficialBrandIcon tool={activeTech} size="md" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="font-[family-name:var(--font-heading)] text-[15.5px] font-extrabold text-[#111318] truncate">
                  {activeTech.name}
                </span>
                <span className="font-mono text-[11.5px] font-semibold text-[#2587B8] shrink-0">
                  {activeTech.category}
                </span>
              </div>
              <p className="mt-1 text-[13.5px] sm:text-[14px] leading-[1.6] text-[#475569]">
                {activeTech.role}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Card 4: Interactive Core Pillars (col-span-6) */}
        <FadeIn
          delay={0.16}
          className="lg:col-span-6 rounded-[28px] border border-[#111318]/10 bg-white p-7 sm:p-9 shadow-[0_14px_36px_-22px_rgba(12,45,72,0.14)] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#2587B8]">
              <Layers className="h-4 w-4" aria-hidden="true" />
              <span>Core Capabilities</span>
            </div>

            {/* Interactive Selector Buttons */}
            <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Capability pillars">
              {FOUNDER_BENTO.pillars.map((pillar) => {
                const active = pillar.id === selectedPillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#111318] text-white shadow-xs'
                        : 'bg-[#EDF4F7] text-[#475569] hover:text-[#111318]'
                    }`}
                  >
                    <span className="font-mono text-[11px] opacity-75 mr-1.5">{pillar.index}</span>
                    {pillar.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6">
              <h3 className="font-[family-name:var(--font-heading)] text-[21px] sm:text-[23px] leading-[1.25] font-extrabold tracking-tight text-[#111318]">
                {selectedPillar.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] sm:text-[15px] leading-[1.7] text-[#475569]">
                {selectedPillar.summary}
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-2.5 border-t border-[#E5EBEF] pt-5">
            {selectedPillar.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-[14px] font-medium text-[#111318]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2587B8]" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
