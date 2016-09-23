/*
* jTabs --- the tabs in pure JavaScript
* repository: https://github.com/redVi/jTabs
* demo: http://redvi.github.io/jTabs
* ========================================================================== */

/* == PARAMETERS ==
 * reuired parameter: container
 * additional parameters: activeBtnClass, activeTabClass
 *
 * == HOW IT WORKS ==
 * - take DOM-container as parameter
 * - search tabs and sections
 * - and switch them
 */

var jTabs = (function(container, activeBtnClass, activeTabClass) {
  'use strict';

  var container = document.querySelector(container);
  var activeBtnClass = activeBtnClass || 'btn-active-js';
  var activeTabClass = activeTabClass || 'tab-active-js';

  if (container) {
    var buttons = container.querySelectorAll('.btn-js');
    var tabs = container.querySelectorAll('.tab-js');
    var activeIndex = 0;
    var buttonIndex;
    var eventBtn;
    var goToTab;
    var clearActiveClasses;


    /**
    * eventBtn sets event handlers for each button
    * and calls the function switching tab
    * @param  {HTMLCollection} btns returns all buttons
    * @param  {Number} index is a number of current button
    */
    eventBtn = function(btns, index) {
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
    goToTab = function(index) {
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
    clearActiveClasses = function() {
      for (var tab = 0; tab < tabs.length; tab++) {
        tabs[tab].classList.remove(activeTabClass);
      }

      for (var button = 0; button < buttons.length; button++) {
        buttons[button].classList.remove(activeBtnClass);
      }
    };
  } else {
    return;
  }
});
