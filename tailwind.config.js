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
        boxColor2: "#ebe9ff",
        textColor: "#9127d5",
        textColor2: "#5d5d5d",
        textColor3: "#FCCD3F",
        moonColor: "#5e17eb",
        avatarBg: "#005A9A",
        joinBtnColor: "#aed092",

        banner: {
          color1: "#FDC200", // Yellow
          color2: "#FF2C2C", // Red
          color3: "#21AD61", // Green
          color4: "#723DA6", // Blue
        },
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #ffffff, #c7d9ff)",
        premiumbtnbg: "linear-gradient(135deg, #e6b6ff, #ffffff, #ffa7a7)",
      },
    },
  },
  plugins: [],
};
