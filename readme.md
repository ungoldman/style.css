# style.css

> Style without class.

[![latest version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]

[npm-img]: https://img.shields.io/npm/v/style.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/style.css
[travis-img]: https://img.shields.io/travis/ungoldman/style.css.svg?style=flat-square
[travis-url]: https://travis-ci.org/ungoldman/style.css

A classless stylesheet for long-form web documents.

## Features
- **minimal size:** weighs in at an adorable `10kb` (`5kb` minified).
- **great for text:** designed to be easy on the eyes.
- **system fonts:** looks native on macOS, Ubuntu, and Windows.
- **small api:** with zero classes, there's nothing to learn!
- **omakase:** composed out of a balanced selection of stylistic practices.
- **very stylish:** indeed.

## Usage

### Manual

Copy [`style.css`](/style.css) to your project's assets directory:

```sh
cp node_modules/style.css/style.css assets/
```

Then link to it where appropriate:

```html
<link rel="stylesheet" href="assets/style.css">
```

### Sheetify

You can use a CSS bundler like [sheetify](https://github.com/stackcss/sheetify#use-npm-packages) to require `style.css` like a node module.

First install it as a development dependency:

```
npm install style.css --save-dev
```

Then require it like so:

```js
const sf = require('sheetify')

sf('style.css')
```

Note that this method requires a little extra work. Any external CSS files imported with sheetify must be compiled using [browserify](https://github.com/substack/node-browserify) or [sheetify-postcss](https://github.com/stackcss/sheetify-postcss).

### CDN

Coming soon.

## Development

To get started, clone the repository and install dependencies with `npm install`.

### Tinker

- Run `npm start` to start the site.
- Edit `scss` source files in `src/`.
- Watch the style guide at `localhost:8000/guide.html` for changes.

### Build

Build `style.css` and `style.min.css` from `src/` by running `npm run release`.

## Contributing

Contributions welcome! Please read the [contributing guidelines](contributing.md) first.

## License

[ISC](LICENSE.md)
