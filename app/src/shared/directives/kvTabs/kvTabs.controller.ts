export interface IPane {
    title: string;
    hide: boolean;
    tabId: number;
    invisible: boolean;
    selected: boolean;
}

export interface ITabsController {
    addPane(pane: IPane): void;
    selectPane(pane: IPane): void;
    removePane(pane: IPane): void;
}

export class TabsController implements ITabsController {
    panes: IPane[];
    currentId: any;

    static $inject = ["$scope"];

    constructor(private $scope: any) {
        this.panes = [];
    }

    /**
     * Add pane to tabs
     */
    addPane(pane: IPane) {
        if (!pane.hide) {
            if (this.panes.length === 0) {
                this.selectPane(pane);
            }
            this.panes.push(pane);
        }
    }

    selectPane(pane: IPane) {
        // set selected false for panes
        this.panes.forEach((item: IPane, index: number) => {
            item.selected = false;
        });

        pane.selected = true;

    }

    selectById(tabId: number) {
        this.currentId = tabId;
        this.panes.forEach((item: IPane, index: number) => {
            item.selected = item.tabId == tabId;
        });
    }

    removePane(pane: IPane) {
        //happen mostly for dynamic tab
        if (pane.tabId !== undefined) {
            for (var i = 0; i < this.panes.length; i++) {
                if (this.panes[i].tabId === pane.tabId) {
                    this.panes.splice(i, 1);
                    break;
                }
            }
            //sometime the model value does not change when
            //collection of tabs change.
            for (var i = 0; i < this.panes.length; i++) {
                var p = this.panes[i];
                if (p.tabId === this.currentId) {
                    //console.log('found, update selected tab');
                    this.selectPane(p);
                    break;
                }
            }
        }
    }

}