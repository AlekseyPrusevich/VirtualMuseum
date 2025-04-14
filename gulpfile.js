'use strict';

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

function scss() {
    return src('./src/styles/style.scss')
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist/'));
}

exports.watch = function() {
    watch('src/styles/**/*.scss', scss);
};

