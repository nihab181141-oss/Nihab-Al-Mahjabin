import { BRAND } from '../data/portfolio';

export interface ContactPayload {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface ContactSendResult {
  ok: boolean;
  needsActivation?: boolean;
  errorMessage?: string;
}

export function buildMailtoHref({ name, email, topic, message }: ContactPayload): string {
  const safeTopic = topic.trim() || 'Portfolio Inquiry';
  const safeName = name.trim() || 'Portfolio Visitor';
  const subject = `[${safeTopic}] Message from ${safeName}`;
  const bodyLines = [
    `Name: ${safeName}`,
    email.trim() ? `Email: ${email.trim()}` : null,
    `Topic: ${safeTopic}`,
    '',
    message.trim(),
  ].filter((line): line is string => line !== null);

  return `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join('\n')
  )}`;
}

export async function sendContactEmail(payload: ContactPayload): Promise<ContactSendResult> {
  const name = payload.name.trim();
  const email = payload.email.trim();
  const topic = payload.topic.trim() || 'Strategy Call';
  const message = payload.message.trim();

  if (!name || !email || !message) {
    return { ok: false, errorMessage: 'Please fill in your name, email address, and message.' };
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(BRAND.email)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        topic,
        message,
        _subject: `[${topic}] New inquiry from ${name}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    const succeeded = response.ok && (data?.success === true || data?.success === 'true');
    if (succeeded) {
      return { ok: true };
    }

    const serverMsg = typeof data?.message === 'string' ? data.message : '';
    if (serverMsg.toLowerCase().includes('activat')) {
      return {
        ok: false,
        needsActivation: true,
        errorMessage: `Email relay activation is pending for ${BRAND.email}. Please send directly via your email app below.`,
      };
    }

    return {
      ok: false,
      errorMessage:
        serverMsg || `Could not deliver automatically right now. You can send directly to ${BRAND.email} below.`,
    };
  } catch {
    return {
      ok: false,
      errorMessage: `Network request was blocked or offline. Please send directly to ${BRAND.email} using your email app below.`,
    };
  }
}
