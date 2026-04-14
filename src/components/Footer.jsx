export function Footer() {
  return (
    <footer className="bg-space px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-10">
          <div className="max-w-md">
            <a
              href="#top"
              className="inline-block text-[1.4rem] font-black leading-none tracking-[-0.02em] bg-gradient-to-r from-[#2E90FF] to-[#EAA6ED] bg-clip-text text-transparent sm:text-[1.6rem]"
            >
              ORBIT
            </a>
            <p className="mt-3 text-sm leading-6 text-white/55">
              The Celestial Observer. Mastering habits through the gravity of intelligence.
            </p>

            <p className="mt-4 text-sm text-white/38">Developed by Team L02-bang6chia3</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:justify-self-end lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Resources
              </p>
              <nav className="mt-4 flex flex-col items-start gap-3 text-sm">
                <a
                  href="https://github.com/L02-bang6chia3/mobile-habit-manager/wiki"
                  className="text-white/62 transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Wiki
                </a>
                <a
                  href="https://github.com/L02-bang6chia3/mobile-habit-manager/wiki/MVP"
                  className="text-white/62 transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  MVP Documents
                </a>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Project
              </p>
              <nav className="mt-4 flex flex-col items-start gap-3 text-sm">
                <a
                  href="https://github.com/L02-bang6chia3/mobile-habit-manager"
                  className="text-white/62 transition-colors hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
                <a href="#download" className="text-white/62 transition-colors hover:text-white">
                  Download
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/8 pt-5">
          <div className="flex flex-col gap-2 text-xs text-white/32 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ORBIT. All rights reserved.</p>
            <p>Built for product showcase and academic presentation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
