module.exports = {
  purge: [`./src/**/*.js`],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        '2lg': ['1.18rem', { lineHeight: '1.75rem;' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '10xl': ['20rem', { lineHeight: '1' }],
      },
      fontFamily: {
        body: ['Helvetica'],
        source: ['Source Code Pro for Powerline', 'serif'],
        monospace: ['monospace'],
      },
      colors: {
        newblack: '#1A1A1A',
        newyellow: '#F1FA8C',
        newgray: '#444444',
        newblue: '#0645ad',
        codebg: 'rgb(246, 248, 250)',
        codekeyword: 'rgb(215, 58, 73)',
        codetext: 'rgb(36, 41, 46)',
        codefunc: 'rgb(215, 58, 73)',
        codeconst: 'rgb(0, 92, 197)',
        codestring: 'rgb(3, 47, 98)',
        slider: '#f0ede2',
        newred: '#a30400',
        bibleborder: '#dddcda',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
