# Style Guide

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

# h1 Heading

```html
<h1>h1 Heading</h1>
```

## h2 Heading

```html
<h2>h2 Heading</h2>
```

### h3 Heading

```html
<h3>h3 Heading</h3>
```

#### h4 Heading

```html
<h4>h4 Heading</h4>
```

##### h5 Heading

```html
<h5>h5 Heading</h5>
```

###### h6 Heading

```html
<h6>h6 Heading</h6>
```

# h1 Heading `with code` <small>and small text</small>

```html
<h1>h1 Heading <code>with code</code> <small>and small text</small></h1>
```

# A Very Long Heading With Quite A Lot More Words Than One Might Expect Or Event Want

```html
<h1>A Very Long Heading With Quite A Lot More Words Than One Might Expect Or Event Want</h1>
```

## <a id="paragraphs" href="#paragraphs">Paragraphs</a>

At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.

"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."

```html
<p>At the base of the mainmast, full beneath the doubloon and the flame, the Parsee was kneeling in Ahab's front, but with his head bowed away from him; while near by, from the arched and overhanging rigging, where they had just been engaged securing a spar, a number of the seamen, arrested by the glare, now cohered together, and hung pendulous, like a knot of numbed wasps from a drooping, orchard twig. In various enchanted attitudes, like the standing, or stepping, or running skeletons in Herculaneum, others remained rooted to the deck; but all their eyes upcast.</p>

<p>"There it is again—under the hatches—don't you hear it—a cough—it sounded like a cough."</p>
```

## <a id="links" href="#links">Links</a>

[link text](http://dev.nodeca.com)

```html
<a href="http://dev.nodeca.com">link text<a>
```

## <a id="lists" href="#lists">Lists</a>

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

```
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ol>
```

### Unordered

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa

```html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
</ul>
```

## <a id="blockquotes" href="#blockquotes">Blockquotes</a>

<blockquote>Brevity is the soul of wit.</blockquote>

```html
<blockquote>Brevity is the soul of wit.</blockquote>
```

## <a id="emphasis" href="#emphasis">Emphasis</a>

- **This is bold text**
- *This is italic text*
- ~~This is deleted text~~
- ++Inserted text++
- ==Marked text==
- Superscript: 19^th^
- Subscript: H~2~O

```html
<ul>
  <li><strong>This is bold text</strong></li>
  <li><em>This is italic text</em></li>
  <li><s>This is deleted text</s></li>
  <li><ins>Inserted text</ins></li>
  <li><mark>Marked text</mark></li>
  <li>Superscript: 19<sup>th</sup></li>
  <li>Subscript: H<sub>2</sub>O</li>
</ul>
```

## <a id="code" href="#code">Code</a>

`Inline code`

```
Fenced code blocks
```

```
<code>Inline code</code>

<pre>
  <code>Fenced codeblocks</code>
</pre>
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

```html
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>path to data files to supply the data that will be passed into templates.</td>
    </tr>
    <tr>
      <td>engine</td>
      <td>engine to be used for processing templates. Handlebars is the default.</td>
    </tr>
    <tr>
      <td>ext</td>
      <td>extension to be used for dest files.</td>
    </tr>
  </tbody>
</table>
```

## <a id="horizontal-rules" href="#horizontal-rules">Horizontal Rules</a>

___

```
<hr>
```

## <a id="images" href="#images">Images</a>

Partial width images are left-aligned.

![Finn and Jake](http://38.media.tumblr.com/tumblr_mdo6z0KBpf1rwy00jo1_400.gif "One style is all that is needed.")

```html
<img src="http://38.media.tumblr.com/tumblr_mdo6z0KBpf1rwy00jo1_400.gif" alt="Finn and Jake" title="One style is all that is needed.">
```

Full width or larger images are capped at 100% width.

![Captain Story-Martense House](https://upload.wikimedia.org/wikipedia/commons/6/66/1996.164.1-65_IMLS_SL2.jpg "Captain Story-Martense House, Front Door, Church Avenue and East 38th Street, Flatbush, Brooklyn, ca. 1899-1909.")

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/6/66/1996.164.1-65_IMLS_SL2.jpg" alt="Captain Story-Martense House" title="Captain Story-Martense House, Front Door, Church Avenue and East 38th Street, Flatbush, Brooklyn, ca. 1899-1909.">
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

## <a id="abbreviations" href="#abbreviations">Abbreviations</a>

This is a <abbr title="Hyper Text Markup Language">HTML</abbr> abbreviation example.

```
<p>This is a <abbr title="Hyper Text Markup Language">HTML</abbr> abbreviation example.</p>
```

## <a id="definitions" href="#definitions">Definitions</a>

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2a</dd>
  <dd>Definition 2b</dd>
</dl>
```
