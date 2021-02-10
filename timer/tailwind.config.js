module.exports = {
  purge: {
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '10xl': ['20rem', { lineHeight: '1' }],
      },
      fontFamily: {
        body: ['Helvetica'],
      },
    },
  },
  variants: {},
  plugins: [],
};
