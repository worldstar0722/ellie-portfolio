/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#23272F",
        navy: "#1B3A5C",
        // clay is the single accent. The DEFAULT is for fills, rules and
        // dots; `clay-text` is a slightly deeper mix used wherever clay
        // carries type, where #C05B3C only reaches 4.37:1 on white.
        clay: {
          DEFAULT: "#C05B3C",
          text: "#B85533",
        },
        hairline: "#EBEBEB",
        // Flat fill behind images and empty asset frames.
        paper: "#F5F5F7",
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      // Seven steps, nothing between them. 12 / 15 / 17 / 22 / 32 / 48 / 72.
      fontSize: {
        micro: ["0.75rem", { lineHeight: "1.5" }],
        body: ["0.9375rem", { lineHeight: "1.7" }],
        lead: ["1.0625rem", { lineHeight: "1.7" }],
        h4: ["1.375rem", { lineHeight: "1.35" }],
        h3: ["2rem", { lineHeight: "1.2" }],
        h2: ["3rem", { lineHeight: "1.1" }],
        h1: ["4.5rem", { lineHeight: "1.05" }],
      },
      letterSpacing: {
        headline: "-0.025em",
        label: "0.05em",
        wide2: "0.18em",
      },
      lineHeight: {
        relaxed: "1.7",
      },
    },
  },
  plugins: [
    function hairlineBorders({ addUtilities }) {
      addUtilities({
        ".border-hairline": {
          borderWidth: "0.5px",
          borderColor: "#EBEBEB",
        },
        ".border-t-hairline": {
          borderTopWidth: "0.5px",
          borderTopColor: "#EBEBEB",
          borderTopStyle: "solid",
        },
        ".border-b-hairline": {
          borderBottomWidth: "0.5px",
          borderBottomColor: "#EBEBEB",
          borderBottomStyle: "solid",
        },
        ".border-l-hairline": {
          borderLeftWidth: "0.5px",
          borderLeftColor: "#EBEBEB",
          borderLeftStyle: "solid",
        },
        ".border-r-hairline": {
          borderRightWidth: "0.5px",
          borderRightColor: "#EBEBEB",
          borderRightStyle: "solid",
        },
      });
    },
  ],
};
