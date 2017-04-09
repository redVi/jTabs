# jTabs
Tabs in pure JavaScript.

Demo: http://redvi.github.io/jTabs

## How to use

```
$ npm install --save jtabs
```

Include these files in your project (with gulp/webpack/etc) and import them.

### Markup example (if you want to use default styles see `index.html` for details)

```html
<main class="tabs-container">
    <div class="tabs-buttons">
        <button class="btn-js btn-active-js">Active Tab</button>
        <button class="btn-js">Tab</button>
    </div>

    <div class="tabs-sections">
        <section class="tab-js tab-active-js">Text</section>
        <section class="tab-js">Text</section>
    </div>
</main>
```
### Scripts

```js
// app.js
import jTabs from 'jtabs';
var container = document.querySelector('.tabs-container');

jTabs({
    container      : container,
    buttons        : container.querySelectorAll('.btn-js'),
    tabs           : container.querySelectorAll('.tab-js'),
    activeBtnClass : 'btn-active-js',
    activeTabClass : 'tab-active-js'
});
```
### Default styles

```css
/* app.css */
@import 'path_to_node_modules/jtabs/lib/jtabs.css';
```

Customize the styles as you want. But **don't forget**: styles for active tab
are important and must contain following lines:

```css
.tab-js { display: none; }
.tab-active-js { display: block; }
```
