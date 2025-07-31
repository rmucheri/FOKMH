const withMT = require("@material-tailwind/react/utils/withMT");
const path = require("path");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    path.join(
      __dirname,
      "node_modules",
      "@material-tailwind/react",
      "components/**/*.{js,ts,jsx,tsx}"
    ),
    path.join(
      __dirname,
      "node_modules",
      "@material-tailwind/react",
      "theme/components/**/*.{js,ts,jsx,tsx}"
    ),
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        "slide-and-fade-in": "fade-in 3s ease-in forwards",
        "slide-down": "slideDown 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        hospital: "url('/src/assets/images/hospital.jpg')",
        operation: "url('/src/assets/images/operation.jpg')",
        xrays: "url('/src/assets/images/xrays.jpg')",
      },
    },
  },
  plugins: [],
});
