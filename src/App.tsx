/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { BlogArticles } from './components/BlogArticles';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';
import { EssayPage } from './components/EssayPage';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { FounderBento } from './components/FounderBento';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SectionBarrier } from './components/SectionBarrier';
import { SeoHead } from './components/SeoHead';
import { ThingsBuilt } from './components/ThingsBuilt';
import { WorkExperience } from './components/WorkExperience';
import { BRAND, ESSAYS } from './data/portfolio';

function getEssaySlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/writing\/([^/]+)\/?$/);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('Strategy Call');
  const [pathname, setPathname] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenContact = useCallback((topic = 'Strategy Call') => {
    setContactTopic(topic);
    setContactOpen(true);
  }, []);

  const handleNavigateHome = useCallback((sectionId?: string) => {
    const targetUrl = sectionId ? `/#${sectionId}` : '/';
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', targetUrl);
      setPathname('/');
      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          if (sectionId) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 60);
      });
      return;
    }

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNavigateEssay = useCallback((slug: string) => {
    const nextPath = `/writing/${slug}`;
    window.history.pushState({}, '', nextPath);
    setPathname(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const activeSlug = getEssaySlugFromPath(pathname);
  const activeEssay = activeSlug ? ESSAYS.find((item) => item.slug === activeSlug) : undefined;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-dvh w-full overflow-x-hidden bg-gradient-to-b from-[#24a4d8] via-[#24a4d8] to-[#1e93c4]">
        {/* Full-document scrolling sky-blue gradient and dense multi-layer cloud backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          {/* Primary dense cloud stack */}
          <div className="flex w-[122%] flex-col animate-cloud-drift will-change-transform">
            {[false, true, false, true, false, true, false, true, false, true].map((flipped, idx) => (
              <div
                key={`cloud-base-${idx}`}
                className={`w-full shrink-0 aspect-[724/1680] bg-[url('/assets/aistudio/file_000000003de48208908714c0dd1fed66_6ed4d764.png')] bg-cover bg-top bg-no-repeat ${
                  flipped ? '-scale-y-100' : ''
                }`}
              />
            ))}
          </div>

          {/* Secondary overlapping parallax cloud depth layer */}
          <div className="absolute inset-x-0 top-0 -mt-20 flex w-[122%] flex-col opacity-30 animate-cloud-drift-reverse will-change-transform">
            {[true, false, true, false, true, false, true, false, true, false].map((flipped, idx) => (
              <div
                key={`cloud-depth-${idx}`}
                className={`w-full shrink-0 aspect-[724/1680] -scale-x-100 bg-[url('/assets/aistudio/file_000000003de48208908714c0dd1fed66_6ed4d764.png')] bg-cover bg-center bg-no-repeat ${
                  flipped ? '-scale-y-100' : ''
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#24a4d8]/22 via-[#24a4d8]/28 to-[#24a4d8]/34" />
        </div>

        {/* Subtle pulsing top-right sun-lit glare */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 z-10 h-[70vmin] w-[70vmin] min-h-[300px] min-w-[300px] max-h-[720px] max-w-[720px] origin-top-right bg-sun-glare mix-blend-screen animate-sun-glare will-change-transform"
        />

        <div className="relative z-20 flex min-h-dvh flex-col">
          <Header onOpenContact={handleOpenContact} onNavigateHome={handleNavigateHome} />

          {activeEssay ? (
            <EssayPage
              essay={activeEssay}
              onNavigateHome={handleNavigateHome}
              onNavigateEssay={handleNavigateEssay}
              onOpenContact={handleOpenContact}
            />
          ) : (
            <>
              <SeoHead
                title={`${BRAND.name} | Founder, CEO & Software Architect`}
                description="Official portfolio of Nihab Al Mahjabin, Bangladesh-based tech entrepreneur and software architect. Founder of Floraxen Labs, MedProfile Bangladesh, SABLE, FeLoW WebStaR, Lumora Studio, and Al Jabin Publications."
                path="/"
                type="profile"
              />

              <main className="flex-1">
                <Hero onOpenContact={handleOpenContact} />

                <SectionBarrier index="01" label="Founder Story & Capabilities" tone="white" />
                <div className="bg-[#E5F5FC]/54 backdrop-blur-[6px]">
                  <FounderBento />
                </div>

                <SectionBarrier index="02" label="Featured Ventures" tone="sky" />
                <div className="bg-[#DCF2FB]/66 backdrop-blur-[8px]">
                  <FeaturedProjects onOpenContact={handleOpenContact} />
                </div>

                <SectionBarrier index="03" label="Open Source & Tooling" tone="white" />
                <div className="bg-[#E5F5FC]/54 backdrop-blur-[6px]">
                  <ThingsBuilt />
                </div>

                <SectionBarrier index="04" label="Leadership Timeline" tone="mist" />
                <div className="bg-[#D5EFFA]/62 backdrop-blur-[8px]">
                  <WorkExperience />
                </div>

                <SectionBarrier index="05" label="Articles & Essays" tone="white" />
                <div className="bg-[#E5F5FC]/54 backdrop-blur-[6px]">
                  <BlogArticles onNavigateEssay={handleNavigateEssay} />
                </div>

                <SectionBarrier index="06" label="Book a Strategy Call" tone="sky" />
                <div className="bg-[#DCF2FB]/62 backdrop-blur-[8px]">
                  <ContactSection />
                </div>
              </main>
            </>
          )}

          <Footer
            onOpenContact={handleOpenContact}
            onNavigateHome={handleNavigateHome}
            onNavigateEssay={handleNavigateEssay}
          />
        </div>

        <ContactModal
          isOpen={contactOpen}
          initialTopic={contactTopic}
          onClose={() => setContactOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
