var gulp = require('gulp')

gulp.task('move', ()=>{
    gulp.src(['./background.js'])
    .pipe(gulp.dest('./dist'))
})

//TODO add task to move other assets and unify webpack for one bundle task