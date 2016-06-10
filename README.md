# jTabs
The tabs in pure JavaScript.

## What that means

jTabs takes one reuired parameter: `container`.
Marup takes classes with prefix `-js` for correct work.

- `container` is your DOM-element where are the tabs
- `btn-js`: all buttons
- `tab-js`: all sections
- `tab-active-js`: current active section


## Example

By default HTML-markup should be like this:

```html
<div class="centering-layer  tabs-js">

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

Define wrapper-class and classes with prefix `-js`. Customize styles as you wish.
Styles for active tab are important and must contains following lines:

```CSS
.tab-js { display: none; }
.tab-active-js { display: block; }
```
