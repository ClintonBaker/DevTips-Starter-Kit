var gulp = require('gulp'),
    jade = require('jade'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    gulpJade = require('gulp-jade'),
    browserSync = require('browser-sync'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload;

//Compiles Sass
gulp.task('sass-compile', function(){
  gulp.src('assets/css/**/*.sass')
      .pipe(plumber())
      .pipe(sass({indentedSyntax: true}))
      .pipe(sass({style: 'expanded'}))
      .pipe(gulp.dest('assets/css'))
      .pipe(reload({stream:true}));
});

//Compiles Scss
gulp.task('scss-compile', ['sass-compile'], function(){
  gulp.src('assets/css/**/*.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(sass({style: 'expanded'}))
      .pipe(gulp.dest('assets/css'))
      .pipe(reload({stream:true}));
});

//Concatinates and Uglifies JS
gulp.task('scripts-compile', function(){
  return gulp.src('assets/js/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('assets/build/js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets/build/js'))
});

//Jade task
//Compiles any Jade Files to html
gulp.task('jade-compile', function(){

  return gulp.src('assets/jade/*.jade')
      .pipe(plumber())
      .pipe(gulpJade({jade: jade, pretty: true}))
      .pipe(gulp.dest('./'));
});

//Browser-sync task for starting the server.
gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

//Reload all Browsers
gulp.task('bs-reload', function(){
  browserSync.reload();
});

//Creates a server with live reloading
gulp.task('serve', ['browser-sync', 'compile'], function(){
  gulp.watch('assets/css/**/*.sass', ['sass-compile']);
  gulp.watch('assets/css/**/*.scss', ['scss-compile']);
  gulp.watch('assets/js/*.js', ['scripts-compile', reload]);
  gulp.watch('assets/jade/*.jade', ['jade-compile']);
  gulp.watch('**/*.html', ['bs-reload']);
});

//Watches Sass, Scss, Jade, HTML, and JS
gulp.task('watch', ['compile'], function(){
  gulp.watch('assets/css/**/*.sass', ['sass-compile']);
  gulp.watch('assets/css/**/*.scss', ['scss-compile']);
  gulp.watch('assets/js/*.js', ['scripts-compile']);
  gulp.watch('assets/jade/*.jade', ['jade-compile']);
});

//Compiles all files
gulp.task('compile', ['sass-compile', 'scss-compile', 'jade-compile', 'scripts-compile']);

//Set Default Behavior for Gulp
gulp.task('default', ['compile']);
