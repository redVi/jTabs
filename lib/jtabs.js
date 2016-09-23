'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = jTabs;

require('core-js/shim');

function jTabs(container, activeBtnClass, activeTabClass) {
  container = document.querySelector(container);
  activeBtnClass = activeBtnClass || 'btn-active-js';
  activeTabClass = activeTabClass || 'tab-active-js';

  if (container) {
    (function() {
      var buttons = container.querySelectorAll('.btn-js');
      var tabs = container.querySelectorAll('.tab-js');
      var activeIndex = 0;
      var buttonIndex = void 0;
      var eventBtn = void 0;
      var goToTab = void 0;
      var clearActiveClasses = void 0;

      /**
      * eventBtn sets event handlers for each button
      * and calls the function switching tab
      * @param  {HTMLCollection} btns returns all buttons
      * @param  {Number} index is a number of current button
      */
      eventBtn = function eventBtn(btns, index) {
        btns.addEventListener('click', function(btn) {
          btn.preventDefault();
          goToTab(index);
        });
      };

      /**
      * buttonIndex is a number of current button
      * @type {Number}
      */
      for (buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
        var btnNum = buttons[buttonIndex];
        eventBtn(btnNum, buttonIndex);
      }

      /**
      * goToTab toggles the active class
      * @param  {Number} index - the number of the button or tab
      */
      goToTab = function goToTab(index) {
        clearActiveClasses();

        if (index !== activeIndex && index >= 0 && index <= buttons.length) {
          buttons[index].classList.add(activeBtnClass);
          tabs[index].classList.add(activeTabClass);
          activeIndex = index;
        } else if (activeIndex === 0) {
          buttons[activeIndex].classList.add(activeBtnClass);
          tabs[activeIndex].classList.add(activeTabClass);
        }
      };

      /**
      * clearActiveClasses removes active class from all tabs and sections
      */
      clearActiveClasses = function clearActiveClasses() {
        for (var tab = 0; tab < tabs.length; tab++) {
          tabs[tab].classList.remove(activeTabClass);
        }

        for (var button = 0; button < buttons.length; button++) {
          buttons[button].classList.remove(activeBtnClass);
        }
      };
    })();
  } else {
    return;
  }
}
