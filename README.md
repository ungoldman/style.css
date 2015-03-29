# style.css

*One style is all that is needed.*

[![One note is all that is needed](http://33.media.tumblr.com/tumblr_ll0hehFlU81qz8jl5o1_500.gif)](http://youtu.be/HBtRNgflb4g)

An attempt at creating a set of independent and complementary style modules.

Includes:

* [top-bar.css](https://github.com/ngoldman/top-bar.css/)
* [gfm.css](https://github.com/ngoldman/gfm.css/)
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

`style.css` is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## License

[ISC](LICENSE.md)
