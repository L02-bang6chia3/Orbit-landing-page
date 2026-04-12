import { motion } from "framer-motion";

const links = [
  { href: "#trajectory", label: "Trajectory" },
  { href: "#discover", label: "Discover" },
  { href: "#pricing", label: "Orbit Plus" },
];

export function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-cosmic/15 bg-space/70 backdrop-blur-xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-gradient-heading"
        >
          ORBIT
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-cosmic"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#hero-cta"
          className="rounded-lg border border-cosmic/40 bg-cosmic/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cosmic shadow-[0_0_16px_rgba(46,144,255,0.25)] transition hover:border-cosmic/70 hover:shadow-[0_0_24px_rgba(46,144,255,0.4)] sm:text-sm"
        >
          Launch
        </a>
      </div>
    </motion.header>
  );
}
