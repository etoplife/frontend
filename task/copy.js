import gulp from 'gulp';

gulp.task('copy', () => (
  gulp.src('./dev/static/fonts/**/*')
    .pipe(gulp.dest('./build/static/fonts/'))
));
