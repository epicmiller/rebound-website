'use strict';

var gulp = require('gulp');
var del = require('del');
var server = require('gulp-express');
var sass = require('gulp-sass');
var rebound = require('gulp-rebound');

gulp.task('clean', function(cb){
  // Clean our dist
  del(['dist/stylesheets', 'dist/templates', 'dist/tmp', 'dist/index.html'], cb)
});

gulp.task('index', ['clean'], function(){
  return gulp.src(["index.html"])
  .pipe(gulp.dest('dist'));
});

gulp.task('assets', ['clean'], function(){
  return gulp.src(["assets/**/*"])
  .pipe(gulp.dest('dist/assets'));
});

gulp.task('sass', ['clean'], function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/apps'));
});

gulp.task('rebound', ['clean'], function(){
  return gulp.src(["apps/**/*.html"])
  .pipe(rebound())
  .pipe(gulp.dest('dist/apps'));
});

gulp.task('build', ['rebound', 'sass', 'assets','index'], function () {});

gulp.task('default', ['build'], function () {

    // Start the server at the beginning of the task
    server.run(['app.js']);

    gulp.watch(['index.html'], ['index', server.notify]);
    gulp.watch(['assets/**/*'], ['assets', server.notify]);
    gulp.watch(['sass/**/*.scss'], ['sass', server.notify]);
    gulp.watch(['apps/**/*.html'], ['rebound', server.notify]);

    // Restart the server when file changes
    gulp.watch(['app.js', 'api/**/*.js'], [server.run]);
});

