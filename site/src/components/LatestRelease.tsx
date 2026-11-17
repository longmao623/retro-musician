import { LATEST_RELEASE } from '../data/constants';
import { ExternalLink } from 'lucide-react';

export default function LatestRelease() {
  return (
    <section id="works" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Section label */}
          <div className="md:col-span-2">
            <p className="font-mono text-xs text-text-secondary tracking-widest rotate-0 md:-rotate-90 md:origin-top-left md:translate-y-full">
              LATEST RELEASE
            </p>
          </div>

          {/* Album cover */}
          <div className="md:col-span-4">
            <div className="relative group border border-text-secondary/20">
              <img
                src={LATEST_RELEASE.cover}
                alt={LATEST_RELEASE.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute top-0 left-0 bg-accent text-bg-primary font-mono text-xs px-3 py-1">
                NEW
              </div>
            </div>
          </div>

          {/* Release info */}
          <div className="md:col-span-6">
            <p className="font-mono text-sm text-accent tracking-widest mb-2">
              {LATEST_RELEASE.year}
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
              {LATEST_RELEASE.title}
            </h2>
            <p className="font-body text-text-secondary mt-4 max-w-md">
              Eight tracks of saturated synths, dusty drum machines, and late-night melodies recorded straight to cassette.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={LATEST_RELEASE.links.spotify}
                className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={14} />
                SPOTIFY
              </a>
              <a
                href={LATEST_RELEASE.links.bandcamp}
                className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={14} />
                BANDCAMP
              </a>
              <a
                href={LATEST_RELEASE.links.apple}
                className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={14} />
                APPLE MUSIC
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
