/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-cyan': '#0C1A2A',
      },
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
}
);
