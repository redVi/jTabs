/*
* jTabs --- the tabs in pure JavaScript
* repository: https://github.com/redVi/jTabs
* demo: http://redvi.github.io/jTabs
* ========================================================================== */

/* == PARAMETERS ==
 * reuired parameter: container
 * additional parameters: activeTabClass, activeBtnClass
 *
 *
 * == HOW IT WORKS ==
 * - take DOM-container as parameter
 * - search tabs and sections
 * - and switch them
 */

var jTabs = (function (container, activeTabClass, activeBtnClass) {
  'use strict';

  var container      = document.querySelector(container);
  var activeBtnClass = activeBtnClass || 'tabs-block-buttons__btn--active';
  var activeTabClass = activeTabClass || 'tabs-block-sections__section--active';

  if (!container) { return false; }

  var buttons       = container.querySelectorAll('.tabs-block-buttons__btn');
  var tabs          = container.querySelectorAll('.tabs-block-sections__section');
  var activeIndex   = 0;
  var buttonIndex;
  var eventBtn;


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


  var goToTab = function(index) {
    clearActiveClasses();

    /* switch classes */
    if (index !== activeIndex && index >= 0 && index <= buttons.length) {
      buttons[index].classList.add(activeBtnClass);
      tabs[index].classList.add(activeTabClass);
      activeIndex = index;
    } else if (activeIndex === 0) {
      buttons[activeIndex].classList.add(activeBtnClass);
      tabs[activeIndex].classList.add(activeTabClass);
    }
  };


  var clearActiveClasses = function() {
    /* remove active classes from all tabs and sections */
    for (var tab = 0; tab < tabs.length; tab++) {
      tabs[tab].classList.remove(activeTabClass);
    }

    for (var button = 0; button < buttons.length; button++) {
      buttons[button].classList.remove(activeBtnClass);
    }
  };
});
