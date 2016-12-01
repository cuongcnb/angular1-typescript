


export var simpleDirective = function () {

    return {
        restrict: 'AE',

        template:'<button>button from directive {{someValue}}</button>',

        link: function (scope, element, attrs) {

            element[0].style.marginTop = '10px';
            element.on('click', function () {
                console.log (" simpleDirective > was clicked = ");
                document.body.style.backgroundColor = 'red'
            });

        }
    }
}
