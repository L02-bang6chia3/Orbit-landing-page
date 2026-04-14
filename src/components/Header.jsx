import { GlowButton } from './GlowButton';

const links = [
  { href: '#alignment', label: 'Alignment' },
  { href: '#library', label: 'Library' },
  { href: '#signals', label: 'Signals' },
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M4 17.5h16" />
    </svg>
  );
}

function OrbitLogo() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logoo.png`}
      alt="ORBIT logo"
      className="h-7 w-7 object-contain sm:h-8 sm:w-8"
    />
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d12]/78 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 text-sm font-bold text-white sm:text-base"
        >
          <OrbitLogo />
          <span className="tracking-[0.08em]">
            <span className="text-white">OR</span>
            <span className="text-cosmic">BIT</span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-5 text-sm text-white/62 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#download" className="shrink-0">
          <GlowButton variant="primary" size="sm" className="min-w-[118px]">
            <DownloadIcon />
            Download
          </GlowButton>
        </a>
      </div>
    </header>
  );
}
