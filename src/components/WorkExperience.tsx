import { motion } from 'motion/react';
import { WORK_EXPERIENCE } from '../data/portfolio';
import { FadeIn } from './EditorialMotion';

export function WorkExperience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <FadeIn className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#0c2d48]">
          <span className="h-[2px] w-6 rounded-full bg-[#0c2d48]" aria-hidden="true" />
          <span>Leadership Timeline</span>
          <span className="h-[2px] w-6 rounded-full bg-[#0c2d48]" aria-hidden="true" />
        </div>
        <h2
          id="experience-heading"
          className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
        >
          Executive leadership &amp;{' '}
          <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
            architectural milestones
          </span>
          .
        </h2>
      </FadeIn>

      <div className="mt-14 max-w-4xl mx-auto glass-card-sheen rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-md px-6 sm:px-9 shadow-[0_18px_44px_-24px_rgba(12,45,72,0.25)] divide-y divide-white/20">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px', amount: 0.15 }}
            transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.2), ease: [0.16, 1, 0.3, 1] }}
            className="py-7 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
          >
            <div className="md:col-span-3">
              <span className="font-mono text-[13px] font-bold text-[#0c2d48] tabular-nums">
                {exp.period}
              </span>
            </div>
            <div className="md:col-span-4">
              <h3 className="font-[family-name:var(--font-heading)] text-[19px] sm:text-[21px] leading-[1.25] font-extrabold tracking-tight text-[#111318]">
                {exp.company}
              </h3>
              <p className="mt-1 text-[14px] font-bold text-[#0c2d48]">{exp.role}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-[14.5px] leading-[1.72] font-medium text-[#111318]/85 sm:text-[15px]">
                {exp.milestone}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
