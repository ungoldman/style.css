# mine.css

A classless stylesheet for HTML documents and evolution of [style.css][style].

[![latest version][npm-img]][npm-url] [![Actions Status][action-img]][action-url] [![downloads][downloads-img]][npm-url]

[npm-img]: https://img.shields.io/npm/v/mine.css.svg
[npm-url]: https://www.npmjs.com/package/mine.css
[action-img]: https://github.com/bcomnes/mine.css/workflows/tests/badge.svg
[action-url]: https://github.com/bcomnes/mine.css/actions
[downloads-img]: https://img.shields.io/npm/dm/mine.css.svg

## About

Make a plain HTML page look good and readable with zero effort!  Serves as a nice base layer default.

Check out the [style guide][guide] to see what it looks like.

## Differences

Some differences from [style.css][style]:

- CSS Variables
- Dark Mode
- Remove some old browser support
- Use post-css build pipeline
- Minor stylistic differences

## Install

[![download style.css][dl-sans-img]][dl-sans-url]

[dl-sans-img]: https://img.shields.io/badge/download-mine.css-6495ED.svg
[dl-sans-url]: https://unpkg.com/mine.css

```html
<!-- CDN Development (always latest) -->
<link rel="stylesheet" href="https://unpkg.com/mine.css">
```

```html
<!-- CDN Production (specific release) -->
<link rel="stylesheet" href="https://unpkg.com/mine.css@^4.0.0">
```

```sh
# npm package
$ npm install mine.css
```

```css
/* CSS file */
@import url('https://unpkg.com/mine.css');
```

## Usage

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello World</title>
    <link rel="stylesheet" href="https://unpkg.com/mine.css@^4.0.0">
  </head>
  <body>
    <h1>Hooray!</h1>
  </body>
</html>
```

The best way to get familiar with the look and feel of `mine.css` is to visit the [style guide][guide]. Detailed examples of every HTML element (and how to write them in markdown) are available there.

### Node

```console
npm install mine.css --save-dev
```

Here are some modules out there for requiring CSS using JavaScript that should also work just fine:

- [postcss-import](https://github.com/postcss/postcss-import)

### CSS Variables

You can override defaults directly with CSS variables. Here are the default variable settings for `mine.css`:

```css
:root {
  /* font family */
  --font-body: var(--system-sans);
  --font-code: var(--system-mono);

  /* font size and spacing */
  --font-size-body: 14px;
  --font-size-scale: 0.25vw;

  /* note: use unitless line heights
   https://css-tricks.com/almanac/properties/l/line-height/#article-header-id-0 */
  --line-height-body: 1.75;
  --line-height-pre: 1.45;

  /* light colors */
  --light-text: hsla(0, 0%, 7%, 1); /* #111 */
  --light-background: white;
  --light-layer-background: hsla(0, 0%, 100%, 0); /* #fff */
  --light-accent-background: hsla(0, 0%, 95%, 1); /* #f2f2f2 */
  --light-accent-midground: hsla(0, 0%, 84%, 1); /* #d6d6d6 */
  --light-accent-foreground: hsla(0, 0%, 49%, 1); /* #7d7d7d */
  --light-link-text: hsla(208, 100%, 50%, 1); /* #08f */
  --light-mark-background: hsla(60, 100%, 50%, 1); /* #ff0 */
  --light-code-text: var(--light-text);
  --light-code-background: var(--light-accent-background);
  --light-code-border: var(--light-accent-midground);

  /* dark colors */
  --dark-text: white;
  --dark-background: hsla(0, 0%, 12%, 1); /* #1f1f1f from safari */
  --dark-layer-background: var(--transparent);
  --dark-accent-background: hsla(0, 0%, 20%, 1); /* #333 */
  --dark-accent-midground: hsla(0, 0%, 30%, 1); /* #4d4d4d */
  --dark-accent-foreground: hsla(0, 0%, 60%, 1); /* #999 */
  --dark-link-text: hsl(206, 100%, 70%); /* #66bdff */
  --dark-mark-background: hsla(58, 66%, 30%, 1); /* #7f7c1a */
  --dark-code-text: var(--dark-text);
  --dark-code-background: var(--dark-accent-background);
  --dark-code-border: var(--dark-accent-midground);
}
```

#### Overriding settings

You can override settings like so:

```css
@import 'mine.css';

