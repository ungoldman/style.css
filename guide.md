# Style Guide

See how elements are styled with `mine.css`.

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
    <li>
      <a href="#input-types">Input Types</a>
      <ul>
        <li><a href="#button">Button</a></li>
        <li><a href="#checkbox">Checkbox</a></li>
        <li><a href="#color">Color</a></li>
        <li><a href="#date">Date</a></li>
        <li><a href="#datetime-local">Datetie Local</a></li>
        <li><a href="#email">Email</a></li>
        <li><a href="#file">File</a></li>
        <li><a href="#image-input">Image</a></li>
        <li><a href="#month">Month</a></li>
        <li><a href="#number">Number</a></li>
        <li><a href="#password">Password</a></li>
        <li><a href="#radio">Radio</a></li>
        <li><a href="#range">Range</a></li>
        <li><a href="#reset">Reset</a></li>
        <li><a href="#search">Search</a></li>
        <li><a href="#submit">Submit</a></li>
        <li><a href="#tel">Tel</a></li>
        <li><a href="#text">Text</a></li>
        <li><a href="#time">Time</a></li>
        <li><a href="#url">URL</a></li>
        <li><a href="#week">Week</a></li>
      </ul>
    </li>
  </ul>
</details>


## <a id="headings" href="#headings">Headings</a>

# h1 Heading `with code` <small>and small text</small>
## h2 Heading `with code` <small>and small text</small>
### h3 Heading `with code` <small>and small text</small>
#### h4 Heading `with code` <small>and small text</small>
##### h5 Heading `with code` <small>and small text</small>
###### h6 Heading `with code` <small>and small text</small>

```md
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

```md
At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.

