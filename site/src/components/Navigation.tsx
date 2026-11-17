import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'WORKS', href: '#works' },
  { label: 'SHOWS', href: '#shows' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-none border-b border-text-secondary/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter text-text-primary hover:text-accent transition-colors">
          NOISE TAPE
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-text-secondary/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm text-text-secondary hover:text-accent transition-colors tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
