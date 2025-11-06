/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'gradient': 'gradient 3s ease infinite',
        'scroll': 'scroll 2s infinite',
        'gradientShift': 'gradientShift 8s ease infinite',
        'floatCode': 'floatCode 15s infinite ease-in-out',
        'pulseBeam': 'pulseBeam 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        scroll: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(12px)',
            opacity: '0',
          },
        },
        gradientShift: {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        floatCode: {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: '0.2',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-40px) translateX(-10px)',
            opacity: '0.2',
          },
          '75%': {
            transform: 'translateY(-20px) translateX(5px)',
            opacity: '0.3',
          },
        },
        pulseBeam: {
          '0%, 100%': {
            opacity: '0.1',
          },
          '50%': {
            opacity: '0.3',
          },
        },
      },
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
}

