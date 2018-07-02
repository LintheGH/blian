const gulp = require('gulp');
const minjs = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const mincss = require('gulp-clean-css');
const amdOptimize = require("amd-optimize"); 
const minhtml = require('gulp-htmlmin');
const minimg = require('gulp-imagemin');
   
const jsSrc = './src/js/*.js';
const htmlSrc = './src/html/*.html';
const scssSrc = './src/sass/*.scss';

const jsDist = './dist/js';
const scssDist = './dist/sass';
const htmlDist = './dist/html';
const imgDist = './dist/img';
//定义 requirejs 任务
gulp.task('rjs', function () {
    gulp.src(jsSrc)
        .pipe(amdOptimize("index", {
            paths: {
                "jquery": "./lib/jquery",
                "require": "./lib/require"
            }
        }))
        .pipe(concat("index.js"))           //合并
        .pipe(gulp.dest(jsDist))          //输出保存
        .pipe(rename("app.min.js"))          //重命名
        .pipe(minjs())                        //压缩
        .pipe(gulp.dest(jsDist));         //输出保存

    });

gulp.task('sass', function(){
  return gulp.src(scssSrc)
    .pipe(sass())
    .pipe(gulp.dest(scssDist))
    .pipe(rename({suffix: '.min'}))
    .pipe(mincss())
    .pipe(gulp.dest(scssDist))

});

//定义html任务
gulp.task('html', function () {
    gulp.src(htmlSrc).pipe(connect.reload());

});
//定义html任务
gulp.task('minhtml',function(){
    gulp.src(htmlSrc)
    .pipe(minhtml({
        collapseWhitespace: true,//压缩HTML
        removeComments: true,//清除HTML注释
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest(htmlDist));
})

//定义img 任务
gulp.task('img',function(){
    gulp.src('./src/img/**/*.*')
    .pipe(minimg())
    .pipe(gulp.dest(imgDist))
})
// //定义livereload任务
// gulp.task('connect', function () {
//     connect.server({
//         livereload: true
//     });
// });



//定义看守任务
gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html']);

    gulp.watch('src/js/*.js', ['rjs']);

    gulp.watch('src/sass/*.scss', ['sass']);

    gulp.watch('src/img/**/*.*', ['img']);

    gulp.watch('src/html/*.html', ['minhtml']);
   
});


//定义默认任务
gulp.task('default', ['html', 'sass','watch','rjs','minhtml','img']);


