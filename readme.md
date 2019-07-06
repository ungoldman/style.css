# style.css

A classless stylesheet for HTML documents.

[![latest version][npm-img]][npm-url] [![build status][travis-img]][travis-url] [![stability][stability-img]][stability-url] [![downloads][downloads-img]][npm-url]

[npm-img]: https://img.shields.io/npm/v/style.css.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/style.css
[travis-img]: https://img.shields.io/travis/css-pkg/style.css.svg?style=flat-square
[travis-url]: https://travis-ci.org/css-pkg/style.css
[stability-img]: https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square
[stability-url]: https://iojs.org/api/documentation.html#documentation_stability_index
[downloads-img]: https://img.shields.io/npm/dm/style.css.svg?style=flat-square

## About

Make a plain HTML page look good and readable with zero effort!

Check out the [style guide](https://css-pkg.github.io/style.css/guide.html) to see what it looks like.

## Features

- **system fonts:** looks native on macOS, iOS, windows, linux, firefox OS, android.
- **great for text:** designed to be highly readable and easy on the eyes.
- **very small API:** with zero classes, there's nothing to learn!
- **expertly crafted:** composed out of a balanced selection of stylistic practices.
- **we've got serif:** includes a serif variant for that edgy look.
- **minimal size:** weighs in at a modest `7kb` unminified.
- **CSS variables** New in 2.0, control colors and other settings with native CSS variables.
- **very stylish:** indeed.

## Install

[![download style.css][dl-sans-img]][dl-sans-url] [![download serif.css][dl-serif-img]][dl-serif-url]

[dl-sans-img]: https://img.shields.io/badge/download-style.css-6495ED.svg?style=flat-square
[dl-sans-url]: https://unpkg.com/style.css
[dl-serif-img]: https://img.shields.io/badge/download-serif.css-6495ED.svg?style=flat-square
[dl-serif-url]: https://unpkg.com/style.css/serif.css

```html
<!-- CDN Development (always latest) -->
<link rel="stylesheet" href="https://unpkg.com/style.css">
```

```html
<!-- CDN Production (specific release) -->
<link rel="stylesheet" href="https://unpkg.com/style.css@1.0.0">
```

```sh
# npm package
$ npm install style.css
```

```css
/* CSS file */
@import url('https://unpkg.com/style.css/style.css');
```

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello World</title>
    <link rel="stylesheet" href="https://unpkg.com/style.css@latest/style.css">
  </head>
  <body>
    <h1>Hooray!</h1>
  </body>
</html>
```

The best way to get familiar with the look and feel of `style.css` is to visit the [style guide](https://css-pkg.github.io/style.css/guide.html). Detailed examples of every HTML element (and how to write them in markdown) are available there.

### Node

```
npm install style.css --save-dev
```

You can use a CSS bundler like [sheetify](https://github.com/stackcss/sheetify#use-npm-packages) to require `style.css` like a node module.

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
- [postcss-import](https://github.com/postcss/postcss-import)

### CSS Variables

You can override defaults directly with CSS variables. Here are the default variable settings for `style.css`:

```css
:root {
  --font-body: var(--system-sans);
  --font-code: var(--system-mono);
  --font-size-body: 14px;
  --font-size-scale: 0.25vw;
  --line-height-body: 1.55;
  --line-height-pre: 1.45;
  --link-color: #0074d9;
}
```

#### Overriding settings

You can override settings like so:

```css
@import 'style.css';

:root {
  --font-size-body: 14px;
}
```

If you want to use the font stacks to override global font settings, you can do so like this:

```css
@import 'style.css';

:root {
  --font-body: var(--system-serif);
}
```

## Development

To get started, clone the repository and install dependencies with `npm install`.

### Tinker

- Run `npm start` to start the site.
- Edit `css` source files in `src/`.
- Watch the style guide at `localhost:9966/guide.html` for changes.

### Test

Run `npm test` to check the generated CSS for errors and issues not caught by the Sass compiler.

We're using [stylelint](https://github.com/stylelint/stylelint) with a slightly modified version of [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for now.

### Generate

Generate `style.css` from `src/index.css` by running `npm run build`.

### Release

Publish a new release with `npm run release`.

The `prerelease` task will generate CSS, run tests, check if the git index is dirty, and exit if there are any problems. If all goes well, `gh-release` and `npm publish` will be run sequentially.

## Thanks

`style.css` is only possible due to the excellent work of the following collaborators:

<table>
  <tbody>
    <tr><th align="left">nikolaswise</th><td><a href="https://github.com/nikolaswise">github/nikolaswise</a></td></tr>
    <tr><th align="left">paulcpederson</th><td><a href="https://github.com/paulcpederson">github/paulcpederson</a></td></tr>
    <tr><th align="left">ungoldman</th><td><a href="https://github.com/ungoldman">github/ungoldman</a></td></tr>
    <tr><th align="left">bcomnes</th><td><a href="https://github.com/bcomnes">github/bcomnes</a></td></tr>
  </tbody>
</table>

The following projects were major influences on `style.css`:

- **[writ](https://writ.cmcenroe.me)** by [programble](https://github.com/programble)
- **[normalize.css](https://github.com/necolas/normalize.css)** by [necolas](https://github.com/necolas)
- **[css-system-fonts](https://github.com/mrmrs/css-system-fonts/)** by [mrmrs](https://github.com/mrmrs)

## Contributing

Contributions welcome! Please read the [contributing guidelines](contributing.md) first.

## Sites Using `style.css`

- http://pdxnode.org
- https://bret.io
- https://ungoldman.com
- https://hypermodules.github.io/sitedown
- https://ungoldman.github.io/style.css

## Note

This module was rewritten after [`v0.1.16`](https://github.com/css-pkg/style.css/tree/v0.1.16#readme) to serve a slightly different purpose. All of the old releases along with their readme files are still available on the [releases](https://github.com/css-pkg/style.css/releases) page.

## License

[ISC](LICENSE.md)
