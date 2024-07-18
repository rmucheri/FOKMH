const withMT = require("@material-tailwind/react/utils/withMT");
const path = require('path');

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    path.join(__dirname, "node_modules", "@material-tailwind/react", "components/**/*.{js,ts,jsx,tsx}"),
    path.join(__dirname, "node_modules", "@material-tailwind/react", "theme/components/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-and-fade-in': 'fade-in 3s ease-in forwards',
      },
      backgroundImage: {
        'hospital': "url('/src/assets/images/hospital.jpg')",
        'operation': "url('/src/assets/images/operation.jpg')",
        'xrays': "url('/src/assets/images/xrays.jpg')"
      },
    },
  },
  plugins: [],
});
