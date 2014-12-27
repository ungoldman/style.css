# style

![One note is all that is needed](http://33.media.tumblr.com/tumblr_ll0hehFlU81qz8jl5o1_500.gif)

*One style is all that is needed.*

## principles

* markup is semantic and minimal
* markdown is the sole source for primary page content
* a site's style handles..
  1. any HTML generated from markdown
  2. ancillary elements (header, nav, footer)
  3. nothing else
* classes are only used outside the context of primary page content, and only when absolutely necessary
* bandwidth is not assumed to be broadband -- the site loads and functions quickly in suboptimal conditions

## build

builds `style.css` from `source/`.

```
npm install
npm run build
```

## license

[ISC](LICENSE)
