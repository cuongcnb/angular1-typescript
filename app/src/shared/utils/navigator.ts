
export class navigator {

    static $inject = ['$state'];

    constructor(private $state) {
        this.$state = $state;
    }


    go(menuItem) {
        this.$state.go(menuItem.state)
    }


}

