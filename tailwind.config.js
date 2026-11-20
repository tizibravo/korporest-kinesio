/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FCFBF9',
          100: '#FAF8F6',
          200: '#F5F2EE',
          300: '#EFEAE4',
        },
        blush: {
          50: '#FDF2F2',
          100: '#FBE5E5',
          200: '#F9E4E4',
          300: '#F5D0D0',
          400: '#EFB0B0',
        },
        coral: {
          50: '#FDF2F2',
          100: '#F9DCE1',
          200: '#F4BFC7',
          300: '#EE9DA8',
          400: '#E86F68',
          500: '#D95B54',
          600: '#C44A44',
          700: '#A53C37',
        },
        sand: {
          200: '#EDE6DF',
          300: '#E2D8CC',
          400: '#C4A484',
          500: '#A88B6B',
        },
        carbon: {
          700: '#2D2D34',
          800: '#25252B',
          900: '#1E1E24',
        },
        gold: {
          400: '#D4AF37',
          500: '#C9A227',
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'editorial': '0.2em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.5' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      }
    },
  },
  plugins: [],
}
