import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Colores personalizados de Nekotina
        "neko-pink": {
          50: "hsl(var(--neko-pink-50))",
          100: "hsl(var(--neko-pink-100))",
          200: "hsl(var(--neko-pink-200))",
          300: "hsl(var(--neko-pink-300))",
          400: "hsl(var(--neko-pink-400))",
          500: "hsl(var(--neko-pink-500))",
          600: "hsl(var(--neko-pink-600))",
          700: "hsl(var(--neko-pink-700))",
          800: "hsl(var(--neko-pink-800))",
          900: "hsl(var(--neko-pink-900))",
          950: "hsl(var(--neko-pink-950))",
        },
        "neko-amber": {
          50: "hsl(var(--neko-amber-50))",
          100: "hsl(var(--neko-amber-100))",
          200: "hsl(var(--neko-amber-200))",
          300: "hsl(var(--neko-amber-300))",
          400: "hsl(var(--neko-amber-400))",
          500: "hsl(var(--neko-amber-500))",
          600: "hsl(var(--neko-amber-600))",
          700: "hsl(var(--neko-amber-700))",
          800: "hsl(var(--neko-amber-800))",
          900: "hsl(var(--neko-amber-900))",
          950: "hsl(var(--neko-amber-950))",
        },
        "neko-dark": {
          50: "hsl(var(--neko-dark-50))",
          100: "hsl(var(--neko-dark-100))",
          200: "hsl(var(--neko-dark-200))",
          300: "hsl(var(--neko-dark-300))",
          400: "hsl(var(--neko-dark-400))",
          500: "hsl(var(--neko-dark-500))",
          600: "hsl(var(--neko-dark-600))",
          700: "hsl(var(--neko-dark-700))",
          800: "hsl(var(--neko-dark-800))",
          900: "hsl(var(--neko-dark-900))",
          950: "hsl(var(--neko-dark-950))",
        },
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        blob: {
          "0%": { transform: "translateY(0) scale(1)" },
          "33%": { transform: "translateY(-10px) scale(1.05)" },
          "66%": { transform: "translateY(5px) scale(0.95)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
