import { Props, ContainerMetaInformation } from './types';

const defaultProps: Props = {
  container: '.tabs-container',
  button: '.tabs-buttons__btn',
  tab: '.tabs-sections__section',
  activeBtnClass: 'tabs-buttons__btn_active',
  activeTabClass: 'tabs-sections__section_active',
}

class JTabs {
  private readonly props: Props;
  protected HTMLContainers: ContainerMetaInformation[];

  constructor(options: Partial<Props>) {
    this.props = { ...defaultProps, ...options };
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
    })
  }

  private onTabChange(event: Event, containerIndex: number) {
    const { button, activeBtnClass, activeTabClass } = this.props;
    const target = <HTMLElement>event.target;
    const container = this.HTMLContainers[containerIndex];

    if (!target.className.includes(button.replace('.', ''))) return;

    const tabs = this.HTMLContainers[containerIndex].tabs;
    const sections = this.HTMLContainers[containerIndex].sections;
    const tabsChildren = target.parentNode?.children;

    if (!tabsChildren?.length || !tabs) return;

    const tabIndex = Array.from(tabsChildren).indexOf(target);
    const prevTab = tabsChildren[container.activeTab];
    const prevSection = sections[container.activeTab];
    const activeSection = sections[tabIndex];

    this.HTMLContainers[containerIndex].activeTab = tabIndex;

    prevTab?.classList.remove(activeBtnClass);
    prevSection?.classList.remove(activeTabClass);

    activeSection?.classList.add(activeTabClass);
    target.classList.add(activeBtnClass);
  }
}

export { JTabs };
