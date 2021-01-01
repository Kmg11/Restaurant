const { watch, series, src, dest } = require('gulp');
const pug = require("gulp-pug");
const sass = require('gulp-sass');
const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");

function html() {
	return src("./project/pug/**/*.pug")
		.pipe(pug())
		.pipe(dest("./dist/"))
}

function css() {
	return src("project/sass/**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./dist/css'));
}

function js() {
	return src("./project/js/**/*.js")
		.pipe(terser())
		.pipe(dest("./dist/js"))
}

function images() {
	return src("./project/images/*.*")
		.pipe(dest("./dist/images"))
}

exports.default = function () {
	watch('project/pug/**/*.pug', { ignoreInitial: false }, html);
	watch('project/sass/**/*scss', { ignoreInitial: false }, css);
	watch('./project/js/**/*.js', { ignoreInitial: false }, js);
	watch('./project/images/*.*', { ignoreInitial: false }, images);
}