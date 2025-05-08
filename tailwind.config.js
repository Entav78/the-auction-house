/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#53423C",
        primary: "#0f5800",       // Optional: add others here too
        secondary: "#ffffff",     // Optional
        background: "#f7f7f7",    // Optional
      },
    },
  },  
  plugins: [],
}


