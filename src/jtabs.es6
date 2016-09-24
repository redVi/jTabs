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

export default function jTabs(container, activeBtnClass, activeTabClass) {
  container = document.querySelector(container);
  activeBtnClass = activeBtnClass || 'btn-active-js';
  activeTabClass = activeTabClass || 'tab-active-js';

  if (container) {
    let buttons = container.querySelectorAll('.btn-js');
    let tabs = container.querySelectorAll('.tab-js');
    let activeIndex = 0;
    let buttonIndex;
    let eventBtn;
    let goToTab;
    let clearActiveClasses;


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
      let btnNum = buttons[buttonIndex];
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
      for (let tab = 0; tab < tabs.length; tab++) {
        tabs[tab].classList.remove(activeTabClass);
      }

      for (let button = 0; button < buttons.length; button++) {
        buttons[button].classList.remove(activeBtnClass);
      }
    };
  } else {
    return;
  }
};
