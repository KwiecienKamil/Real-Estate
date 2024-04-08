/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: "Lora",
      },
      colors: {
        grayish: "#434343",
        accent: "#008B4A",
        darker: "#1F1F1F",
        bg: "#E5E5E5"
      },
    },
    keyframes: {
      'move': {
        "0%, 100%": {objectPosition: "left"},
        '50%':{objectPosition: "right"},
      },
    },
    animation: {
      'move':'move 11s linear infinite'
    }
  },
  plugins: [],
}

