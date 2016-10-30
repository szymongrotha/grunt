
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/style.css': 'sass/style.sass'
				}				
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img/build',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img'
				}]
			}
		},

		watch: {
			scripts: {
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			}
		},

		broswerSync: {
			bsFiles: {
				src: 'css/*.css'
			},
			options: {
				server :{
					baseDir: "./"
				}
			}
		}

	});

	// Load the plugins tasks
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};