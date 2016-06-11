# jTabs
The tabs in pure JavaScript.

Demo: http://redvi.github.io/jTabs


## Installation with NPM

```
$ npm install --save jtabs
```

## Using

jTabs takes one reuired parameter `container` and two additional parameters:
classes for active button and active section.

Your markup must have classes with prefix `-js` for correct work.

- `container` is your DOM-element where are the tabs
- `btn-js`: all buttons
- `tab-js`: all sections
- `tab-active-js`: current active section


By default HTML-markup looks like this:

```html
<div class="centering-layer  tabs-js"><!-- container -->

  <div class="tabs-block-buttons">
    <button class="tabs-block-buttons__btn  tabs-block-buttons__btn--active  btn-js">HTML Active Tab</button>
    <button class="tabs-block-buttons__btn  btn-js">CSS</button>
  </div>

  <div class="tabs-block-sections">
    <div class="tabs-block-sections__section  tabs-block-sections__section--active  tab-js  tab-active-js">HTML Active Section</div>
    <div class="tabs-block-sections__section  tab-js">CSS section</div>
  </div>

</div>
<script src="js/jtabs.js"></script>
<script>
  // Parameters:
  // 1. wrapper class. Example: `.tabs-js`
  // 2. any class for styling active button. Example: `tabs-block-buttons__btn--active`
  // 3. any class for styling active tab. Example: 'tab-active-js'
  jTabs('.tabs-js', 'tabs-block-buttons__btn--active', 'tab-active-js');
</script>
```


## About styles

Customize the styles as you want. But don't forget: styles for active tab
are important and must contains following lines:

```CSS
.tab-js { display: none; }
.tab-active-js { display: block; }
```
