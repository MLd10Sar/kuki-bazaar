/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Afghan-inspired color palette
        'saffron': '#f4a261',
        'pomegranate': '#e63946', 
        'turquoise': '#2a9d8f',
        'desert-sand': '#e9c46a',
        'deep-red': '#8b2635',
        'warm-white': '#fefae0',
        'charcoal': '#264653',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'sparkle': 'sparkle 2s infinite',
        'bounce': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-afghan': 'linear-gradient(135deg, #f4a261 0%, #e9c46a 50%, #2a9d8f 100%)',
      },
      boxShadow: {
        'afghan': '0 25px 50px -12px rgba(244, 162, 97, 0.25)',
      },
    },
  },
  plugins: [],
}