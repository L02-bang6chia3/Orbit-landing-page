import { useState } from "react";

function SyntheticHomeUI() {
  return (
    <div
      className="flex h-full min-h-[420px] flex-col bg-gradient-to-b from-space via-[#12121c] to-space p-4 sm:min-h-[480px]"
      role="img"
      aria-label="ORBIT home screen placeholder"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="h-8 w-24 rounded-lg bg-white/5 ring-1 ring-cosmic/25" />
        <div className="h-8 w-8 rounded-full bg-orbit/15 ring-1 ring-orbit/25" />
      </div>
      <div className="rounded-2xl border border-white/10 bg-space/80 p-4 ring-1 ring-white/5 backdrop-blur-md">
        <div className="h-3 w-1/3 rounded bg-gradient-heading opacity-80" />
        <div className="mt-4 space-y-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3"
            >
              <div className="h-10 w-10 rounded-full bg-cosmic/15 ring-1 ring-cosmic/25" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 w-3/5 rounded bg-white/10" />
                <div className="h-2 w-2/5 rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex justify-center pt-6">
        <div className="h-14 w-14 rounded-2xl border border-cosmic/30 bg-cosmic/10" />
      </div>
    </div>
  );
}

export function AppScreenImage({
  src = "/Orbit-landing-page/idea2-home.png",
  alt = "ORBIT app home screen",
  className = "",
  objectPosition = "50% 0%",
}) {
  const [ok, setOk] = useState(true);

  if (!ok) {
    return (
      <div className={`h-full overflow-hidden ${className}`}>
        <SyntheticHomeUI />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition }}
      onError={() => setOk(false)}
      loading="lazy"
    />
  );
}
