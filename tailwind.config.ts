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
        bgColorLight: "var(--bgColorLight)",
        bgColorDark: "var(--bgColorDark)",
        textColor: "var(--textColor)",
        textColorDark: "var(--textColorDark)",
        main: "var(--main)",
        bgColorSuperLight: "var(--bgColorSuperLight)",
      },
    },
  },
  plugins: [],
} satisfies Config;
