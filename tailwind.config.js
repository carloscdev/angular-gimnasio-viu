/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#315C57",
        "primary-light": "rgba(49,92,87,0.6)",
        "secondary": "#EAF9F3",
      }
    },
  },
  plugins: [],
}
