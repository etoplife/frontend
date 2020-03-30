import gulp from 'gulp';

gulp.task('watch', () => {
  gulp.series('scripts');
  gulp.watch('./dev/static/sass/**/*', gulp.series('styles'));
  gulp.watch('./dev/pug/**/*.pug', gulp.series('templates'));
  gulp.watch('./dev/static/fonts/**/*', gulp.series('copy'));
  gulp.watch('./dev/static/img/svg/**/*.svg', gulp.series('svg'));
  gulp.watch('./dev/static/img/**/*', gulp.series('images'));
});