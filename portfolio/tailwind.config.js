// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        agbalumo: ["Agbalumo", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
        pixelify: ["Pixelify Sans", "cursive"],
        prata: ["Prata", "serif"],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideTop: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-top": "slideTop 2s ease-in-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
