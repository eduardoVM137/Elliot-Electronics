import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/layouts/**/*.{ts,tsx}",
    "./src/modules/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        eliot: {
          ink: "#050a11",
          night: "#07111c",
          deep: "#0a1c2e",
          line: "#1d3448",
          electric: "#21a7ff",
          cyan: "#6be9ff",
          steel: "#8aa4b8",
          silver: "#d9e8f5",
          success: "#55f0a2",
          warning: "#f3c969",
        },
      },
      boxShadow: {
        glow: "0 0 44px rgba(33, 167, 255, 0.24)",
        "glow-sm": "0 0 22px rgba(107, 233, 255, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "technical-grid":
          "linear-gradient(rgba(107, 233, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 233, 255, 0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "line-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(220%)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "line-flow": "line-flow 4.8s ease-in-out infinite",
        "soft-pulse": "soft-pulse 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
