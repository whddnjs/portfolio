module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { max: '1204px' },
      sm: { max: '768px' },
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
