import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#071a12",
          900: "#0b2419",
          800: "#123425",
          700: "#18472f",
        },
        agro: {
          500: "#8acb41",
          400: "#a6d85f",
          300: "#bee882",
        },
        sand: "#f5f3ec",
        wheat: "#d3b66f",
        data: "#5ca5b5",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(7, 26, 18, 0.10)",
        panel: "0 18px 70px rgba(7, 26, 18, 0.18)",
      },
      borderRadius: {
        '4xl': "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
