import { ArrowUp, ArrowUpRight, Github, Linkedin, Twitter, Facebook, Instagram, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BRAND } from '../data/portfolio';

interface FooterProps {
  onOpenContact: (topic?: string) => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [, setCopied] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-[#E5EBEF] bg-white text-[#111318]">
      {/* 1. Large Closing Statement */}
      <div className="mx-auto max-w-[1200px] px-5 pt-20 pb-16 sm:px-7 sm:pt-24 sm:pb-20 lg:px-10">
        <div className="rounded-[28px] border border-[#E5EBEF] bg-[#EDF4F7]/60 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
              Let’s Connect
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-[34px] leading-[1.12] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[44px] lg:text-[52px] [text-wrap:balance]">
              Let’s build something remarkable together.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-[#687580] sm:text-[17px]">
              Whether you are looking to launch a new digital venture, architect a high-performance web product, or discuss an ambitious idea from scratch, I&apos;m always open to meaningful collaborations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('Product Collaboration')}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#111318] px-8 text-[14px] font-medium text-white whitespace-nowrap shrink-0 shadow-[0_10px_24px_-10px_rgba(17,19,24,0.45)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1f242d] hover:shadow-[0_14px_28px_-10px_rgba(17,19,24,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318] cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* 2, 3, 4, 5. Main Footer Multi-Column Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 & 2: Personal Introduction & Ventures (Col span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/nihab-al-mahjabin-icon-color_ca419e31.svg"
                  alt="Nihab Al Mahjabin Emblem"
                  className="h-10 w-10 object-contain"
                />
                <span className="font-[family-name:var(--font-heading)] text-[18px] font-bold tracking-tight text-[#111318]">
                  {BRAND.name}
                </span>
              </div>
            </div>

            <div>
              <p className="text-[13px] font-medium text-[#2587B8]">
                Based in Bangladesh · Working Globally
              </p>
              <p className="mt-3.5 text-[14px] leading-[1.75] text-[#687580] max-w-md">
                An independent entrepreneur, CEO, and software architect dedicated to turning ambitious imagination into enduring digital ventures (Floraxen Labs, Lumora Studio, MedProfile Bangladesh, Sable for CV, and FeLoW WebStaR).
              </p>
            </div>
          </div>

          {/* Column 3: Explore (Col span 2) */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              <li>
                <a href="#top" className="transition-colors hover:text-[#111318]">
                  Home
                </a>
              </li>
              <li>
                <a href="#ventures" className="transition-colors hover:text-[#111318]">
                  Ventures
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#111318]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect & Socials (Col span 2.5) with Framer Motion Hover */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Social Channels
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              {[
                { label: 'Facebook', icon: Facebook },
                { label: 'Instagram', icon: Instagram },
                { label: 'Threads', icon: MessageCircle },
                { label: 'X (Twitter)', icon: Twitter },
                { label: 'Telegram', icon: Send },
                { label: 'GitHub', icon: Github },
                { label: 'LinkedIn', icon: Linkedin },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.li key={social.label} whileHover={{ scale: 1.06, x: 2 }} transition={{ duration: 0.2 }}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#687580] hover:text-[#2587B8] transition-colors"
                    >
                      <IconComponent className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{social.label}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Column 5: More (Col span 3) */}
          <div className="lg:col-span-3">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Startups &amp; Ventures
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              <li>
                <span className="font-medium text-[#111318]">Floraxen Labs &amp; Lumora Studio</span>
                <p className="text-[12px] text-[#687580]/80">Research, software &amp; design studio</p>
              </li>
              <li>
                <span className="font-medium text-[#111318]">MedProfile Bangladesh</span>
                <p className="text-[12px] text-[#687580]/80">Healthcare professional network</p>
              </li>
              <li>
                <span className="font-medium text-[#111318]">Sable for CV &amp; FeLoW WebStaR</span>
                <p className="text-[12px] text-[#687580]/80">Open source creator tools</p>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleScrollTop}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[#2587B8] transition-colors hover:text-[#111318] cursor-pointer mt-2"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 6. Final Footer Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#E5EBEF] pt-8 text-[13px] text-[#687580] sm:flex-row sm:items-center">
          <p>© 2026 {BRAND.name}. All rights reserved.</p>
          <p className="font-medium text-[#111318]">Designed &amp; Built by {BRAND.name} (CEO &amp; Owner).</p>
        </div>
      </div>
    </footer>
  );
}
