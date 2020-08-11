module.exports = (ctx) => ({
  map: { inline: false },
  plugins: {
    'postcss-import': { root: ctx.file.dirname },
    'postcss-url': {
      url: 'copy',
      useHash: true,
      assetsPath: 'assets'
    },
    'autoprefixer': {},
    'postcss-nesting': {},
    'postcss-extend': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {}
  }
})
