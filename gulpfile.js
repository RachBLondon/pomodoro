var gulp = require('gulp')

gulp.task('move', ()=>{
    gulp.src(['./content_script.js'])
    .pipe(gulp.dest('./dist'))
})

//TODO add task to move other assets and unify webpack for one bundle task