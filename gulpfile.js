var gulp = require('gulp');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var tsProject = ts.createProject('tsconfig.json');
// If you want to add or overwrite certain settings in the tsconfig.json file, you can use:
// var tsProject = ts.createProject('tsconfig.json', { noImplicitAny: true });

gulp.task('ts', function () {
    var tsResult = gulp.src('./*.ts') // or tsProject.src() 
        .pipe(plumber())
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./dist'));
});
// 监视此ts文件
gulp.task('watch', function () {
    gulp.watch('./*.ts',['ts'])
});
