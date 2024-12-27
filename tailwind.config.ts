import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bgColor)",
        bgLightColor: "var(--bgLightColor)",
        textColor: "var(--textColor)",
        textDark: "var(--textDark)",
        main: "var(--main)",
      },
    },
  },
  plugins: [],
} satisfies Config;
