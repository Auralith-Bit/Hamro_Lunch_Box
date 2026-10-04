/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#E62227', leaf: '#057947', accent: '#F58220', navy: '#2B3F8C',
        cream: { 50: '#FFFBF3', 100: '#FFF5E4', 200: '#FCE8CA', 300: '#F3D6AE' },
      },
      fontFamily: { sans: ['Hind', 'Segoe UI', 'sans-serif'] },
    },
  },
  plugins: [],
};
