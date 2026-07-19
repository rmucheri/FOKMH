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
      fontFamily: {
        // Modern geometric display font for brand marks and hero headlines.
        display: ["Outfit", "Poppins", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#3ea498", // primary CTA / accent (Req 3.1)
          "teal-dark": "#2d8276", // single canonical hover shade (replaces #2c7b72)
        },
        // cyan-600, orange-500, orange-600 come from Tailwind defaults (in-palette)
      },
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
        // Replaces undefined bg-gradient-primary/secondary; palette-only (teal -> cyan-600)
        "brand-gradient": "linear-gradient(to right, #3ea498, #0891b2)",
      },
    },
  },
  plugins: [],
});
