import { RELEASES } from '../data/constants';
import { ExternalLink } from 'lucide-react';

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <p className="font-mono text-xs text-accent tracking-widest mb-2">
              DISCOGRAPHY
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary tracking-tight">
              WORKS
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <p className="font-body text-text-secondary">
              Four releases of tape-saturated synths and after-hours rhythms.
            </p>
          </div>
        </div>

        {/* Works grid - desktop 3 columns with offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELEASES.map((release, index) => (
            <div
              key={release.title}
              className={`group border border-text-secondary/20 bg-bg-secondary ${
                index === 1 ? 'md:mt-12' : ''
              } ${index === 2 ? 'md:mt-24' : ''}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={release.cover}
                  alt={release.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-0 left-0 bg-bg-primary/90 text-text-primary font-mono text-xs px-3 py-1">
                  {release.year}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                  {release.title}
                </h3>
                <div className="mt-4 flex gap-4">
                  <a
                    href={release.links.spotify}
                    className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    SPOTIFY
                  </a>
                  <a
                    href={release.links.bandcamp}
                    className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
                  >
                    BANDCAMP
                  </a>
                  <a
                    href={release.links.apple}
                    className="font-mono text-xs text-text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    APPLE
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
