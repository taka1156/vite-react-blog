module.exports = {
  mode: 'jit',
  content: ['src/**/**/**/*.{ts,tsx}', 'index.html'],
  // // purge: {
  // //   enabled: process.env.NODE_ENV === 'production',
  // //   options: {
  // //     safelist: ['text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl']
  // //   }
  // // },
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
