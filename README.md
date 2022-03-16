# style.css

A classless stylesheet for HTML documents.

[![npm][npm-image]][npm-url]
[![build][build-image]][build-url]
[![downloads][downloads-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/style.css.svg
[npm-url]: https://www.npmjs.com/package/style.css
[build-image]: https://github.com/ungoldman/style.css/actions/workflows/tests.yml/badge.svg
[build-url]: https://github.com/ungoldman/style.css/actions/workflows/tests.yml
[downloads-image]: https://img.shields.io/npm/dm/style.css.svg

## About

Make a plain HTML page look good and readable with zero effort!

Check out the [style guide](https://ungoldman.github.io/style.css/guide.html) to see what it looks like.

## Features

- **system fonts:** looks native on macOS, iOS, windows, linux, firefox OS, android.
- **great for text:** designed to be highly readable and easy on the eyes.
- **very small API:** with zero classes, there's nothing to learn!
- **expertly crafted:** composed out of a balanced selection of stylistic practices.
- **we've got serif:** includes a serif variant for that edgy look.
- **minimal size:** weighs in at a modest `7kb` unminified.
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

The best way to get familiar with the look and feel of `style.css` is to visit the [style guide](https://ungoldman.github.io/style.css/guide.html). Detailed examples of every HTML element (and how to write them in markdown) are available there.

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

### Sass

You can also use `style.css` with [Sass](http://sass-lang.com/).

```scss
@import 'path/to/node_modules/style.css/style.scss';
```

Same goes for the serif variant.

```scss
@import 'path/to/node_modules/style.css/serif.scss';
```

Sass allows you to override defaults more directly. Here are the default settings for `style.css`:

```scss
$font-body:         $system-sans !default;
$font-code:         $system-mono !default;
$font-size-body:    14px !default;
$font-size-scale:   0.25vw !default;
$line-height-body:  1.55 !default;
$line-height-pre:   1.45 !default;
$link-color:        #0074d9 !default;
```

#### Using Sass with `node_modules`

**Protip**: Sass is easier to use with `node_modules` when you use the `include-path` option. Here's an example of how to use it with `node-sass` on the command line.

```
node-sass style.scss -o style.css --include-path node_modules/
```

This way you can exclude the `node_modules/` path prefix in your Sass source code.

#### Overriding settings

You can override settings like so:

```scss
$font-size-body: 14px;

@import 'style.css/style.scss';
```

If you want to use the font stacks to override global font settings, you can do so like this:

```scss
@import 'style.css/src/scss/fonts.scss';

$font-body: $system-serif;

@import 'style.css/style.scss';
```

The above snippet is how [`serif.css`](serif.css) is generated.

## Development

To get started, clone the repository and install dependencies with `npm install`.

### Tinker

- Run `npm start` to start the site.
- Edit `scss` source files in `src/`.
- Watch the style guide at `localhost:8000/guide.html` for changes.

### Test

Run `npm test` to check the generated CSS for errors and issues not caught by the Sass compiler.

We're using [stylelint](https://github.com/stylelint/stylelint) with a slightly modified version of [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for now.

### Generate

Generate `style.css` from `style.scss` by running `npm run generate`.

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
  </tbody>
</table>

The following projects were major influences on `style.css`:

- **[writ](https://writ.cmcenroe.me)** by [programble](https://github.com/programble)
- **[normalize.css](https://github.com/necolas/normalize.css)** by [necolas](https://github.com/necolas)
- **[css-system-fonts](https://github.com/mrmrs/css-system-fonts/)** by [mrmrs](https://github.com/mrmrs)

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## Version History

Please see the [Change Log](CHANGELOG.md) for a list of all notable changes between versions.

## License

[ISC](LICENSE.md)
