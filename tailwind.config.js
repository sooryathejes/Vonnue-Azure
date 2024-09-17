/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      'xs':'.5rem',
      'sm':'.7rem',
      'lg':'.9rem',
      'xl':'1.3rem',
      '2xl':'1.5rem',
      '3xl':'2rem',
      '8xl': '2.5rem',  // 10px
      '9xl': '3.5rem',  // 10px

    }
  },
  plugins: [],
}
