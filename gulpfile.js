var gulp = require('gulp')

gulp.task('move', ()=>{
    gulp.src(['./background.js'])
    .pipe(gulp.dest('./dist'))
})