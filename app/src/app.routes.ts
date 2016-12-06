import {CONSTANTS} from  './app.constants';


export var routes = {

// We want to keept the contents of the menu and the actual routes seperate.
// therefor the menu arr should only be what should go in the menu
//---------------------------------------------------------------------------------------

    "menu": [
        {
            title: "Home",
            state: CONSTANTS.PAGES.HOME
        },
        {
            title: "About",
            state: CONSTANTS.PAGES.ABOUT
        }

    ],


// PAGES
//---------------------------------------------------------------------------------------

    pages: [

        {
            url: "/home",
            state: CONSTANTS.PAGES.HOME,
            templateUrl: "./home/home.view.html",
            controller: 'HomeController as vm'
        }

    ]
};


