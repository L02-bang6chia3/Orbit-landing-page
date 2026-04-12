import { useState } from "react";

function FallbackEditHabit() {
  return (
    <div
      className="flex h-full min-h-[280px] flex-col bg-gradient-to-b from-space to-[#101018] p-4"
      role="img"
      aria-label="Edit Habit screen placeholder"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orbit/80">
        Edit habit
      </p>
      <div className="mt-4 rounded-xl border border-cosmic/30 bg-space/90 p-4">
        <div className="h-3 w-2/3 rounded bg-white/10" />
        <div className="mt-4 grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-md ${i < 5 ? "bg-cosmic/35 ring-1 ring-cosmic/50" : "bg-white/5"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-[10px] uppercase tracking-wider text-white/35">
          Weekly cycle
        </p>
      </div>
    </div>
  );
}

function FallbackTaskDetail() {
  return (
    <div
      className="flex h-full min-h-[280px] flex-col bg-gradient-to-b from-space to-[#101018] p-4"
      role="img"
      aria-label="Task Detail screen placeholder"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cosmic/80">
        Task detail
      </p>
      <div className="mt-4 rounded-xl border border-cosmic/25 bg-space/90 p-4">
        <div className="flex justify-between gap-2">
          <div className="h-2.5 w-1/2 rounded bg-white/10" />
          <div className="rounded border border-cosmic/40 px-2 py-0.5 text-[10px] text-cosmic">
            90m
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-lg border border-cosmic/20 bg-white/[0.03] px-3 py-2.5">
          <span className="text-xs text-white/70">Haptic Resonance</span>
          <span className="relative flex h-6 w-11 items-center rounded-full bg-cosmic/40">
            <span className="absolute right-1 h-4 w-4 rounded-full bg-cosmic shadow-[0_0_10px_rgba(46,144,255,0.9)]" />
          </span>
        </div>
        <div className="mt-4 flex gap-2 text-[10px] uppercase tracking-wider text-white/35">
          <span className="rounded border border-orbit/30 px-2 py-1 text-orbit/80">
            T-Minus
          </span>
          <span className="rounded border border-mint/25 px-2 py-1 text-mint/80">
            Signal
          </span>
        </div>
      </div>
    </div>
  );
}

export function ScreenshotSlot({ src, alt, fallback = "edit" }) {
  const [ok, setOk] = useState(Boolean(src));

  if (!src || !ok) {
    return fallback === "task" ? <FallbackTaskDetail /> : <FallbackEditHabit />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-top"
      onError={() => setOk(false)}
      loading="lazy"
    />
  );
}
