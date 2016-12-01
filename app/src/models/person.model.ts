import {JsonMember} from "typedjson-npm/js/typed-json";
import {JsonObject} from "typedjson-npm/js/typed-json";
import {Group} from "./group.model";

@JsonObject
export class Person {
    @JsonMember
    firstName: string;

    @JsonMember
    lastName: string;

    @JsonMember
    group: Group;

    public getFullname() {
        return this.firstName + " " + this.lastName;
    }
}