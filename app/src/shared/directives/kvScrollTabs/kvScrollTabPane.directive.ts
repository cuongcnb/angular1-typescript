export class ScrollTabPaneDirective {
    restrict = "EA";
    require = "^kvScrollTabs";
    scope = { 'close': '&onClose', 'select': '&onSelect', 'tabId': '=kvTabId' };
    transclude = true;
    link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: any) => {
        controller.addPane(scope);

        element.on("$destroy", () => {
            controller.removePane(scope);
        });
    }
    template = `<li skip-disable ng-class="{active:selected}">
                        <a href="javascript:void(0);" ng-class="{active:selected}" skip-disable ng-transclude ng-click="select()"></a>
                        <span skip-disable ng-click="close()" class="proTabsClose" title="Đóng"><i class="fa fa-close"></i></span>
                    </li>`;

}