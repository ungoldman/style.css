var fs = require('fs');
var sass = require('node-sass');
var CleanCSS = require('clean-css');
var pkg = require('./package.json');
var md = require('markdown-it')('full', {
  html: true,
  linkify: true,
  typographer: true
});

sass.render({
  file: './source/index.scss',
  success: buildStyle
});

buildGuide();

function buildGuide () {
  var guide = fs.readFileSync('./source/site/guide.md', { encoding: 'utf8' });
  var header = fs.readFileSync('./source/site/partials/_header.html', { encoding: 'utf8' });
  var footer = fs.readFileSync('./source/site/partials/_footer.html', { encoding: 'utf8' });
  var html = md.render(guide);
  fs.writeFile('guide.html', header + html + footer, function (err) {
    if (err) { throw err; }
    console.log('built guide.html');
  });
}

function buildStyle (result) {
  var normalize = fs.readFileSync('./node_modules/normalize.css/normalize.css', { encoding: 'utf8' });
  var gfm = fs.readFileSync('./node_modules/github-markdown-css/github-markdown.css', { encoding: 'utf8' });
  var style = new CleanCSS().minify(normalize + gfm + result.css).styles;
  var banner = '/* ' + pkg.name + ' v' + pkg.version  + ' - ' +
                getDate() + ' - ' + pkg.homepage + ' */\n';
  var imports = '@import url(http://fonts.googleapis.com/css?family=Lora:400,700,400italic);' +
                '@import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);';
  fs.writeFile('style.css', banner + imports + style, function (err) {
    if (err) { throw err; }
    console.log('built style.css');
  });
}

function getDate () {
  var d = new Date();
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();

  if (dd<10) { dd='0'+dd; }
  if (mm<10) { mm='0'+mm; }

  return mm+'/'+dd+'/'+(''+yyyy).substr(2);
}
