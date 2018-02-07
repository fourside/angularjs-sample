const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('default', ['build']);
gulp.task('build', ['clean', 'build:js', 'build:vendor', 'build:html', 'build:css']);
gulp.task('build', () => {
  runSequence(
    'clean',
    ['build:js', 'build:vendor', 'build:html', 'build:css']
  )
});

gulp.task('clean', () => {
  del('dist/**/*');
});

gulp.task('build:js', () => {
  return gulp.src([
    './src/main.js',
    './src/**/*.js',
  ]).pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('build:html', () => {
  return gulp.src([
    './src/index.html',
  ]).pipe(gulp.dest('./dist'));
});

gulp.task('build:css', () => {
  return gulp.src([
    './src/css/style.css',
    './node_modules/bootstrap/dist/css/bootstrap.css',
  ]).pipe(gulp.dest('./dist/css'));
});

gulp.task('build:vendor', () => {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-route/angular-route.min.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    './node_modules/angular-translate/dist/angular-translate.min.js',
  ]).pipe(concat('vendor.js'))
  .pipe(gulp.dest('./dist/js'));
});


