/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['HelveticaNeue'],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "charcoal-grey": "#373a3c",
      "pinkish-grey": "#e7cecd",
      "light-grey-green": "#d5e6c7",
      "military-green": "#4b713d",
      "pale-red": "#d9534f",
      // "white-15": rgba(255, 255, 255, 0.15),
      gunmetal: "#55595c",
      "dark-sky-blue": "#5bc0de",
      "warm-grey": "#707070",
      brick: "#cb2e25",
      "slate-gray": "#818a91",
      "water-blue": "#1c7cd5",
      silver: "#eceeef",
    },
  },
  plugins: [],
};
