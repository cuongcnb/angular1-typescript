export class ScrollTabsDirective {
    restrict = "AE";
    require = "?ngModel";
    scope = {'add': '&onAdd', 'kvName': '@kvName', 'activeCart': '=kvActiveCart'};
    transclude = true;
    controller = "ScrollTabsController";
    controllerAs = "vm";
    template = `<div class="ovh proTabs ulN">
                    <div skip-disable class="fll leftArrow" ng-show="overflow" ng-click="moveLeft()">
                        <i skip-disable class="fa fa-angle-left"></i>
                    </div>
                    <div class="fll mainWrapper">
                        <div class="ovh scroll-lane">
                            <ul>
                                <div ng-transclude></div>
                                <li class="li-addButton" ng-hide="overflow">
                                    <a href="" skip-disable ng-click="vm.newPane()"
                                       class="addButton" title="{{'Thêm mới' | translate}}"><i skip-disable class="fa fa-plus"></i></a>
                                </li>
                            </ul>
                
                        </div>
                    </div>
                    <div class="fll rightArrow" ng-show="overflow" skip-disable ng-click="moveRight()">
                        <i skip-disable class="fa fa-angle-right"></i>
                    </div>
                    <div class="fll addButtonHolder posR" ng-show="overflow">
                        <a href="" skip-disable ng-click="vm.newPane()" class="addButton" title="{{'Thêm mới' | translate}}">
                            <i skip-disable class="fa fa-plus"></i>
                        </a>
                        <span kv-alert></span></div>
                    <div class="clb"></div>
                </div>
                `;
    link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModelCtrl: ng.INgModelController) => {
        let track = element.find('.scroll-lane');
        let wrapper = element.find('.mainWrapper');

        wrapper.width(element.children('.proTabs').width() - 115);

        if (ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (modelValue) {
                scope.vm.selectByCode(modelValue);
            });
        }
    };

    constructor(private $timeout: ng.ITimeoutService) {

    }

    static factory(): ng.IDirectiveFactory {
        const directive = ($timeout: ng.ITimeoutService) => new ScrollTabsDirective($timeout);
        directive.$inject = ["$timeout"];
        return directive;
    }
}