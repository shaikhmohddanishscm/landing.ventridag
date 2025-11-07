/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#ff0040',
          600: '#e00038',
          700: '#c00030',
          900: '#7f0020',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'gradient': 'gradient 8s linear infinite',
        'blob': 'blob 7s infinite',
      },
      animationDelay: {
        '2000': '2s',
        '4000': '4s',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 64, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 64, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
