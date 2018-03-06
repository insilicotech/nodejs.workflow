var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars');

gulp.task('default', function(){
  console.log('Hello Gulp!')
})

gulp.task('html', function(){
  console.log('./app/index.html modified.');
});

gulp.task('watch', function(){
  var html = ['html'];
  gulp.watch('./app/index.html', html);
});

gulp.task('style', function(){
  return gulp.src('./assets/css/main.css')
          .pipe(postcss([autoprefixer, cssvars]))
         .pipe(gulp.dest('./app/css'));
});
