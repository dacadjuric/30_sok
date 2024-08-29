/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(2px, 2px) rotate(2deg)" },
          "10%": { transform: "translate(6px, 2px) rotate(4deg)" },
          "20%": { transform: "translate(10px, -2px) rotate(6deg)" },
          "30%": { transform: "translate(14px, -4px) rotate(4deg)" },
          "40%": { transform: "translate(18px, -6px) rotate(2deg)" },
          "50%": { transform: "translate(20px, -8px) rotate(-2deg)" },
          "60%": { transform: "translate(18px, -6px) rotate(-4deg)" },
          "70%": { transform: "translate(14px, -2px) rotate(-6deg)" },
          "80%": { transform: "translate(10px, 0px) rotate(-8deg)" },
          "90%": { transform: "translate(6px, 2px) rotate(-6deg)" },
          "100%": { transform: "translate(2px, 2px) rotate(2deg)" },
        },
        shock: {
          "0%, 100%": { transform: "translate(2px, 4px)" },
          "50%": { transform: "translate(6px, 8px)" },
          "70%": { transform: "translate(2px, 8px)" },
        },
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
          "100%": { transform: "translatey(0px)" },
        },
      },
      animation: {
        shake: "shake 3s linear infinite",
        shock: "shock 1s linear infinite",
        loop: "loop var(--duration) linear infinite var(--direction)",
        float: "float 4s linear infinite",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: "#ffc800",
        background: "#0e1217",
        text: "#fff",
        textLight: "#f1f1f1",
        footerTextDark: "#818589",
        footerIcons: "#D3D3D3",
        ctaLightColor: "#969da9",
        cardsBackground: "#17191f",
      },
    },
  },
  plugins: [],
};
