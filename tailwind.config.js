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
        boxColor: "#cac2ff",
        textColor: "#9127d5",
        textColor2: "#5d5d5d",
        moonColor: "#5e17eb",
        avatarBg: "#005A9A",
        joinBtnColor: "#aed092",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #ffffff, #c7d9ff)",
        premiumbtnbg: "linear-gradient(135deg, #e6b6ff, #ffffff, #ffa7a7)",
      },
    },
  },
  plugins: [],
};
