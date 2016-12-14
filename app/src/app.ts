/**
 * Created by Fantastisk on 17-03-2016.
 */


/**
 * Import modules from npm
 */

import 'jquery';
import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-material';
import 'angular-gettext';


/**
 * import specific files used in our setup
 */
import {CONSTANTS} from './app.constants';
import {routes} from './app.routes'
import {config} from './app.config';
import {HomeController} from "./home/home.controller";
import {ProductController} from "./home/product/product.controller";
import {MainController} from "./main.controller";
import {ScrollTabsDirective} from "./shared/directives/kvScrollTabs/kvScrollTabs.directive";
import {ScrollTabPaneDirective} from "./shared/directives/kvScrollTabs/kvScrollTabPane.directive";
import {ScrollTabsController} from "./shared/directives/kvScrollTabs/kvScrollTabs.controller";


export let app = angular.module('app',
    [
        'ui.router',
        'ngMaterial',
        'ngAnimate',
        'gettext'
    ]
)
    .constant('CONSTANTS', CONSTANTS)
    .constant('routes', routes)
    .config(config)
    .controller('MainController', MainController)
    .controller('HomeController', HomeController)
    .controller('ProductController', ProductController)

    // Scroll tab directive
    .controller('ScrollTabsController', ScrollTabsController)
    .directive('kvScrollTabPane', [() => new ScrollTabPaneDirective()])
    .directive('kvScrollTabs', ScrollTabsDirective.factory())


