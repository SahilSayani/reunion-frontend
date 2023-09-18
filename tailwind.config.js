module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#dbdbea",
          500: "#8f8fa5",
          900: "#110229",
          "500_51": "#8f8fa551",
        },
        blue_gray: { 100: "#cfd0e3", 600: "#585981" },
        blue: { 100: "#c3dfed", 500: "#1da1f2", A400: "#1877f2" },
        light_blue: { 400: "#1dadff" },
        teal: { 50: "#dff0f7" },
        white: { A700: "#ffffff" },
        pink: { 400: "#eb3296" },
      },
      fontFamily: { lufga: "Lufga" },
      boxShadow: { bs: "0px 17px  50px 0px #8f8fa551" },
      backgroundImage: { gradient: "linear-gradient(180deg ,#c3dfed,#dff0f7)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
