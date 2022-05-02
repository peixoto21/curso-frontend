const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments')
const { series, parallel } = require('gulp')
const babel = require('gulp-babel')


function tarefasCSS(cb) {

    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './vendor/owl/css/owl.css',
            './vendor/jquery-ui/jquery-ui.css',
            './src/css/style.css',
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'
        ])
        .pipe(stripCss())                   // remove comentários
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

}

function tarefasJS(){

    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/owl/js/owl.js',
            './vendor/jquery-mask/jquery.mask.js',
            './vendor/jquery-ui/jquery-ui.js',
            './src/js/custom.js'
        ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))                    // remove comentários
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica js
        .pipe(rename({ suffix: '.min'}))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório
}

gulp.task('icons', function() {
    return gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts'));
});

function tarefasIcons(){
    return gulp.src('./src/fonts/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/fonts'))
}

function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

// gulp.task(import('image'), () => {
//     gulp.src('./src/images/*')
//       .pipe(image({
//         pngquant: true,
//         optipng: false,
//         zopflipng: true,
//         jpegRecompress: false,
//         mozjpeg: true,
//         gifsicle: true,
//         svgo: true,
//         concurrent: 10,
//         quiet: true // defaults to false
//       }))
//       .pipe(gulp.dest('./dest/images'));
//   });


function tarefasHTML(callback){
    return gulp.src('./src/**/*.html')        
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    // return callback()    
}

gulp.task('minify', () => {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });


exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.default = parallel(tarefasCSS,tarefasJS,tarefasHTML,tarefasImagem,tarefasIcons)
// exports.images = tarefasImagem