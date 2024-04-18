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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(2px, 2px) rotate(2deg)" },
          "10%": { transform: "translate(6px, 2px) rotate(4deg)" },
          "20%": { transform: "translate(10px, -4px) rotate(6deg)" },
          "30%": { transform: "translate(14px, -8px) rotate(4deg)" },
          "40%": { transform: "translate(18px, -12px) rotate(2deg)" },
          "50%": { transform: "translate(24px, -18px) rotate(-2deg)" },
          "60%": { transform: "translate(18px, -24px) rotate(-4deg)" },
          "70%": { transform: "translate(14px, -16px) rotate(-6deg)" },
          "80%": { transform: "translate(6px, -12px) rotate(-8deg)" },
          "90%": { transform: "translate(4px, -6px) rotate(-10deg)" },
          "100%": { transform: "translate(2px, -2px) rotate(-6deg)" },
        },
        shock: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        shake: "shake 3s linear infinite",
        shock: "shock 3s linear infinite",
      },
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
    },
  },
  plugins: [],
};
