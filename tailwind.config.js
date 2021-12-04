module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        "mintable-light-gray" : "#727272",
        "mintable-gray" : "#2D2D2D",
        "mintable-light-purple" : "#EAEAFF",
        "mintable-purple" : "#550DED",
        "mintable-dark-purple" : "#2C0346",
        "mintable-background": "#FAFAFA",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
