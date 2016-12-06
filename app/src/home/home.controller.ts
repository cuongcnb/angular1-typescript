import {TypedJSON} from "typedjson-npm/js/typed-json";
import {Person} from "../shared/models/person.model";
import {app} from "../app";

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

//app.controller('HomeController', HomeController);