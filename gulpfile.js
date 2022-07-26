const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const autoPrefixer = require("autoprefixer");
const postCSS = require("gulp-postcss");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sourceMaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");

async function buildStyles() {
  return gulp.src(['./app/scss/bootstrap.scss', './app/scss/bootstrap-grid.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(sourceMaps.init())
      .pipe(sass({
        outputStyle: "expanded"
      }))
      .pipe(postCSS([autoPrefixer({
        cascade: false,
        grid: false
      })]))
      .pipe(sourceMaps.write("."))
      .pipe(gulp.dest("./app/static/css"))
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./app/scss/**/*.scss', { ignoreInitial: false }, exports.buildStyles);
};
