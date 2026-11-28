interface SectionBarrierProps {
  index: string;
  label: string;
  tone?: 'sky' | 'white' | 'mist';
}

export function SectionBarrier({ index, label, tone = 'sky' }: SectionBarrierProps) {
  const pillBg =
    tone === 'white'
      ? 'bg-white'
      : tone === 'mist'
        ? 'bg-[#E5F0F6]'
        : 'bg-[#EDF4F7]';

  return (
    <div
      aria-hidden="true"
      className="relative w-full border-y border-[#111318]/12 bg-white/45 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-7 sm:py-3.5 lg:px-10">
        <span className="h-2 w-2 rotate-45 rounded-[2px] border border-[#2587B8]/60 bg-[#39A9D5]/25 shrink-0" />
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#111318]/18 via-[#2587B8]/25 to-[#111318]/10" />

        <div
          className={`inline-flex items-center gap-2 rounded-xl border border-[#111318]/14 ${pillBg} px-3 py-1 sm:gap-2.5 sm:px-4 sm:py-1.5 shadow-[0_2px_10px_-4px_rgba(12,45,72,0.12)] whitespace-nowrap`}
        >
          <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-wider text-[#2587B8] tabular-nums">
            {index}
          </span>
          <span className="h-3 w-px bg-[#111318]/15" />
          <span className="font-[family-name:var(--font-heading)] text-[12px] sm:text-[13px] font-bold tracking-tight text-[#111318]">
            {label}
          </span>
        </div>

        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-[#111318]/18 via-[#2587B8]/25 to-[#111318]/10" />
        <span className="h-2 w-2 rotate-45 rounded-[2px] border border-[#2587B8]/60 bg-[#39A9D5]/25 shrink-0" />
      </div>
    </div>
  );
}
