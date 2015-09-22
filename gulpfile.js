
// SASS
// ============================================================

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_public/_css'));
});

// WATCH
// ============================================================

gulp.task('default',function() {
    gulp.watch('_src/sass/**/*.scss',['sass']);
});

// FTP
// ============================================================

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

gulp.task( 'deploy', function() {

    var conn = ftp.create( {
        host:     's14088.gridserver.com',
        user:     'email@david.pizza',
        password: '+*yk2UI_0pg',
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        '_public/**'
    ];

    return gulp.src( globs, { base: '_public', buffer: false } )
        .pipe( conn.newer( '.' ) ) // only upload newer files
        .pipe( conn.dest( '.' ) );

} );
