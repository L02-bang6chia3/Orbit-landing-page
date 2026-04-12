import { motion } from "framer-motion";

const baseClass =
  "inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const glowRest = {
  primary:
    "0 0 24px rgba(46, 144, 255, 0.55), 0 0 48px rgba(46, 144, 255, 0.25)",
  primaryHover:
    "0 0 36px rgba(46, 144, 255, 0.85), 0 0 72px rgba(46, 144, 255, 0.45)",
  mint: "0 0 20px rgba(0, 255, 163, 0.55), 0 0 40px rgba(0, 255, 163, 0.25)",
  mintHover:
    "0 0 32px rgba(0, 255, 163, 0.85), 0 0 64px rgba(0, 255, 163, 0.4)",
  gradient:
    "0 0 28px rgba(46, 144, 255, 0.55), 0 0 56px rgba(232, 121, 249, 0.25)",
  gradientHover:
    "0 0 40px rgba(46, 144, 255, 0.75), 0 0 80px rgba(232, 121, 249, 0.45)",
  gradientPulseHi:
    "0 0 48px rgba(46, 144, 255, 0.95), 0 0 96px rgba(232, 121, 249, 0.5)",
};

export function GlowButton({
  children,
  variant = "primary",
  className = "",
  type = "button",
  pulse = false,
  ...props
}) {
  const variants = {
    primary: `${baseClass} bg-cosmic text-space focus-visible:outline-cosmic`,
    mint: `${baseClass} bg-mint text-space focus-visible:outline-mint`,
    gradient: `${baseClass} text-white focus-visible:outline-orbit`,
  };

  const restShadow = glowRest[variant];
  const hoverShadow = glowRest[`${variant}Hover`];

  const gradientStyle =
    variant === "gradient"
      ? {
          background: "linear-gradient(135deg, #2E90FF 0%, #E879F9 100%)",
          boxShadow: restShadow,
        }
      : { boxShadow: restShadow };

  const pulseAnimate =
    pulse && variant === "primary"
      ? {
          boxShadow: [glowRest.primary, glowRest.primaryHover, glowRest.primary],
          scale: [1, 1.02, 1],
        }
      : pulse && variant === "gradient"
        ? {
            boxShadow: [
              glowRest.gradient,
              glowRest.gradientPulseHi,
              glowRest.gradient,
            ],
            scale: [1, 1.03, 1],
          }
      : pulse && variant === "mint"
        ? {
            boxShadow: [glowRest.mint, glowRest.mintHover, glowRest.mint],
            scale: [1, 1.02, 1],
          }
        : undefined;

  const pulseTransition =
    pulse && (variant === "primary" || variant === "gradient" || variant === "mint")
      ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
      : undefined;

  return (
    <motion.button
      type={type}
      className={`${variants[variant]} ${className}`}
      style={gradientStyle}
      animate={pulseAnimate}
      transition={pulseTransition}
      whileHover={{
        scale: 1.04,
        boxShadow: hoverShadow,
        transition: { type: "spring", stiffness: 400, damping: 22 },
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
