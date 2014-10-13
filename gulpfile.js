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
})
