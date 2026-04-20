/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sapa: {
          canvas: '#F5F5F7',
          surface: '#FFFFFF',
          primary: '#300B55',
          secondary: '#736F6F',
          accent: '#7A47A6',
          accentDark: '#5A3282',
          warning: '#FFC148',
          highlight: '#FFEDCA',
        }
      },
      fontFamily: {
        sans: ['Campton', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Request', 'Campton', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Campton', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.3s ease-out forwards',
        'slide-out-right': 'slideOutRight 0.3s ease-out forwards',
        'nav-enter': 'navEnter 0.5s ease-out forwards',
        'gradient-shift': 'gradientShift 3s ease infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        navEnter: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      dropShadow: {
        'heading': '0 2px 4px rgba(48, 11, 85, 0.15)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(122, 71, 166, 0.3)',
        'glow-lg': '0 0 40px rgba(122, 71, 166, 0.4)',
        'cinematic': '0 30px 60px rgba(48, 11, 85, 0.12)',
      },
    },
  },
  plugins: [],
}