/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#141414',
        'bg-tertiary': '#1f1f1f',
        'text-primary': '#f2f0e9',
        'text-secondary': '#8a8580',
        'accent': '#ff4d00',
        'accent-dim': '#b33600',
        'tape': '#c4b9a8',
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'Haettenschweiler', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'Courier New', 'monospace'],
        script: ['Caveat', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(2px, 2px)' },
        },
      },
    },
  },
  plugins: [],
}
