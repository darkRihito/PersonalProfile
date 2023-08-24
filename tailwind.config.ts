import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "pt-serif": ['"PT Serif"', "serif"],
        roboto: ['"Roboto"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: "#fafafa",
        'black': {
          100: '#09090b',
          DEFAULT: '#171717'
        },
        secondary: "#6b7280",
        ternary: "#9ca3af",
        ternary2: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
export default config;
