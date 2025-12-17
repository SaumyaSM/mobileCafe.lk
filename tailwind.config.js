import colors from './src/config/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.primary,
        primaryDark: colors.primaryDark,
        primaryLight: colors.primaryLight,
        burgundy: colors.burgundy,
      },
      backgroundImage: {
        'gradient-feature': colors.gradients.featureCard.css,
        'gradient-hero': colors.gradients.heroSection.css,
      },
    },
  },
  plugins: [],
}
