'use strict';

/* require needed modules */
var gulp = require('gulp'),
		watch = require('gulp-watch'),
		prefixer = require('gulp-autoprefixer'),
		uglify = require('gulp-uglify'),
		stylus = require('gulp-stylus'),
		sourcemaps = require('gulp-sourcemaps'),
		cssmin = require('gulp-minify-css'),
		rename = require('gulp-rename'),
		rimraf = require('rimraf'),
		browserSync = require("browser-sync"),
		reload = browserSync.reload;

/* Set all path */
var path = {
		/* builds path */
		build: {
				html: 'dist/',
				js: 'dist/js/',
				css: 'dist/css/',
		},
		/* source path */
		src: {
				html: 'src/*.html',
				/* js path */
				js: 'src/js/*.js',
				/* styles path */
				css: 'src/style/*.styl'
		},
		/* watching for this files */
		watch: {
				html: 'src/**/*.html',
				js: 'src/**/*.js',
				style: 'src/**/*.styl'
		},
		clean: './dist'
};

/* our Dev server */
var config = {
		server: {
				baseDir: "./dist/"
		},
		tunnel: false,
		host: 'localhost',
		port: 8081,
		logPrefix: "Frontend_Local"
};

/* Supported broser for prefixer */
var SupportedBrowsers = {
	browsers: [
		'last 25 versions'
	]
}


/* Build html */
gulp.task('html:build', function () {
		/* Выберем файлы по нужному пути */
		gulp.src(path.src.html)
			/* flush to builds */
			.pipe(gulp.dest(path.build.html))
			/* reload devserver */
			.pipe(reload({stream: true}));
});

/* Build JS */
gulp.task('js:build', function () {
		/* make full js script */
		gulp.src(path.src.js).pipe(gulp.dest(path.build.js));

		/* make minified js for script */
		gulp.src(path.src.js)
			.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(rename({suffix : '.min'}))
			.pipe(gulp.dest(path.build.js))
			.pipe(reload({stream: true}));
});

/* Build styles */
gulp.task('style:build', function () {
	/* make full css for style */
	gulp.src(path.src.css)
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(prefixer(SupportedBrowsers))
		.pipe(gulp.dest(path.build.css));

	/* make minified css for style */
	gulp.src(path.src.css)
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(prefixer(SupportedBrowsers))
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(rename({suffix : '.min'}))
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
});

/* Common task */
gulp.task('build', [
		'html:build',
		'js:build',
		'style:build'
]);

/* Watching for file */
gulp.task('watch', function(){
		watch([path.watch.html], function(event, cb) {
				gulp.start('html:build');
		});
		watch([path.watch.style], function(event, cb) {
				gulp.start('style:build');
		});
		watch([path.watch.js], function(event, cb) {
				gulp.start('js:build');
		});
});

/* server */
gulp.task('webserver', function () {
		browserSync(config);
});

/* clean build */
gulp.task('clean', function (cb) {
		rimraf(path.clean, cb);
});

/* Set default tasks for command Gulp */
gulp.task('default', ['build', 'webserver', 'watch']);
