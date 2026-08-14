/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDFB',
          100: '#FBF5EC',
          200: '#F4E9D8',
          300: '#EADCC4',
        },
        blush: {
          50: '#FCF3F1',
          100: '#F8E3DF',
          200: '#F0C9C2',
          300: '#E4A89E',
          400: '#D6897C',
          500: '#C46F60',
          600: '#A6564A',
          700: '#84443C',
          800: '#5F312C',
          900: '#3C201D',
        },
        sage: {
          50: '#F5F6F1',
          100: '#E8ECDF',
          200: '#D2DABE',
          300: '#B4C298',
          400: '#94A575',
          500: '#77895A',
          600: '#5F6E48',
          700: '#4B5739',
          800: '#37402A',
          900: '#23291B',
        },
        ink: {
          50: '#F8F6F4',
          100: '#ECE7E1',
          200: '#D8CEC3',
          300: '#B9A996',
          400: '#93816C',
          500: '#71604F',
          600: '#584A3D',
          700: '#463A30',
          800: '#332A23',
          900: '#211A16',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        signature: ['"Lindsey Signature"', 'cursive'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(51, 42, 35, 0.06), 0 12px 32px -12px rgba(51, 42, 35, 0.18)',
        lift: '0 2px 4px rgba(51, 42, 35, 0.08), 0 24px 48px -16px rgba(51, 42, 35, 0.24)',
      },
    },
  },
  plugins: [],
};
