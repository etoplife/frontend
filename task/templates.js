import gulp from 'gulp';
import pug from 'gulp-pug';

gulp.task('templates', () => (
  gulp.src('./dev/pug/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./build/'))
));