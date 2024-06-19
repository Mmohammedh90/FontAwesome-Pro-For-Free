import gulp from 'gulp';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

//Task
export const css = () => gulp
.src('src/font-awesome-pro.scss')
.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
.pipe(concat('fontAwesomePro.min.css'))
.pipe(gulp.dest('dist/css'))
