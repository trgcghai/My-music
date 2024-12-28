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
        bgDarkColor: "var(--bgDarkColor)",
        textColor: "var(--textColor)",
        textDark: "var(--textDark)",
        main: "var(--main)",
        bgHover: "var(--bgHover)",
      },
    },
  },
  plugins: [],
} satisfies Config;
