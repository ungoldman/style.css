# style.css changelog

## Unreleased
* add `style` field for better [css-via-npm](https://github.com/sethvincent/css-via-npm) support

## 0.1.15
* bump `node-sass` to non-beta version
* fix missing `top-bar.css` dev dependency in package.json
* use [standard](https://github.com/feross/standard) for basic test
* add `CONTRIBUTING.md`

## 0.1.14
* no more header border

## 0.1.13
* allow sass import
* move scripts to `scripts`
* move `site` out of `source`
* add `.md` to LICENSE
* remove `.site-nav`, break out & use [top-bar.css](https://github.com/ngoldman/top-bar.css)

## 0.1.12
* bump for no reason because I prematurely published and am not allowed to republish unpublished version [ಠ_ಠ](https://github.com/npm/npm-registry-couchapp/issues/148)

## 0.1.11
* bump gfm.css to v1.0.2

## 0.1.10
* redesign site header
* add `.site-header`, `.site-nav`, `.site-nav-right`, & `.site-footer`

## 0.1.9
* fix gfm config

## 0.1.8
* break gfm styles out into separate module ([gfm.css](https://github.com/ngoldman/gfm.css))
* remove any explicit references to `.markdown-body` from source

## 0.1.7
* clean up github markdown css, convert to scss
* remove dependency on [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## 0.1.6
* add `.site-link` class for nav links
* style tweaks

## 0.1.5
* rename `.current` to `.current-page`
* remove `html,body` margin reset (a little margin is fine with this style)
* add sass css `@import` issue workaround
* realize I just want slightly tweaked normalize + gfm
* add `github-markdown.css`
* experiment with header & body fonts, use montserrat + lora for now
* add more filler to guide from https://markdown-it.github.io

## 0.1.4
* generate guide from markdown

## 0.1.3
* only include style.css on install

## 0.1.2
* fix links in package.json

## 0.1.1
* use proper normalize.css
* tweak figure, figure > img
* add serve.js
* add more doc

## 0.1.0
* first pass
