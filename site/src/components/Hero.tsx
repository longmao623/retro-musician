import { ARTIST } from '../data/constants';

function TapeReel() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-64 h-64 md:w-96 md:h-96 reel-spin"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer tape ring */}
      <circle cx="100" cy="100" r="90" stroke="#c4b9a8" strokeWidth="8" opacity="0.8" />
      <circle cx="100" cy="100" r="80" stroke="#0a0a0a" strokeWidth="4" />
      
      {/* Inner hub */}
      <circle cx="100" cy="100" r="25" fill="#1f1f1f" stroke="#ff4d00" strokeWidth="2" />
      
      {/* Spokes */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <rect
          key={angle}
          x="96"
          y="35"
          width="8"
          height="40"
          fill="#ff4d00"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      
      {/* Tape texture lines */}
      {[40, 55, 70].map((r) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          stroke="#c4b9a8"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left content - asymmetric */}
          <div className="md:col-span-7 md:col-start-1 order-2 md:order-1">
            <p className="font-mono text-sm text-accent tracking-widest mb-4">
              INDEPENDENT ARTIST // EST. 2024
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter text-text-primary glitch-hover cursor-default">
              NOISE
              <br />
              TAPE
            </h1>
            <p className="font-script text-2xl md:text-3xl text-tape mt-6 -rotate-2 origin-left">
              {ARTIST.tagline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#works"
                className="px-8 py-3 border-2 border-accent text-accent font-mono text-sm tracking-widest hover:bg-accent hover:text-bg-primary transition-all duration-200"
              >
                LISTEN NOW
              </a>
              <a
                href="#shows"
                className="px-8 py-3 border border-text-secondary text-text-secondary font-mono text-sm tracking-widest hover:border-text-primary hover:text-text-primary transition-all duration-200"
              >
                UPCOMING SHOWS
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <TapeReel />
              <div className="absolute -bottom-4 -left-4 font-mono text-xs text-text-secondary bg-bg-secondary px-3 py-2 border border-text-secondary/20">
                SIDE A // 45 RPM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
