var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    cssvars       = require('postcss-simple-vars'),
    nested        = require('postcss-nested'),
    imported      = require('postcss-import');

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

// Be careful! the order of pipe processor.
gulp.task('style', function(){
  return gulp.src('./app/assets/css/main.css')
         .pipe(postcss([imported, cssvars, nested,  autoprefixer]))
         .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function(){
  watch('./app/assets/css/**/*.css', function(){
    gulp.start('style');
  });
});
