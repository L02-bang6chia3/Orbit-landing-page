import { RevealSection } from "./RevealSection";

export function Footer() {
  return (
    <RevealSection className="border-t border-white/10 bg-space px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-white/45 sm:text-left">
          Developed by Team L02-bang6chia3
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <a
            href="https://github.com"
            className="text-white/55 transition hover:text-cosmic"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Wiki
          </a>
          <a
            href="https://github.com"
            className="text-white/55 transition hover:text-orbit"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </nav>
      </div>
    </RevealSection>
  );
}
