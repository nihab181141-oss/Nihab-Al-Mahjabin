/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { AboutMe } from './components/AboutMe';
import { BlogArticles } from './components/BlogArticles';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';
import { CoreExpertise } from './components/CoreExpertise';
import { Education } from './components/Education';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';
import { FounderManifesto } from './components/FounderManifesto';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InterestsSide } from './components/InterestsSide';
import { PersonalIntroduction } from './components/PersonalIntroduction';
import { SectionBarrier } from './components/SectionBarrier';
import { SkillsExpertise } from './components/SkillsExpertise';
import { TechnologiesTools } from './components/TechnologiesTools';
import { ThingsBuilt } from './components/ThingsBuilt';
import { WorkExperience } from './components/WorkExperience';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('Product Collaboration');

  const handleOpenContact = (topic = 'Product Collaboration') => {
    setContactTopic(topic);
    setContactOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-dvh w-full overflow-x-hidden bg-[#EDF4F7]">
        {/* Existing user-provided sky-and-cloud animated background blending into #EDF4F7 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 w-full aspect-[724/2172] overflow-hidden bg-[#39A9D5]"
        >
          <div className="min-h-full w-[114%] aspect-[724/2172] bg-[url('/assets/aistudio/file_000000003de48208908714c0dd1fed66_6ed4d764.png')] bg-cover bg-top bg-no-repeat animate-cloud-drift will-change-transform" />
          <div className="absolute inset-x-0 bottom-0 h-[44%] bg-sky-page-fade" />
        </div>

        {/* Subtle pulsing top-right sun-lit glare */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 right-0 z-10 h-[70vmin] w-[70vmin] min-h-[300px] min-w-[300px] max-h-[720px] max-w-[720px] origin-top-right bg-sun-glare mix-blend-screen animate-sun-glare will-change-transform"
        />

        {/* Complete Master Elite Founder Portfolio */}
        <div className="relative z-20 flex min-h-dvh flex-col">
          <Header onOpenContact={handleOpenContact} />

          <main className="flex-1">
            <Hero onOpenContact={handleOpenContact} />

            <SectionBarrier index="01" label="Personal Introduction" tone="white" />
            <div className="bg-white/90">
              <PersonalIntroduction />
            </div>

            <SectionBarrier index="02" label="About Me" tone="sky" />
            <div className="bg-[#EDF4F7]">
              <AboutMe />
            </div>

            <SectionBarrier index="03" label="Founder Philosophy" tone="white" />
            <div className="bg-white/95">
              <FounderManifesto />
            </div>

            <SectionBarrier index="04" label="Skills & Expertise" tone="mist" />
            <div className="bg-[#E5F0F6]/85">
              <SkillsExpertise />
            </div>

            <SectionBarrier index="05" label="Core Competencies" tone="white" />
            <div className="bg-white/95">
              <CoreExpertise />
            </div>

            <SectionBarrier index="06" label="Featured Ventures" tone="sky" />
            <div className="bg-[#EDF4F7]">
              <FeaturedProjects onOpenContact={handleOpenContact} />
            </div>

            <SectionBarrier index="07" label="Things Built" tone="white" />
            <div className="bg-white/95">
              <ThingsBuilt />
            </div>

            <SectionBarrier index="08" label="Work Experience" tone="mist" />
            <div className="bg-[#E5F0F6]/85">
              <WorkExperience />
            </div>

            <SectionBarrier index="09" label="Education & Roots" tone="white" />
            <div className="bg-white/95">
              <Education />
            </div>

            <SectionBarrier index="10" label="Technologies & Tools" tone="sky" />
            <div className="bg-[#EDF4F7]">
              <TechnologiesTools />
            </div>

            <SectionBarrier index="11" label="Articles & Essays" tone="white" />
            <div className="bg-white/95">
              <BlogArticles onOpenContact={handleOpenContact} />
            </div>

            <SectionBarrier index="12" label="Personal Side" tone="mist" />
            <div className="bg-[#E5F0F6]/85">
              <InterestsSide />
            </div>

            <SectionBarrier index="13" label="Get In Touch" tone="white" />
            <div className="bg-white/90">
              <ContactSection />
            </div>
          </main>

          <Footer onOpenContact={handleOpenContact} />
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
