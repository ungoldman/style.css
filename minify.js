const fs = require('fs')
const postcss = require('postcss')
const cssnano = require('cssnano')

const css = fs.readFileSync('style.css', 'utf8')

postcss([cssnano()])
  .process(css, { from: 'style.css', to: 'style.min.css' })
  .then(result => fs.writeFileSync('style.min.css', result.css))
