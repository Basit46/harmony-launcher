/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Qanelas: ["Qanelas Soft", "sans-serif"],
        Russo: ["Russo One", "sans-serif"],
      },
      screens: {
        vsm: "400px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
