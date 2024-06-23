/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        play: "Playwrite DE Grund, cursive",
        italian: "Italianno, cursive",
        poiret: "Poiret One, sans-serif",
      },
    },
  },
  plugins: [],
};
