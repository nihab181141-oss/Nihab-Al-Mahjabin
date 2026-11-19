/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

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

        {/* Header, Hero, and Detailed Footer */}
        <div className="relative z-20 flex min-h-dvh flex-col">
          <Header onOpenContact={handleOpenContact} />

          <main className="flex-1">
            <Hero onOpenContact={handleOpenContact} />
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
