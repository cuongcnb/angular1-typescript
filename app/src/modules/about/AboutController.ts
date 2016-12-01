import {AboutService} from "./AboutService";
import IPromise = angular.IPromise;
/**
 * Created by Fantastisk on 27-03-2016.
 */


interface IServerResult {
    data:Object;
    status:number;
    config:Object;
    statusText:string;
}


export class AboutController {

    public name:string = "ABout ctrl";
    private aboutService:AboutService;


    static $inject = ['AboutService'];

    constructor(aboutService:AboutService) {
        this.aboutService = aboutService ;

        console.log (" AboutController.ts > init = " );
    }


    testClick(){

        var p:ng.IPromise<IServerResult> = this.aboutService.loadData();

        p.then(function (data:IServerResult) {
            console.log (" AboutController.ts > data = " , data);
        })
    }


    getName(){
        return this.name
    };

}
/*

export class BaseController<T>  {
    model: T;
    //static $inject = ['SomeFactory'];
    constructor (){

    }

    post() { console.log(this.model)}
};

export class AboutController extends BaseController<AboutModel>  {

    //static $inject = ['SomeFactory'];
    constructor (){
        model.aboutProfile
    }

};
*/

