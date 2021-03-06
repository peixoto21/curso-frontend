const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const image = require('gulp-image')
const htmlmin = require('gulp-htmlmin')
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments')
const { series, parallel } = require('gulp')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(cb) {

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css',
        './src/css/fontawesome.css'
    ])
        .pipe(stripCss())                   // remove comentários
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min' }))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

}

function tarefasJS() {

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
        .pipe(rename({ suffix: '.min' }))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório
}



function tarefasIcons() {
    return gulp.src([
        './src/fonts/*',
        './node_modules/@fortawesome/fontawesome-free/webfonts/*'
    ])

        .pipe(gulp.dest('./dist/fonts'))
}

function tarefasImagem() {

    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

gulp.task('image', function() {
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
});


function tarefasHTML(callback) {
    return gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    // return callback()    
}

function minify() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
};

function end(cb) {
    console.log('tarefas concluidas')
    console.log()
    return cb()
}

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    gulp.watch('./src/**/*').on('change', process) //repete o processo quando alterar algo em src
    gulp.watch('./dist/**/*').on('change', reload)
})




const process = series(tarefasCSS, tarefasJS, tarefasHTML, tarefasImagem, tarefasIcons, end)

exports.styles = tarefasCSS
exports.scripts = tarefasJS


exports.default = process
// exports.images = tarefasImagem