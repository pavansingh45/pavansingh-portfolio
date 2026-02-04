/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1120",
        panel: "#111827",
        accent: "#3b82f6",
        accentSoft: "#60a5fa",
      },
    },
  },
  plugins: [],
};