/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin': 'spin 5s linear infinite',
        'rotate-right': 'rotateRight 20s ease-in-out infinite',
        'rotate-left': 'rotateLeft 20s linear infinite',
        'rotate-right-fast': 'rotateRight 10s ease-in-out infinite',
        'rotate-left-fast': 'rotateLeft 10s ease-in-out infinite',
        'scale-slow': 'scaleSlow 20s ease-in-out infinite'
      },
      keyframes: {
        spin: {
          '100%': { transform: 'rotate(-360deg)' },
        },
        rotateRight: {
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateLeft: {
          '100%': { transform: 'rotate(-360deg)' },
        },
        scaleSlow: {
          '0': { transform: 'scale(1)' },
          '50%': { transform: 'scale(2)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
