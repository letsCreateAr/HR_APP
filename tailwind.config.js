/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#7E6F67",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};
