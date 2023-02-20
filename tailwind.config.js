/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx, md. mdx}"],
  theme: {
    extend: {
      screens: {
        lg: { min: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "640px", max: "1023px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        monty: ["Montserrat", "sans-serif"],
        Plex: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        primary: "#31CE9F",
        sideColors: {
          1: "#00B3A2",
          3: "#00989B",
        },
        darkshades: {
          active: "#202020",
          // active: "#0f0f0f",
          // passive: "#0f0f0f",
          passive: "#111111",
          // passive: "#202124",
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
      fontSize: {
     },
     spacing: {
      '84':'84px',
      '737': '737px',
      '151': '151px',
      '628.59': '628.59px',
      '165.64': '165.64px',
      '51.7': '51.7px',
      '20': '20px', 
    },
    },
  },
  plugins: [],
};
