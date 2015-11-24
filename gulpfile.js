var gulp = require('gulp');
var sass = require('gulp-sass');
var env = require('gulp-env');

gulp.task('sass', function () {
    gulp.src('./public/sass/bundle.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('set-env', function () {
    env({
        vars: {
            PORT: 80
        }
    })
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});