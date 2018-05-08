const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    browserSync.init({
        server: "./src"
    });

    gulp.watch(["src/**/*.*"]).on('change', browserSync.reload)
});
