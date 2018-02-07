const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');
const templateCache = require('gulp-angular-templatecache');

gulp.task('default', ['build']);

gulp.task('build', () => {
  runSequence(
    'clean',
    'build:template',
    ['build:js', 'build:vendor', 'build:html', 'build:css']
  )
});

gulp.task('clean', () => {
  return del('dist/**/*');
});

gulp.task('build:js', () => {
  return gulp.src([
    './src/main.js',
    './src/**/*.js',
    './tmp/*.js'
  ])
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build:template', () => {
  return gulp.src([
    './src/template/*.html',
  ])
    .pipe(templateCache({module: 'app'}))
    .pipe(gulp.dest('./tmp'));
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
    //'./node_modules/angular/angular.min.js',
    './node_modules/angular/angular.js',
    './node_modules/angular-resource/angular-resource.min.js',
    './node_modules/angular-route/angular-route.min.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    './node_modules/angular-translate/dist/angular-translate.min.js',
  ]).pipe(concat('vendor.js'))
  .pipe(gulp.dest('./dist/js'));
});


