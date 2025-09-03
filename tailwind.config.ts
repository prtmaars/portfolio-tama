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
        background: "#0F0F0F", // Dark Elegant background
        text: "#F5F5F5",       // Main text
        muted: "#AAAAAA",      // Secondary text
        accent: "#8B5CF6",     // Purple accent
      },
    },
  },
  plugins: [],
};
export default config;
