# style.css [![latest version][npm-img]][npm-url] [![build status][travis-img]][travis-url] [![stability][stability-img]][stability-url]

[npm-img]: https://img.shields.io/npm/v/style.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/style.css
[travis-img]: https://img.shields.io/travis/ungoldman/style.css.svg?style=flat-square
[travis-url]: https://travis-ci.org/ungoldman/style.css
[stability-img]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index"

A classless stylesheet for markdown documents.

## Features
- **minimal size:** weighs in at an adorable `5kb` when minified.
- **system fonts:** looks native on macOS, iOS, windows, linux, firefox OS, android.
- **great for text:** designed to be highly readable and easy on the eyes.
- **very small api:** with zero classes, there's nothing to learn!
- **omakase:** composed out of a balanced selection of stylistic practices.
- **very stylish:** indeed.

## Usage

### Node

```
npm install style.css --save-dev
```

You can use a CSS bundler like [sheetify](https://github.com/stackcss/sheetify#use-npm-packages) to require `style.css` like a node module!

```js
const sf = require('sheetify')

sf('style.css')
```

Note that this method requires a little extra work behind the scenes. Any external CSS files imported with sheetify must be compiled using [browserify](https://github.com/substack/node-browserify) or [sheetify-postcss](https://github.com/stackcss/sheetify-postcss).

Here are some other modules out there for requiring CSS using JavaScript:

- [browserify-css](https://www.npmjs.com/package/browserify-css)
- [css-modules](https://github.com/css-modules/css-modules)
- [parcelify](https://www.npmjs.com/package/parcelify)
- [rework-npm](https://www.npmjs.com/package/rework-npm)

See something missing from this list? Please make an issue or send a pull request!

### Manual

Copy [`style.css`](/style.css) into your project, then link to it:

```html
<link rel="stylesheet" href="assets/style.css">
```

## Development

To get started, clone the repository and install dependencies with `npm install`.

### Tinker

- Run `npm start` to start the site.
- Edit `scss` source files in `src/`.
- Watch the style guide at `localhost:8000/guide.html` for changes.

### Release

Generate `style.css` and `style.min.css` from `src/` by running `npm run release`.

## Contributing

Contributions welcome! Please read the [contributing guidelines](contributing.md) first.

## License

[ISC](LICENSE.md)
