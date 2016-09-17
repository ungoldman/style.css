# Style Guide

See how elements are styled with `style.css`.

## Paragraphs

**At the base of the mainmast**, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.

The large underestimations also led to negative, *ineffectual* values. In primates the decrease in objects discovered during the application of the lossless join property `(Fi)+ =` was not negligable. The knowledge of recent cosmological models, and methods on another system in the associated source matieral, with the principle of [Horn-clause](https://en.wikipedia.org/wiki/Horn_clause) logic programming in universes that are non-contingent, was inconclusive. If rebased conclusions are reviewed, and trial data is collected from conventional analyses, the transition from F at z=0 46±0 13 reverses.  Consequently, `"cogito, ergo sum"`, or so it is said in certain parts of the old country.

"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."

```
**At the base of the mainmast**, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.

The large underestimations also led to negative, *ineffectual* values. In primates the decrease in objects discovered during the application of the lossless join property `(Fi)+ =` was not negligable. The knowledge of recent cosmological models, and methods on another system in the associated source matieral, with the principle of [Horn-clause](https://en.wikipedia.org/wiki/Horn_clause) logic programming in universes that are non-contingent, was inconclusive. If rebased conclusions are reviewed, and trial data is collected from conventional analyses, the transition from F at z=0 46±0 13 reverses.  Consequently, `"cogito, ergo sum"`, or so it is said in certain parts of the old country.

"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."
```

## Images

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

## Figures

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

## Links

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

## Headings

# h1 Heading

```
# h1 Heading
```

## h2 Heading

```
## h2 Heading
```

### h3 Heading

```
### h3 Heading
```

#### h4 Heading

```
#### h4 Heading
```

##### h5 Heading

```
##### h5 Heading
```

###### h6 Heading

```
###### h6 Heading
```

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Deleted text~~

```
**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Deleted text~~

Superscript: 19^th^

Subscript: H~2~O

++Inserted text++

==Marked text==
```

## Blockquotes

> `<blockquote>` can also be nested...
>> ...by using additional greater-than (`'>'`) signs right next to each other...
> > > ...or with spaces between arrows.

This is a paragraph following a blockquote.

```md
> `<blockquote>` can also be nested...
>> ...by using additional greater-than (`'>'`) signs right next to each other...
> > > ...or with spaces between arrows.

This is a paragraph following a blockquote.
```

## Lists

Unordered

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

Ordered

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

Start numbering with offset:

57. foo
1. bar

```
57. foo
1. bar
```

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

```
Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`
```

## User input

<kbd>ctrl</kbd><kbd>alt</kbd><kbd>delete</kbd>

<kbd>q</kbd><kbd>w</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>

<kbd>a</kbd><kbd>z</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>

```html
<kbd>ctrl</kbd><kbd>alt</kbd><kbd>delete</kbd>

<kbd>q</kbd><kbd>w</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>

<kbd>a</kbd><kbd>z</kbd><kbd>e</kbd><kbd>r</kbd><kbd>t</kbd><kbd>y</kbd>
```

## Tables

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

## Horizontal Rules

___

---

***

```
___

---

***
```

## Extras (plugins required)

The following markup falls outside the [CommonMark](http://commonmark.org) specification and requires plugins to render properly. We're using [markdown-it](https://github.com/markdown-it/markdown-it) and related [plugins](https://www.npmjs.com/browse/keyword/markdown-it) to show how the following elements look when using `style.css`.

### Emojis (via [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji))

> Classic markup: :smile: :smiley: :grinning: :hourglass: :x: :wink: :sunglasses:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

```
> Classic markup: :smile: :smiley: :grinning: :hourglass: :x: :wink: :sunglasses:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.
```

### Definition lists (via [markdown-it-deflist](https://github.com/markdown-it/markdown-it-deflist))

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

### Abbreviations (via [markdown-it-abbr](https://github.com/markdown-it/markdown-it-abbr))

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

```
This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language
```

### Typographic replacements (via `typographer` in [markdown-it](https://github.com/markdown-it) options)

Enable [typographer](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

```
Enable [typographer](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'
```

### Autoconverted links (via `linkify` in [markdown-it](https://github.com/markdown-it) options)

Autoconverted URL-like text such as http://hmpg.net can be enabled with the [linkify](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) option in [markdown-it](https://github.com/markdown-it/markdown-it))

```
Autoconverted URL-like text such as http://hmpg.net can be enabled with the [linkify](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) option in [markdown-it](https://github.com/markdown-it/markdown-it))
```

### Footnotes (via [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote))

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

### Special kinds of emphasis

Superscript: 19^th^ (via [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup))

Subscript: H~2~O (via [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub))

++Inserted text++ (via [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins))

==Marked text== (via [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark))

```
Superscript: 19^th^ (via [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup))

Subscript: H~2~O (via [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub))

++Inserted text++ (via [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins))

==Marked text== (via [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark))
```
