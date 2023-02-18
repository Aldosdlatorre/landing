const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function css( done ){
    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe( postcss( [autoprefixer()] ) )
        .pipe( dest('build/css') )

    done();
}

function watcher(){
    watch('src/scss/**/*.scss', css)
}

exports.watcher = watcher;
exports.css = css;
exports.default = series(css, watcher);