/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2A0896',
        'secondary': '#2397F3',
        'active': '#282828',
        'disable': '#8E8787',
        'accent': '#9D86D126',
        'background': '#D9D9D980'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
