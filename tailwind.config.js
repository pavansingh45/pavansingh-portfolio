/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1120",
        panel: "#111827",
        accent: "#22d3ee",
        accentSoft: "#67e8f9",
      },
    },
  },
  plugins: [],
};