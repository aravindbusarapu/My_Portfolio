//  @type {import('tailwindcss').Config} 
// tailwind.config.js

const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // '2xl': '1536px',
     

    },
    colors: {
     
      'blue': '#3b82f6',
     
      'gray': {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
      'polly': '#FF004C',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#22C55E',
      'white': '#FFFFFF',
      'sky': '#0ea5e9', // Change the object to a string
      'purple': "#6633FF",
      'black': '#000000',
      
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontFamily: {
      sans: ["Figtree", 'sans-serif'],

    },
    extend: {
      boxShadow: {
        'sm': '0px 3px 8px 0px #3341550D,0px 0px 6px 0px #33415503',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      backgroundImage: {
        'gr1': "linear-gradient(268deg, rgba(255, 97, 97, 0.1) 1.86%, rgba(124, 60, 255, 0.1) 96.92%)",
        'footer-texture': "",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
    }         


    },
  },
  plugins: [

  ],
}

