import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { BRAND } from '../data/portfolio';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact-section"
      aria-labelledby="contact-section-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#2587B8]">
            Get In Touch
          </p>
          <h2
            id="contact-section-heading"
            className="mt-3 font-[family-name:var(--font-heading)] text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#111318] sm:text-[38px] lg:text-[42px]"
          >
            Let&apos;s talk about your next venture.
          </h2>
        </div>

        {submitted ? (
          <div className="mt-12 border-y border-[#35B99A]/40 py-8 text-center bg-[#35B99A]/5">
            <Check className="mx-auto h-8 w-8 text-[#35B99A]" aria-hidden="true" />
            <p className="mt-3 font-semibold text-[#111318]">Message prepared successfully!</p>
            <p className="mt-1 text-[14px] text-[#687580]">
              You can also email me directly at <strong className="text-[#111318]">{BRAND.email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6 border-y border-[#E5EBEF] py-10">
            <div>
              <label htmlFor="sec-name" className="block text-[13px] font-semibold text-[#111318]">
                Your Name
              </label>
              <input
                id="sec-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="mt-2 w-full rounded-none border-b border-[#111318]/20 bg-transparent px-0 py-3 text-[15px] text-[#111318] placeholder:text-[#687580]/50 focus:border-[#2587B8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sec-email" className="block text-[13px] font-semibold text-[#111318]">
                Email Address
              </label>
              <input
                id="sec-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-none border-b border-[#111318]/20 bg-transparent px-0 py-3 text-[15px] text-[#111318] placeholder:text-[#687580]/50 focus:border-[#2587B8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sec-msg" className="block text-[13px] font-semibold text-[#111318]">
                Project or Venture Details
              </label>
              <textarea
                id="sec-msg"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your vision or collaboration scope..."
                className="mt-2 w-full resize-none rounded-none border-b border-[#111318]/20 bg-transparent px-0 py-3 text-[15px] text-[#111318] placeholder:text-[#687580]/50 focus:border-[#2587B8] focus:outline-none"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#111318] px-8 text-[14px] font-semibold text-white transition-all hover:bg-[#1f242d] cursor-pointer shadow-md"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
