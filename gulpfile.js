var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

gulp.task('build', function() {
  return gulp.src('src/sigrid.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('build:min', ['build'], function() {
  return gulp.src('dist/sigrid.css')
    .pipe(cssnano())
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*.scss', function() {
    gulp.run('build');
  });
});