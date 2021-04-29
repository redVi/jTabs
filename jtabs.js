const defaultProps = {
  container: '.tabs-container',
  button: '.tabs-buttons__btn',
  tab: '.tabs-sections__section',
  activeBtnClass: 'tabs-buttons__btn_active',
  activeTabClass: 'tabs-sections__section_active',
};
class JTabs {
  constructor(options) {
    this.props = Object.assign(Object.assign({}, defaultProps), options);
    this.HTMLContainers = [];
  }
  init() {
    const { container, tab } = this.props;
    const HTMLContainers = document.querySelectorAll(container);
    HTMLContainers.forEach((element, index) => {
      const tabContainer = document.querySelectorAll(container)[index];
      this.HTMLContainers.push({
        activeTab: 0,
        tabs: tabContainer,
        sections: tabContainer.querySelectorAll(tab)
      });
      element.addEventListener('click', event => this.onTabChange(event, index));
    });
  }
  onTabChange(event, containerIndex) {
    var _a;
    const { button, activeBtnClass, activeTabClass } = this.props;
    const target = event.target;
    const container = this.HTMLContainers[containerIndex];
    if (!target.className.includes(button.replace('.', '')))
      return;
    const tabs = this.HTMLContainers[containerIndex].tabs;
    const sections = this.HTMLContainers[containerIndex].sections;
    const tabsChildren = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.children;
    if (!(tabsChildren === null || tabsChildren === void 0 ? void 0 : tabsChildren.length) || !tabs)
      return;
    const tabIndex = Array.from(tabsChildren).indexOf(target);
    const prevTab = tabsChildren[container.activeTab];
    const prevSection = sections[container.activeTab];
    const activeSection = sections[tabIndex];
    this.HTMLContainers[containerIndex].activeTab = tabIndex;
    prevTab === null || prevTab === void 0 ? void 0 : prevTab.classList.remove(activeBtnClass);
    prevSection === null || prevSection === void 0 ? void 0 : prevSection.classList.remove(activeTabClass);
    activeSection === null || activeSection === void 0 ? void 0 : activeSection.classList.add(activeTabClass);
    target.classList.add(activeBtnClass);
  }
}
export { JTabs };
