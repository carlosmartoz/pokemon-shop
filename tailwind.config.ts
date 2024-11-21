// Config
import type { Config } from "tailwindcss";

// Export
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#313131",
        gray: "#919191",
        neutral: "#f5f5f5",
        button: "#30a7d7",
        "button-hover": "#1b82b1",
        grass: "#9bcc50",
        poison: "#b97fc9",
        fire: "#fd7d24",
        water: "#4592c4",
        bug: "#729f3f",
        normal: "#a4acaf",
        electric: "#eed535",
        fairy: "#fdb9e9",
        fighting: "#d56723",
        psychic: "#f366b9",
        rock: "#a38c21",
        steel: "#9eb7b8",
        ice: "#51c4e7",
        ghost: "#7b62a3",
        dark: "#707070",
      },
      backgroundImage: {
        flying: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)",
        ground: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
