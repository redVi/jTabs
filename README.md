# jTabs

The switcher of tabs in pure JavaScript.

Demo: http://redvi.github.io/jTabs

## Description

jTabs takes one reuired parameter `container` and two additional parameters:
classes for active button and active tab.

Your markup must have classes with prefix `-js` for correct work.

- `tabs-container` parameter is your DOM-element where are the tabs
- `.btn-js`: all buttons
- `.tab-js`: all sections
- `.btn-active-js`: current active button
- `.tab-active-js`: current active section


## About styles

Customize the styles as you want. But don't forget: styles for active tab
are important and must contains following lines:

```CSS
.tab-js { display: none; }
.tab-active-js { display: block; }
```


# Simple usage

Get static files from `build/jtabs.js` and `build/jtabs.css` and include them
in your HTML. By default HTML-markup looks like this:

```html
<head>
  <link rel="stylesheet" href="jtabs.css">
</head>
<body>
  <div class="centering-layer  tabs-container"><!-- container -->

    <div class="tabs-block-buttons">
      <button class="tabs-block-buttons__btn  tabs-block-buttons__btn_active  btn-js">HTML Active Tab</button>
      <button class="tabs-block-buttons__btn  btn-js">CSS</button>
    </div>

    <div class="tabs-block-sections">
      <div class="tabs-block-sections__section  tabs-block-sections__section_active  tab-js  tab-active-js">HTML Active Section</div>
      <div class="tabs-block-sections__section  tab-js">CSS section</div>
    </div>

  </div>
  <script src="js/jtabs.js"></script>
  <script>
    // Parameters:
    // 1. wrapper class. Example: `.tabs-js`
    // 2. any class for styling active button. Example: `tabs-block-buttons__btn--active`
    // 3. any class for styling active tab. Example: 'tab-active-js'
    jTabs('.tabs-container', 'tabs-block-buttons__btn_active', 'tab-active-js');
  </script>
</body>
```


## Usage with NPM

Install the module:

```
$ npm install --save jtabs
```

Include these files in your project (with gulp/webpack/etc) and import them.

Script
```js
// app.js
import jTabs from 'path_to_node_modules/jtabs/jtabs';
jTabs('.tabs-container');
```

Style (only scss)
```scss
/* app.scss */
@import 'path_to_node_modules/jtabs/jtabs.scss';
```
