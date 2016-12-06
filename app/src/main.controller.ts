export class MainController {

    public name:string = "this is name from mainController";

    static $inject = ['$state', '$mdSidenav'];

    constructor(public $state:any, public $mdSidenav) {
        this.$state = $state;
        this.$mdSidenav = $mdSidenav;
        console.log(" MainController.ts > ssasdasdadf = ");
        
    }

    click() {
    }

    toggleList(){
        console.log (" MainController.ts > toggle = "        );
        this.$mdSidenav('left').toggle();
    }


    getName() {
        return this.name
    };

    gotoPage(value:string) {
        console.log (" MainController.ts > goHOMe = ", value );
        this.$state.go(value)
        //this.$state.go('home', null);

    }   
    
}
