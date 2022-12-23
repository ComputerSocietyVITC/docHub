/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx, md. mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Monty: ["Montserrat", "sans-serif"],
        Plex: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        primary: "#31CE9F",
        darkshades: {
          active: "#3F3F46",
          passive: "#262626",
        },
        textcolors: {
          active: "#FFFFFF",
          passive: "#B1B1B1",
          boundary: "#D9D9D9",
        },
        gradients: {
          green: "#00C180",
          logo: "#31CE9F",
        },
      },
    },
  },
  plugins: [],
};