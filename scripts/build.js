process.chdir(__dirname)

var fs = require('fs')
var sass = require('node-sass')
var CleanCSS = require('clean-css')
var pkg = require('../package.json')
var md = require('markdown-it')('full', {
  html: true,
  linkify: true,
  typographer: true
})
var fsOpts = { encoding: 'utf8' }

buildGuide()
buildStyle()

function buildGuide () {
  var header = fs.readFileSync('../site/partials/_header.html', fsOpts)
  var footer = fs.readFileSync('../site/partials/_footer.html', fsOpts)

  var index = fs.readFileSync('../README.md', fsOpts)
  var guide = fs.readFileSync('../site/guide.md', fsOpts)

  fs.writeFile('../index.html', header + md.render(index) + footer, function (err) {
    if (err) { throw err }
    console.log('built index.html')
  })

  fs.writeFile('../guide.html', header + md.render(guide) + footer, function (err) {
    if (err) { throw err }
    console.log('built guide.html')
  })
}

function buildStyle () {
  var result = sass.renderSync({
    file: '../source/style.scss'
  })

  var normalize = fs.readFileSync('../node_modules/normalize.css/normalize.css', fsOpts)
  var style = new CleanCSS().minify(normalize + result.css).styles
  var banner = '/* ' + pkg.name + ' v' + pkg.version + ' - ' +
    getDate() + ' - ' + pkg.homepage + ' */\n'
  var imports = '@import url(http://fonts.googleapis.com/css?family=Lora:400,700,400italic);' +
    '@import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);'

  fs.writeFile('../style.css', banner + imports + style, function (err) {
    if (err) throw err
    console.log('built style.css')
  })
}

function getDate () {
  var d = new Date()
  var dd = d.getDate()
  var mm = d.getMonth() + 1
  var yyyy = d.getFullYear()

  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm

  return mm + '/' + dd + '/' + ('' + yyyy).substr(2)
}
