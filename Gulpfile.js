'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./_src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
  gulp.watch('./_src/**/*.scss', ['sass']);
});
