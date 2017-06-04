"use strict";

var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    mainBowerFiles = require('main-bower-files'),
    uglify = require('gulp-uglify'),
    path = require('path');


//server connect
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});


//js connect
gulp.task('bowerjs', function () {
  return gulp.src(mainBowerFiles('**/*.js'))
  .pipe(gulp.dest('src/js'))
});

//less connect
gulp.task('bowerless', function () {
  return gulp.src(mainBowerFiles('**/*.less'))
  .pipe(gulp.dest('build/less'))
});

//font connect
//gulp.task('bowerfont', function () {
  //return gulp.src(mainBowerFiles('**/*.{ttf,woff,woff2}'))
  //.pipe(gulp.dest('src/fonts'))
//});


//css
gulp.task('css', function () {
  return gulp.src('build/less/main.less')
    .pipe(less())
    .pipe(prefix({
            browsers: ['last 4 versions','> 1%', 'ie 9'],
            cascade: false
        }))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('src/css'))
    .pipe(connect.reload())
    .pipe(notify("Done!"));
});


//js
gulp.task('js', function () {
  return gulp.src('build/js/main.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('src/js'));
});

//html
gulp.task('html', function () {
  gulp.src('src/index.html')
  .pipe(connect.reload());
});


//watch
gulp.task('watch', function(){
  //gulp.watch('src/css/*.css', ['css','html'])
  gulp.watch('build/less/*.less', ['css'])
  gulp.watch('build/js/*.js', ['js'])
  gulp.watch('src/*.html', ['html']);
});

// bower includes
gulp.task('bower', ['bowerjs', 'bowerless']);

//default
gulp.task('default', ['connect', 'watch', 'html', 'css', 'js']);