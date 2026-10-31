import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Warm Charcoal Luxury Palette
        canvas: "#151413",
        "surface-1": "#1c1b18",
        "surface-2": "#191816",
        "surface-3": "#211f1c",
        cream: "#efe9de",
        "cream-60": "rgba(239,233,222,0.6)",
        "cream-40": "rgba(239,233,222,0.4)",
        "cream-20": "rgba(239,233,222,0.2)",
        "cream-12": "rgba(239,233,222,0.12)",
        "cream-8": "rgba(239,233,222,0.08)",
        "cream-5": "rgba(239,233,222,0.05)",
        // Accent
        "glow-green": "#3ecf6e",
        "glow-amber": "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        // Tactile cream button shadow
        "btn-primary": "0 1px 2px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.4)",
        "btn-primary-hover": "0 2px 6px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
        // Subtle surface shadow
        "card": "0 1px 3px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)",
        "card-hover": "0 2px 8px rgba(0,0,0,0.5), 0 8px 32px rgba(0,0,0,0.4)",
        // Glow for active elements
        "glow-cream": "0 0 0 1px rgba(239,233,222,0.2), 0 0 16px rgba(239,233,222,0.08)",
        "glow-active": "0 0 0 2px rgba(239,233,222,0.3)",
      },
      backgroundImage: {
        "hairline-top": "linear-gradient(to bottom, rgba(239,233,222,0.08) 0%, transparent 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      borderColor: {
        hairline: "rgba(239,233,222,0.12)",
        "hairline-bright": "rgba(239,233,222,0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.15s ease-out",
        "slide-up": "slideUp 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
