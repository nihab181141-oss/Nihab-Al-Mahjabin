import { AlertCircle, Check, Loader2, Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';
import { BRAND } from '../data/portfolio';
import { buildMailtoHref, sendContactEmail } from '../lib/contactEmail';
import { FadeIn } from './EditorialMotion';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [sentSenderName, setSentSenderName] = useState('');

  const mailtoHref = buildMailtoHref({
    name,
    email,
    topic: 'Strategy Call / Venture Inquiry',
    message,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || status === 'sending') return;

    setStatus('sending');
    setErrorMsg('');

    const result = await sendContactEmail({
      name,
      email,
      topic: 'Strategy Call / Venture Inquiry',
      message,
    });

    if (result.ok) {
      setSentSenderName(name.trim());
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
      setErrorMsg(result.errorMessage || `Could not deliver automatically right now.`);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="mx-auto max-w-[1200px] px-5 py-20 sm:px-7 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 text-[11.5px] tracking-[0.16em] sm:text-[12.5px] sm:tracking-[0.2em] font-bold uppercase text-[#0c2d48]">
            <span className="h-[2px] w-6 rounded-full bg-[#0c2d48]" aria-hidden="true" />
            <span>Book a Strategy Call</span>
            <span className="h-[2px] w-6 rounded-full bg-[#0c2d48]" aria-hidden="true" />
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
          <p className="mt-3 text-[15px] leading-[1.7] font-medium text-[#111318]/80 sm:text-[16px]">
            Available for venture partnerships, product architecture reviews, and enterprise web builds.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="mt-12 rounded-[26px] border border-white/30 bg-white/20 backdrop-blur-md py-10 px-8 text-center shadow-[0_18px_44px_-24px_rgba(12,45,72,0.25)]">
            <Check className="mx-auto h-9 w-9 text-[#0c2d48]" aria-hidden="true" />
            <p className="mt-3 text-[19px] font-extrabold text-[#111318]">
              Message sent to {BRAND.email}
            </p>
            <p className="mt-2 text-[15px] font-medium text-[#111318]/85">
              Thank you, {sentSenderName}. Your inquiry has been emailed directly to{' '}
              <strong className="text-[#111318]">{BRAND.email}</strong>.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#111318] px-7 text-[14px] font-semibold text-white hover:bg-[#1f242d] transition-colors cursor-pointer"
              >
                <span>Send Another Message</span>
              </button>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-white/40 bg-white/45 px-6 text-[14px] font-semibold text-[#111318] hover:bg-white/70 transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>
        ) : (
          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="mt-12 space-y-6 glass-card-sheen rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-md p-7 sm:p-10 shadow-[0_18px_44px_-24px_rgba(12,45,72,0.25)]"
            >
              <div>
                <label htmlFor="sec-name" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111318]">
                  <User className="h-4 w-4 text-[#0c2d48]" aria-hidden="true" />
                  <span>Your Name</span>
                </label>
                <input
                  id="sec-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="mt-2 w-full rounded-xl border border-white/35 bg-white/70 px-4 py-3.5 text-[15.5px] text-[#111318] placeholder:text-[#475569]/80 focus:border-[#0c2d48] focus:bg-white/90 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="sec-email" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111318]">
                  <Mail className="h-4 w-4 text-[#0c2d48]" aria-hidden="true" />
                  <span>Email Address</span>
                </label>
                <input
                  id="sec-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/35 bg-white/70 px-4 py-3.5 text-[15.5px] text-[#111318] placeholder:text-[#475569]/80 focus:border-[#0c2d48] focus:bg-white/90 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="sec-msg" className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111318]">
                  <MessageSquare className="h-4 w-4 text-[#0c2d48]" aria-hidden="true" />
                  <span>Project or Partnership Scope</span>
                </label>
                <textarea
                  id="sec-msg"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your product goals, timeline, or collaboration details..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/35 bg-white/70 px-4 py-3.5 text-[15.5px] text-[#111318] placeholder:text-[#475569]/80 focus:border-[#0c2d48] focus:bg-white/90 focus:outline-none"
                />
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="rounded-xl border border-amber-300/80 bg-white/85 p-4 text-[14px] text-[#111318]"
                >
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                    <div>
                      <p className="font-medium leading-relaxed">{errorMsg}</p>
                      <a
                        href={mailtoHref}
                        className="mt-2 inline-flex items-center gap-1.5 font-bold text-[#0c2d48] hover:underline underline-offset-4"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span>Send via Email App to {BRAND.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-3 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#111318] px-9 text-[15px] font-semibold text-white whitespace-nowrap transition-all hover:-translate-y-0.5 hover:bg-[#1f242d] disabled:opacity-65 cursor-pointer shadow-[0_12px_28px_-10px_rgba(17,19,24,0.45)]"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-[13px] font-semibold text-[#0c2d48] hover:underline underline-offset-4"
                >
                  Or email directly: {BRAND.email}
                </a>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
