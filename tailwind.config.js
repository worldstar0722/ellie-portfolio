/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#23272F",
        navy: "#1B3A5C",
        clay: "#C05B3C",
        blush: "#E4A3B4",
        hairline: "#EBEBEB",
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
