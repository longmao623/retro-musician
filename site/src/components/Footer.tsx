import { ARTIST } from '../data/constants';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 bg-bg-secondary border-t border-text-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <h3 className="font-display text-3xl font-bold text-text-primary tracking-tight">
              {ARTIST.name}
            </h3>
            <p className="font-mono text-sm text-text-secondary mt-4">
              {ARTIST.email}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="flex gap-6">
              <a
                href={ARTIST.social.instagram}
                className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
              >
                IG
              </a>
              <a
                href={ARTIST.social.spotify}
                className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
              >
                SPOTIFY
              </a>
              <a
                href={ARTIST.social.bandcamp}
                className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
              >
                BANDCAMP
              </a>
            </div>
            <p className="font-mono text-xs text-text-secondary">
              © 2026 NOISE TAPE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
