/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        indonesia: "url('/src/assets/indonesia.jpg')",
      },
    },
  },
  plugins: [],
};
