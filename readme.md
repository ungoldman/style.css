# style.css

> One style is all that is needed.

[![latest version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]

[![One note is all that is needed][joke-url]][joke-vid]

[npm-img]: https://img.shields.io/npm/v/style.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/style.css
[travis-img]: https://img.shields.io/travis/ungoldman/style.css.svg?style=flat-square
[travis-url]: https://travis-ci.org/ungoldman/style.css
[joke-url]: http://33.media.tumblr.com/tumblr_ll0hehFlU81qz8jl5o1_500.gif
[joke-vid]: http://youtu.be/HBtRNgflb4g

An attempt at creating a set of independent and complementary style modules.

Includes:

* [top-bar.css](https://github.com/ungoldman/top-bar.css/)
* [gfm.css](https://github.com/ungoldman/gfm.css/)
* and some basics for page layout

Built on top of [normalize.css](https://github.com/necolas/normalize.css/).

## Usage

```
npm install style.css
```

*..do whatever you're into, then..*

```html
<link rel="stylesheet" href="path/to/style.css">
```

## Principles

* Markup is semantic and minimal.
* Markdown is the sole source for primary page content.
* A site's style handles..
  1. Any HTML generated from markdown.
  2. Ancillary elements (header, nav, footer).
  3. Nothing else.
* Classes are only used outside the context of primary page content, and only when absolutely necessary.
* Bandwidth is not assumed to be broadband -- the site loads and functions quickly in suboptimal conditions.

## Development

### Install

Install dependencies with `npm install`.

### Develop

Edit `scss` source files in `source/`. Run `npm run serve` to view changes at `localhost:3000`.

### Build

Build `style.css` from `source/` by running `npm run build`.

## Contributing

Contributions welcome! Please read the [contributing guidelines](contributing.md) first.

## License

[ISC](LICENSE.md)
