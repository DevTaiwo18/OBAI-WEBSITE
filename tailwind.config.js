/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#171717',   // Main text color
        'brand-tertiary': '#FF9F00', // Tertiary color
        'brand-primary': '#FF5F1E',  // Primary color
        'brand-secondary': '#FFD900', // Secondary color
        'brand-white': '#FFFDF9',  // Light text color
        'off-white': '#F9F4E8',  // Off-white color
      },
      boxShadow: {
        'custom': '0px 9px 20px rgba(225, 227, 251, 0.7)',  // Custom shadow with the color #E1E3FB
      },
      borderRadius: {
        'lg-rounded': '30px',  // Custom large rounded corners
      },
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }, // Move fully out of the container
        },
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' }, // Move fully out of the container
        },
      },
      animation: {
        'scroll-down': 'scrollDown 12s linear infinite', // Adjust timing for smooth flow
        'scroll-up': 'scrollUp 12s linear infinite',
      },
    },
  },
  plugins: [],
};
