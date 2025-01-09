import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkpurple: "#1E152A",
        error: "#EF2D56",
        white: "#FFFFFF",
        success: "#7BD389",
        warning: "#FFFC31",
        text: "#182825",
        blue: "#3D3B8E",
        darkblue: "#24234C",
      },
    },
  },
  "compilerOptions": {
    "forceConsistentCasingInFileNames": true
  },
  plugins: [],
} satisfies Config;

