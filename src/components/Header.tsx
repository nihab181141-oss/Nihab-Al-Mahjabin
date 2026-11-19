import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../data/portfolio';

interface HeaderProps {
  onOpenContact: (topic?: string) => void;
}

const NAV_LINKS = [
  { label: 'Introduction', href: '#top' },
  { label: 'Ventures', href: '#ventures' },
];

export function Header({ onOpenContact }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-40 w-full px-5 pt-5 sm:px-7 sm:pt-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex h-12 items-center justify-between gap-6">
          <a
            href="#top"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]"
          >
            <img
              src="/assets/aistudio/nihab-al-mahjabin-icon-color_ca419e31.svg"
              alt="Nihab Al Mahjabin Emblem"
              className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
            />
            <img
              src="/assets/aistudio/nihab-al-mahjabin-single-line_6d36e2ba.svg"
              alt={BRAND.name}
              className="h-6 sm:h-7 lg:h-8 w-auto object-contain"
            />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#111318]/80"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#111318] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${BRAND.email}`}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#111318] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111318]"
            >
              Email
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onOpenContact('General Hello')}
              className="hidden sm:inline-flex h-[42px] items-center justify-center rounded-full bg-[#111318] px-5 text-[13px] font-medium text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1f242d] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111318] cursor-pointer"
            >
              Get in Touch
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#111318] transition-colors hover:bg-black/5 md:hidden cursor-pointer"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-3 rounded-[18px] border border-[#E5EBEF] bg-white p-4 shadow-[0_14px_34px_-12px_rgba(17,19,24,0.14)] md:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-3 text-[13px] font-medium text-[#111318] transition-colors hover:bg-[#EDF4F7]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${BRAND.email}`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-[13px] font-medium text-[#111318] transition-colors hover:bg-[#EDF4F7]"
              >
                Email
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenContact('General Hello');
                }}
                className="mt-2 flex h-[44px] w-full items-center justify-center rounded-full bg-[#111318] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#1f242d] cursor-pointer"
              >
                Get in Touch
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
