# style.css [![latest version][npm-img]][npm-url] [![build status][travis-img]][travis-url] [![stability][stability-img]][stability-url]

A classless stylesheet for markdown documents.

[![download style.css][dl-img]][dl-url]
[![download style.min.css][dl-min-img]][dl-min-url]

[npm-img]: https://img.shields.io/npm/v/style.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/style.css
[travis-img]: https://img.shields.io/travis/ungoldman/style.css.svg?style=flat-square
[travis-url]: https://travis-ci.org/ungoldman/style.css
[stability-img]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index"
[dl-img]: https://img.shields.io/badge/download-style.css%20(6.4kb)-6495ED.svg?style=flat-square
[dl-min-img]: https://img.shields.io/badge/download-style.min.css%20(5kb)-6495ED.svg?style=flat-square
[dl-url]: style.css
[dl-min-url]: style.min.css

## Features
- **minimal size:** weighs in at an adorable `5kb` when minified.
- **system fonts:** looks native on macOS, iOS, windows, linux, firefox OS, android.
- **great for text:** designed to be highly readable and easy on the eyes.
- **very small api:** with zero classes, there's nothing to learn!
- **omakase:** composed out of a balanced selection of stylistic practices.
- **very stylish:** indeed.

## Usage

```
npm install style.css --save-dev
```

You can use a CSS bundler like [sheetify](https://github.com/stackcss/sheetify#use-npm-packages) to require `style.css` like a node module!

```js
const sf = require('sheetify')

sf('style.css')
```

Note that any external CSS files imported with sheetify must be compiled using [browserify](https://github.com/substack/node-browserify) or [sheetify-postcss](https://github.com/stackcss/sheetify-postcss).

Here are some other modules out there for requiring CSS using JavaScript that should also work just fine:

- [browserify-css](https://www.npmjs.com/package/browserify-css)
- [css-modules](https://github.com/css-modules/css-modules)
- [parcelify](https://www.npmjs.com/package/parcelify)
- [rework-npm](https://www.npmjs.com/package/rework-npm)

See something missing from this list? Please make an issue or send a pull request!

### Sass

You can also use this as a [Sass](http://sass-lang.com/) library.

```scss
@import 'node_modules/style.css/src/scss/style.scss'
```

### Manual

If you'd rather keep it simple, you can do it the old fashioned way. Just copy [`style.css`](style.css) into your project, then link to it like so:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Hooray!</h1>
  </main>
</body>
</html>
```

## Development

To get started, clone the repository and install dependencies with `npm install`.

### Tinker

- Run `npm start` to start the site.
- Edit `scss` source files in `src/`.
- Watch the style guide at `localhost:8000/guide.html` for changes.

### Test

Run `npm test` to check the generated CSS for errors and issues not caught by the Sass compiler.

We're using [stylelint](https://github.com/stylelint/stylelint) with a slightly modified version of [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for now.

### Release

Generate `style.css` and `style.min.css` from `src/` by running `npm run release`.

## Thanks

`style.css` is only possible due to the excellent work of the following collaborators:

<table>
  <tbody>
    <tr><th align="left">nikolaswise</th><td><a href="https://github.com/nikolaswise">github/nikolaswise</a></td></tr>
    <tr><th align="left">paulcpederson</th><td><a href="https://github.com/paulcpederson">github/paulcpederson</a></td></tr>
    <tr><th align="left">ungoldman</th><td><a href="https://github.com/ungoldman">github/ungoldman</a></td></tr>
  </tbody>
</table>

The following projects were major influences on `style.css`:

- **[writ](https://writ.cmcenroe.me)** by [programble](https://github.com/programble)
- **[normalize.css](https://github.com/necolas/normalize.css)** by [necolas](https://github.com/necolas)
- **[css-system-fonts](https://github.com/mrmrs/css-system-fonts/)** by [mrmrs](https://github.com/mrmrs)

## Contributing

Contributions welcome! Please read the [contributing guidelines](contributing.md) first.

## Note

This module was rewritten after [`v0.1.16`](https://github.com/ungoldman/style.css/tree/v0.1.16#readme) to serve a slightly different purpose. All of the old releases along with their readme files are still available on the [releases](https://github.com/ungoldman/style.css/releases) page.

## License

[ISC](LICENSE.md)
