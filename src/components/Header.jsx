import { motion } from 'framer-motion';
import { GlowButton } from './GlowButton';

const links = [
  { href: '#library', label: 'Library' },
  { href: '#alignment', label: 'Alignment' },
  { href: '#signals', label: 'Signals' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="justify-self-start shrink-0 text-base font-bold tracking-tight text-gradient-heading sm:text-lg"
        >
          ORBIT
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-medium text-white/65 sm:gap-x-4 sm:text-xs md:gap-x-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap transition-colors hover:text-cosmic"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-self-end items-center">
          <GlowButton
            variant="primary"
            className="px-4 py-2 text-[11px] sm:px-6 sm:text-xs md:px-8 md:text-sm lg:px-12"
          >
            DOWNLOAD
          </GlowButton>
        </div>
      </div>
    </header>
  );
}
