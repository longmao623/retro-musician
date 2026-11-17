import { NEXT_SHOW } from '../data/constants';
import { MapPin, Ticket } from 'lucide-react';

export default function NextShow() {
  return (
    <section id="shows" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
              NEXT SHOW
            </h2>
            <p className="font-mono text-sm text-text-secondary mt-4 tracking-widest">
              MORE DATES SOON
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="border border-text-secondary/20 bg-bg-primary p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-2xl md:text-3xl text-accent font-bold">
                    {NEXT_SHOW.date}
                  </span>
                  <span className="px-3 py-1 border border-accent text-accent font-mono text-xs tracking-widest">
                    {NEXT_SHOW.ticketStatus.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-text-primary">
                  {NEXT_SHOW.venue}
                </h3>
                <p className="font-body text-text-secondary mt-2 flex items-center gap-2">
                  <MapPin size={16} />
                  {NEXT_SHOW.city}
                </p>
              </div>
              <a
                href={NEXT_SHOW.ticketLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-bg-primary font-mono text-sm tracking-widest hover:bg-accent-dim transition-colors"
              >
                <Ticket size={16} />
                GET TICKETS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
