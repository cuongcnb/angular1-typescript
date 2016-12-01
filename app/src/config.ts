/**
 * Created by Fantastisk on 27-03-2016.
 */




export function config($stateProvider:any, $urlRouterProvider:any, routes:any, CONSTANTS:any, $compileProvider:any , $mdThemingProvider, $mdIconProvider) {

    var arr = routes.pages;

    angular.forEach(arr, function (item, index) {
        var p = {};
        if (item.params) {
            p = item.params
        }
        
        $stateProvider.state(item.state, {
            url: item.url,
            templateUrl: item.templateUrl,
            controller: item.controller,
            params: p
        })
    });

    // this should give a performance boost, if debug is false
    $compileProvider.debugInfoEnabled(CONSTANTS.DEBUG);

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');


    $mdIconProvider
        .defaultIconSet("./svg/avatars.svg", 128)
        .icon("menu"       , "./svg/menu.svg"        , 24)
        .icon("share"      , "./svg/share.svg"       , 24)
        .icon("google_plus", "./svg/google_plus.svg" , 512)
        .icon("hangouts"   , "./svg/hangouts.svg"    , 512)
        .icon("twitter"    , "./svg/twitter.svg"     , 512)
        .icon("phone"      , "./svg/phone.svg"       , 512);
    $mdThemingProvider.theme('default')
       /* .primaryPalette('brown')
        .accentPalette('red');*/

}

config.$inject = ['$stateProvider', '$urlRouterProvider', 'routes', 'CONSTANTS', '$compileProvider', '$mdThemingProvider', '$mdIconProvider'];
//config.$inject = ['$stateProvider' , 'routes'];


