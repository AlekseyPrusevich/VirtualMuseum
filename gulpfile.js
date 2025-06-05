'use strict';

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function scss() {
    return src('./src/styles/style.scss')
        .pipe(sass({style: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist/'));
}

function scripts() {
    return src('./src/scripts/**/*.js') 
        .pipe(concat('script.min.js'))
        .pipe(babel({ 
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('./dist/'));
}

function watchFiles() {
    watch('src/styles/**/*.scss', scss);
    watch('src/scripts/**/*.js', scripts);
}

exports.run = series(scss, scripts);
exports.watch = watchFiles;

