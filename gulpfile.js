const gulp = require("gulp");
const gulpSass = require("gulp-sass");

const scssGlob = ["scss/*.scss", "scss/**/*.scss"];
const cssFolder = "css";

function scssError(e) {
    console.log(e.toString());
    this.emit("end");
}

gulp.task("sass-up", () => {
    gulp.src(scssGlob)
        .pipe(gulpSass())
        .on("error", scssError)
        .pipe(gulp.dest(cssFolder))
});

gulp.task("watch", () => {
    gulp.watch(scssGlob, ["sass-up"]);
});

gulp.task("default", ["sass-up", "watch"]);
