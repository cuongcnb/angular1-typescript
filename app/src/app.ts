/**
 * Created by Fantastisk on 17-03-2016.
 */


/**
 * Import modules from npm
 */

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-material';


/**
 * import specific files used in our setup
 */
import {MainController} from './MainController';
import {MenuController} from "./modules/sidemenu/MenuController";
import {navigator} from "./utils/navigator";
import {CONSTANTS} from './constants';
import {routes} from './routes'
import {config} from './config';

/**
 * Import our angular modules
 */
import './modules/home'
import './modules/about'



export let app = angular.module('app',
    [
        'ui.router',
        'ngMaterial',
        'ngAnimate',
        'app.home',
        'app.about'
    ]
).controller('MainController', MainController)
    .controller('MenuController', MenuController)
    .service('navigator', navigator)
    .constant('CONSTANTS', CONSTANTS)
    .constant('routes', routes)
    .config(config);


