/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#0066CC',
        'apple-gray': '#86868B',
        'apple-light-gray': '#F5F5F7',
        'apple-dark': '#1D1D1F',
        'apple-white': '#FFFFFF',
        'apple-nav': 'rgba(255, 255, 255, 0.9)',
        'apple-border': 'rgba(0, 0, 0, 0.1)',
        'apple-card-bg': '#FFFFFF',
        'apple-hover-blue': '#0071E3',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Icons"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'hover-lift': 'hoverLift 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        hoverLift: {
          'from': {
            transform: 'translateY(0)',
          },
          'to': {
            transform: 'translateY(-4px)',
          },
        }
      },
      boxShadow: {
        'apple': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'apple-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'apple-button': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
