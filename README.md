# style.css

[![NPM](https://nodei.co/npm/style.css.png?compact=true)](https://nodei.co/npm/style.css/)

![One note is all that is needed](http://33.media.tumblr.com/tumblr_ll0hehFlU81qz8jl5o1_500.gif)

*One style is all that is needed.*

## principles

* Markup is semantic and minimal.
* Markdown is the sole source for primary page content.
* A site's style handles..
  1. Any HTML generated from markdown.
  2. Ancillary elements (header, nav, footer).
  3. Nothing else.
* Classes are only used outside the context of primary page content, and only when absolutely necessary.
* Bandwidth is not assumed to be broadband -- the site loads and functions quickly in suboptimal conditions.

## usage

```
npm install style.css
```

do whatever you're into

```html
<link rel="stylesheet" href="style.css">
```

## development

### install

Install dependencies with `npm install`.

### develop

Edit `scss` source files in `source/`. Run `npm run serve` to view changes at `localhost:3000`.

### build

Build `style.css` from `source/` by running `npm run build`.

## license

[ISC](LICENSE)
