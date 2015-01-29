# style.css

*One style is all that is needed.*

[![One note is all that is needed](http://33.media.tumblr.com/tumblr_ll0hehFlU81qz8jl5o1_500.gif)](http://youtu.be/HBtRNgflb4g)

This is a work in progress. Currently it's just [normalize.css](https://github.com/necolas/normalize.css/), [top-bar.css](https://github.com/ngoldman/top-bar.css/), [gfm.css](https://github.com/ngoldman/gfm.css/), and some basics for layout.

## Principles

* Markup is semantic and minimal.
* Markdown is the sole source for primary page content.
* A site's style handles..
  1. Any HTML generated from markdown.
  2. Ancillary elements (header, nav, footer).
  3. Nothing else.
* Classes are only used outside the context of primary page content, and only when absolutely necessary.
* Bandwidth is not assumed to be broadband -- the site loads and functions quickly in suboptimal conditions.

## Usage

```
npm install style.css
```

*..do whatever you're into, then..*

```html
<link rel="stylesheet" href="style.css">
```

## Development

### Install

Install dependencies with `npm install`.

### Develop

Edit `scss` source files in `source/`. Run `npm run serve` to view changes at `localhost:3000`.

### Build

Build `style.css` from `source/` by running `npm run build`.

## License

[ISC](LICENSE.md)
