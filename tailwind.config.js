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
        muted: '#BDBDBD',
        customGreen: '#23856D',
      },

      backgroundImage: {
        heroBg1: "url('../../assets/images/hero/hero1.jpg')",
        heroBg2: "url('../../assets/images/hero/hero2.jpg')",
        heroBg3: "url('../../assets/images/hero/hero3.jpg')",
        heroBg4: "url('../../assets/images/hero/hero4.jpg')",
        CategoryCard1: "url('../../assets/images/shop/shopCard1.jpg')",
        CategoryCard2: "url('../../assets/images/shop/shopCard2.jpg')",
        CategoryCard3: "url('../../assets/images/shop/shopCard3.jpg')",
        CategoryCard4: "url('../../assets/images/shop/shopCard4.jpg')",
        CategoryCard5: "url('../../assets/images/shop/shopCard5.jpg')",
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
  safelist: [
    'bg-heroBg1',
    'bg-heroBg2',
    'bg-heroBg3',
    'bg-heroBg4',
    'bg-CategoryCard1',
    'bg-CategoryCard2',
    'bg-CategoryCard3',
    'bg-CategoryCard4',
    'bg-CategoryCard5',
  ],
};
