import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        coal: {
          950: '#0a0a0a',
          900: '#0f0f10',
          800: '#1a1a1b',
          700: '#242426'
        },
        gold: {
          50: '#fff8e6',
          200: '#f6d78b',
          400: '#d1a953',
          600: '#b2832f',
          800: '#7a5a1c'
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(209, 169, 83, 0.25)'
      },
      backgroundImage: {
        'gold-sheen': 'radial-gradient(circle at top right, rgba(209, 169, 83, 0.28), transparent 45%)',
        'dark-sheen': 'radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 40%)'
      }
    }
  },
  plugins: []
}

export default config
