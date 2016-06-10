# jTabs
The tabs in pure JavaScript.

## Parameters

jTabs takes one reuired parameter: `container`.
Marup takes classes with prefix `-js` for correct work.

- `container` is your DOM-element where are the tabs
- `btn-js`: all buttons
- `btn-active-js`: current active button
- `tab-js`: all sections
- `tab-active-js`: current active section


## How to use

By default HTML-markup should be like this:

```html
<div class="centering-layer  tabs-js">

  <div class="tabs-block-buttons">
    <button class="tabs-block-buttons__btn  tabs-block-buttons__btn--active  btn-js  btn-active-js">HTML Active Tab</button>
    <button class="tabs-block-buttons__btn  btn-js">CSS</button>
  </div>

  <div class="tabs-block-sections">
    <div class="tabs-block-sections__section  tabs-block-sections__section--active  tab-js  tab-active-js">HTML Active Section</div>
    <div class="tabs-block-sections__section  tab-js">CSS section</div>
  </div>

</div>

<script src="js/jtabs.js"></script>
<script>
  // pass the wrapper class
  jTabs('.tabs-js');
</script>
```


## About styles

Define wrapper-class and classes with prefix `-js`. Customize styles as you wish.
Important are only the following styles:

```CSS
.tab-js {
  display: none !important; }

.tab-active-js {
  display: block !important; }
```

Don't change them.
