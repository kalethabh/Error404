module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  screens: {
    xs: "340px",
  },
  colors: {},
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        spacemono: ["Space Mono", "monospace"],
      },
      maxWidth: {
        custom: "15rem"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
