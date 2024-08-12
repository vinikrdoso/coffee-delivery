/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      // sans: ['Baloo 2'],
    },
    fontSize: {
      xs: ['12px', '130%'],
      sm: ['14px', '130%'],
      md: ['16px', '130%'],
      lg: ['20px', '130%'],
      // xl: ['24px', '130%'],
      tag: ['10px', '130%'],
      'button-md': ['12px', '160%'],
      'button-lg': ['14px', '160%'],
      'title-xs': ['18px', '130%'],
      'title-sm': ['20px', '130%'],
      'title-md': ['24px', '130%'],
      'title-lg': ['32px', '130%'],
      'title-xl': ['48px', '130%'],
    },
    extend: {
      gridTemplateColumns: {
        '1-auto': '1fr auto',
      },
      colors: {
        yellow: {
          dark: '#C47F17',
          base: '#DBAC2C',
          light: '#F1E9C9',
        },
        purple: {
          dark: '#4B2995',
          base: '#8047F8',
          light: '#EBE5F9',
        },
        base: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5',
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}

