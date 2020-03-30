import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sass from 'gulp-sass';
import base64 from 'gulp-css-base64';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import gcmq from 'gulp-group-css-media-queries';
import autoprefixer from 'autoprefixer';
import concat from 'gulp-concat';
import flexbugs from 'postcss-flexbugs-fixes';
import animation from 'postcss-animation';

const isDebug = process.env.NODE_ENV !== 'production';
const processors = [flexbugs, animation, autoprefixer];

gulp.task('styles', () => (
    gulp.src(
        [
            './dev/static/sass/vars.scss',
            './dev/static/sass/mixins.scss',
            './dev/static/sass/fonts.scss',
            './dev/static/sass/components/*.scss',
            './dev/static/sass/modules/*.scss',
            './dev/static/sass/pages/*.scss',
        ])
        .pipe(concat('main.scss'))
        .pipe(sass({
          includePaths: ['node_modules']
        }))
        .pipe(gulpIf(!isDebug, gcmq()))
        .pipe(gulpIf(!isDebug, postcss(processors)))
        .pipe(gulpIf(!isDebug, base64({
          maxWeightResource: 8192
        })))
        .pipe(gulpIf(!isDebug, csso()))
        .pipe(gulp.dest('./build/static/css'))
));