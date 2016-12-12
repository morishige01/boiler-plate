const gulp = require('gulp');
const ejs  = require('gulp-ejs');

gulp.task('ejs',()=>{
  return gulp.src("./src/*.ejs")
    .pipe(ejs('', {"ext": ".html"}))
    .pipe(gulp.dest("./dist"));
});

gulp.task('watch', function(){
  gulp.watch('./src/scss/*.scss', ['sass']);
});
