import { ArrowUp, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';
import { BRAND, VENTURE_LOGOS } from '../data/portfolio';

interface FooterProps {
  onOpenContact: (topic?: string) => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      onOpenContact('General Hello');
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-[#E5EBEF] bg-white text-[#111318]">
      {/* 1. Large Closing Statement */}
      <div className="mx-auto max-w-[1200px] px-5 pt-20 pb-16 sm:px-7 sm:pt-24 sm:pb-20 lg:px-10">
        <div className="rounded-[28px] border border-[#E5EBEF] bg-[#EDF4F7]/60 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="text-[13px] font-semibold tracking-wide text-[#2587B8]">
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

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-[#E5EBEF] bg-white px-7 text-[14px] font-medium text-[#111318] whitespace-nowrap shrink-0 shadow-[0_6px_18px_-8px_rgba(17,19,24,0.1)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(17,19,24,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39A9D5] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#35B99A]" aria-hidden="true" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 text-[#687580]" aria-hidden="true" />
                    <span>{BRAND.email}</span>
                  </>
                )}
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
              <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
                Active Ventures &amp; Companies
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-[#E5EBEF] bg-[#EDF4F7]/40 px-3 py-2">
                  <img
                    src={VENTURE_LOGOS.floraxenLabsWordmark.src}
                    alt="Floraxen Labs"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E5EBEF] bg-[#EDF4F7]/40 px-3 py-2">
                  <span className="font-[family-name:var(--font-heading)] text-[13px] font-semibold text-[#111318]">
                    Lumora Studio
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E5EBEF] bg-[#EDF4F7]/40 px-3 py-2">
                  <img
                    src={VENTURE_LOGOS.medprofileWordmark.src}
                    alt="MedProfile Bangladesh"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E5EBEF] bg-[#EDF4F7]/40 px-3 py-2">
                  <img
                    src={VENTURE_LOGOS.felowWordmark.src}
                    alt="FeLow WebStaR"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E5EBEF] bg-[#EDF4F7]/40 px-3 py-2">
                  <span className="font-[family-name:var(--font-heading)] text-[13px] font-semibold text-[#111318]">
                    Al Jabin Pub.
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-[#E5EBEF] bg-[#EDF4F7]/40 px-3 py-2">
                  <img
                    src={VENTURE_LOGOS.sableWordmark.src}
                    alt="Sable"
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>
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

          {/* Column 4: Connect & Socials (Col span 2.5) */}
          <div className="lg:col-span-2">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              Connect
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111318]"
                >
                  <Github className="h-4 w-4 text-[#687580]" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111318]"
                >
                  <Linkedin className="h-4 w-4 text-[#687580]" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111318]"
                >
                  <Twitter className="h-4 w-4 text-[#687580]" aria-hidden="true" />
                  <span>X / Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111318]"
                >
                  <Facebook className="h-4 w-4 text-[#687580]" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: More (Col span 2.5) */}
          <div className="lg:col-span-3">
            <p className="text-[12px] font-semibold tracking-wide text-[#111318] uppercase">
              More
            </p>
            <ul className="mt-4 space-y-3 text-[14px] text-[#687580]">
              <li>
                <span className="font-medium text-[#111318]">Currently Building</span>
                <p className="text-[12px] text-[#687580]/80">Digital ventures &amp; AI systems</p>
              </li>
              <li>
                <span className="font-medium text-[#111318]">Product Craft</span>
                <p className="text-[12px] text-[#687580]/80">Clean code &amp; design systems</p>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleScrollTop}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[#2587B8] transition-colors hover:text-[#111318] cursor-pointer mt-1"
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
          <p className="font-medium text-[#111318]">Designed &amp; Built by {BRAND.name}.</p>
        </div>
      </div>
    </footer>
  );
}
