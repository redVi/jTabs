export type Props = {
  container: string;
  button: string;
  tab: string;
  activeBtnClass: string;
  activeTabClass: string;
}

export type ContainerMetaInformation = {
  activeTab: number,
  tabs: Element | null,
  sections: NodeListOf<Element>,
}