"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."
```

## <a id="links" href="#links">Links</a>

[link text](http://dev.nodeca.com)

```md
[link text](http://dev.nodeca.com)
```

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

```md
[link with title](http://nodeca.github.io/pica/demo/ "title text!")
```

[link with footnote style syntax][footnote style]

[footnote style]: https://en.wikipedia.org/wiki/Note_(typography)

```md
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

```md
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

```md
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
```

#### Offset

57. foo
1. bar

```md
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

```md
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

Code blocks without any highlight.js theme:

<pre><code>// Syntax highlighting
var foo = function (bar) {
  return bar++;
};

console.log(foo(5)); console.log(foo(5)); console.log(foo(5)); console.log(foo(5));
</code></pre>

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

```md
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

```md
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

```md
___

---

***
```

## <a id="images" href="#images">Images</a>

![Finn and Jake](http://38.media.tumblr.com/tumblr_mdo6z0KBpf1rwy00jo1_400.gif "One style is all that is needed.")

```md
![Finn and Jake](http://38.media.tumblr.com/tumblr_mdo6z0KBpf1rwy00jo1_400.gif "One style is all that is needed.")
```

![Captain Story-Martense House](https://upload.wikimedia.org/wikipedia/commons/6/66/1996.164.1-65_IMLS_SL2.jpg "Captain Story-Martense House, Front Door, Church Avenue and East 38th Street, Flatbush, Brooklyn, ca. 1899-1909.")

```md
![Captain Story-Martense House](https://upload.wikimedia.org/wikipedia/commons/6/66/1996.164.1-65_IMLS_SL2.jpg "Captain Story-Martense House, Front Door, Church Avenue and East 38th Street, Flatbush, Brooklyn, ca. 1899-1909.")
```

Like links, images also have a footnote style syntax.

![Alt text][id]

The reference defining the URL location can be later in the document.

[id]: https://upload.wikimedia.org/wikipedia/commons/1/1f/Ries.PNG  "1550 Woodcut of 58-year-old Adam Ries, inscription: ANNO 1550 ADAM RIES SEINS ALTERS IM LVIII"

```md
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

```md
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

```md
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

```md
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

```md
- Superscript: 19^th^ (via [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup))
- Subscript: H~2~O (via [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub))
- ++Inserted text++ (via [markdown-it-ins](https://github.com/markdown-it/markdown-it-ins))
- ==Marked text== (via [markdown-it-mark](https://github.com/markdown-it/markdown-it-mark))
```

## <a id="input-types" href="#input-types">Input Types</a>

Mine.css offers improved default styling of built in HTML form inputs with dark mode override support.

- [`<input>` element][input]
- [HTML5 input types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

[input]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

#### <a id="buttons" href="#buttons">Button</a>

<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
    <p>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>button</code> are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the <a href="https://wiki.developer.mozilla.org/en-US/docs/Web/Events/click"><code>click</code></a> event). –<a href="https://wiki.developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button">mdn</a>
    </p>
  </blockquote>
</details>

<p>
  <input type="button" value="Button">
  <input type="button" value="Button">
  <input type="button" value="Button">
  <button>Hey Hi</button>
  <input disabled type="button" value="Disabled Button">
</p>

```html
<input type="button" value="Button">
<input type="button" value="Button">
<input type="button" value="Button">
<button>Hey Hi</button>
<input disabled type="button" value="Disabled Button">
```

#### <a id="checkbox" href="#checkbox">Checkbox</a>

<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
    <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>checkbox</code> are rendered by default as boxes that are checked (ticked) when activated, like you might see in an official government paper form. The exact appearance depends upon the operating system configuration under which the browser is running. Generally this is a square but it may have rounded corners. A checkbox allows you to select single values for submission in a form (or not). –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox">mdn</a></p>
  </blockquote>
</details>

<p>
  <div>
    <input type="checkbox" id="scales" name="scales" checked>
    <label for="scales">Scales</label>
  </div>

  <div>
    <input type="checkbox" id="horns" name="horns">
    <label for="horns">Horns</label>
  </div>

  <div>
    <input disabled type="checkbox" id="teeth" name="teeth">
    <label for="teeth">Teeth (disabled)</label>
  </div>
</p>

```html
<div>
  <input type="checkbox" id="scales" name="scales" checked>
  <label for="scales">Scales</label>
</div>

<div>
  <input type="checkbox" id="horns" name="horns">
  <label for="horns">Horns</label>
</div>

<div>
  <input disabled type="checkbox" id="teeth" name="teeth">
  <label for="teeth">Teeth (disabled)</label>
</div>
```

#### <a id="color" href="#color">Color</a>

<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>color</code> provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in <code>#rrggbb</code> hexadecimal format. Only simple colors (without alpha channel) are allowed though CSS colors has more formats, e.g. color names, functional notations and a hexadecimal format with an alpha channel.</p>
<p>The element’s presentation may vary substantially from one browser and/or platform to another—it might be a simple textual input that automatically validates to ensure that the color information is entered in the proper format, or a platform-standard color picker, or some kind of custom color picker window. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color">mdn</a></p>
</blockquote>
</details>

<p>
  <div>
    <input type="color" id="head" name="head" value="#e66465">
    <label for="head">Head</label>
  </div>

  <div>
    <input type="color" id="body" name="body" value="#f6b73c">
    <label for="body">Body</label>
  </div>
  <div>
    <input disabled type="color" id="foot" name="foot" value="#0083f5">
    <label for="foot">Footer (disabled)</label>
  </div>
</p>

```html
<div>
  <input type="color" id="head" name="head" value="#e66465">
  <label for="head">Head</label>
</div>

<div>
  <input type="color" id="body" name="body" value="#f6b73c">
  <label for="body">Body</label>
</div>
<div>
  <input disabled type="color" id="foot" name="foot" value="#0083f5">
  <label for="foot">Footer (disabled)</label>
</div>
```

#### <a id="date" href="#date">Date</a>

<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of <code>type="date"</code> create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface.</p>
<p>The resulting value includes the year, month, and day, but not the time. The <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time">time</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local">datetime-local</a> input types support time and date+time input. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date">mdn</a></p>
</blockquote>
</details>

<p>
  <label class="block" for="start">Start date:</label>
  <input type="date" id="start" name="trip-start" value="2020-08-15">
  <label class="block" for="placeholder-date">Placeholder date:</label>
  <input type="date" name="placeholder-date" placeholder="2020-08-25">
  <label class="block" for="start">Disabled date:</label>
  <input disabled type="date" id="end" name="trip-end" value="2020-08-25">
</p>

```html
<label for="start">Start date:</label>
<input type="date" id="start" name="trip-start" value="2020-08-15">
```

#### <a id="datetime-local" href="#datetime-local">Datetime Local</a>

<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>datetime-local</code> create input controls that let the user easily enter both a date and a time, including the year, month, and day as well as the time in hours and minutes. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local">mdn</a></p>
</blockquote>
</details>

<p>
  <label class="block" for="meeting-time">Datetime Local:</label>
  <input type="datetime-local" id="meeting-time" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00">
  <label class="block" for="meeting-time-placeholder">Datetime Placeholder:</label>
  <input type="datetime-local" name="meeting-time-placeholder" placeholder="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00">
  <label class="block" for="meeting-time-end">Datetime Disabled:</label>
  <input disabled type="datetime-local" id="meeting-time-end" name="meeting-time-end" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00">
</p>

```html
<label for="start">Start date:</label>
<input type="date" id="start" name="trip-start" value="2020-08-15">
```

#### <a id="email" href="#email">Email</a>

<p>
<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>email</code> are used to let the user enter and edit an e-mail address, or, if the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple"><code>multiple</code></a> attribute is specified, a list of e-mail addresses. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email">mdn</a></p>
</blockquote>
</details>
</p>

<p>
  <label class="block" for="email">Email:</label>
  <input placeholder="bob@example.com" type="email" id="email">
  <label class="block" for="email-repeat">Email Disabled:</label>
  <input placeholder="bob@example.com" disabled type="email" id="email-repeat">
</p>

```html
<label for="email">Email:</label>
<input type="email" id="email">
```

#### <a id="file" href="#file">File</a>

<p>
<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements with <code>type="file"</code> let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms">form submission</a>, or manipulated using JavaScript code and <a href="https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications">the File API</a>. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file">mdn</a></p>
</blockquote>
</details>
</p>

<p>
  <input type="file"
         id="avatar" name="avatar"
         accept="image/png, image/jpeg">
  <input type="file"
         disabled
         id="avatar" name="avatar"
         accept="image/png, image/jpeg">
</p>

```html
<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
```

#### <a id="image-input" href="#image-input">Image</a>

<p>
<details>
  <summary><strong>Description</strong></summary>
  <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>image</code> are used to create graphical submit buttons, i.e. submit buttons that take the form of an image rather than text. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image">mdn</a></p>
</blockquote>
</details>
</p>

<p>
  <input class="dark-icon" type="image" alt="Login" src="/light-dark.svg">
</p>

```html
<input class="dark-icon" type="image" id="image" alt="Login" src="/light-dark.svg">
```

#### <a id="month" href="#month">Month</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>month</code> create input fields that let the user enter a month and year allowing a month and year to be easily entered. The value is a string whose value is in the format “YYYY-MM”, where YYYY is the four-digit year and MM is the month number. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="start-month">Month:</label>
  <input type="month" id="start" name="start" min="2018-03" placeholder="2020-08">
  <label class="block" for="end-month">Month:</label>
  <input disabled type="month" name="end-month" min="2018-03" placeholder="2020-08">
</p>

```html
<label for="start">Month:</label>
<input type="month" id="start" name="start" min="2018-03" value="2020-08">
```

#### <a id="number" href="#number">Number</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>number</code> are used to let the user enter a number. They include built-in validation to reject non-numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by simply tapping with a fingertip. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="tentacles">Number of tentacles (10-100):</label>
  <input type="number" id="tentacles" name="tentacles" min="10" max="100" placeholder="12">
  <label class="block" for="suckers">Number of tentacles (10-100):</label>
  <input disabled type="number" name="suckers" min="2" max="100" value="5">
</p>

```html
<label for="tentacles">Number of tentacles (10-100):</label>
<input type="number" id="tentacles" name="tentacles" min="10" max="100" value="5">
```

#### <a id="password" href="#password">Password</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>password</code> provide a way for the user to securely enter a password. The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("•"). This character will vary depending on the <a href="https://developer.mozilla.org/en-US/docs/Glossary/user_agent">user agent</a> and OS. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="pass">Password:</label>
  <input placeholder="••••••••" type="password" id="pass" name="password" minlength="8">
  <label class="block" for="pass">Password (Disabled):</label>
  <input disabled placeholder="••••••••" type="password" id="pass" name="password" minlength="8">
</p>

```html
<label for="pass">Password:</label>
<input type="password" id="pass" name="password" minlength="8">
```

#### <a id="radio" href="#radio">Radio</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>radio</code> are generally used in <code>radio groups</code>—collections of radio buttons describing a set of related options. Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as small circles, which are filled or highlighted when selected. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <div>
    <input type="radio" id="huey" name="drone" value="huey"
           checked>
    <label for="huey">Huey</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey">
    <label for="dewey">Dewey</label>
  </div>

  <div>
    <input disabled type="radio" id="louie" name="drone" value="louie">
    <label for="louie">Louie</label>
  </div>
</p>

```html
<div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked>
  <label for="huey">Huey</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey">
  <label for="dewey">Dewey</label>
</div>

<div>
  <input type="radio" id="louie" name="drone" value="louie">
  <label for="louie">Louie</label>
</div>
```

#### <a id="range" href="#range">Range</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>range</code> let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number">number</a> input type. Because this kind of widget is imprecise, it shouldn’t typically be used unless the control’s exact value isn’t important. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <div>
    <input type="range" id="volume" name="volume" min="0" max="11">
    <label for="volume">Volume</label>
  </div>

  <div>
    <input disabled type="range" id="cowbell" name="cowbell" min="0" max="100" value="90" step="10">
    <label for="cowbell">Cowbell</label>
  </div>
</p>

```html
<div>
  <input type="range" id="volume" name="volume" min="0" max="11">
  <label for="volume">Volume</label>
</div>

<div>
  <input type="range" id="cowbell" name="cowbell" min="0" max="100" value="90" step="10">
  <label for="cowbell">Cowbell</label>
</div>
```

#### <a id="reset" href="#reset">Reset</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>"reset"</code>  are rendered as buttons, with a default <a href="https://developer.mozilla.org/en-US/docs/Web/Events/click"><code>click</code></a> event handler that resets all of the inputs in the form to
their initial values. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <form>
    <div class="controls">
      <label for="id">User ID:</label>
      <input type="text" id="id" name="id" />
      <input type="reset" value="Reset">
      <input disabled type="reset" value="Reset (Disabled)">
    </div>
  </form>
</p>

```html
<form>
  <div class="controls">
    <label for="id">User ID:</label>
    <input type="text" id="id" name="id" />
    <input type="reset" value="Reset">
  </div>
</form>
```

#### <a id="search" href="#search">Search</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a>  elements of type <code>search</code> are text fields designed for the user to enter search queries into. These are functionally identical to <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text"><code>text</code></a> inputs, but may be styled differently by the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search">user agent</a>. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <input placeholder="Search..." type="search" id="site-search" name="q" aria-label="Search through site content">
  <input placeholder="Search..." disabled type="search" id="site-search" name="q" aria-label="Search through site content">
</p>

```html
<input type="search" id="site-search" name="q" aria-label="Search through site content">
```

#### <a id="submit" href="#submit">Submit</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>submit</code> are rendered as buttons. When the <a href="https://developer.mozilla.org/en-US/docs/Web/Events/click"><code>click</code></a> event occurs (typically because the user clicked the button), the <a href="https://developer.mozilla.org/en-US/docs/Glossary/user_agent">user agent</a> attempts to submit the form to the server. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <input type="submit" value="Send Request">
  <input disabled type="submit" value="Send Request">
</p>

```html
<input type="submit" value="Send Request">
```


#### <a id="tel" href="#tel">Tel</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>tel</code> are used to let the user enter and edit a telephone number. Unlike <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email"><code>&lt;input type="email"&gt;</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url"><code>&lt;input type="url"&gt;</code></a> , the input value is not automatically validated to a particular format before the form can be submitted, because formats for telephone numbers vary so much around the world. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="phone">Enter your phone number:</label>
  <input class="block" placeholder="123-456-7890" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
  <small>Format: 123-456-7890</small>
  <input class="block" placeholder="123-456-7890" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required disabled>
</p>

```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
<small>Format: 123-456-7890</small>
```

#### <a id="text" href="#text">Text</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>text</code> create basic single-line text fields. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label for="name">Name (4 to 8 characters):</label>
  <input class="block" placeholder="Jon Smith" type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
  <input class="block" disabled placeholder="Jon Smith" type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
</p>

```html
<label for="name">Name (4 to 8 characters):</label>
<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
```

#### <a id="time" href="#time">Time</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>time</code> create input fields designed to let the user easily enter a time (hours and minutes, and optionally seconds). The control’s user interface will vary from browser to browser. Support is good in modern browsers, with Safari being the sole major browser not yet implementing it; in Safari, and any other browsers that don’t support <code>&lt;time&gt;</code>, it degrades gracefully to <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text"><code>&lt;input type="text"&gt;</code></a>. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="appt">Choose a time for your meeting:</label>
  <input type="time" id="appt" name="appt" min="09:00" max="18:00" required placeholder="9:00">
  <small>Office hours are 9am to 6pm</small>
  <input class="block" disabled placeholder="9:00" type="time" id="appt" name="appt" min="09:00" max="18:00" required>
</p>

```html
<label for="appt">Choose a time for your meeting:</label>
<input type="time" id="appt" name="appt" min="09:00" max="18:00" required>
<small>Office hours are 9am to 6pm</small>
```

#### <a id="url" href="#url">URL</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>url</code> are used to let the user enter and edit a URL. –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="url">Enter an https:// URL:</label>
  <input class="block" type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required>
  <input disabled class="block" type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required>
</p>

```html
<label for="url">Enter an https:// URL:</label>
<input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30" required>
```

#### <a id="week" href="#week">Week</a>

<p>
  <details>
    <summary><strong>Description</strong></summary>
    <blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"><code>&lt;input&gt;</code></a> elements of type <code>week</code> create input fields allowing easy entry of a year plus the <a href="https://en.wikipedia.org/wiki/ISO_8601#Week_dates">ISO 8601 week number</a> during that year (i.e., week 1 to <a href="https://en.wikipedia.org/wiki/ISO_8601#Week_dates">52 or 53</a>). –<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week">mdn</a></p>
</blockquote>
  </details>
</p>

<p>
  <label class="block" for="week">Choose a week in May or June:</label>
  <input class="block" placeholder="2018-W18" type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required>
  <input class="block" disabled placeholder="2018-W18" type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required>
</p>

### <a id="fieldset" href="#fieldset">Fieldset</a>

<p>
  <form style="display: inline-block;">
    <fieldset>
      <legend>Log into your account:</legend>
      <div>
        <label class="block" for="email">Email:</label>
        <input type="email" name="username">
      </div>
      <div>
        <label class="block" for="password">Password:</label>
        <input type="password" name="password">
      </div>
      <input style="width:100%" type="submit" value="Login">
    </fieldset>
  </form>
</p>

```html
<label for="week">Choose a week in May or June:</label>
<input type="week" name="week" id="camp-week" min="2018-W18" max="2018-W26" required>
```



