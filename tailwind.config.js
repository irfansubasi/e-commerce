/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#16697A',
        secondary: '#FFA62B',
        accent: '#00A1C1',
        txt: '#252B42',
        secondTxt: '#737373',
      },

      backgroundImage: {
        heroBg1: "url('../../assets/images/hero/hero1.jpg')",
        heroBg2: "url('../../assets/images/hero/hero2.jpg')",
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
  safelist: ['bg-heroBg1', 'bg-heroBg2'],
};
