# style guide

See how elements are styled with `style.css`.

<details>
  <summary><strong>Table of Contents</strong></summary>
  <ul>
    <li><a href="#headings">Headings</a></li>
    <li><a href="#paragraphs">Paragraphs</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#lists">Lists</a></li>
    <li><a href="#blockquotes">Blockquotes</a></li>
    <li><a href="#emphasis">Emphasis</a></li>
    <li><a href="#code">Code</a></li>
    <li><a href="#tables">Tables</a></li>
    <li><a href="#horizontal-rules">Horizontal Rules</a></li>
    <li><a href="#images">Images</a></li>
    <li><a href="#figures">Figures</a></li>
    <li><a href="#extras">Extras</a></li>
  </ul>
</details>

## <a id="headings" href="#headings">Headings</a>

Headings sizes are on a [modular scale](http://www.modularscale.com/?1&em&1.125&sass&text) using a base of `1em` and a [major-second](https://github.com/modularscale/modularscale-sass#ratios) (`1.125`) ratio.

# h1 Heading `with code` <small>and small text</small>
## h2 Heading `with code` <small>and small text</small>
### h3 Heading `with code` <small>and small text</small>
#### h4 Heading `with code` <small>and small text</small>
##### h5 Heading `with code` <small>and small text</small>
###### h6 Heading `with code` <small>and small text</small>

```
# h1 Heading `with code` <small>and small text</small>
## h2 Heading `with code` <small>and small text</small>
### h3 Heading `with code` <small>and small text</small>
#### h4 Heading `with code` <small>and small text</small>
##### h5 Heading `with code` <small>and small text</small>
###### h6 Heading `with code` <small>and small text</small>
```

## <a id="paragraphs" href="#paragraphs">Paragraphs</a>

At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.

"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."

```
At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.

"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."
```

## <a id="links" href="#links">Links</a>

[link text](http://dev.nodeca.com)

```
[link text](http://dev.nodeca.com)
```

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

```
[link with title](http://nodeca.github.io/pica/demo/ "title text!")
```

[link with footnote style syntax][footnote style]

[footnote style]: https://en.wikipedia.org/wiki/Note_(typography)

```
[link with footnote style syntax][footnote style]

[footnote style]: https://en.wikipedia.org/wiki/Note_(typography)
```

## <a id="lists" href="#lists">Lists</a>

### Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

```
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

```
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
```

#### Offset

57. foo
1. bar

```
57. foo
1. bar
```

## <a id="blockquotes" href="#blockquotes">Blockquotes</a>

This is a paragraph preceding a blockquote.

> `<blockquote>` can also be nested...
>> ...by using additional greater-than (`'>'`) signs right next to each other...
> > > ...or with spaces between arrows.

This is a paragraph following a blockquote.

```md
This is a paragraph preceding a blockquote.

> `<blockquote>` can also be nested...
>> ...by using additional greater-than (`'>'`) signs right next to each other...
> > > ...or with spaces between arrows.

This is a paragraph following a blockquote.
```

## <a id="emphasis" href="#emphasis">Emphasis</a>

- **This is bold text**
- __This is also bold text__
- *This is italic text*
- _This is also italic text_
- ~~This is deleted text~~

```
- **This is bold text**
- __This is also bold text__
- *This is italic text*
- _This is also italic text_
- ~~This is deleted text~~
```

## <a id="code" href="#code">Code</a>

`Inline code`

    Indented code

    line 3 of code
    line 4 of code
    line 5 of code

    line 7 of code

```
Fenced code blocks
```

```js
// Syntax highlighting
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

    `Inline code`

        Indented code

        line 3 of code
        line 4 of code
        line 5 of code

        line 7 of code

    ```
    Fenced code blocks
    ```

    ```js
    // Syntax highlighting
    var foo = function (bar) {
      return bar++;
    };

    console.log(foo(5));
    ```

### <a id="user-input" href="#user-input">User Input</a>

<kbd>ctrl</kbd><kbd>alt</kbd><kbd>delete</kbd>

<kbd>q</kbd><kbd>w</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>

<kbd>a</kbd><kbd>z</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>

```html
<kbd>ctrl</kbd><kbd>alt</kbd><kbd>delete</kbd>

<kbd>q</kbd><kbd>w</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>

<kbd>a</kbd><kbd>z</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>
```

## <a id="tables" href="#tables">Tables</a>

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

```
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

```
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

## <a id="horizontal-rules" href="#horizontal-rules">Horizontal Rules</a>

___

---

***

```
___

---

***
```

## <a id="images" href="#images">Images</a>

![Finn and Jake](http://38.media.tumblr.com/tumblr_mdo6z0KBpf1rwy00jo1_400.gif "One style is all that is needed.")

```
![Finn and Jake](http://38.media.tumblr.com/tumblr_mdo6z0KBpf1rwy00jo1_400.gif "One style is all that is needed.")
```

![Captain Story-Martense House](https://upload.wikimedia.org/wikipedia/commons/6/66/1996.164.1-65_IMLS_SL2.jpg "Captain Story-Martense House, Front Door, Church Avenue and East 38th Street, Flatbush, Brooklyn, ca. 1899-1909.")

```
![Captain Story-Martense House](https://upload.wikimedia.org/wikipedia/commons/6/66/1996.164.1-65_IMLS_SL2.jpg "Captain Story-Martense House, Front Door, Church Avenue and East 38th Street, Flatbush, Brooklyn, ca. 1899-1909.")
```

Like links, images also have a footnote style syntax.

![Alt text][id]

The reference defining the URL location can be later in the document.

[id]: https://upload.wikimedia.org/wikipedia/commons/1/1f/Ries.PNG  "1550 Woodcut of 58-year-old Adam Ries, inscription: ANNO 1550 ADAM RIES SEINS ALTERS IM LVIII"

```
Like links, images also have a footnote style syntax.

![Alt text][id]

The reference defining the URL location can be later in the document.

[id]: https://upload.wikimedia.org/wikipedia/commons/1/1f/Ries.PNG  "1550 Woodcut of 58-year-old Adam Ries, inscription: ANNO 1550 ADAM RIES SEINS ALTERS IM LVIII"
```

## <a id="figures" href="#figures">Figures</a>

<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Helsinki_z00.jpg/1920px-Helsinki_z00.jpg" alt="Helsinki">
  <figcaption>Panoramic view of <a href="//commons.wikimedia.org/wiki/Helsinki" title="Helsinki">Helsinki</a>, Finland from the Ateljee bar of <a href="https://en.wikipedia.org/wiki/Hotel_Torni" title="en:Hotel Torni">Hotel Torni</a>.</figcaption>
</figure>

```html
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Helsinki_z00.jpg/1920px-Helsinki_z00.jpg" alt="Helsinki">
  <figcaption>Panoramic view of <a href="//commons.wikimedia.org/wiki/Helsinki" title="Helsinki">Helsinki</a>, Finland from the Ateljee bar of <a href="https://en.wikipedia.org/wiki/Hotel_Torni" title="en:Hotel Torni">Hotel Torni</a>.</figcaption>
</figure>
```

## <a id="extras" href="#extras">Extras</a>

The following markup falls outside the [CommonMark](http://commonmark.org) specification and may require plugins or special options for your markdown parser of choice. We're using [markdown-it](https://github.com/markdown-it/markdown-it) and related [plugins](https://www.npmjs.com/browse/keyword/markdown-it) to show how the following elements look when using `style.css`.

### <a id="abbreviations" href="#abbreviations">Abbreviations</a>

> via [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr)

This is a HTML abbreviation example.

It converts "HTML" but keeps partial entries like "xxxHTMLyyy" intact.

*[HTML]: Hyper Text Markup Language

```
This is a HTML abbreviation example.

It converts "HTML" but keeps partial entries like "xxxHTMLyyy" intact.

*[HTML]: Hyper Text Markup Language
```

### <a id="definitions" href="#definitions">Definitions</a>

> via [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

```
Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
```

### <a id="footnotes" href="#footnotes">Footnotes</a>

> via [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

```
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
```

### <a id="special-emphasis" href="#special-emphasis">Special Emphasis</a>

- Superscript: 19^th^ (via [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup))
- Subscript: H~2~O (via [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub))
- ++Inserted text++ (via [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins))
- ==Marked text== (via [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark))

```
- Superscript: 19^th^ (via [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup))
- Subscript: H~2~O (via [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub))
- ++Inserted text++ (via [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins))
- ==Marked text== (via [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark))
```
