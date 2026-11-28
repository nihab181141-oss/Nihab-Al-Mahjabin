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
import { ScrollProgressBar } from './components/ScrollProgressBar';
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
      <div className="relative min-h-dvh w-full overflow-x-clip bg-[#39A9D5]">
        <ScrollProgressBar />

        {/* Full-website present sky-blue (#39A9D5) and crisp drifting cloud background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#39A9D5]"
        >
          <div className="min-h-full w-[114%] aspect-[724/2172] bg-[url('/assets/aistudio/file_000000003de48208908714c0dd1fed66_6ed4d764.png')] bg-cover bg-top bg-no-repeat animate-cloud-drift will-change-transform" />
        </div>

        {/* Subtle pulsing top-right sun-lit glare */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 right-0 z-10 h-[70vmin] w-[70vmin] min-h-[300px] min-w-[300px] max-h-[720px] max-w-[720px] origin-top-right bg-sun-glare mix-blend-screen animate-sun-glare will-change-transform"
        />

        <div className="relative z-20 flex min-h-dvh flex-col">
          <Header
            onOpenContact={handleOpenContact}
            onNavigateHome={handleNavigateHome}
            isEssayPage={Boolean(activeEssay)}
          />

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
                <FounderBento />

                <SectionBarrier index="02" label="Featured Ventures" tone="sky" />
                <FeaturedProjects onOpenContact={handleOpenContact} />

                <SectionBarrier index="03" label="Open Source & Tooling" tone="white" />
                <ThingsBuilt />

                <SectionBarrier index="04" label="Leadership Timeline" tone="mist" />
                <WorkExperience />

                <SectionBarrier index="05" label="Articles & Essays" tone="white" />
                <BlogArticles onNavigateEssay={handleNavigateEssay} />

                <SectionBarrier index="06" label="Book a Strategy Call" tone="sky" />
                <ContactSection />
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
