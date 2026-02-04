/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        midnight: "#0b1120",
        panel: "#111827",
        accent: "#7e22ce",
        accentSoft: "#8b5cf6",
      },
    },
  },
  plugins: [],
};