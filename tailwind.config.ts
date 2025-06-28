import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
          DEFAULT: "#D72638", // Crimson Red
          foreground: "#ECECEC", // Light Ash Gray
        },
        secondary: {
          DEFAULT: "#1E1E1E", // Deep Charcoal
          foreground: "#ECECEC", // Light Ash Gray
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#1E1E1E", // Deep Charcoal
          foreground: "#ECECEC", // Light Ash Gray
        },
        accent: {
          DEFAULT: "#FFC857", // Mustard Yellow
          foreground: "#1E1E1E", // Deep Charcoal
        },
        popover: {
          DEFAULT: "#1E1E1E", // Deep Charcoal
          foreground: "#ECECEC", // Light Ash Gray
        },
        card: {
          DEFAULT: "#1E1E1E", // Deep Charcoal
          foreground: "#ECECEC", // Light Ash Gray
        },
        // Custom Tech Flame colors
        crimson: "#D72638",
        charcoal: "#1E1E1E",
        ash: "#ECECEC",
        mustard: "#FFC857",
        cobalt: "#2E86AB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
