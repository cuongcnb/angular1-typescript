import {Person} from "../../models/person.model";
import {TypedJSON} from "typedjson-npm/js/typed-json";

export class HomeController {

    person: Person;

    static $inject = [];

    constructor() {
        let object = {
            firstName: "John",
            lastName: "Doe",
            group: {
                name: "KiotViet"
            }
        }
        this.person = TypedJSON.parse(JSON.stringify(object), Person);
    }

}

