var gulp = require('gulp');

// --------------------------------------------
// ENVIRONMENT VARS
// --------------------------------------------

var compiledFolder = 'assets';
var srcFolder = 'src';

// --------------------------------------------
// PLUGINS
// --------------------------------------------
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var fs = require("fs");

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// --------------------------------------------
// STYLES
// --------------------------------------------

gulp.task('styles', function(){
    _styles();
});

function _styles(){
    return gulp.src(srcFolder + '/sass/style.scss')
               .pipe(sass({ outputStyle: 'compressed' }))
               .on('error', function(err) { gutil.log('Line: ' + err.lineNumber + ' - ' + err.message); gutil.beep(); })
               .pipe(autoprefixer())
               .pipe(gulp.dest(compiledFolder+'/css'))
}


// --------------------------------------------
// WATCH
// --------------------------------------------

gulp.task('watch', function(){
	gulp.watch(srcFolder + '/sass/**/*.scss', ['styles']);
});

// --------------------------------------------
// DEFAULT TRIGGER (typing 'gulp' at command line triggers these tasks)
// --------------------------------------------

gulp.task('default', ['styles', 'watch']);