/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-03-2016.
 */


var gulp  = require("gulp");
var browserSync  = require('browser-sync').get('app');
var config = require('../config');

var htmlInjector = require("bs-html-injector");


//******************************************************************************
	  //gulp.task("watch", [ 'markup', 'browserifyTypescript'], function () {
gulp.task("watch", function () {

	  gulp.watch( config.styles.lessFiles , ['styles']);
	  gulp.watch("dist/app.js").on('change', browserSync.reload);
	  gulp.watch( ['app/index.ejs', 'app/src/modules/**/*.ejs', 'app/src/modules/**/*.html'], ['markup']);
	  
	  
	  //gulp.watch(config.outputFolder + '**/*.html', htmlInjector);
});

	  