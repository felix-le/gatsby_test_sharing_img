/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/templates/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        light: "#f8f8f8", // beige
        DEFAULT: "#F38B00", // organe
        dark: "rgba(122, 107, 85, 0.5)",
      },
      secondary: {
        DEFAULT: "#b2b2b2", // gray
        dark: "#353535",
      },
      black: "#000000",
      white: "#ffffff",
      gray: {
        100: "#f9f9f9",
        200: "#ebebeb",
        300: "#7b7b7b",
        400: "#646464",
      },
      dark: { DEFAULT: "#212121" },
      error: "#e11d48", // rose-600
      success: "#059669", // emerald-600
    },
    fontFamily: {
      display: ["FunctionPro-Demi", ...defaultTheme.fontFamily.sans],
      body: ["FunctionPro-Light", ...defaultTheme.fontFamily.sans],
      title: ["FunctionPro-Medium", ...defaultTheme.fontFamily.sans],
      icon: ["et-line", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        "inner-text": "inset 0px 4px 4px 0px rgba(0,0,0,0.25)",
      },
    },
    fontSize: {
      xs: ["1.3rem", { lineHeight: "1.6rem" }],
      xx: ["1.4rem", { lineHeight: "2rem" }],
      sm: ["1.6rem", { lineHeight: "1.8rem" }],
      base: ["1.8rem", { lineHeight: "2.2rem" }],
      lg: ["2rem", { lineHeight: "2rem" }],
      xl: ["2.2rem", { lineHeight: "2rem" }],
      "2xl": ["2.5rem", { lineHeight: "3.2rem" }],
      "3xl": ["3.2rem", { lineHeight: "3.8rem" }],
      "4xl": ["3.6rem", { lineHeight: "4.2rem" }],
      "5xl": ["4rem", { lineHeight: "4.5rem" }],
      "6xl": ["5rem", { lineHeight: "5.8rem" }],
      "7xl": ["6rem", { lineHeight: "6.5rem" }],
      "8xl": ["7.2rem", { lineHeight: "7.8rem" }],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1320px",
          },
        },
      })
    },
  ],
}
