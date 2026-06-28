/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', // Vibrant Teal
        background: '#0d0e10', // Dark Gray
        foreground: '#f1f5f9', // Light Slate
        muted: {
          DEFAULT: '#141618',
          foreground: '#a1a1aa'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
