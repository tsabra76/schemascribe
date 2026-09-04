/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc4fc",
          400: "#36a5f8",
          500: "#0c8ae9",
          600: "#006cc7",
          700: "#0156a1",
          800: "#064985",
          900: "#0b3d6e",
        },
      },
    },
  },
  plugins: [],
};
