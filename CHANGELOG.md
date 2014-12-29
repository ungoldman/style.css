# style changelog

## v0.1.9
* fix gfm config

## v0.1.8
* break gfm styles out into separate module ([gfm.css](https://github.com/ngoldman/gfm.css))
* remove any explicit references to `.markdown-body` from source

## v0.1.7
* clean up github markdown css, convert to scss
* remove dependency on [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## v0.1.6
* add `.site-link` class for nav links
* style tweaks

## v0.1.5
* rename `.current` to `.current-page`
* remove `html,body` margin reset (a little margin is fine with this style)
* add sass css `@import` issue workaround
* realize I just want slightly tweaked normalize + gfm
* add `github-markdown.css`
* experiment with header & body fonts, use montserrat + lora for now
* add more filler to guide from https://markdown-it.github.io

## v0.1.4
* generate guide from markdown

## v0.1.3
* only include style.css on install

## v0.1.2
* fix links in package.json

## v0.1.1
* use proper normalize.css
* tweak figure, figure > img
* add serve.js
* add more doc

## v0.1.0
* first pass
