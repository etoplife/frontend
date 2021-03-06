import gulp from 'gulp';
import image from 'gulp-image';
import gulpIf from 'gulp-if';

const isDebug = process.env.NODE_ENV !== 'production';

gulp.task('images', () => (
  gulp.src('./dev/static/img/**/*.{png,PNG,jpg,jpeg,JPG,gif,svg}')
    .pipe(gulpIf(!isDebug, image()))
    .pipe(gulp.dest('./build/static/img'))
));
