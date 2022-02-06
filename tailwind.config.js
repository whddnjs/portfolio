module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: { max: '1536px' },
      md: { max: '992px' },
      xs: { max: '576px' },
    },
    extend: {
      fontFamily: {
        'nanum-light': ['nanum-light'],
        'nanum-regular': ['nanum-regular'],
        'nanum-bold': ['nanum-bold'],
        'nanum-eb': ['nanum-eb'],
        'nanum-acl': ['nanum-acl'],
        'nanum-acb': ['nanum-acb'],
      },
    },
  },
  plugins: [],
};
