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
        sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        loop: "loop var(--duration) linear infinite var(--direction)",
        blink: "blink 1.1s steps(1) infinite",
        reveal: "reveal 0.6s ease-out both",
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
        // editor chrome / panels
        panel: "#17191f",
        gutter: "#13161c",
        line: "#23262e",
        comment: "#5c6370",
        // code block — purple, matching the real extension
        codeBg: "#322c63",
        codeText: "#e6e4f3",
        codeComment: "#a09bce",
        codeLine: "#433c78",
        // diff: yellow plus vs dimmed minus (palette stays yellow/white/gray)
        diffMinusBg: "rgba(129,133,137,0.08)",
        diffPlusBg: "rgba(255,200,0,0.08)",
      },
    },
  },
  plugins: [],
};
