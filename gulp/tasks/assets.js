/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 05-04-2016.
 */
'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
//var imagemin    = require('gulp-imagemin');

var browserSync = require('browser-sync')//.get('app');

gulp.task('assets', function() {

	  return gulp.src('./app/assets/**/*')
			.pipe(changed('./app/assets/**/*')) // Ignore unchanged files
			//.pipe(gulpif(global.isProd, imagemin())) // Optimize
			.pipe(gulp.dest('./dist'))
			.pipe(gulpif(browserSync.active, browserSync.stream({once: true })));

});