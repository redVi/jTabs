/*
* jTabs --- the tabs in pure JavaScript
* repository: https://github.com/redVi/jTabs
* demo: http://redvi.github.io/jTabs
* ========================================================================== */

export default function jTabs(options) {

  const { container, buttons, tabs, activeBtnClass, activeTabClass } = options;
  let activeIndex = 0,
        buttonIndex,
        eventBtn,
        goToTab,
        clearActiveClasses;

  /**
  * eventBtn sets event handlers for each button
  * and calls the function switching tab
  * @param  {HTMLCollection} btns returns all buttons
  * @param  {Number} index is a number of current button
  */
  eventBtn = function(btns, index) {
    /* `click` on the each button */    
    btns.addEventListener('click', function(btn) {
      btn.preventDefault();
      goToTab(index);
    });
  };

  /**
  * goToTab toggles the active class
  * @param {Number} index - the number of the button or tab
  */
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
    for (let tab = 0; tab < tabs.length; tab++) {
      tabs[tab].classList.remove(activeTabClass);
    }

    for (let button = 0; button < buttons.length; button++) {
      buttons[button].classList.remove(activeBtnClass);
    }
  };

  /**
  * buttonIndex is a number of current button
  * @type {Number}
  */
  for (buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
    /* get index of certain button */
    let btnNum = buttons[buttonIndex];
    eventBtn(btnNum, buttonIndex);
  }
};
