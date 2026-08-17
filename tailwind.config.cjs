/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Option F palette: beige ground, rose as the single accent family.
        // `rose` intentionally runs darker than `blush` so there is something on
        // the page capable of anchoring it (blush alone reads soft, not premium).
        rose: {
          50: '#FAEDE6',
          75: '#F4E0D6',
          100: '#F6E3DA',
          200: '#E8CFC8',
          300: '#D6A79A',
          400: '#C08D82',
          500: '#A9756A',
          600: '#9C6558',
          700: '#7C4C42',
          800: '#5E3931',
          900: '#3F2620',
        },
        beige: {
          50: '#FFFCFA',
          100: '#FCF6F1',
          200: '#F8F0EA',
          300: '#EDE1DA',
        },
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
        // Option F: one geometric sans across display and body.
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Kept for the pages not yet moved onto Option F, and for the
        // signature accent in the Birth Without Fear section.
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
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
