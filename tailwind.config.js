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
        'float-orb-1': 'floatOrb1 20s ease-in-out infinite',
        'float-orb-2': 'floatOrb2 25s ease-in-out infinite',
        'float-orb-3': 'floatOrb3 18s ease-in-out infinite',
        'float-orb-4': 'floatOrb4 22s ease-in-out infinite',
        'light-ray-1': 'lightRay1 4s ease-in-out infinite',
        'light-ray-2': 'lightRay2 5s ease-in-out infinite',
        'light-ray-3': 'lightRay3 6s ease-in-out infinite',
        'pulse-glow-1': 'pulseGlow1 8s ease-in-out infinite',
        'pulse-glow-2': 'pulseGlow2 10s ease-in-out infinite',
        'shine-dot-float': 'shineDotFloat 4s ease-in-out infinite',
        'moving-shine': 'movingShine 20s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
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
        floatOrb1: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.12',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.05)',
            opacity: '0.15',
          },
          '66%': {
            transform: 'translate(-20px, 30px) scale(0.95)',
            opacity: '0.12',
          },
        },
        floatOrb2: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.12',
          },
          '33%': {
            transform: 'translate(-40px, 40px) scale(1.08)',
            opacity: '0.15',
          },
          '66%': {
            transform: 'translate(25px, -30px) scale(0.92)',
            opacity: '0.12',
          },
        },
        floatOrb3: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.1',
          },
          '50%': {
            transform: 'translate(35px, -35px) scale(1.1)',
            opacity: '0.12',
          },
        },
        floatOrb4: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.1',
          },
          '50%': {
            transform: 'translate(-30px, 40px) scale(1.05)',
            opacity: '0.12',
          },
        },
        lightRay1: {
          '0%, 100%': {
            opacity: '0.05',
            transform: 'scaleY(1)',
          },
          '50%': {
            opacity: '0.15',
            transform: 'scaleY(1.05)',
          },
        },
        lightRay2: {
          '0%, 100%': {
            opacity: '0.08',
            transform: 'scaleY(1)',
          },
          '50%': {
            opacity: '0.18',
            transform: 'scaleY(1.08)',
          },
        },
        lightRay3: {
          '0%, 100%': {
            opacity: '0.05',
            transform: 'scaleY(1)',
          },
          '50%': {
            opacity: '0.12',
            transform: 'scaleY(1.03)',
          },
        },
        pulseGlow1: {
          '0%, 100%': {
            opacity: '0.06',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.1',
            transform: 'scale(1.1)',
          },
        },
        pulseGlow2: {
          '0%, 100%': {
            opacity: '0.06',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.1',
            transform: 'scale(1.08)',
          },
        },
        shineDotFloat: {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'translate(0, 0) scale(1)',
            boxShadow: '0 0 3px rgba(99, 102, 241, 0.3), 0 0 6px rgba(99, 102, 241, 0.15)',
          },
          '25%': {
            opacity: '0.4',
            transform: 'translate(20px, -25px) scale(1.2)',
            boxShadow: '0 0 5px rgba(99, 102, 241, 0.4), 0 0 10px rgba(99, 102, 241, 0.2)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translate(-15px, -40px) scale(1.3)',
            boxShadow: '0 0 6px rgba(99, 102, 241, 0.5), 0 0 12px rgba(99, 102, 241, 0.25)',
          },
          '75%': {
            opacity: '0.4',
            transform: 'translate(25px, -20px) scale(1.15)',
            boxShadow: '0 0 5px rgba(99, 102, 241, 0.4), 0 0 10px rgba(99, 102, 241, 0.2)',
          },
        },
        movingShine: {
          '0%': {
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.25',
          },
          '25%': {
            transform: 'translate(30px, -40px) scale(1.2)',
            opacity: '0.4',
          },
          '50%': {
            transform: 'translate(-20px, -80px) scale(1)',
            opacity: '0.3',
          },
          '75%': {
            transform: 'translate(40px, -120px) scale(1.15)',
            opacity: '0.35',
          },
          '100%': {
            transform: 'translate(0, -160px) scale(1)',
            opacity: '0.2',
          },
        },
        sparkle: {
          '0%, 100%': {
            opacity: '0',
            transform: 'scale(0) rotate(0deg)',
          },
          '50%': {
            opacity: '0.4',
            transform: 'scale(1.2) rotate(180deg)',
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

