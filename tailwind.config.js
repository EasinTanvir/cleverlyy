/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sideBarColor: "#5449be",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #ffffff, #c7d9ff)",
      },
    },
  },
  plugins: [],
};
