import {JsonMember, JsonObject} from "typedjson-npm/js/typed-json";

@JsonObject
export class Group {
    @JsonMember
    name: string;
}