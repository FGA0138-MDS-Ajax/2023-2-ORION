/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#45BF55",
      primaryDark: "#379543",
      white: "#FFFFFF",
      offWhite: "#E9EAED",
      black: "#292929"
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}