/**
 * http://usejsdoc.org/
 * 
 *  http://loige.co/gulp-and-ftp-update-a-website-on-the-fly/
 *  
 *   http://blueprintinteractive.com/blog/how-sync-local-and-server-development-gulp
 */


var fs = require('vinyl-fs' );
var ftp = require( 'vinyl-ftp' );


var conn = ftp.create( {
	host:     'localhost',
	user:     'nag',
	password: 'APPLE'
} );


fs.src( [ './dist/**' ], { buffer: false } ).pipe(conn.dest( '/Users/nagabhushanamn/files' ) );