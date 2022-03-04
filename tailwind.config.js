const { join } = require('path');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['src/**/*.{ts,tsx}', 'index.html'],
  },
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-logo': 'spin-logo 10s ease-in-out infinite',
      },
      keyframes: {
        'spin-logo': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
