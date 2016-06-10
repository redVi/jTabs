# jTabs
The tabs in pure JavaScript.

demo: http://redvi.github.io/jTabs


## Parameters

jTabs takes one reuired parameter (`container`) and two additional
parameters: `activeTabClass`, `activeBtnClass`.

`container` is your DOM-element where are the tabs. `activeTabClass` and
`activeBtnClass` contain active class for tabs and buttons accordingly.


## How to use

By default HTML-markup should be like this:

```html
<div class="centering-layer  tabs-js">

  <div class="tabs-block-buttons">
    <button class="tabs-block-buttons__btn  tabs-block-buttons__btn--active">HTML Active Tab</button>
    <button class="tabs-block-buttons__btn">CSS</button>
  </div>

  <div class="tabs-block-sections">
    <div class="tabs-block-sections__section  tabs-block-sections__section--active">HTML Active Section</div>
    <div class="tabs-block-sections__section">CSS section</div>
  </div>

</div>

<script src="js/jtabs.js"></script>
<script>
  // pass the wrapper class
  jTabs('.tabs-js');
</script>
```

But you can change this classes, replacing them in file `jtabs.js`.
