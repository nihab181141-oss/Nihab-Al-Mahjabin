import { Check, Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';
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

  const mailtoHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Strategy Call / Venture Inquiry — from ${name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#2587B8]">
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
            <span>Book a Strategy Call</span>
            <span className="h-[2px] w-6 rounded-full bg-[#39A9D5]" aria-hidden="true" />
          </div>
          <h2
            id="contact-section-heading"
            className="mt-4 font-[family-name:var(--font-heading)] text-[28px] min-[380px]:text-[32px] leading-[1.16] font-extrabold tracking-[-0.025em] text-[#111318] sm:text-[42px] sm:leading-[1.1] sm:tracking-[-0.03em] lg:text-[48px] [text-wrap:balance]"
          >
            Let&apos;s scope your{' '}
            <span className="font-[family-name:var(--font-accent)] italic font-semibold text-[#0c2d48]">
              next product
            </span>
            .
          </h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-[#475569] sm:text-[16px]">
            Available for venture partnerships, product architecture reviews, and enterprise web builds.
          </p>
        </div>

        {submitted ? (
          <div className="mt-12 rounded-[26px] border border-[#35B99A]/40 py-10 px-8 text-center bg-[#35B99A]/8">
            <Check className="mx-auto h-9 w-9 text-[#35B99A]" aria-hidden="true" />
            <p className="mt-3 text-[18px] font-bold text-[#111318]">Inquiry prepared for {BRAND.name}</p>
            <p className="mt-1.5 text-[15px] text-[#475569]">
              Send immediately via your email client or write directly to{' '}
              <strong className="text-[#111318]">{BRAND.email}</strong>.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href={mailtoHref}
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#111318] px-7 text-[14px] font-semibold text-white hover:bg-[#1f242d] transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Open Email App</span>
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6 rounded-[28px] border border-[#111318]/12 bg-white/84 backdrop-blur-sm p-7 sm:p-10 shadow-[0_16px_40px_-24px_rgba(12,45,72,0.16)]"
          >
            <div>
              <label htmlFor="sec-name" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111318]">
                <User className="h-4 w-4 text-[#2587B8]" aria-hidden="true" />
                <span>Your Name</span>
              </label>
              <input
                id="sec-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="mt-2 w-full rounded-xl border border-[#111318]/15 bg-white px-4 py-3.5 text-[15.5px] text-[#111318] placeholder:text-[#64748B]/70 focus:border-[#2587B8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sec-email" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111318]">
                <Mail className="h-4 w-4 text-[#2587B8]" aria-hidden="true" />
                <span>Email Address</span>
              </label>
              <input
                id="sec-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-[#111318]/15 bg-white px-4 py-3.5 text-[15.5px] text-[#111318] placeholder:text-[#64748B]/70 focus:border-[#2587B8] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="sec-msg" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111318]">
                <MessageSquare className="h-4 w-4 text-[#2587B8]" aria-hidden="true" />
                <span>Project or Partnership Scope</span>
              </label>
              <textarea
                id="sec-msg"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your product goals, timeline, or collaboration details..."
                className="mt-2 w-full resize-none rounded-xl border border-[#111318]/15 bg-white px-4 py-3.5 text-[15.5px] text-[#111318] placeholder:text-[#64748B]/70 focus:border-[#2587B8] focus:outline-none"
              />
            </div>

            <div className="pt-3 flex justify-center">
              <button
                type="submit"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#111318] px-9 text-[15px] font-semibold text-white whitespace-nowrap transition-all hover:-translate-y-0.5 hover:bg-[#1f242d] cursor-pointer shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>Request Strategy Call</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
