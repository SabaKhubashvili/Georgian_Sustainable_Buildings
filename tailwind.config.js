/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'green':'#00A578',
        'purple':'#AA80F9',
        'orange':'#F8924F',
        'blue':'#096DD9',
        'darkpurple':'#282D6C',
        'lightPurple':'#73779F'
      },
      borderColor:{
        'transparentButton':'#096DD91A'
      },
      fontFamily: {
        Sf: ['var(--font-Sf_Pro)']
      },
      content:{
        'blue-pattern':'url("../../public/svg/Backgrounds/Blue-Pattern.svg")',
        'dot-pattern':'url("../../public/svg/Backgrounds/Dot-Pattern.svg")',
        'dot-pattern-green':'url("../../public/svg/Backgrounds/Dot-Pattern-green.svg")',
      }
    },
  },
  plugins: [],
}
