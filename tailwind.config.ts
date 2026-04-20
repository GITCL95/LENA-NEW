import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        // Léna Rénove — palette luxe artisanal
        corail: {
          50: '#FFF2EC',
          100: '#FDE2D3',
          200: '#FAC3A6',
          300: '#F4A882',
          400: '#EE8458',
          500: '#E8623A', // primary
          600: '#C44520', // primary dark
          700: '#9E3419',
          800: '#782712',
          900: '#531A0C',
        },
        espresso: {
          50: '#F7F3F0',
          100: '#E8DFD8',
          200: '#CDB9AC',
          300: '#A88974',
          400: '#7C5C4F', // text-light
          500: '#5C3F31',
          600: '#3F2A1F',
          700: '#2E1F17',
          800: '#1F1410', // bg-dark / text
          900: '#130C09',
        },
        ivory: {
          DEFAULT: '#FFFCFA',
          50: '#FFFEFD',
          100: '#FFFCFA', // bg
          200: '#FFF7F1',
          300: '#FFF2EC', // bg-alt
          400: '#FDE8DC',
        },
        border: {
          DEFAULT: '#F0D8CC',
          soft: '#F8E8DE',
        },
      },
      fontFamily: {
        display: ['"Corben"', 'Georgia', 'serif'],
        sans: ['"Quicksand"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial display scale
        'display-2xl': ['clamp(56px, 9vw, 128px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(48px, 7vw, 96px)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(40px, 6vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(32px, 5vw, 56px)', { lineHeight: '1.1' }],
        'display-sm': ['clamp(28px, 4vw, 42px)', { lineHeight: '1.15' }],
      },
      letterSpacing: {
        tightest: '-0.03em',
        'eyebrow': '0.18em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(31, 20, 16, 0.08)',
        'card': '0 12px 40px -12px rgba(31, 20, 16, 0.12)',
        'card-hover': '0 24px 60px -16px rgba(31, 20, 16, 0.18)',
        'premium': '0 40px 80px -24px rgba(232, 98, 58, 0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
