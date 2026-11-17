import { SHOWS } from '../data/constants';
import { MapPin, Ticket } from 'lucide-react';

export default function Shows() {
  return (
    <section id="shows" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8">
            <p className="font-mono text-xs text-accent tracking-widest mb-2">
              LIVE DATES
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-text-primary tracking-tight">
              SHOWS
            </h2>
          </div>
          <div className="md:col-span-4 flex items-end justify-start md:justify-end">
            <p className="font-mono text-sm text-text-secondary">
              {SHOWS.filter((s) => s.ticketStatus === 'on sale').length} UPCOMING
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - off-center */}
          <div className="absolute left-4 md:left-1/3 top-0 bottom-0 w-px bg-text-secondary/20" />

          <div className="space-y-0">
            {SHOWS.map((show) => (
              <div
                key={`${show.date}-${show.venue}`}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-text-secondary/10 group"
              >
                {/* Date column */}
                <div className="md:col-span-3 flex items-start md:justify-end">
                  <div className="pl-10 md:pl-0 md:pr-8">
                    <p className="font-mono text-2xl md:text-3xl font-bold text-accent">
                      {show.date}
                    </p>
                    <span
                      className={`inline-block mt-2 px-2 py-1 font-mono text-xs tracking-widest border ${
                        show.ticketStatus === 'on sale'
                          ? 'border-accent text-accent'
                          : show.ticketStatus === 'sold out'
                          ? 'border-text-secondary text-text-secondary'
                          : 'border-text-secondary/30 text-text-secondary/50'
                      }`}
                    >
                      {show.ticketStatus.toUpperCase()}
                    </span>
                  </div>
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-1/3 top-10 w-3 h-3 -translate-x-1/2 rotate-45 border ${
                      show.ticketStatus === 'on sale'
                        ? 'bg-accent border-accent'
                        : 'bg-bg-secondary border-text-secondary/40'
                    }`}
                  />
                </div>

                {/* Info column */}
                <div className="md:col-span-6 pl-10 md:pl-8">
                  <h3 className="font-display text-2xl md:text-3xl text-text-primary group-hover:text-accent transition-colors">
                    {show.venue}
                  </h3>
                  <p className="font-body text-text-secondary mt-2 flex items-center gap-2">
                    <MapPin size={16} />
                    {show.city}
                  </p>
                </div>

                {/* Action column */}
                <div className="md:col-span-3 pl-10 md:pl-0 flex items-start md:justify-end">
                  {show.ticketStatus === 'on sale' ? (
                    <a
                      href={show.ticketLink}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg-primary font-mono text-xs tracking-widest hover:bg-accent-dim transition-colors"
                    >
                      <Ticket size={14} />
                      TICKETS
                    </a>
                  ) : show.ticketStatus === 'sold out' ? (
                    <span className="font-mono text-xs text-text-secondary tracking-widest px-6 py-3 border border-text-secondary/20">
                      SOLD OUT
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-text-secondary/50 tracking-widest px-6 py-3">
                      PAST SHOW
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
