/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'thai-flag': '#00247d',
        'floral-pattern': '#FFB6C1',
        'thai-pattern': '#f7c948',
      },
      backgroundImage: {
        'floral-pattern': "url('/path/to/floral-pattern.png')",
      },
      animation: {
        'pulse': 'pulse 2s infinite',
        'spin-slow': 'spin 30s linear infinite',
        'fade-in': 'fadeIn 2s ease-in-out',
        'slide-in': 'slideIn 1s ease-out',
      },
      fontFamily: {
        'heading': ['"Great Vibes"', 'cursive'],
        'body': ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
