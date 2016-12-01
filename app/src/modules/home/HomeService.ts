/**
 * Created by Fantastisk on 04-04-2016.
 */




/**
 * @ngInject
 */
export var HomeService = function (CONSTANTS, $http) {

    this.loadData = function () {
        
        console.log (" HomeService.ts > HEOOOL = " );
        
        var p = 'https://randomuser.me/api/';
        $http.get(p).then(
            function success(data) {
                console.log (" HomeService.ts > sucess data = " , data);
            }
            ).catch(function () {
                console.log (" HomeService.ts > catch = ");

            }
        )


    };

}