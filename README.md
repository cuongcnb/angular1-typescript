# Typescript external modules with Angular 1 using browserify, npm, typings and Gulp

------------------------------------------
##### Looking for basic info on working with npm, ES6 and External modules [i got you covered - click here](https://github.com/ddennis/Typescript-browserify-npm)
------------------------------------------

## Install
To be able to use this project nodejs must be installed. if you have nodejs, go download or clone the project and run from in the terminal:

    npm install


Then start the development server with **browsersync**, which will open your browser on http://localhost:3000/

    gulp dev


## What is this
Get up and running with angular 1 and Typescript
A project using **Typescript external modules** with **Angular 1** compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser,
This enables you to use npm as a package manager and ES6 syntax with Typescript.

- [What is commonjs and npm, click here](https://egghead.io/lessons/nodejs-what-are-commonjs-modules)
- [what is ES6 click here](https://www.youtube.com/watch?v=CozSF5abcTA)


## What is this
A project using **Typescript external modules**, compiling to **commonjs** modules and using **browserify** to load the script bundle in the browser. **typings** is used for handling Typescript definition files.

This is basically a standard browserify project, which enables you to use **commonjs/npm modules** in the browser, this means no globals, and the same code style as a node project, where you can require/import a file, function or a module
Using Typescript externals modules you don't have to pass the typescript reference file around and the needless namespacing in the code dividing classes into modules.

This boilerplate project is based on angular 1, but the basic setup can be used with or without any npm module.


### Setup for Angular 1
You don't have to use ES6 classes, standard es5 javascript functions is perfectly fine.
I have included both in this project.


##### Dependency injection in services or controllers

    export class SomeControllerOrService {
        static $inject = ['SomeService', 'SomeConstants' ];
    
        constructor(SomeService, SomeConstants ) {
            this.SomeService = SomeService
            this.SomeConstants = SomeConstants
        }
    }

##### Directives
**Using es6 classes with directives requires a little work around.** there is a couple of ways to make this work. The solution described here seems to work well:
http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002

    export class MyDirective {
        public link:(scope:any , element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => void;
        public template = '<div> this is a value in the directive {{name}}</div>';

        // create isolate scope if needed
        //public scope = {};

        constructor(/*list of dependencies*/) {
            MyDirective.prototype.link = (scope:any, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {
                scope.name = "someName ";

                // if we don't create an isolated scope we can reference our parent controller
                var mainCtrl = scope.mainCtrl;
                scope.name = mainCtrl.getName();

                /*handle all your linking requirements here*/
                element.on('tap click', function () {
                    console.log(" MyDirective.ts > YES YES  = ");
                })

         };
        }
        
        public static Factory() {
            var directive = (/*list of dependencies*/) => {
                return new MyDirective(/*list of dependencies*/);
            };

            //directive['$inject'] = ['/*list of dependencies*/'];

            return directive;
        }
    }
    
When registring the directive in your angular module

    //import the class
    import {MyDirective} from './MyDirective'
    
    export default angular.module('app.home',[])
    // notice it's the static factory function which is called to register the directive
    .directive('myDirective', MyDirective.Factory());


If you dont want to use ES6 classes, everything works as normal.

TODO - add standard directive function


**directives using your own interfaces**

... TODO