:root {
  --font-size-body: 14px;
}
```

If you want to use the font stacks to override global font settings, you can do so like this:

```css
@import 'mine.css';

:root {
  --font-body: var(--system-serif);
}
```

#### Customizing colors

To customize colors, override the color variable for dark and light mode:

```css
:root{
  --light-text: red
  --light-background: blue;

  --dark-text: blue;
  --dark-background: red;
}
```

If you want to implement other styles that follow the light/dark mode pattern in mine.css, use the theme agnostic color var:


```css
.some-class {
  color: var(--accent-foreground)
}
```

The theme agnostic variables are as follows:

```css
:root,
.light-mode {
  /* main colors */
  --text: var(--light-text);
  --background: var(--light-background);
  --layer-background: var(--light-layer-background);
  --accent-background: var(--light-accent-background);
  --accent-midground: var(--light-accent-midground);
  --accent-foreground: var(--light-accent-foreground);

  /* misc colors */
  --link-text: var(--light-link-text);
  --mark-background: var(--light-mark-background);
  --code-text: var(--light-code-text);
  --code-background: var(--light-code-background);
  --code-border: var(--light-code-border);
}

.dark-mode {
  /* main colors */
  --text: var(--dark-text);
  --background: var(--dark-background);
  --layer-background: var(--dark-layer-background);
  --accent-background: var(--dark-accent-background);
  --accent-midground: var(--dark-accent-midground);
  --accent-foreground: var(--dark-accent-foreground);

  /* misc colors */
  --link-text: var(--dark-link-text);
  --mark-background: var(--dark-mark-background);
  --code-text: var(--dark-code-text);
  --code-background: var(--dark-code-background);
  --code-border: var(--dark-code-border);
}

@media (prefers-color-scheme: dark) {
  :root {
    @extend .dark-mode; /* stylelint-disable-line at-rule-no-unknown */
  }
}
```

## Overriding the system theme

If you want to allow users to switch between light and dark, indipendent of the system theme, you can apply the `.light-mode` or `.dark-mode` class the the document body.

Thought there is a subtle relationship between the class and the system preference, so it is better to use the theme switcher script ([./src/theme-switcher.js](./src/theme-switcher.js)) which handles user preference while still following the system preference.

Usage:

```html
<script type="module">
  import { toggleTheme } from 'https://unpkg.com/bcomnes/mine.css@^4.0.0?module';

  window.toggleTheme = toggleTheme
</script>
```

The `toggleTheme` export is exclusively offered as an ESM module.  If you need CJS, just vendor it.

See [./site/](./site/) for examples of this in action.

Additionally, when using `theme-switcher.js`, you can easily target dark mode using the following selector:

```css
.dark-mode:not(.light-mode) {
  /* additional dark mode styles go here */
}
```

and the body tag will stay in sync with the system preferenc or user override.  Otherwise you need to define duplicate css rules in the dark mode media query:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* duplicate your dark mode styles here if not using theme-switcher.js */
  }
}
```

## Dark mode images

Images can be swapped out using the `<picture>` tag.

```html
<picture>
    <source srcset="mojave-night.jpg" media="(prefers-color-scheme: dark)">
    <img src="mojave-day.jpg">
</picture>
```

See [this webkit blogpost](https://webkit.org/blog/8840/dark-mode-support-in-webkit/) for more info on dark mode.

## Layout

`mine.css` doesn't include any layout css, thought it does ship a simple layout css file that provides basic layout for a page and supports [`safe-area` that accommodates cell phone notches and whatnot](https://webkit.org/blog/7929/designing-websites-for-iphone-x/).

```html
<!-- CDN Production (specific release) -->
<link rel="stylesheet" href="https://unpkg.com/mine.css@^4.0.0/dist/layout.css">
```

You can see this layout style in action on the [`mine.css`][guide] website.

## Thanks

`mine.css` stands on the shoulders of giants from the excellent work found in [style.css][style]. Thank you!

## License

[ISC](LICENSE.md)

[style]: https://css-pkg.github.io/style.css/
[style-gh]: https://github.com/css-pkg/style.css
[guide]: https://mine-css.neocities.org/guide.html
