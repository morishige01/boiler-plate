// plugin
const gulp         = require('gulp');
const ejs          = require('gulp-ejs');
const sass         = require('gulp-sass');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');

// ejs compile
gulp.task('ejs',()=>{
  return gulp.src("./src/ejs/*.ejs")
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(ejs('', {"ext": ".html"}))
    .pipe(gulp.dest("./dist"));
});

// sass compile
gulp.task('sass',()=>{
  return gulp.src("./src/scss/*.scss")
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest("./dist/css"));
});

gulp.task('default', function(){
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/ejs/*.ejs', ['ejs']);
});
