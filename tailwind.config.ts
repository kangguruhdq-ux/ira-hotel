import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          ivory: "#F7F4EE",
          cream: "#EAE2D5",
          "cream-light": "#F2EBE0",
          charcoal: "#24231F",
          "charcoal-muted": "#4A4740",
          "charcoal-dark": "#181715",
          bronze: "#A48662",
          "bronze-light": "#C7AB88",
          "bronze-dark": "#7F6343",
          border: "#E2DACF",
          "border-dark": "#3D3A34",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: ".2em",
        mega: ".28em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideUp: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
