/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        flyIn: 'flyIn 1s ease-in-out forwards',
        bottomFly: 'bottomFly 1s ease-in-out forwards',
        fadeSlow: 'fadeIn 2.5s ease-in-out forwards'
      },
    },
  },
  plugins: [require("daisyui")],
};
