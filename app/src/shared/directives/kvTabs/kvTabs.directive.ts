import ITimeoutService = angular.ITimeoutService;
export interface ITabsAtrributes {
    kvClass: string;
}

export class TabsDirective implements ng.IDirective {
    restrict = "E";
    transclude = true;
    require = "?ngModel";
    template = `<div class="kvTabs ulN">
                    <ul class="mr-bg">
                        <li ng-repeat="pane in vm.panes">
                            <a href="" skip-disable ng-click="select(pane, false, $index)"
                                class="{{'tabBut_' + $index}} {{(pane.invisible == true) ? 'ng-hide' : ''}} tabbut_new"
                                ng-class="{'active':pane.selected}">{{pane.title | translate}}</a>
                        </li>
                    </ul>
                    <div class="tabBg"></div>
                    <div ng-transclude></div>
                </div>
                `;
    controller = "KVTabsController";
    controllerAs = "vm";
    scope = {onChange: "=", ngDisabled: "="};
    //bindToController = true;
    link = (scope: any, elem: ng.IAugmentedJQuery, attrs: ITabsAtrributes, ngModelCtrl: ng.INgModelController) => {
        elem.find(".kvTabs").addClass(attrs.kvClass);

        if (ngModelCtrl) {
            ngModelCtrl.$formatters.push((modelValue) => {
                //console.log("model value changed to " + modelValue);
                if (modelValue) {
                    scope.vm.selectById(modelValue);
                    //set tab highlight
                    //mostly for tab that is not dynamically added or removed
                    this.$timeout(function () {

                        var tabElem = elem.find('a.active');
                        if(tabElem.length == 0) {
                            return;
                        }
                        var left = tabElem.parent().position().left;
                        var width = tabElem.parent().width();
                        elem.find('.tabBg').stop().animate({
                            'left': left,
                            'width': width
                        }, 200);
                    }, 100, false);
                }
            });
        }

        var origin = scope.select;
        scope.select =  (pane: any, preventOnChange: boolean, tabIdx: number) => {
            if (scope.ngDisabled)
                return;
            //console.log('selecting pane ' + pane.tabId);
            if (ngModelCtrl) {
                var prev = ngModelCtrl.$viewValue;

                ngModelCtrl.$setViewValue(pane.tabId);

                if (!preventOnChange && prev !== ngModelCtrl.$viewValue && scope.onChange) {
                    scope.onChange();
                }
            }
            scope.vm.selectPane(pane);

            if (tabIdx != undefined) {
                this.$timeout(function () {
                    //console.log('updating tab = ' + tabIdx);
                    var tabElem = elem.find('.tabBut_' + tabIdx);
                    if(tabElem.length == 0) {
                        return;
                    }
                    var left = tabElem.parent().position().left;
                    var width = tabElem.parent().width();
                    elem.find('.tabBg').stop().animate({
                        'left': left,
                        'width': width
                    }, 200);
                }, 100, false);

            }

        };

        if (!ngModelCtrl) {

            this.$timeout(function () {
                elem.find('.kvTabs ul li a.tabBut_0').each(function () {
                    var width = $(this).parent().width();
                    //console.log(' width = ' + width);
                    if (width == 0) width = 73;
                    elem.find('.tabBg').css({'width': width});
                });
            }, 100, false);
        }
    };

    constructor(private $timeout: ITimeoutService) {

    }

    static factory() {
        const fn = ($timeout: ITimeoutService) => new TabsDirective($timeout);
        fn.$inject = ["$timeout"];
        return fn;
    }
}