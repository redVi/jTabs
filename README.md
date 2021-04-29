# jTabs
Tabs in pure JavaScript.

Demo: http://redvi.github.io/jTabs

## How to use

```
$ npm install --save jtabs
```

Include these files in your project (with gulp/webpack/etc) and import them.

### Markup example

```html
<section class="tabs-container">
    <div class="tabs-buttons">
        <button class="tabs-buttons__btn tabs-buttons__btn_active">HTML</button>
        <button class="tabs-buttons__btn">CSS</button>
    </div>

    <div class="tabs-sections">
        <div class="tabs-sections__section tabs-sections__section_active">
            <p>Text</p>
        </div>
        <div class="tabs-sections__section">
            <p>Another text</p>
        </div>
    </div>
</section>
```
### Scripts

```js
import { JTabs } from 'jtabs';
import 'jtabs/lib/jtabs.min.css';

const tabs = new JTabs({ container: '.tabs-container' });
tabs.init();
```

### Options

| Option         | Default value   |
| -------------- | --------------- |
| container      | '.tabs-container' |
| button         | '.tabs-buttons__btn' |
| tab            | '.tabs-sections__section' |
| activeBtnClass | 'tabs-buttons__btn_active' |
| activeTabClass | 'tabs-sections__section_active' |

## Development

```
$ npm i -g static-server typescript
$ npm run compile && static-server lib
```

