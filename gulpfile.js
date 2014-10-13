var gulp = require("gulp");
var gutil = require("gulp-util");

gulp.task('default', function() {
	// Do stuff.
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

gulp.task('compile', ['jade', 'stylus']);
