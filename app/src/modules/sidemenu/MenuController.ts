/**
 * Created by Fantastisk on 05-04-2016.
 */

export class MenuController  {


    static $inject = ['$mdSidenav', 'routes', 'navigator'];
    private pages;


    constructor (private $mdSidenav, private routes, private navigator){
        this.$mdSidenav = $mdSidenav;
        this.navigator = navigator;
        this.pages = routes.menu;
    }

    setSelected(index:number){
        var state = this.pages[index]
        this.navigator.go( state )

    }
    
    closeLeft(){
        this.$mdSidenav('left').close()
            .then(function () {
                console.log (" MainController.ts > LEFT CLICK = " );
            });
    }


    openLeft(){
        this.$mdSidenav('left').open()
            .then(function () {
                console.log (" MainController.ts > LEFT CLICK = " );
            });
    }



    close(){

        var b = this.$mdSidenav('left').isLockedOpen();

        console.log (" MenuController.ts > b = " , b);

        /*this.$mdSidenav('left')
            .toggle()
            .then(function () {
                console.log (" MenuController.ts > done = " );
            });


        //this.closeLeft()
        console.log (" MenuController.ts > Close = " );*/
    }


    toggleLeft(){
        console.log (" MenuController.ts > left tog = " );
    }

    toggleRight(){
        console.log (" MenuController.ts > right tog = " );
    }

};
