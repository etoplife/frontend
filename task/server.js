import gulp from 'gulp';
import sync from 'browser-sync';

gulp.task('server', () => {
  sync.init({
    open: false,
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false,
      location: false,
    },
    server: './build',
  });
});
