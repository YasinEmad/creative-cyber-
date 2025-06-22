/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A0519',
        secondary: '#670D2F',
        background: '#A53860',
        dark: '#222831',
      },
    },
  },
  plugins: [],
}
