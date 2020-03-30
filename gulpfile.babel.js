import gulp from 'gulp';
import del from 'del';
import i from 'import-dir';
import './task/styles';
import './task/scripts';

i('task');

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel(
      'server',
    'styles',
    'scripts',
    'images',
    'svg',
    'templates',
    'copy',
    'watch'
  )
));

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel(
    'styles',
    'scripts',
    'images',
    'svg',
    'templates',
    'copy'
  )
));

gulp.task('cleanAssets', () => (
  del([
    './build/static/css',
    './build/static/js'
  ])
));

gulp.task('assets', gulp.parallel(
    'styles',
    'scripts'
));