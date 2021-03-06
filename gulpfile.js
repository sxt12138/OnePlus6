var gulp = require("gulp");
// var uglify = require("gulp-uglify");
var sass = require("gulp-sass");

//复制html
gulp.task("copyhtml",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus6"));
	
});

//复制图片
gulp.task("copyimg",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus6\\img"));
	
	
});

//压缩js
gulp.task("uglifyjs",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus6\\js"));	
});

//sass编译
gulp.task("scssfile",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus6\\css"));
});

//监听
gulp.task("watch",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("img/*.{jpg,png}",["copyimg"]);
	gulp.watch("js/*.js",["uglifyjs"]);
	gulp.watch("scss/*.scss",["scssfile"]);
});