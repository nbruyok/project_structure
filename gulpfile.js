const { src, dest, watch } = require("gulp");
const scss = require("gulp-sass");

function styles() {
  return src("src/scss/main.scss").pipe(scss()).pipe(dest("dist"));
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
}

exports.styles = styles;
exports.watching = watching;
