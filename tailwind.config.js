/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        neblack: "#0A0908",
        gunmetal: "#22333B",
        almond: "#EAE0D5",
        khaki: "#C6AC8F",
        walnut: "#5E503F"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

