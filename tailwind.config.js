/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#f8fafc',
          secondary: '#ffffff',
          tertiary: '#f1f5f9',
        },
        futuristic: {
          teal: {
            DEFAULT: '#0f766e',
            glow: 'rgba(15, 118, 110, 0.15)',
          },
          blue: {
            DEFAULT: '#0284c7',
            glow: 'rgba(2, 132, 199, 0.15)',
          },
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'futuristic': '0 10px 30px -10px rgba(15, 118, 110, 0.08)',
        'futuristic-hover': '0 20px 40px -15px rgba(15, 118, 110, 0.15)',
        'futuristic-blue': '0 10px 30px -10px rgba(2, 132, 199, 0.08)',
        'futuristic-blue-hover': '0 20px 40px -15px rgba(2, 132, 199, 0.15)',
      }
    },
  },
  plugins: [],
}
