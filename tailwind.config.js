/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#4B0082',
        'purple-medium': '#6B46C1',
        'purple-light': '#9333EA',
      },
    },
  },
  plugins: [],
}

