/*
* jTabs --- the tabs in pure JavaScript
 */

var jTabs = (function (_container, _activeBtnClass, _activeTabClass) {
  'use strict';

  var container      = document.querySelector(_container);
  var activeBtnClass = _activeBtnClass || 'tabs-buttons__btn--active';
  var activeTabClass = _activeTabClass || 'tab-active-js';

  if (!container) { return false; }

  var buttons       = container.querySelectorAll('.btn-js');
  var tabs          = container.querySelectorAll('.tab-js');
  var activeIndex   = 0;
  var buttonIndex;
  var eventBtn;
  var goToTab;
  var clearActiveClasses;


  for (buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
    /* get index of certain button */
    var btnNum = buttons[buttonIndex];
    eventBtn(btnNum, buttonIndex);
  }


  function eventBtn(btns, index) {
    /* `click` on the each button */
    btns.addEventListener('click', function(btn) {
      btn.preventDefault();
      goToTab(index);
    });
  };

  goToTab = function(index) {
    clearActiveClasses();

    /* switch classes */
    if (index >= 0 && index <= buttons.length) {
      buttons[index].classList.add(activeBtnClass);
      tabs[index].classList.add(activeTabClass);
      activeIndex = index;
    }
  };


  clearActiveClasses = function() {
    /* remove active classes from all tabs and sections */
    for (var tab = 0; tab < tabs.length; tab++) {
      tabs[tab].classList.remove(activeTabClass);
    }

    for (var button = 0; button < buttons.length; button++) {
      buttons[button].classList.remove(activeBtnClass);
    }
  };
});
