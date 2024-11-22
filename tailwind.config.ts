// Config
import type { Config } from "tailwindcss";

// Export
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#313131",
        gray: "#919191",
        neutral: "#f5f5f5",
        blue: "#30a7d7",
        "blue-hover": "#1b82b1",
        green: "#4dad5b",
        "green-hover": "#369143",
        orange: "#ee6b2f",
        "orange-hover": "#da471b",
        normal: "#a4acaf",
        fire: "#fd7d24",
        water: "#4592c4",
        electric: "#eed535",
        grass: "#9bcc50",
        ice: "#51c4e7",
        fighting: "#d56723",
        poison: "#b97fc9",
        "ground-alt": "#f7de3f",
        "flying-alt": "#3dc7ef",
        psychic: "#f366b9",
        bug: "#729f3f",
        rock: "#a38c21",
        ghost: "#7b62a3",
        dark: "#707070",
        "dragon-alt": "#53a4cf",
        steel: "#9eb7b8",
        fairy: "#fdb9e9",
      },
      backgroundImage: {
        ground: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        flying: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
