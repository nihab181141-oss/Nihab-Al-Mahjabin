import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { BRAND } from '../data/portfolio';

interface HeaderProps {
  onOpenContact: (topic?: string) => void;
  onNavigateHome: (sectionId?: string) => void;
  isEssayPage?: boolean;
}

const NAV_LINKS = [
  { label: 'About', sectionId: 'about' },
  { label: 'Ventures', sectionId: 'projects' },
  { label: 'Open Source', sectionId: 'open-source' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Writing', sectionId: 'writing' },
];

export function Header({ onOpenContact, onNavigateHome, isEssayPage = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(
    isEssayPage ? 'writing' : null
  );

  useEffect(() => {
    const updateHeaderState = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (isEssayPage) {
        setActiveSection('writing');
        return;
      }

      if (y < 240) {
        setActiveSection(null);
        return;
      }

      const contactEl = document.getElementById('contact');
      if (contactEl && contactEl.getBoundingClientRect().top <= 160) {
        setActiveSection(null);
        return;
      }

      let current: string | null = null;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.sectionId);
        if (el && el.getBoundingClientRect().top <= 160) {
          current = link.sectionId;
        }
      }
      setActiveSection(current);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('resize', updateHeaderState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateHeaderState);
      window.removeEventListener('resize', updateHeaderState);
    };
  }, [isEssayPage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigateHome(sectionId);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'border-b border-white/35 bg-white/25 backdrop-blur-md shadow-[0_12px_32px_-16px_rgba(12,45,72,0.28)] px-5 py-2.5 sm:px-7 lg:px-10'
            : 'px-5 pt-5 sm:px-7 sm:pt-6 lg:px-10'
        }`}
      >
        <div
          className={`mx-auto max-w-[1200px] transition-all duration-200 ${
            scrolled ? '' : 'border-b border-[#111318]/10 pb-4'
          }`}
        >
          <div className="flex h-13 items-center justify-between gap-6">
            <a
              href="/"
              onClick={(e) => handleNavClick(e)}
              className="flex items-center gap-3 whitespace-nowrap shrink-0 transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]"
            >
              <img
                src="/assets/aistudio/nihab-al-mahjabin-icon-color_ca419e31.svg"
                alt="Nihab Al Mahjabin emblem"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
              />
              <img
                src="/assets/aistudio/nihab-al-mahjabin-single-line_6d36e2ba.svg"
                alt={BRAND.name}
                className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
              />
            </a>

            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-8 text-[14px] font-semibold"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.sectionId}
                    href={`/#${link.sectionId}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => handleNavClick(e, link.sectionId)}
                    className={`relative whitespace-nowrap shrink-0 py-1.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318] ${
                      isActive ? 'text-[#0c2d48] font-bold' : 'text-[#111318]/80 hover:text-[#0c2d48]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-x-0 -bottom-0.5 h-[2.5px] rounded-full bg-[#0c2d48]"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onOpenContact('Strategy Call')}
                className="hidden sm:inline-flex h-[42px] items-center justify-center rounded-full bg-[#111318] px-6 text-[13.5px] font-semibold text-white whitespace-nowrap shrink-0 shadow-[0_6px_18px_-6px_rgba(17,19,24,0.35)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1f242d] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318] cursor-pointer"
              >
                Book a Strategy Call
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-expanded={mobileOpen}
                aria-label="Open navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#111318] transition-colors hover:bg-black/5 lg:hidden cursor-pointer"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-50 bg-[#111318]/40 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Slide-in Drawer from Right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E5EBEF] pb-4">
          <span className="font-[family-name:var(--font-heading)] text-[16px] font-bold text-[#111318]">
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#111318] transition-colors hover:bg-black/5 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mt-6 flex flex-col gap-2 max-h-[calc(100vh-140px)] overflow-y-auto"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.sectionId}
                href={`/#${link.sectionId}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 text-[15px] transition-colors ${
                  isActive
                    ? 'bg-[#EDF4F7] font-bold text-[#0c2d48]'
                    : 'font-medium text-[#111318] hover:bg-[#EDF4F7]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="h-2 w-2 rounded-full bg-[#39A9D5]" aria-hidden="true" />}
              </a>
            );
          })}
          <div className="mt-6 border-t border-[#E5EBEF] pt-6">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenContact('Strategy Call');
              }}
              className="flex h-[46px] w-full items-center justify-center rounded-full bg-[#111318] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#1f242d] cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
