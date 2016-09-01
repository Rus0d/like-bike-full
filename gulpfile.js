var gulp = require('gulp'),
    notify = require('gulp-notify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    browserSync = require('browser-sync');

gulp.task('default',['stylesCompiler', 'watch', 'browserSync']);

gulp.task('stylesCompiler', function () {

    gulp.src('styles/styleConstructor.css')
        .pipe(concatCss("styles.css"))
        .pipe(autoprefixer({ browsers: ["> 0%"] }))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(notify('styles.css done!!!'));

});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('html', function () {
    gulp.src('dist/*.html')
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function () {
    gulp.watch(['styles/*.css', 'dist/*.html'], ['stylesCompiler', 'html']);
});

// npm install --save-dev gulp-notify gulp-minify-css gulp-autoprefixer browser-sync gulp-concat-css

