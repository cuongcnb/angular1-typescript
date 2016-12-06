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
import {CONSTANTS} from './app.constants';
import {routes} from './app.routes'
import {config} from './app.config';
import {HomeController} from "./home/home.controller";
import {MainController} from "./main.controller";


export let app = angular.module('app',
    [
        'ui.router',
        'ngMaterial',
        'ngAnimate',
    ]
)
    .constant('CONSTANTS', CONSTANTS)
    .constant('routes', routes)
    .config(config)
    .controller('MainController', MainController)
    .controller('HomeController', HomeController);


