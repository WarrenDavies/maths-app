var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
    .pipe(sass())
    .on('error', gutil.log)
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', gulp.series('sass'));
});

