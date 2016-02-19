
var gulp = require('gulp');
var concat = require('gulp-concat');

var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

// gulp.task('speak', function() {
// console.log('speak..');
// });
//
// gulp.task('laugh', function() {
// console.log('laugh..');
// });
//
// gulp.task('default', ['speak','laugh']);


gulp.task('scripts', function() {
	return gulp
	       .src('./js/*.js')
	       .pipe(concat('script.js'))
	       .pipe(gulp.dest('./dist/'));
});

gulp.task('css',function() {
	return gulp
	       .src('./css/*.css')
	       .pipe(concat('style.js'))
	       .pipe(gulp.dest('./dist/'));
});

//
//gulp.task( 'deploy', function () {
// 
//	var conn = ftp.create( {
//		host:     'localhost',
//		user:     'nag',
//		password: 'APPLE',
//		parallel: 10,
//		log:      gutil.log
//	} );
// 
//	var globs = [
//		'dist/**'
//	];
// 
// 
//	return gulp.src( globs, { base: '.', buffer: false } )
//		.pipe( conn.dest( 'files' ) );
// 
//} );

gulp.task('default',['scripts','css']);