import { Check, Copy, Mail, X } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { BRAND } from '../data/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  initialTopic: string;
  onClose: () => void;
}

const TOPICS = [
  'Foundation Sprint',
  'Flagship Product Build',
  'Venture Partner',
  'General Hello',
];

export function ContactModal({ isOpen, initialTopic, onClose }: ContactModalProps) {
  const [topic, setTopic] = useState(initialTopic || TOPICS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTopic(initialTopic || TOPICS[0]);
      setSubmitted(false);
    }
  }, [isOpen, initialTopic]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(BRAND.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const mailtoHref = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `${topic} — from ${name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#111318]/45 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-[22px] border border-[#E5EBEF] bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold text-[#2587B8]">Direct Inquiry</p>
            <h3
              id="contact-modal-title"
              className="mt-1 font-[family-name:var(--font-heading)] text-[22px] font-bold tracking-tight text-[#111318]"
            >
              Start a Conversation
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5EBEF] text-[#687580] transition-colors hover:bg-[#EDF4F7] hover:text-[#111318] cursor-pointer shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {submitted ? (
          <div className="mt-6 rounded-[18px] border border-[#35B99A]/35 bg-[#35B99A]/10 p-5">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#111318]">
              <Check className="h-4 w-4 text-[#35B99A]" aria-hidden="true" />
              <span>Note prepared for {BRAND.name}</span>
            </div>
            <p className="mt-2 text-[14px] leading-relaxed text-[#687580]">
              Thank you, {name}. Send this directly using your email client or copy{' '}
              <span className="font-medium text-[#111318]">{BRAND.email}</span>.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex h-[42px] items-center gap-2 rounded-full bg-[#111318] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#1f242d]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Open Email App</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex h-[42px] items-center gap-1.5 rounded-full border border-[#E5EBEF] bg-white px-4 text-[13px] font-medium text-[#111318] hover:bg-[#EDF4F7] cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-[#35B99A]" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-[12px] font-semibold text-[#111318]">Focus</label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {TOPICS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTopic(item)}
                    className={`min-h-[34px] rounded-full px-3.5 py-1 text-[12px] font-medium transition-colors cursor-pointer ${
                      topic === item
                        ? 'bg-[#111318] text-white'
                        : 'bg-[#EDF4F7] text-[#687580] hover:text-[#111318]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {initialTopic && !TOPICS.includes(initialTopic) && (
                <p className="mt-2 text-[12px] font-medium text-[#2587B8]">
                  Subject: {initialTopic}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block text-[12px] font-semibold text-[#111318]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-[14px] border border-[#E5EBEF] bg-white px-3.5 py-2.5 text-[14px] text-[#111318] placeholder:text-[#687580]/60 focus:border-[#39A9D5] focus:outline-none focus:ring-2 focus:ring-[#39A9D5]/20"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-[12px] font-semibold text-[#111318]">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-[14px] border border-[#E5EBEF] bg-white px-3.5 py-2.5 text-[14px] text-[#111318] placeholder:text-[#687580]/60 focus:border-[#39A9D5] focus:outline-none focus:ring-2 focus:ring-[#39A9D5]/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-[12px] font-semibold text-[#111318]">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a brief note about your product, idea, or timeline..."
                className="mt-1.5 w-full resize-none rounded-[14px] border border-[#E5EBEF] bg-white px-3.5 py-2.5 text-[14px] text-[#111318] placeholder:text-[#687580]/60 focus:border-[#39A9D5] focus:outline-none focus:ring-2 focus:ring-[#39A9D5]/20"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5EBEF] pt-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex min-h-[38px] items-center gap-1.5 text-[12px] font-medium text-[#687580] transition-colors hover:text-[#111318] cursor-pointer"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[#35B99A]" aria-hidden="true" />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span>{copied ? 'Copied email' : BRAND.email}</span>
              </button>

              <button
                type="submit"
                className="inline-flex h-[42px] items-center justify-center rounded-full bg-[#111318] px-6 text-[13px] font-medium text-white transition-all duration-150 hover:bg-[#1f242d] cursor-pointer"
              >
                Continue to Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
