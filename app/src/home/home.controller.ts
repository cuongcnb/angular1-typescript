import {TypedJSON} from "typedjson-npm/js/typed-json";
import {Person} from "../shared/models/person.model";
import {app} from "../app";
import {Cart} from "../shared/models/cart.model";
import {StringHelper} from "../shared/helpers/string.helper";

export class HomeController {

    person: Person;

    static $inject = ["$scope"];

    constructor(private $scope: any) {
        this.init();
    }

    init() {
        this.$scope.carts = [];
        this.addTab();
    }

    addTab (cartType?: number){
        let cart = {
            Id: null,
            Type: cartType,
            Code: this.getUniqueCode(cartType),
            uuid: StringHelper.getUUId()
        } as Cart;

        this.$scope.carts.push(cart);
        this.selectTab(cart);
    }

    selectTab (cart: Cart) {
        this.$scope.activeCart = cart;
    }

    closeTab(cart: Cart) {
        for (let i = 0; i < this.$scope.carts.length; i++) {
            if (this.$scope.carts[i].Code == cart.Code) {
                if (this.$scope.carts.length == 1 && cart.Id == 0) {
                    //only 1 empty unsaved cart, do not close it
                    return;
                }
                this.$scope.carts.splice(i, 1);
                if (this.$scope.carts.length == 0) {
                    //add new empty tab
                    this.addTab();
                }
                if (cart.Code == this.$scope.activeCart.Code) {
                    this.selectTab(this.$scope.carts[this.$scope.carts.length - 1]);
                }
                break;
            }
        }
    }

    private getUniqueCode(cartType: number, seed?: any) {
        if (seed === undefined) {
            seed = $.grep(this.$scope.carts, function (c: Cart) {
                    return c.Type === cartType;
                }).length + 1;
        }
        let label = "Hóa đơn";

        let candidate: string = label + ' ' + seed;
        while (this.findCart(candidate) != null) {
            seed++;
            candidate = label + ' ' + seed;
        }
        return candidate;
    }

    private findCart(code: string): Cart {
        var selected = $.grep(this.$scope.carts, function (c: Cart) {
            return c.Code === code;
        });
        return (selected && selected.length > 0) ? selected[0] : null;
    }
}

//app.controller('HomeController', HomeController);