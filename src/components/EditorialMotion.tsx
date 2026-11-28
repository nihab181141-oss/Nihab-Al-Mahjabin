import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = '', ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px', amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
