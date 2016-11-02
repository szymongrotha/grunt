
module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: './sass/*.sass',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    './css/style.css': './sass/style.sass'
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
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './css/*.css',
                        './*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
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
	grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};