/** Brand tokens from the client brief. "ink" = --text. */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { navy: "#1e3a5f", teal: "#3dbdb5", gold: "#f5a623", slate: "#f4f7fb", muted: "#5a7290", ink: "#1a2535", sand: "#fff6e6", deep: "#142a47" },
    fontFamily: { display: ["Fraunces", "Noto Sans Arabic", "serif"], sans: ["DM Sans", "Noto Sans Arabic", "sans-serif"] },
  } },
  plugins: [],
};
