/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px", // Adds a custom "xs" breakpoint at 350px
        extralg: "1400px", // Adds a custom "xs" breakpoint at 350px
      },
      colors: {
        sideBarColor: "#5449be",
        boxColor: "#cac2ff",
        boxColor2: "#ebe9ff",
        textColor: "#9127d5",
        textColor2: "#5d5d5d",
        textColor3: "#FCCD3F",
        textColor4: "#8c7bff",
        moonColor: "#5e17eb",
        avatarBg: "#005A9A",
        joinBtnColor: "#aed092",
        borderColor: "#efe0fe",
        borderColor2: "#dddddd",
        checkColor: "#00a552",
        yearBg: "#efecf5",
        yearBg2: "#e4e0ff",
        yearBg3: "#edffa9",
        yearBg4: "#8878f9",
        examBg: "#ededed",
        selectExamBg: "#cbc2ff",
        circle: "#746cca",
        blankCircle: "#e4e0ff",
        iconColor: "#5e18eb",
        cardColor: "#f1eaff",
        dashboardBg: "#f7f7f5",
        progress2: "#203a72",
        progressBorder: "#203172",
        textBlue: "#2244b4",
        iconColor4: "#8c52ff",
        btnColor6: "#eee5ff",
        shadowBlack: "rgba(0, 0, 0, 0.3)",
        customRed: "#d06161",
        purpleLight: "#EAE2F8",
        purpleDark: "#A78BFA",

        banner: {
          color1: "#FDC200", // Yellow
          color2: "#A78BFA", // Red
          color3: "#21AD61", // Green
          color4: "#723DA6", // Blue
        },
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #ffffff, #c7d9ff)",
        premiumbtnbg: "linear-gradient(135deg, #e6b6ff, #ffffff, #ffa7a7)",
        progressbg: "linear-gradient(90deg, #fefcfe, #ddcff7)",
        "custom-pastel-gradient":
          "linear-gradient(135deg, #FFDEE9, #B5FFFC, #FFC7FF)",
      },
    },
  },
  plugins: [],
};
