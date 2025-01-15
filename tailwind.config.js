/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        content: "#e5e5e5",
        background: "#b2dfdb",
        card: "#009688",
        accent: "#00796b",
      },
      fontFamily: {
        firstFamily: ["Open Sans", "sans-serif"],
        secondFamily: ["Caveat", "cursive"],
      },
      borderRadius: {
        general: "12px",
      },
    },
  },
  plugins: [],
};
