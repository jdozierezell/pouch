var gulp = require('gulp');

gulp.task('scss', function() {
  var sourcemaps = require('gulp-sourcemaps');
  return gulp.src('src/scss/style.scss')
             .pipe(sourcemaps.init())
             .pipe(require('gulp-sass')({
               errLogToConsole: true
             }))
             .pipe(require('gulp-postcss')([
               require('autoprefixer')({
                 browsers: ['last 2 versions']
               })
             ]))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('build/css/'));
});

gulp.task('watch', ['scss'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['scss']);
});