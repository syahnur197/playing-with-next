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
        "mintable-gray" : "#2D2D2D",
        "mintable-light-gray" : "#EAEAFF",
        "mintable-light-purple" : "#EAEAFF",
        "mintable-purple" : "#550DED",
        "mintable-dark-purple" : "#2C0346",
        "mintable-background": "#FAFAFA",
        "primary": {
          '50': '#0dea79',
          '100': '#13d06e',
          '200': '#16b762',
          '300': '#1a9f57',
          '400': '#1b884d',
          '500': '#187743',
          '600': '#0c7232',
          '700': '#026d21',
          '800': '#005e13',
          '900': '#004d09',
        },
        "secondary": {
          '50': '#f7f2fc',
          '100': '#dfccf4',
          '200': '#c7a6ec',
          '300': '#b080e5',
          '400': '#985add',
          '500': '#8034d5',
          '600': '#6b2bb2',
          '700': '#55228f',
          '800': '#40186b',
          '900': '#2a0f48',
        },
        "tertiary": {
          '50': '#aae4ff',
          '100': '#95ddff',
          '200': '#80d9ff',
          '300': '#6cd6ff',
          '400': '#57d0ff',
          '500': '#42caff',
          '600': '#31ace4',
          '700': '#1f8fc9',
          '800': '#0e6fad',
          '900': '#00528e',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
