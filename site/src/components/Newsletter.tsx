import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              STAY IN THE LOOP
            </h2>
            <p className="font-body text-text-secondary mt-4">
              Get new releases, show dates, and cassette drops directly to your inbox.
            </p>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-accent p-6">
                <p className="font-mono text-accent tracking-widest">
                  YOU&apos;RE ON THE LIST. THANKS.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-4 bg-bg-secondary border border-text-secondary/20 text-text-primary placeholder-text-secondary font-mono text-sm focus:outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-accent text-bg-primary font-mono text-sm tracking-widest hover:bg-accent-dim transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
