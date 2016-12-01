/**
 * Created by Fantastisk on 04-04-2016.
 */


export class AboutService  {
    
    static $inject = ['$http'];
    private http;


    constructor (http:ng.IHttpService){
        this.http = http;
    }

    loadData(){

        var p = 'https://randomuser.me/api/';
        return this.http.get(p)
            /*.then(
            function (data) {
                console.log (" AboutService.ts > data = " , data);
            }, function  (reason) {
                console.log (" AboutService.ts > error = " , reason);
                console.log (" AboutService.ts > error = " , reason);
            }
        )*/

    }
        
};
