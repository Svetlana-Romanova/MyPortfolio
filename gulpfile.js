const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const sync = require('browser-sync').create();
const webpack = require("webpack-stream");

const dist = "./build/";

// Styles

const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest(dist + '/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(dist + '/css'))
    .pipe(sync.stream());
}

exports.styles = styles;


// Images

const images = () => {
  return gulp.src([
    'source/img/**/*.{jpg,png,svg}',
    '!source/img/**/s-*.svg'])
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest(dist + '/img'));
}

exports.images = images;


const webpImg = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(dist + '/img'));
}

exports.webpImg = webpImg;

//Copy

const copy = () => {
  return gulp.src(['source/fonts/**/*.{woff,woff2}'], {base: 'source'})
  .pipe(gulp.dest(dist));
}

exports.copy = copy;

//Clean

const clean = () => {
  return del(dist);
}

exports.clean = clean;


//Html

const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest(dist));
}

exports.html = html;


// JS
const scripts = () => {
  return gulp.src("source/js/script.js")
  .pipe(webpack({
      mode: 'development',
      output: {
          filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                      debug: true,
                      corejs: 3,
                      useBuiltIns: "usage"
                  }]]
                }
              }
            }
          ]
        }
  }))
  .pipe(gulp.dest(dist + '/js'))
  .on("end", sync.reload);
}

exports.scripts = scripts;


//Build

const build = gulp.series (
  clean,
  html,
  copy,
  styles,
  images,
  webpImg,
  scripts
)

exports.build = build;


// Server

const server = (done) => {
  sync.init({
    browser: 'google chrome',
    server: {
      baseDir: dist
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;


// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('source/*.html', gulp.series('html'));
  gulp.watch('source/js/**/*.js', gulp.series('scripts'));
}

exports.default = gulp.series(
  build, server, watcher
);
