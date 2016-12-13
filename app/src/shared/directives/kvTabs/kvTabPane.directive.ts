import {IPane, ITabsController} from "./kvTabs.controller";

export class TabPaneDirective implements ng.IDirective {
    restrict = "E";
    require = "^kvTabs";
    transclude = true;
    template = '<div ng-show="selected" ng-transclude></div>';
    scope = {title: '=kvTitle', tabId: '=kvTabId', hide: '=kvHide', invisible: '=kvInvisible'};
    link = (scope: IPane, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: ITabsController) => {
        ctrl.addPane(scope);

        element.on("$destroy", () => {
            ctrl.removePane(scope);
        });
    };

    constructor (){

    }
}