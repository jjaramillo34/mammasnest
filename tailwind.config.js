/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zara: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          cream: {
            50: '#fefefe',
            100: '#fefefe',
            200: '#fdfdfd',
            300: '#fbfbfb',
            400: '#f8f8f8',
            500: '#f5f5f5',
            600: '#e8e8e8',
            700: '#d1d1d1',
            800: '#b8b8b8',
            900: '#9e9e9e',
          }
        },
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'zara-xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
        'zara-sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.1em' }],
        'zara-base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.05em' }],
        'zara-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.05em' }],
        'zara-xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.05em' }],
        'zara-2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.025em' }],
        'zara-3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.025em' }],
        'zara-4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.025em' }],
        'zara-5xl': ['3rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        'zara-6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0.025em' }],
        'zara-7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0.025em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'zara-hover': 'zaraHover 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zaraHover: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'zara': '1400px',
      },
    },
  },
  plugins: [],
} 