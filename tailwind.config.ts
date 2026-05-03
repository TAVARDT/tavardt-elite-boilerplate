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
        tavardt: {
          dark: "#0a0a0a",
          gold: "#d4af37",
          cyan: "#00D4FF",
          glass: "rgba(255, 255, 255, 0.05)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
export default config;
