export class ProductController {
    products: Array<any>;

    constructor() {
        this.init();
    }

    init() {
        this.products = [{
            id: 1,
            name: "Product A"
        }, {
            id: 2,
            name: "Product B"
        }];
    }
}