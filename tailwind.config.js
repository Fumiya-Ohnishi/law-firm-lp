/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          dark:    "#0F1B32",
          light:   "#2C3F6A",
        },
        gold: {
          DEFAULT: "#C4933F",
          light:   "#D4AF70",
        },
        cream: "#F8F7F4",
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', '"Yu Mincho"', 'Georgia', 'serif'],
        sans:  ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
