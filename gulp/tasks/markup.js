/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 27-03-2016.
 */
'use strict';


var gulp         = require('gulp');
var browserSync  = require('browser-sync').get('app');
var gulpif       = require('gulp-if');
var ejs          = require("gulp-ejs");
var rename       = require('gulp-rename');
var handleErrors = require('./handleErrors');
var fs           = require('fs');
var changed      = require('gulp-changed');
var print        = require('gulp-print');

var versionNumber = require('../../package.json').version;


gulp.task('markup', function () {

	  gulp.src('./app/index.ejs')
			.pipe(changed('./app/index.ejs')) // Ignore unchanged files
			.pipe(ejs({
				  version: versionNumber
			}).on('error', handleErrors))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('./dist'))
			.pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));


	  return gulp.src('./app/src/**/*.html')
			.pipe(changed('./app/src/**/*.html')) // Ignore unchanged files
			.pipe(gulp.dest('dist/'))
			.pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));

});
