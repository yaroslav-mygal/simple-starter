"use strict";

const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create();
const srcPath = "src";
const devPath = "dev";
const distPath = "dist";
const dir = {
  srcPath: "src",
  devPath: "dev",
  distPath: "dist"
};
const path = {
  src: {
    root: dir.srcPath,
    styles: dir.srcPath + "/assets/scss/*.scss",
    html: dir.srcPath + "/*.html",
    htmlPartials: dir.srcPath + "/includes/",
    htmlIncludes: dir.srcPath + "/includes/*.html",
    js: dir.srcPath + "/assets/js/*.js",
    fonts: dir.srcPath + "/assets/fonts/*",
    img: dir.srcPath + "/assets/images/**/*",
    spriteSource: dir.srcPath + "/assets/sprite-images/*.png",
    spriteRetinaSource: dir.srcPath + "/assets/sprite-retina",
    spriteCss: dir.srcPath + "/assets/css/components",
    spriteImg: "dev/assets/images"
  },
  dev: {
    styles: "dev/assets/css",
    html: "dev",
    js: "dev/assets/js",
    fonts: "dev/assets/fonts",
    img: "dev/assets/images",
    spriteImg: "dev/assets/images"
  },
  dist: {
    styles: "dist/assets/css",
    html: "dist",
    js: "dist/assets/js",
    fonts: "dist/assets/fonts",
    img: "dist/assets/images",
    spriteImg: "dist/assets/images"
  }
};

// tasks

gulp.task("sass", function() {
  return (
    gulp
      .src(path.src.styles)
      // .pipe(sourcemaps.init())
      // .pipe(sass().on("error", sass.logError))
      // .pipe(
      //   autoprefixer({
      //     browsers: ["last 6 versions"],
      //     cascade: false
      //   })
      // )
      // .pipe(sourcemaps.write("../css"))
      .pipe(gulp.dest(path.dev.styles))
      .pipe(browserSync.stream())
  );
});

gulp.task("dist-sass", function() {
  return gulp
    .src(path.src.styles)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(mmq({ log: true }))
    .pipe(cleanCSS({ keepSpecialComments: 0 }))
    .pipe(gulp.dest(path.dist.styles));
});

gulp.task("images", function() {
  return gulp
    .src(path.src.img)
    .pipe(gulp.dest(path.dev.img))
    .pipe(browserSync.stream());
});

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: path.dev.html
    }
  });
});

gulp.watch(path.src.img, ["images"]);
// gulp.watch(path.src.spriteSource, ["sprite"]);
// gulp.watch(path.src.fonts, ["fonts"]);
gulp.watch(path.src.root + "/assets/css/**/*.scss", ["sass"]);
// gulp.watch(path.src.html, ["html"]);
// gulp.watch(path.src.htmlIncludes, ["html"]);
// gulp.watch(path.src.js, ["js"]);

gulp.task("default", ["watch"]);
gulp.task("dev", ["sass"]);
