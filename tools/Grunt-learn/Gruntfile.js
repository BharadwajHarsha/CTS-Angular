module.exports = function(grunt) {

	// grunt.registerTask('speak', function(){
	// console.log('im speaking..');
	// });

	// grunt.registerTask('laugh', function(){
	// console.log('im laughing..');
	// });

	// grunt.registerTask('default', ['speak','laugh']);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Project configuration.
	grunt.initConfig({
		concat : {
			js : {
				src : [ 'js/1.js', 'js/2.js' ],
				dest : 'dist/script.js',
			},
			css : {
				src : [ 'css/a.css', 'css/b.css' ],
				dest : 'dist/style.css',
			}
		},
		jshint : {
			options : {
				curly : true,
				eqeqeq : true,
				eqnull : true,
				browser : true,
				globals : {
					jQuery : true
				},
			},
			// all : [ 'Gruntfile.js', 'js/**/*.js']
			beforeconcat : [ 'js/1.js', 'js/2..js' ],
			afterconcat : [ 'dist/script.js' ]
		},
		watch : {
			js : {
				files : [ 'js/**/*.js' ],
				tasks : [ 'concat:js', 'jshint' ],
				options : {
					spawn : false,
				},
			},
			css : {
				files : [ 'css/**/*.css' ],
				tasks : [ 'concat:css' ],
				options : {
					spawn : false,
				},
			},
		},
	});

	grunt.registerTask('default', [ 'jshint', 'concat', 'watch' ]);

};