import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a1f',
          900: '#0a0e27',
          800: '#0f1538',
          700: '#151d4d',
          600: '#1b2562',
          500: '#243080',
        },
        gold: {
          700: '#85651d',
          600: '#b08930',
          500: '#c9a84c',
          400: '#d4b85c',
          300: '#e0c878',
          200: '#ecdbaa',
          100: '#f5edd4',
          50: '#fbf7ea',
        },
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0a0e27 0%, #0f1538 50%, #151d4d 100%)',
        'gradient-gold': 'linear-gradient(135deg, #c9a84c 0%, #d4b85c 50%, #e0c878 100%)',
        'gradient-navy-subtle': 'linear-gradient(180deg, #0a0e27 0%, #0f1538 100%)',
      },
    },
  },
  plugins: [],
}
export default config
