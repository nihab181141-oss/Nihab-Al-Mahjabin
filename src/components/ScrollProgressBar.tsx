import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-white/20"
    >
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-gradient-to-r from-[#e0f4fc] via-[#2587B8] to-[#0c2d48] shadow-[0_1px_8px_rgba(12,45,72,0.35)] will-change-transform"
      />
    </div>
  );
}
