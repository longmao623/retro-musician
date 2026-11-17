import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { ARTIST } from '../data/constants';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: contact info */}
          <div className="md:col-span-5">
            <p className="font-mono text-xs text-accent tracking-widest mb-2">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary tracking-tight">
              CONTACT
            </h2>

            <div className="mt-10 space-y-6">
              <a
                href={`mailto:${ARTIST.email}`}
                className="inline-flex items-center gap-3 font-mono text-text-primary hover:text-accent transition-colors"
              >
                <Mail size={20} />
                {ARTIST.email}
              </a>

              <div className="pt-6 border-t border-text-secondary/10">
                <p className="font-mono text-xs text-text-secondary tracking-widest mb-4">
                  SOCIALS
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={ARTIST.social.instagram}
                    className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
                  >
                    INSTAGRAM →
                  </a>
                  <a
                    href={ARTIST.social.spotify}
                    className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
                  >
                    SPOTIFY →
                  </a>
                  <a
                    href={ARTIST.social.bandcamp}
                    className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
                  >
                    BANDCAMP →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="border border-text-secondary/20 bg-bg-secondary p-6 md:p-10">
              <h3 className="font-display text-2xl text-text-primary mb-2">
                BOOKING & NEWSLETTER
              </h3>
              <p className="font-body text-text-secondary mb-8">
                For booking, press, or just to say hi. Subscribe for new releases and show dates.
              </p>

              {submitted ? (
                <div className="border border-accent p-6">
                  <p className="font-mono text-accent tracking-widest">
                    MESSAGE SENT. WE&apos;LL BE IN TOUCH.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs text-text-secondary tracking-widest mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-4 bg-bg-primary border border-text-secondary/20 text-text-primary placeholder-text-secondary font-mono text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-text-secondary tracking-widest mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us something..."
                      rows={5}
                      className="w-full px-4 py-4 bg-bg-primary border border-text-secondary/20 text-text-primary placeholder-text-secondary font-mono text-sm focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-accent text-bg-primary font-mono text-sm tracking-widest hover:bg-accent-dim transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    SEND
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
