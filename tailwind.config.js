/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cinzel', 'Cormorant Garamond', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: 'var(--color-black)',
        charcoal: 'var(--color-charcoal)',
        stone: 'var(--color-stone)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        glow: 'var(--color-glow)',
      },
      boxShadow: {
        ember: '0 0 38px rgba(220, 220, 210, 0.13)',
        insetStone: 'inset 0 0 35px rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        'stone-radial': 'radial-gradient(circle at 50% 20%, rgba(220,220,210,0.12), transparent 34%)',
        'void-fade': 'linear-gradient(180deg, rgba(0,0,0,0.94), rgba(11,11,12,0.86) 52%, rgba(0,0,0,0.98))',
      },
      keyframes: {
        fog: {
          '0%, 100%': { transform: 'translate3d(-4%, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(4%, -2%, 0) scale(1.04)' },
        },
        particles: {
          '0%': { transform: 'translateY(0)', opacity: '0.18' },
          '100%': { transform: 'translateY(-70px)', opacity: '0.02' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.78', filter: 'drop-shadow(0 0 16px rgba(220,220,210,0.18))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 36px rgba(220,220,210,0.28))' },
        },
      },
      animation: {
        fog: 'fog 16s ease-in-out infinite',
        particles: 'particles 9s linear infinite',
        breathe: 'breathe 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
