declare type Props = {
    container: string;
    button: string;
    tab: string;
    activeBtnClass: string;
    activeTabClass: string;
};
declare type ContainerMetaInformation = {
    activeTab: number;
    tabs: Element | null,
    sections: NodeListOf<Element>,
};
declare class JTabs {
    private readonly props;
    protected HTMLContainers: ContainerMetaInformation[];
    constructor(options: Partial<Props>);
    init(): void;
    private onTabChange;
}
export { JTabs };
