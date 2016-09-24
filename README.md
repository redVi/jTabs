# jTabs

The switcher of tabs in pure JavaScript.

Demo: http://redvi.github.io/jTabs

## Description

jTabs takes one required parameter `container` and two additional parameters:
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


## Usage with NPM

Install the module:

```
$ npm install --save jtabs
```

Include these files in your project (with gulp/webpack/etc) and import them.

Script
```js
// app.js
import jTabs from 'jtabs';
jTabs('.tabs', 'tabs-block-buttons__btn_active');
```

Style (only scss yet)
```scss
/* app.scss */
@import 'path_to_node_modules/jtabs/lib/jtabs.scss';
```
