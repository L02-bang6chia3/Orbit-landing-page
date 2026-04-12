/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: "#0D0D12",
        cosmic: "#2E90FF",
        orbit: "#E879F9",
        mint: "#00FFA3",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-cosmic": "0 0 24px rgba(46, 144, 255, 0.55), 0 0 48px rgba(46, 144, 255, 0.25)",
        "glow-cosmic-lg": "0 0 32px rgba(46, 144, 255, 0.65), 0 0 64px rgba(46, 144, 255, 0.35)",
        "glow-mint": "0 0 20px rgba(0, 255, 163, 0.55), 0 0 40px rgba(0, 255, 163, 0.25)",
        "glow-orbit": "0 0 20px rgba(232, 121, 249, 0.4)",
      },
      backgroundImage: {
        "gradient-heading": "linear-gradient(135deg, #2E90FF 0%, #E879F9 100%)",
        "gradient-border": "linear-gradient(135deg, #2E90FF, #E879F9)",
      },
    },
  },
  plugins: [],
};
