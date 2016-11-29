/*
 *gulp的主文件，用于注册任务
 *
*/
'use strict'
//此处代码都是由node执行，载入gulp模块。
var gulp = require('gulp');

//注册一个任务
gulp.task('test', function() {
  // 将你的默认的任务代码放在这
  console.log('hellow world test');
});

//browser-sync
var browserSync = require('browser-sync').create();
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//压缩js文件
var uglify=require('gulp-uglify');
gulp.task('minify-js',function(){
	gulp.src('./weijinsuo/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./weijinsuo/dist/js'));
});

//压缩css文件
var minifyCss=require('gulp-minify-css');
gulp.task('minify-css',function(){
	gulp.src('./weijinsuo/css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('./weijinsuo/dist/css'));
});

//html文件压缩
var minifyHtml=require('gulp-minify-html');
gulp.task('minify-html',function(){
	gulp.src('./weijinsuo/index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('./weijinsuo/dist'));
});

//png图片压缩

//less转化
var less=require('gulp-less');
gulp.task('compile-less',function(){
	gulp.src('./less/main.less')
	.pipe(less())
	.pipe(gulp.dest('./less'));
});