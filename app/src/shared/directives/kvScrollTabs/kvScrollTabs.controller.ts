export interface IScrollTabsController {
    addPane(pane: IScrollTabPaneScope): void;
    removePane(pane: IScrollTabPaneScope): void;
    selectPane(pane: IScrollTabPaneScope): void;
    newPane(): void;
    selectByCode(idx: string): void;
}

export interface IScrollTabPaneScope extends ng.IScope{
    tabId: any;
    selected: boolean;
    close(): void;
    select(): void;
}

export class ScrollTabsController implements IScrollTabsController {
    panes: IScrollTabPaneScope[];
    selectedCode: any;

    static $inject = ["$scope"];

    constructor(private $scope: any) {
        this.panes = [];
    }

    newPane = () => {
        this.$scope.add();
    };

    addPane = (pane: IScrollTabPaneScope) => {
        if (this.panes.length === 0) {
            this.selectPane(pane);
        }

        this.panes.push(pane);

        if (pane.tabId === this.selectedCode) {
            this.selectByCode(pane.tabId);
        }
    };

    removePane = (pane: IScrollTabPaneScope) => {
        for (let i = 0; i < this.panes.length; i++) {
            if (pane.tabId === this.panes[i].tabId) {
                this.panes.splice(i, 1);
                break;
            }
        }
    };

    selectPane = (pane: IScrollTabPaneScope) => {
        this.panes.forEach((item: IScrollTabPaneScope) => {
            item.selected = false;
        });

        pane.selected = true;
    };

    selectByCode = (idx: string) => {
        this.selectedCode = idx;

        this.panes.forEach((item: IScrollTabPaneScope) => {
            if (item.tabId === idx) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });
    };
}