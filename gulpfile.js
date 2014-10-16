var gulp = require("gulp");
var gutil = require("gulp-util");

var connect = require("gulp-connect");
gulp.task('webserver', function() {
    connect.server({
	root: 'app',
	port: 8555,
	livereload: true
    });
});

var jade = require("gulp-jade");
gulp.task('jade', function() {
    gulp.src('app/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app/'))
    .pipe(connect.reload());
});

var stylus = require("gulp-stylus");
gulp.task('stylus', function() {
    gulp.src('app/css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/css/'))
    .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('app/*.jade', ['jade']);
    gulp.watch('app/css/*.styl', ['stylus']);
});



gulp.task('default', ['jade', 'stylus', 'webserver', 'watch']);



/*
var webserver = require("gulp-webserver");
gulp.task('webserver', function() {
    gulp.src('app')
    .pipe(webserver({
    livereload: true,
    directoryListing: false,
    port: 8555}));
});


var jade = require("gulp-jade");
gulp.task('jade', function() {
    gulp.src('app/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app/'))
    .on('error', gutil.log);
});

var stylus = require("gulp-stylus");
gulp.task('stylus', function() {
    gulp.src('app/css/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/css/'))
    .on('error', gutil.log);
});

gulp.task('compile', ['jade', 'stylus']); */
