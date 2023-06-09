/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "small-xs": "300px",
        "xs": "490px",
      },
      spacing: {
        "4.7": "4.7rem",
        "75": "18.75rem",
        "87.5": "21.875rem",
        "100": "25rem",
        "125": "31.25rem",
        "175": "43.75rem",
        "line": "calc(100% - 80px)",
      },
      maxWidth: {
        "125": "31.25rem",
        "175": "43.75rem",
        "200": "50rem",
        "225": "56.25rem",
      },
      inset: {
        "250": "62.5rem",
      },
      fontSize: {
        "7.5xl": "5rem",
      },
      colors: {
        "background": "#000005",
        "darkBlue": "#0C009C",
        "cyan": "#00DBDE",
        "purple": "#4700BA",
        "lightGray": "#bdbdbd",
        "gray": "#757575",
        "darkGray": "#11111B",
      },
      blur: {
        "25": "6.25rem",
        "50": "12.5rem",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      }
    },
  },
  plugins: [],
}
