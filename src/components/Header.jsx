import { motion } from "framer-motion";
import { GlowButton } from "./GlowButton";

const links = [
  { href: "#alignment", label: "Alignment" },
  { href: "#library", label: "Library" },
  { href: "#signals", label: "Signals" },
];

export function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-cosmic/15 bg-space/65 backdrop-blur-2xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="shrink-0 text-lg font-bold tracking-tight text-gradient-heading"
        >
          ORBIT
        </a>
        <nav className="hidden flex-wrap items-center justify-end gap-x-5 gap-y-1 text-xs font-medium text-white/65 lg:flex">
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
        <GlowButton variant="mint" className="shrink-0 px-4 py-2 text-xs border-2 border-mint/40 shadow-[0_0_20px_rgba(0,255,163,0.4)]">
          DOWNLOAD
        </GlowButton>
      </div>
    </motion.header>
  );
}
