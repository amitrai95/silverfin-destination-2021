const base = '/',
      assetsSRC =  'destination-page/assets/src/',
      assetsDST = 'destination-page/assets/build/',
      modules = 'destination-page/modules/';


const gulp          = require('gulp'),
      sass          = require('gulp-sass'),
      sourcemaps    = require('gulp-sourcemaps'),
      fs            = require('fs'),
      path          = require('path'),
      merge         = require('merge-stream'),
      postcss       = require('gulp-postcss'),
      autoprefixer  = require('gulp-autoprefixer'),
      plumber       = require('gulp-plumber'),
      concat        = require('gulp-concat'),
      uglify        = require('gulp-uglify'),
      rename        = require('gulp-rename'),
      strip         = require('gulp-strip-comments');

const moduleCSS       = modules + '**/src/module.scss',
      moduleJS        = modules + '**/src/module.js',
      globalCSS       = assetsSRC + 'scss/style.scss';
      configCSS       = assetsSRC + 'scss/config/**.scss';
      themeCSS        = assetsSRC + 'scss/theme/**.scss';
      globalJS        = assetsSRC + 'js/*.js';
      libJS           = assetsSRC + 'js/lib/*.js';

  var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
  };

  function getFolders(dir) {
    return fs.readdirSync(dir).filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
  }


  function css() {
    var folders = getFolders(modules);
    var tasks = folders.map(function(folder) {
      var src = path.join(modules, folder);
      var dst = path.join(modules, folder);
      return gulp.src(path.join(src, '/**/src/module.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename(function(file) {
          file.dirname = path.dirname(file.dirname);
          file.basename = file.basename;
          return file;
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(src));
    });
    return merge(tasks);
  }


  function mainCSS() {
    var dst = path.join(assetsDST + 'css/');
    return gulp.src(globalCSS, { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dst));
  }


  function javascript() {
    var folders = getFolders(modules);
    var tasks = folders.map(function(folder) {
      var src = path.join(modules, folder);
      var dst = path.join(modules, folder);
      return gulp.src(path.join(src, '/**/src/module.js'))
      .pipe(plumber())
      .pipe(uglify())
      .pipe(rename(function(file) {
        file.dirname = path.dirname(file.dirname);
        file.basename = file.basename;
        return file;
      }))
      .pipe(gulp.dest(src));
    });
    return merge(tasks);
  }


  function mainJS() {
    var dst = path.join(assetsDST + 'JS/dist');
    return gulp.src(globalJS)
    .pipe(plumber())
    .pipe(concat('scripts-min.js'))
    .pipe(strip())
    .pipe(uglify())
    .pipe(gulp.dest(dst));
  }


  function libraryJS() {
    var dst = path.join(assetsDST + 'JS/lib');
    return gulp.src(libJS).pipe(gulp.dest(dst));
  }


  function watch() {
    gulp.watch([globalCSS,configCSS,themeCSS],mainCSS);
    gulp.watch([globalJS],mainJS);
    gulp.watch([moduleCSS], css);
    gulp.watch([moduleJS], javascript);
  }


exports.mainCSS = mainCSS;
exports.mainJS = mainJS;
exports.libraryJS = libraryJS;
exports.css = css;
exports.javascript = javascript;
exports.watch = watch;

const build = gulp.series(watch);
gulp.task('default', build);
